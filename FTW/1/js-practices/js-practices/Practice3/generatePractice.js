// 'use strict'
function generate(testLengthArray){
  return testLengthArray.map((item,index )=> {
      let abc={
      input:  (()=>{
                let input = [];
                for (let m = 0; m < item; m++){
                input.push(Math.floor(Math.random() * 100));
                }
                input.sort(function(a, b){return a-b});
                return input;
              })(),
      target: -1,
      output:-1
    };
    abc.target=(()=>{
          let target; 
          if(testLengthArray.length > 3){
            if( index== 0){target =  abc.input[0];}
            else if(index == 69){target = abc.input[testLengthArray[69]-1];}
            else{target = Math.floor(Math.random() * 100);}
          }
          else{target = Math.floor(Math.random() * 100);}
          return target;
    })()
    abc.output=abc.input.indexOf(abc.target);
    return abc;
    })
}


module.exports = generate


