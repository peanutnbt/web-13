
$(document).ready(function(){
    // document.getElementById("text-area-qs").oninput = function() {
    //     var content=document.getElementById("text-area-qs").value;
    //     var after=200-content.length;
    //     document.getElementById("count-down-letter").innerHTML=after;
    // };
    $("#text-area-qs").on("input",function(){
        var after=200-$("#text-area-qs").val().length;
        $("#count-down-letter").text(after);
    })
    //ajax lam client render, redirect ở client chứ ko phải server như trước
    //tai cdn jquery chay ajax(not slim), de index.js o duoi jquery
    $("#questionForm").on("submit",function(event){
        event.preventDefault();
        $.ajax({
            url:'/api/add',
            type:'POST',
            data:$('#questionForm').serialize(),
            success:function(body){
                if(body.success){
                    window.location.href="/question/"+body.questionId;
                }
                else{
                    alert("ERROR");
                }
            } ,
            error:function(body){
                console.log(body);
                alert("ERROR")
            } 
        })
    })
    $("#otherQs").on("click",function(event){
        event.preventDefault();
        var sendAjax=function(){
            $.ajax({
                url:'/',
                type:'POST',
                success:function(body){
                    if(body.success){
                        let question;
                        while(true){
                            let rand=Math.floor(Math.random()*body.questions.length)
                            question =body.questions[rand];
                            if($("#qsBlock").text()==question.content){
                            }
                            else{
                                $("#qsBlock").text(question.content);
                                $("#voteLeft").attr("href","/api/answer/"+question._id+"/no");
                                $("#voteRight").attr("href","/api/answer/"+question._id+"/yes");
                                $("#votebtn").attr("href","/question/"+question._id);
                                break;
                            }
                        }
                        
                    }
                    else{
                        alert("ERROR");
                    }
                } ,
                error:function(body){
                    console.log(body);
                    alert("ERROR")
                } 
            })
        }
        sendAjax();
    })
 });