(function(module){

  var tweets = {};

  tweets.renderTweets = function(i) {
    if (twitter.allTweetsId.length === 0) {
      $('#tweet').empty();
      $('#tweet').append('<img src="/images/twitter.png" alt="Twitter Logo">');
      $('#tweet-container button').hide();
    } else {
      $('#tweet').empty();
      twttr.widgets.createTweet(
        twitter.allTweetsId[i],
        document.getElementById('tweet'),
        {
          align: 'center',
          width: 'auto'
        });
      $('#tweet-container button').show();
    }
  };

  tweets.buttonHandler = function() {
    $('button.next-media').on('click', function() {
      if (twitter.allTweetsIndex < (twitter.allTweetsId.length - 1)) {
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
