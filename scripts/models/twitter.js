(function(module) {
  var twitter = {};

  twitter.allTweetsId = [];

  twitter.requestTweets = function(searchItem) {
    $.ajax({
      url: '/tweets/' + searchItem + "+national+park",
      success: function(data) {
        twitter.allTweetsId = data.statuses.map(function(obj){
          return obj.id_str;
        });
        tweets.renderTweets();
      }
    });
  };

  // twitter.requestTweets('zion national park');

  module.twitter = twitter;
})(window);
