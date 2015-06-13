var request = new XMLHttpRequest();
request.open('GET', '/json-list', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    momentsFunction(data);

    // if this is a link to a moment, load that first
    window.onload = function() {

      //send specific moment link
      if (getHashNum(window.location.href)) {
        updateMoments(getHashNum(window.location.href));
        return;
      }
    };

  } else {
    console.log('we can\'t find the happy moments :(');
  }
};

request.onerror = function() {
  document.querySelector('.moment--text').innerHTML = 'connection error';
};

request.send();