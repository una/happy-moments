function randomMoment(e){var t,o,n;t=e.count;var a=Math.floor(Math.random()*t);o=e.results.happyMoments[a].date.text,n=e.results.happyMoments[a].moment,document.querySelector(".moment--text").innerHTML=n,document.querySelector(".moment--date").innerHTML=formatDate(o),document.querySelector(".date--rand").addEventListener("click",function(e){randomMoment(data)})}function formatDate(e){var t={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"June","07":"July","08":"Aug","09":"Sept",10:"Oct",11:"Nov",12:"Dec"},o=e.slice(0,2),n=e.slice(3,5);return t[o]+" "+n}var request=new XMLHttpRequest;request.open("GET","/json-list",!0);var data;request.onload=function(){request.status>=200&&request.status<400?(data=JSON.parse(request.responseText),randomMoment(data),console.log("reload")):console.log("we can't find the happy moments :(")},request.onerror=function(){console.log("connection error")},request.send(),WebFontConfig={google:{families:["Roboto:100,300italic:latin"]}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();