(function(module){

  var tweets = {};

  tweets.renderTweets = function() {
    twttr.widgets.createTweet(
      twitter.allTweetsId[0],
      document.getElementById('tweet'),
      {
        align: 'center',
        width: 'auto'
      });
  };

  module.tweets = tweets;
})(window);
