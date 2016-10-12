(function(module){
  var parkController = {};

  parkController.index = function(){
    $('#park-page').fadeIn().siblings().hide();
  };

  parkController.loadNpsData = function() {

  };


  parkController.loadParkData = function(ctx, next) {
    flickrData.fetchData(ctx.params.name, flickrData.populateHandlebars);
    twitter.requestTweets(ctx.params.name);
    next();
  };



  module.parkController = parkController;

}(window));
