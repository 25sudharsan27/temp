const tems =require('lodash')

const items = [1,[2,[3,[4,4]]]]

const newItems = tems.flattenDeep(items)

console.log(newItems)