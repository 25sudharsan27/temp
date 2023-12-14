const path=require('path')

console.log(path.sep);


const filepath=path.join('/content','/subfolder','sudharsan.txt');

console.log(filepath);

const base =path.basename(filepath);
console.log(base)

const absolute = path.resolve(__dirname);
console.log(absolute);