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

  parkController.loadParkData = function(ctx, next) {
    parksObj.getPark(ctx.params.name);
    flickrData.fetchData(ctx.params.name, flickrData.populateHandlebars);
    twitter.requestTweets(ctx.params.name);

    next();
  };

  parkController.nameToCode = function(name) {
    var newName = name.replace('+', ' ');
    return parksObj.allParks.filter(function(el){
      return el.name === newName;
    })[0].code;
  };

  module.parkController = parkController;

})(window);
