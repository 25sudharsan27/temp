const Eventemitter = require('events')


const customEmitter = new Eventemitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here `)
})
customEmitter.emit('response','sudharsan',18)
