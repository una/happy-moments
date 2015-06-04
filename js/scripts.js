var request = new XMLHttpRequest();
request.open('GET', '/json-list', true);
var data;

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    momentsFunction(data);

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  console.log('connection error');
};

request.send();

// using list from API call
function momentsFunction(data) {
  var allMoments, count, date, moment, i;
  allMoments = data;
  count = allMoments.count;

  console.log(allMoments);

  function randomMoment() {
    i = Math.floor(Math.random()*count);
    updateMoments(i);
  };

  function nextMoment() {
    i++;
    updateMoments(i);
  }

  function prevMoment() {
    i--;
    updateMoments(i);
  }

  function updateMoments(i) {
    date = allMoments.results.happyMoments[i].date.text;
    moment = allMoments.results.happyMoments[i].moment;
    document.querySelector('.moment--text').innerHTML = moment;
    document.querySelector('.moment--date').innerHTML = formatDate(date);
  }

  randomMoment();

  document.querySelector('.date--rand').addEventListener("click", function(e) {
      randomMoment();
    });
  document.querySelector('.date--next').addEventListener("click", function(e) {
      nextMoment();
    });
  document.querySelector('.date--prev').addEventListener("click", function(e) {
      prevMoment();
    });
}

// Date Formatting
function formatDate(d) {
  var months = {
    '01' : 'Jan',
    '02' : 'Feb',
    '03' : 'Mar',
    '04' : 'Apr',
    '05' : 'May',
    '06' : 'June',
    '07' : 'July',
    '08' : 'Aug',
    '09' : 'Sept',
    '10' : 'Oct',
    '11' : 'Nov',
    '12' : 'Dec'};
  var monthNum = d.slice(0,2);
  var dateNum = d.slice(3,5);

  return (months[monthNum] + ' ' + dateNum);
}

// Google Fonts
WebFontConfig = {
  google: { families: [ 'Roboto:100,300italic:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

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