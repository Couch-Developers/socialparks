(function(module){
  var homeController = {};

  homeController.index = function(){
    $('#landing-page').fadeIn().siblings().hide();
  };

  homeController.npsPortion = function(cxt, next) {
    parksView.renderIndexPage();
    next();
  };

  module.homeController = homeController;

}(window));
