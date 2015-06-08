// Canvas
var canvas = document.getElementById('gradient');
var context = canvas.getContext('2d');
context.rect(0, 0, canvas.width, canvas.height);

// starting color
var bgc1 = 'rgb(142,214,255)';
var bgc2 = 'rgb(244,214,255)';
var grd = context.createLinearGradient(canvas.width, 0, canvas.width, canvas.height);

function buildGrad() {
  grd = context.createLinearGradient(canvas.width, 0, canvas.width, canvas.height);

  // add colors & fill
  grd.addColorStop(0, bgc1);
  grd.addColorStop(1, bgc2);
  context.fillStyle = grd;
  context.fill();
}

buildGrad();

//mouse coords
var mouseX = 0;
var mouseY = 0;

function getCanvasSize() {
  return {
    specifiedWidth : canvas.width,
    specifiedHeight :canvas.height,
    realWidth : canvas.offsetWidth,
    realHeight : canvas.offsetHeight,
    heightScale: canvas.height/canvas.offsetHeight,
    widthScale: canvas.width/canvas.offsetWidth
  };
}

window.addEventListener("mousemove",function(e){
  var s = getCanvasSize();
  var x = e.pageX - canvas.offsetLeft;
  var y = e.pageY - canvas.offsetTop;
  mouseX = x*s.widthScale;
  mouseY = y*s.heightScale;
  bgc1 = 'rgb('+Math.floor(mouseY*2 + 60)+','+ Math.floor(mouseX/2 + 40) + ',' + Math.floor(mouseY*5 + 160) + ')';
  bgc2 = 'rgb('+Math.floor(mouseX)+',214,255)';

  buildGrad();

});

var sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('click', function(){
  if (sidebar.hasAttribute('data-state')) {
    sidebar.removeAttribute('data-state');
  } else {
    sidebar.setAttribute('data-state', 'open');
  }
});