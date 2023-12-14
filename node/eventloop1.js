const {readFile}=require('fs');


const getFile = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else {
               
                resolve(data);
            }
        })
    })
}

const start = async()=>{
    try{
        
        const first = await getFile('./node/instruction.txt');
        console.log(first);
        const second=await getFile('./current/result.txt');
        console.log(second);
    }
    catch(err){
        console.log(err);
    }

}
start()

// getFile('./node/instruction.txt').then((result)=>console.log(result))
// .catch((err)=>console.log(err))
