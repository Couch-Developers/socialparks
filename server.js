var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();
  Twit = require('twit');

var twitterProxy = function(request, response) {
  var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  });
  T.get('search/tweets', {q: request.params[0], count: 10},
  function(err, data) {
    console.log(data);
    response.json(data);
  });
};

  function proxyNpsApi(request, response) {
    console.log('Routing NPS request for', request.params[0]);
    (requestProxy({
      url: 'https://developer.nps.gov/api/v0/' + request.params[0],
      headers: {Authorization: process.env.NPS_API}
    }))(request, response);
  };

  app.get('/nps/*', proxyNpsApi);

function proxyFlickr(request, response) {
  console.log('Routing Flickr request for', request.params[0]);
  console.log('request.query', request.query);
  console.log(process.env.FLICKR_KEY);
  (requestProxy({
    url: 'https://www.flickr.com/services/rest/',
    query: {api_key: process.env.FLICKR_KEY,
            method: request.query.method,
            format: request.query.format,
            tags: request.query.tags}
  }))(request, response);
};

app.get('/flickr/*', proxyFlickr);

app.use(express.static('./'));

app.get('/tweets/*', twitterProxy);

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
