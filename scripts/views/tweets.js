(function(module){

  var tweets = {};

  tweets.renderTweets = function(i) {
    $('#tweet').empty();
    twttr.widgets.createTweet(
      twitter.allTweetsId[i],
      document.getElementById('tweet'),
      {
        align: 'center',
        width: 'auto'
      });
  };

  tweets.buttonHandler = function() {
    $('button.next-media').on('click', function() {
      if (twitter.allTweetsIndex <= (twitter.allTweetsId.length - 1)) {
        twitter.allTweetsIndex++;
        tweets.renderTweets(twitter.allTweetsIndex);
      }
    });
    $('button.previous-media').on('click', function() {
      if (twitter.allTweetsIndex > 0) {
        twitter.allTweetsIndex--;
        tweets.renderTweets(twitter.allTweetsIndex);
      }
    });
  };

  module.tweets = tweets;
})(window);
