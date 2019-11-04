const path = require('path') //node的包里找path npm init

module.exports = {
    entry:'./src/main.js', //要写绝对路径
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}