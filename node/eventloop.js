// setInterval(()=>{
//     console.log('hellow world')
// // },2000)
// console.log('I will run first')


// const http = require('http')

// const server=http.createServer((req,res)=>{
//     console.log('request event')
//     res.write("Hi Hello")
//     res.end("Hello world")
// })
// server.listen(5000,()=>{
//     console.log("Server listening on port : http://localhost:5000 ")
// })

const http=require('http')

const server = http.createServer((req,res)=>{
    console.log("Request event")
    if(req.url==='/'){
        res.end("Welcome to our home page")
    }
    if(req.url==='/about'){
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
})

server.listen(5000,()=>{
    console.log("Server listening on port : http://localhost:5000 ")
})