var arr = [];
var x = 1;
while(x < 49){
  arr.push(x++);
}


//lấy phần tử ngẫu nhiên
function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)]; 
}
//random tư thế mới
function xuly(){
    var ran = random_item(arr)
    var hinh = document.querySelector('#img');
    hinh.src = 'images/ABS/' + ran +'.png'
    theCountdownDate =  new Date().getTime();
}

//random_landau
xuly()

//hàm dừng thời gian
var theInterValsFunction;
var stop = false;
count()
function do_stop(){
    //đổi stop
    if (stop){
        stop = false;
    }
    else {stop = true;}
    //chạy hoặc dừng
    if (stop){
        clearInterval(theInterValsFunction);
    }
    else{
        count();
    }
    
}


//time
var theCountdownDate =  new Date().getTime();

function count(){
    theInterValsFunction = setInterval( function(){
        var theNowTimeDate = new Date().getTime();
        var theDistance =  theNowTimeDate - theCountdownDate;

        var mins = Math.floor(theDistance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(theDistance % (1000 * 60) / 1000);
    
        var time_counter = document.getElementById("time_counter")
    if (mins < 10 && seconds >= 10){
        time_counter.innerHTML = "0"+mins + " : " + seconds
    }
    else if (mins >= 10 && seconds < 10){
        time_counter.innerHTML = mins + " : " + "0"+seconds
    }
    else if (mins >= 10 && seconds >= 10){
        time_counter.innerHTML =mins + " : " + seconds
    }
    else{
        time_counter.innerHTML = "0"+mins + " : " + "0"+seconds
    }
    
    //reset tư thế khác
    if (theDistance >= 30000){
        theCountdownDate =  new Date().getTime();
        xuly()
    }
    
    })
}


//đối style
var time_counter = document.getElementById("time_counter")
time_counter.style.fontSize = '70px';
time_counter.style.color = 'red';


