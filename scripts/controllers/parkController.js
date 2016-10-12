(function(module){
  var parkController = {};

  parkController.index = function(){
    $('#park-page').fadeIn().siblings().hide();
  };

  parkController.loadNpsData = function() {

  };


  parkController.loadFlickrData = function(ctx, next) {
    flickrData.fetchData(ctx, flickrData.populateHandlbars);
    next();
  };



  module.parkController = parkController;

}(window));
