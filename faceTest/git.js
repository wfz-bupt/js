1.从暂存区撤销git add 的反向操作
git reset HEAD 文件名
2.从head区域撤销，即撤销commit记录
git reset --soft commitId
撤销某个commit提交记录，保留本地文件的修改
git reset --hard commitId
撤销某个commit提交记录，不保留本地文件的修改，慎用
git revert commitId
最终效果跟git reset --hard commitId相同。将commitId的改动撤销，本地文件回退到commitid的状态。但是会产生新的commit记录，
一般命名为：'revert commit message'，污染commit。
3.git cherry-pick commitId
复制commitId所在的改动到当前分支，并生成一次新的commit

在校园内部署WiFi探针来采集智能终端的WiFi请求信号,对数据进行分析、挖掘,得到校园人员分布、流动情况及学生活动情况,绘制相关的数据分析图表,并研发 Web 展示平台,实现数字校园的实时展示。