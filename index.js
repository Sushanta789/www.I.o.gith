var fileInput = document.querySelector("input[type=file]");
var embed = document.querySelector("input#embed");
var range = document.querySelector("div#range"),
value = document.querySelector("div#value");
var pointer = value.querySelector("span");
var fullscreenBtn = document.querySelector("button#fullscreen"), compressScreenBtn = document.querySelector("button#compress");
var videoContainer = document.querySelector("div.video");
var video = document.querySelector("video");
var duration = document.querySelector("span#duration"),
   current = document.querySelector("span#current")
var rangeWidth = parseInt(window.getComputedStyle(range, null).getPropertyValue("width"));
var eq = 10;
var buttons = document.getElementsByTagName("button");
var upDownBar = document.querySelector("div.upDownV");
var loading = document.getElementsByClassName("loading")[0];
var timer, ety;
window.onload = function() {
 video.src = localStorage.urlNotChange;
current.innerHTML = localStorage.vgm;
video.currentTime = localStorage.whatIsTime;
};
video.addEventListener("timeupdate", function() {
  if(video.paused) {
    buttons[1].firstChild.setAttribute("class", "fas fa-play");
  }
  timer = video.currentTime/video.duration*100;
  value.style.width = `${timer}%`;
localStorage.notChangeAtAll = timer;
var currnt1 = Math.floor(video.currentTime / 60),
     currnt2 = Math.floor(video.currentTime % 60);
  var c1 = currnt1, c2 = currnt2;
  var dmc,xc;
  if(c1 >= 60) {
    dmc = Math.floor(c1 / 60);
    xc = Math.floor(c1 % 60);
    if(xc < 10) {
      xc = `0${xc}`;
    }
    c1 = `${dmc}:${xc}`;
  }
  
  if(c2 < 10) {
    c2 = `0${c2}`;
  }
  ety = `${c1}:${c2}`;
  current.innerHTML = ety;
localStorage.vgm = ety;
localStorage.whatIsTime = video.currentTime;
})
video.addEventListener("playing", function() {
loading.setAttribute("class", "laoding");
  value.style.backgroundColor = "mediumseagreen";
});

function changeRangeValue(e) {
  var rangeV = parseInt(e.offsetX*100/range.clientWidth);
  if(rangeV >= 100) {
    rangeV = 100;
  }
  if(rangeV <= 0) {
    rangeV = 0;
  }
  let currnt1 = Math.floor(video.currentTime / 60),
     currnt2 = Math.floor(video.currentTime % 60);
  let c1 = currnt1, c2 = currnt2;
  let dmc,xc;
  if(c1 >= 60) {
    dmc = Math.floor(c1 / 60);
    xc = Math.floor(c1 % 60);
    if(xc < 10) {
      xc = `0${xc}`;
    }
    c1 = `${dmc}:${xc}`;
  }
  
  if(c2 < 10) {
    c2 = `0${c2}`;
  }
  current.innerHTML = `${c1}:${c2}`;
  value.style.width = `${rangeV}%`;
  video.currentTime = rangeV*video.duration/100;
}
function moveRangeValue(e) {
if(window.innerWidth >= 900) {
 preventDefault();
} else {
  var rangeVM = parseInt(e.touches[0].clientX*100/range.clientWidth-eq);
  
if(rangeVM >= 100) {
    rangeVM = 100;
  }
if(rangeVM <= 0) {
    rangeVM = 0;
  }
  let currnt1 = Math.floor(video.currentTime / 60),
     currnt2 = Math.floor(video.currentTime % 60);
  let c1 = currnt1, c2 = currnt2;
  let dmc,xc;
  if(c1 >= 60) {
    dmc = Math.floor(c1 / 60);
    xc = Math.floor(c1 % 60);
    if(xc < 10) {
      xc = `0${xc}`;
    }
    c1 = `${dmc}:${xc}`;
  }
  
  if(c2 < 10) {
    c2 = `0${c2}`;
  }
  current.innerHTML = `${c1}:${c2}`;
  value.style.width = `${rangeVM}%`;
  video.currentTime = rangeVM*video.duration/100;
}
}
video.addEventListener("loadeddata", function() {
  var dur1 = Math.floor(video.duration / 60),
     dur2 = Math.floor(video.duration % 60);
     var dm, zr;
  var d1 = dur1, d2 = dur2;
  if(d1 >= 60) {
    dm = Math.floor(dur1 / 60);
    zr = Math.floor(dur1 % 60);
   if(zr < 10) {
     zr = `0${zr}`;
   }
    d1 = `${dm}:${zr}`;
  }
  if(d2 < 10) {
    d2 = `0${dur2}`;
  }
  duration.innerHTML = `${d1}:${d2}`;
value.style.width = localStorage.notChangeAtAll+"%";
value.style.backgroundColor = "mediumseagreen";
});
function playOrNot(btn) {
  if(video.paused) {
    video.play();
    btn.firstChild.setAttribute("class", "fas fa-pause");
  } else {
    video.pause();
    btn.firstChild.setAttribute("class", "fas fa-play");
  }
}
var skip = 10;
function skipBtn(h) {
  if(h == "left") {
    video.currentTime -= skip;
  } if(h == "right") {
    video.currentTime += skip;
  }
var timer2 = video.currentTime/video.duration*100;
  value.style.width = `${timer2}%`;
var currnt1 = Math.floor(video.currentTime / 60),
     currnt2 = Math.floor(video.currentTime % 60);
  var c1 = currnt1, c2 = currnt2;
  if(c2 < 10) {
    c2 = `0${c2}`;
  }
  current.innerHTML = `${c1}:${c2}`;
}
var check = false;
function showVolumeOp(btn) {
  if(check == false) {
    upDownBar.style.right = "0%";
btn.firstChild.setAttribute("class", "fas fa-angle-right");
    check = true;
  } else {
    upDownBar.style.right = "-100%";
btn.firstChild.setAttribute("class", "fas fa-angle-left");
    check = false;
  }
}
function volumeChange(inpt) {
  var calc = inpt.value/100;
  if(calc <= 0.50) {
    buttons[4].firstChild.setAttribute("class", "fas fa-volume-down");
  } if(calc > 0.50) {
buttons[4].firstChild.setAttribute("class", "fas fa-volume-up");
  } if(calc <= 0) {
buttons[4].firstChild.setAttribute("class", "fas fa-volume-mute");
  }
  video.volume = calc;
}
video.addEventListener("waiting", function() {
  loading.setAttribute("class", "loading active");
})
video.addEventListener("error", function() {
  value.style.backgroundColor = "transparent";
})
function addVideos() {
 const file = fileInput.files[0];
 const readFile = new FileReader();
 readFile.readAsDataURL(file);
 readFile.addEventListener("load", function() {
  if(file.name.indexOf(".mp4") <= -1) {
   alert("file must extension .mp4");
   return false;
  } else {
  video.src = readFile.result;
  }
 })
}