(function(module) {
  var twitter = {};

  twitter.allTweetsId = [];
  twitter.allTweetsIndex = 0;

  twitter.requestTweets = function(searchItem) {
    $.ajax({
      url: '/tweets/' + searchItem + '+national+park',
      success: function(data) {
        twitter.allTweetsId = data.statuses.map(function(obj){
          return obj.id_str;
        });
        tweets.renderTweets(twitter.allTweetsIndex);
        tweets.buttonHandler();
      }
    });
  };

  module.twitter = twitter;
})(window);
