const fs=require('fs');
const writeFileCustom=(filePath,writeData)=>{
    fs.writeFile(filePath,JSON.stringify(writeData),(err)=>{
        if(err) console.log(err)
        else console.log("OKKKKKKKK");
    })

}
// const readFileCustom=(filePath)=>{
//     fs.readFile(filePath,(err,data)=>{
//         if(err) console.log(err)
//         else return data;
//     })

// }
const readFileCustom=(filePath,onReadFileDone)=>{
    fs.readFile(filePath,"utf8",(err,data)=>{
        if(err) console.log(err)
        else onReadFileDone(data);
    })

}
module.exports={
    writeFileCustom,
    readFileCustom

}