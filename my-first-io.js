//learnyounode verify C:\Users\HEBA\Desktop\node\my-first-io.js

// baby-siter
// const arg = process.argv;
// let sum =0;
// for (let i = 2 ; i<arg.length;i++){
//     sum += Number (arg[i]);
// }

// console.log(sum);


// exo3
// const fs = require ("fs");

// const buf = fs.readFileSync(process.argv[2])
// const str = buf.toString()
// const arr1= str.split("\n");

// console.log(arr1.length -1)

const fs = require ("fs");
fs.readFile(process.argv[2],(err,buf)=>{

    const str = buf.toString()
    const arr1= str.split("\n");
    
    console.log(arr1.length -1)
})
