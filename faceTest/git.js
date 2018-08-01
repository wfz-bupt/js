git reset --soft commitId
撤销某个commit提交记录，保留本地文件的修改
git reset --hard commitId
撤销某个commit提交记录，不保留本地文件的修改，慎用
git revert commitId
将commitId的改动撤销，本地文件回退到commitid的状态。但是会产生新的commit记录，
污染commit。
