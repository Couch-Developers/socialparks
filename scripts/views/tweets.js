(function(module){

  var tweets = {};

  tweets.renderTweets = function() {
    twttr.widgets.createTweet(
      twitter.allTweetsId[0],
      document.getElementById('tweet1'),
      {
        align: 'left'
      });

    twttr.widgets.createTweet(
      twitter.allTweetsId[1],
      document.getElementById('tweet2'),
      {
        align: 'left'
      });

    twttr.widgets.createTweet(
      twitter.allTweetsId[2],
      document.getElementById('tweet3'),
      {
        align: 'left'
      });
  };

  module.tweets = tweets;
})(window);
