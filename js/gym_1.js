var group = 'ABS';

//random tư thế mới
function xuly(){
    if (group == 'ABS'){
        var ran = Math.floor(Math.random() * 49 + 1);  //ngẫu nhiên 1-49
    }
    else if (group == 'DUMBELL'){
        var ran = Math.floor(Math.random() * 25 + 1);  //ngẫu nhiên 1-25
    }
    else if (group == 'Chest'){
        var ran = Math.floor(Math.random() * 7 + 1);  //ngẫu nhiên 1-7
    }
    else if (group == 'G_HF'){
        var ran = Math.floor(Math.random() * 7 + 1);  //ngẫu nhiên 1-7
    }
    var hinh = document.querySelector('#img');
    hinh.src = 'images/'+ group +'/' + ran +'.png'
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

//đổi group
function group_change(value){
    group = value
    alert('Đổi sang bài tập ' + value)
}

