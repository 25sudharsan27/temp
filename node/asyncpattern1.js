//Method 3
const {readFile,writeFile} = require('fs').promises

// Method 2
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try{
        // Method 2
        // const first=await readFilePromise('./node/instruction.txt','utf8');
        // const second= await readFilePromise('./current/result.txt','utf8');
        // await writeFilePromise('./node/instruction.txt',`THIS IS AWESOME :
        //  ${first} ${second}`)

        //Method 3
        const first = await readFile('./node/instruction.txt','utf8');
        const second = await readFile('./current/result.txt','utf8')
        await writeFile('./node/instruction.txt',`THIS IS AWESOME : 
        ${first} ${second}}`)

        console.log(first,second)
    }catch(err){
        console.log(err)
    }
};
start()
