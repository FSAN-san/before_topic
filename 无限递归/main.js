const fs = require('fs')
fs.readFile('./data.json', (err, data) => {
    const cityData = JSON.parse(data.toString())
    getChild(cityData)
})

const getChild = (data) => {
    for (const item of data) {
        console.log(item.name)
        console.log(item.code)
        if (item.child) {
            getChild(item.child)
        }
    }
}
