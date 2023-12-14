// setInterval(()=>{
//     console.log('hellow world')
// // },2000)
// console.log('I will run first')


const http = require('http')

const server=http.createServer((req,res)=>{
    console.log('request event')
    res.write("Hi Hello")
    res.end("Hello world")
})
server.listen(5000,()=>{
    console.log("Server listening on port : http://localhost:5000 ")
})