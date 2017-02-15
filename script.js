window.onload=function(){
	var main=document.getElementById('main');
    var audio=document.getElementById('audio');

    var po=document.getElementById('po');
    var short=document.getElementById('short');
    var long=document.getElementById('long');

    var strat=document.getElementById('strat');
    var pause=document.getElementById('pause');
    var reset=document.getElementById('reset');

    var timer;
    var tem=mssGl=1500000;

    clock(mssGl)

    po.onclick=function(){
        clearInterval(timer);
        tem=mssGl=1500000;
        clock(mssGl)
    }
    short.onclick=function(){
        clearInterval(timer);
        tem=mssGl=600000;
        clock(mssGl)
    }
    long.onclick=function(){
        clearInterval(timer);
        tem=mssGl=300000;
        clock(mssGl)
    }

    strat.onclick=function(){
        run(mssGl);
        mssGl=run(mssGl);
    }
    pause.onclick=function(){
        clearInterval(timer);
        clock(mssGl);
    }
    reset.onclick=function(){
        mssGl=tem;
        clearInterval(timer);
        clock(mssGl);  
    }
 
    function run(mss){
        clearInterval(timer);
        timer=setInterval(function(){
            mssGl=mss-=1000; 

            clock(mss);
                 
            if(mss==-1000){
                clearInterval(timer);
                audio.play();
                alert('时间到！！！');
            }
        },1000);   
    }

    function clock(times){
        var date=new Date(times);
        var minute=(date.getMinutes().toString().length==1)?'0'+date.getMinutes():date.getMinutes();
        var second=(date.getSeconds().toString().length==1)?'0'+date.getSeconds():date.getSeconds();
        main.innerHTML=minute+':'+second;
    }
 
        
}