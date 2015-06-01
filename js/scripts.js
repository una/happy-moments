var request = require('request');

request("https://www.kimonolabs.com/api/2mf3bjrq?apikey=txL7B070QkLk5HPTGs915wNTSQP7jqi6",
function(err, response, body) {
  console.log(body);
});

// ractive here:

var ractive = new Ractive({
  // The `el` option can be a node, an ID, or a CSS selector.
  el: '#container',

  // We could pass in a string, but for the sake of convenience
  // we're passing the ID of the <script> tag above.
  template: '#template',

  // Here, we're passing in some initial data
  data: {
    name: 'Una'
  }
});