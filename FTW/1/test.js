


// var function scope
// let block scope

// callback trong for: var sẽ chạy hết rồi mới gọi callback 
//                     let thì chạy luôn 
// callback sẽ chạy cuối cùng

// console.log("Start")
// setTimeout(function(){
//     console.log("wait 1s");
// },1000)
// console.log("End")
                                                // a=()=>{
                                                //     for(var i=10;i>=0;i--){
                                                //         setTimeout(function(){
                                                //             console.log(i);
                                                //         },1000);
                                                //     }
                                                // }
                                                // a();

//  countDown =(count)=>{
//     for(var i=count;i>=0;i--){
//         setTimeout(function(){
//             console.log(i);
//         },1000*(count-i));
//     }
// }
// countDown(5);



// const print= function(i){
//     console.log(i);
// }

// const otherFunction=function(functionAsObject){
//     functionAsObject(15);
// }
// otherFunction(print);



// XU LY BAT DONG BO BANG CALLBACK
// var data=null;
// const print= function(i){
//     console.log(i);
// }

// const otherFunction=function(onGetDataDone){
//     setTimeout(() => {
//         data=15;
//         console.log(data+5);
//         onGetDataDone(data);
//     }, 1000);
//     console.log(data+5);
// }
// otherFunction(print);

