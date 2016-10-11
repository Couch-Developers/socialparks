(function(module) {
  twitter = {};

  twitter.allTweets = [];

  twitter.requestTweets = function(searchItem, callback) {
    $.ajax({
      url: '/tweets/' + searchItem,
      success: function(data) {
        twitter.allTweets = data;
        callback();
      }
    });
  };

  twitter.requestTweets('clinton');

  module.twitter = twitter;
})(window);
