const Eventemitter = require('events')


const customEmitter = new Eventemitter()

customEmitter.on('response',()=>{
    console.log(`data recieved `)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here `)
})
customEmitter.emit('response')
