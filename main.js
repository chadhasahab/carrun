m=0;
var y;
var view = document.getElementById("back");
if(screen.width < 900){
    view.style.height = (screen.height - 159)+'px';
}
function start(){
   y = setInterval(run,100);
function run(){
    console.log(m)
    // var w = screen.width * ratio;
    var h = screen.height;
    var w = screen.width;
    
    if(w > 1000){
        var cw = parseInt(screen.width - screen.width*0.15);
    }else if(w > 900 && w < 1000) {
        var cw = parseInt(screen.width - screen.width*0.22);
    
    }else if(w > 720 && w < 900) {
        var cw = parseInt(screen.width - screen.width*0.24);
    }else if(w < 720) {
        var cw = parseInt(screen.width - screen.width*0.40);
    }

    if(m >= cw){
        clearInterval(y);
        m=0;
    }else{
        m+=10;
        var x = document.getElementById("img");
        x.style.marginLeft = m+'px';
    }
    
}
}

function imgchnge(){
    var imgchange = document.getElementById("imgr").value;
    if(imgchange == 0){
        document.getElementById("img").src = "images/car.png";
    }else if(imgchange == 1)
    {
        document.getElementById("img").src = "images/c2.png";
    }else if(imgchange == 2){
        document.getElementById("img").src = "images/car3.png";
    }
}


function stop(){
  clearInterval(y)
}