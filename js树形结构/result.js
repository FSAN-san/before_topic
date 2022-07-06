const {data} = require('./tree')

const indexData = {}
data.forEach(item => {
    // 删除null的属性
    for (let itemKey in item) {
        if (!item[itemKey]) {
            delete item[itemKey]
        }
    }
    // 整理
    if (item.idxParent) {
        indexData[item.idxParent] ? indexData[item.idxParent].push(item) : indexData[item.idxParent] = []
    } else {
        indexData['parent'] ? indexData['parent'].push(item) : indexData['parent'] = []
    }
})
// 子节点
indexData['parent'].forEach(v => v.children = indexData[v.pkId])

console.log(indexData['parent'])
