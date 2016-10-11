(function(module){
  var homeController = {};

  homeController.index = function(){
    $('#landing-page').fadeIn().siblings().hide();
  };

  module.homeController = homeController;

}(window));
