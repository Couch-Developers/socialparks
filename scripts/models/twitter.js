(function(module) {

  function Twitter (opts) {
    this.id = opts.id;
    this.retweet_count = opts.retweet_count;
  }

  Twitter.allTweets = [];

  Twitter.loadTweets = function() {
    Twitter.requestTweets('clinton');
    console.log(Twitter.allTweets);
  };

  // Twitter.loadTweets();

  twitter.toHtml = function(tweet, scriptTemplateId) {
    var source   = $(scriptTemplateId).html();
    var template = Handlebars.compile(source);
    var html = template(tweet);
  };

  Twitter.requestTweets = function(searchItem) {
    $.ajax({
      url: '/tweets/' + searchItem,
      success: function(data) {
        Twitter.allTweets.push(data.statuses);
      }
    });
  };

  Twitter.testLog = function(data) {
    console.log(twitter.allTweets);
  };

  Twitter.renderTweets = function() {
    twitter.allTweets.forEach(function(item){
      $('#twitter-feed').append(twitter.toHtml(item, $('#twitter-template')));
    });
    console.log(twitter.allTweets);
  };

  // twitter.requestTweets('clinton', twitter.renderTweets);

  module.twitter = twitter;
})(window);
