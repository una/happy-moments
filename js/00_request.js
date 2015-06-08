var request = new XMLHttpRequest();
request.open('GET', '/json-list');

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    momentsFunction(data);

    // if this is a link to a moment, load that first
    window.onload = function() {
      console.log(window.location.href);

      if (window.location.href.includes('#')) {
        console.log(getHashNum(window.location.href));
        updateMoments(getHashNum(window.location.href));
        return;
      }
    };

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  console.log('connection error');
};

request.send();