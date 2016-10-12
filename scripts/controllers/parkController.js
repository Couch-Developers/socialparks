(function(module){
  var parkController = {};

  parkController.index = function(){
    $('#park-page').fadeIn().siblings().hide();
  };

  parkController.loadNpsData = function() {

  };


  parkController.loadFlickrData = function(ctx, next) {
    flickrData.fetchData(ctx.params.name, flickrData.populateHandlebars);
    next();
  };



  module.parkController = parkController;

}(window));
