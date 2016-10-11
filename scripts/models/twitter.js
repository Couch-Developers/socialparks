(function(module) {
  twitter = {};

  tweetsObj.allTweets = [];

  twitter.requestTweets = function(searchItem, callback) {
    $.ajax({
      url: '/tweets/' + searchItem,
      success: function(data) {
        twitter.allTweets = data;
        callback();
      }
    });
  };

  tweetsObj.requestTweets('clinton');

  module.twitter = twitter;
})(window);
