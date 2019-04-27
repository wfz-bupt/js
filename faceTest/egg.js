node框架
写一个api的过程
1.写router
app.get('/web-api/conan-english-song/songs', auth(), 'conanEnglishSong.song.getSongs')
2.写controller
controller-->conan_english_song-->song.js
module.exports = app => {
  return class SongController extends app.Controller {
    * getSongs(ctx) {
      const query = ctx.helper.pickFormatType(ctx.request.query, {
        titsle: 'string',
        page: 'int',
        pageSize: 'int',
        status: 'int',
        id: 'int',
        excludeIds: 'array'
      })
      const songList = yield ctx.service.conanEnglishSong.song.getSongs(query)
      const total = yield ctx.service.conanEnglishSong.song.getSongsTotal(query)
      ctx.body = {
        songList: songList.map(song => this._parseSong(song)),
        total
      }
      ctx.status = 200
    }
  }
}
3.编写业务逻辑service
通常情况下，controller不会自己产生数据，也不会包含复杂的业务逻辑。复杂的业务逻辑会抽象为service层。
service-->conan_english_song-->song.js
module.exports = app => {
  return class SongService extends app.Service {
    constructor(props) {
      super(props)
      this.client = app.mysql.get('conan_english_song')
    }

    * getSongs(conditions) {
      const { page, pageSize } = conditions
      let filterSQL = this._buildFcsilterSQL(conditions)
      filterSQL += ' order by updatedTime desc '
      if (page >= 0 && pageSize > 0) {
        filterSQL += ` limit ${page * pageSize}, ${pageSize}`
      }
      return yield this.client.query('select * from song ' + filterSQL)
    }
  }
}
另外还有：
4.app/config-->一些配置比如数据库
5.extend-->一些utils，比如格式化时间，可以在程序中直接使用：helper.xxx
6.middleware-->中间件-->路由过来的时候，先经过这些中间件，进行一层转换，再到实际的controller