(function(module){

  var tweets = {};

  tweets.renderTweets = function() {
    twttr.widgets.createTweet(
      twitter.allTweetsId[0],
      document.getElementById('tweet'),
      {
        align: 'left'
      });
  };

  module.tweets = tweets;
})(window);
