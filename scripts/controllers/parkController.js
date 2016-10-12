(function(module){
  var parkController = {};

  parkController.index = function(){
    $('#park-page').fadeIn().siblings().hide();
  };

  parkController.emptyParkHtml = function(ctx, next) {
    $('#twitter-feed').empty();
    $('#gov-data').empty();
    $('#tweet').empty();
    $('#flickr').empty();
    next();
  };

  parkController.loadNpsData = function(ctx, next) {
    parksView.showPark();
    next();
  };

  parkController.loadParkData = function(ctx, next) {
    flickrData.fetchData(ctx.params.name, flickrData.populateHandlebars);
    twitter.requestTweets(ctx.params.name);
    next();
  };



  module.parkController = parkController;

}(window));
