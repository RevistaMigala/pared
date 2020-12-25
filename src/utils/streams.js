const { Duplex } = require('stream')

module.exports.bufferToStream = (myBuffer) => {
    let tmp = new Duplex()
    tmp.push(myBuffer)
    tmp.push(null)

    return tmp
}
