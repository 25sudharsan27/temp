const { createReadStream} =require('fs');

const stream = createReadStream('./current/big.txt')

stream.on('data',(result)=>{{
    console.log(result);
}})

