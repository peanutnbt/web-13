// const fs=require("fs");
//ASYNCHRONIZE
// console.log("START WRITE")
// fs.writeFile("test.txt","helloworld",(err)=>{
//     if(err) console.log(err)
//     else console.log("OKKKKK");
// });
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("END WRITE")


//SYNCHRONIZE
// console.log("START WRITE")
// fs.writeFileSync("test.txt","Hello");
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("END WRITE")




// READFILE
// console.log("START READ")
// fs.readFile("test.txt",(err,data)=>{
//     if(err) console.log(err)
//     else console.log("OKKKK: "+data)
// });
// console.log("READ DONE")

// console.log("START READ")
// let fileData= fs.readFileSync("test.txt");
// console.log("READ: "+fileData);
// console.log("READ DONE")





//GHI OBJECT
// let writeData={
//     a:5,
//     b:6
// }

// let jsondata=JSON.stringify(writeData);//chuyen sang kieu json
// console.log("START WRITE")
// fs.writeFile("test.txt",jsondata,(err)=>{
//     if(err) console.log(err)
//     else console.log("OKKKKK");
// });
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("END WRITE")
// console.log("START READ")
// fs.readFile("test.txt",(err,data)=>{
//     if(err) console.log(err)
//     else console.log("OKKKK: "+data)
// });
// console.log("READ DONE")
// console.log("START READ")
// fs.readFile("test.txt",(err,data)=>{
//     if(err) console.log(err)
//     else console.log("OKKKK: "+JSON.parse(data).a)
// });
// console.log("READ DONE")





const fileModule=require("./fileModule");
fileModule.writeFileCustom("testModule.json",{a:"abcxyz",b:"tan"});
// let fileData=fileModule.readFileCustom("testModule.json");
// console.log(fileData);   se undefined

fileModule.readFileCustom("testModule.json",(fileData)=>{
    console.log(fileData); 
});






//gitignore de ko push len git cho nhe

//cai npm i mocha --save-dev : -dev chi dung khi code