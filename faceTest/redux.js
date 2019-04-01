redux的原理
3个部分：reducer、action、state
1.state：对象，存储应用的数据，例子
{
  todos: [
    { text: 'eat food', 
      completed: true
    },
    {
      text: 'Exercise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}
2. action: 对象，具有特定形式的对象. 有固定的属性，type。一般还有第二个数据成员。
{ type: 'ADD_TO_DO', text: 'gon to swimming'}
3. reducer: 函数。功能：将state和action两个对象合并到一起。所以，函数有2个参数，一个是state，一个是action。例子
function visibilityFiler(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_DO': 
      return state.concat([{ text: action.text, completed: false}])
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (action.index === todo.index) {
          todo.completed = !todo.completed
        }
      })
    default:
      return state;
  }
}

redux第二章
redux三大原则
