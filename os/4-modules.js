//Modules
// Modules- Encaptsulated Code (only share minimum)
// CommonJs, every file is module (by default)

const names = require('./5-module2');
const sayHi=require('../Basics/7-modfunc');
const data = require('./6-alternativemodule');
console.log(data);
console.log(names.name1);

// sayHi()


sayHi('Sudharsan');
sayHi(names.name);
sayHi(names.name1);
require('../8-exp-function')