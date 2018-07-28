$(document).ready(function(){
    var nextPageToken="";
    var checkEnd="False";
    var ajaxFunction=function(keyword){
        $.ajax({
            url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`+keyword+`&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=`+nextPageToken+`
            `,
            type:'GET',
            success:function(body){
                    console.log(keyword)
                    $("#loading").remove()
                    for( var i=0;i<body.items.length;i++){
                        $("#result-list").append(`
                            <a class="result col-md-12" href="https://www.youtube.com/watch?v=${body.items[i].id.videoId}?autoplay=true" target ="_blank">
                                <div class="row" style="height:170px">
                                    <img src="${body.items[i].snippet.thumbnails.high.url}" alt="" class="col-md-3 img-fluid">
                                    <div class="video_info col-md-9">
                                        <h2 class="title">${body.items[i].snippet.title}</h2>
                                        <div>${body.items[i].snippet.channelTitle}</div>
                                        <p class="description">${body.items[i].snippet.description}</p>
                                        <span>View >></span>
                                    </div>
                                </div>
                            </a>`
                        );
                    }
                    nextPageToken=body.nextPageToken;
                    isScrollDone=false;
            } ,
            error:function(body){
                if(checkEnd=="False"){
                    $("#result-list").append(`<div>Không có kết quả nào khác</div>`)
                    checkEnd="True"
                }
                
            } 
        })
    }
    var ajaxFunction2=function(keyword){
        $.ajax({
            url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`+keyword+`&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
            type:'GET',
            success:function(body){
                    console.log(keyword)
                    if(body.items.length==0){
                        $("#result-list").append(`<div>Không có kết quả nào khác</div>`)
                        return;
                    }
                    for( var i=0;i<body.items.length;i++){
                        $("#result-list").append(`
                            <a class="result col-md-12" href="https://www.youtube.com/watch?v=${body.items[i].id.videoId}?autoplay=true" target ="_blank">
                                <div class="row" style="height:170px">
                                    <img src="${body.items[i].snippet.thumbnails.high.url}" alt="" class="col-md-3 img-fluid">
                                    <div class="video_info col-md-9">
                                        <h2 class="title">${body.items[i].snippet.title}</h2>
                                        <div>${body.items[i].snippet.channelTitle}</div>
                                        <p class="description">${body.items[i].snippet.description}</p>
                                        <span>View >></span>
                                    </div>
                                </div>
                            </a>`
                        );
                    }
                    nextPageToken=body.nextPageToken;
            } ,
            error:function(body){
                if(checkEnd=="False"){
                    $("#result-list").append(`<div>Không có kết quả nào khác</div>`)
                    checkEnd="True"
                }
                
            } 
        })
    }
    // $("#search").on("submit",function(event){
    //     $("#result-list").html("")
    //     var keyword=$("#keyword").val();
    //     event.preventDefault();
    //     ajaxFunction(keyword);
    // })

    var tempText="";
    //cứ mỗi giây gọi ajax 1 lần, nếu không nhập thêm gì thì keyword=temptext nên không gọi ajax
    //gọi ajax2 vì không cần nextPageToken bị lỗi ở url
    setInterval(function(){
        // $("#keyword").on("input",function(event){
            var keyword=$("#keyword").val();
            if(keyword!=""&&keyword!=tempText){
                $("#result-list").html("")
                ajaxFunction2(keyword);
                tempText=keyword;
            }
        // })
    }, 1000);

    // $("#search").on("input",function(event){
    //     setTimeout(function(){
    //         $("#result-list").html("")
    //         var keyword=$("#keyword").val();
    //         if(keyword!=""){
    //             ajaxFunction(keyword);
    //         }
            
    //         console.log(keyword)
    //     }, 1000);
        
    // })
    
    var checkLoading=false;
    var isScrollDone=false;
    $(window).scroll(function(){
        if (($(window).innerHeight() + $(window).scrollTop()) >= $("#result-list").height()+140&&isScrollDone==false) {
            //do stuff
            isScrollDone=true;
            if(checkLoading==false){
                $("#result-list").append('<div id="loading"></div>')
                checkLoading=true;
            }
            
            var keyword=$("#keyword").val();
            setTimeout(function(){
                ajaxFunction(keyword);
                checkLoading=false;
                $('html, body').animate({
                    scrollTop: $(window).scrollTop() + $(".result").height()*1.5
                });
                
            },1000);
            
            
        }
    });
})