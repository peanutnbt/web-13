
$(document).ready(function(){
    // var socket=io("http://localhost:4000");
    // $("#otherQs").click(function(){
    //     socket.emit("Client-click-other-qs")
    //     socket.on("server-send-qs",function(data){
    //         do{
    //             var text=data[Math.floor(Math.random()*data.length)].content
    //             var texthtml=$("#qsBlock").text()
    //             console.log(texthtml+" "+text);
    //             console.log("")
    //             if(texthtml!=text){
    //                 console.log("khac")
    //                 $("#qsBlock").html(text)
    //                 console.log($("#qsBlock").text())
    //             }
    //         }
    //         while(texthtml==text)
            
    //     })
    //     // socket.on("server-send-qs2",function(data){
    //     //     var text=$("#qsBlock").text();
    //     //     var index=data.indexOf(text);
    //     //     document.getElementById("votebtn").href = "http://localhost:4000/question"+index;
    //     // })
    // })
    
    // socket.on("server-send-qs2",function(data){
    //     var text=$("#qsBlock").text();
    //     var index=data.indexOf(text);
    //     document.getElementById("votebtn").href = "http://localhost:4000/question"+index;
    // })

    document.getElementById("text-area-qs").onkeyup = function() {
        var content=document.getElementById("text-area-qs").value;
        var after=200-content.length;
        document.getElementById("count-down-letter").innerHTML=after;
    };
    document.getElementById("text-area-qs").onchange = function() {
        var content=document.getElementById("text-area-qs").value;
        var after=200-content.length;
        document.getElementById("count-down-letter").innerHTML=after;
    };
   
 });