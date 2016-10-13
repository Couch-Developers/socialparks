(function(module){
  var homeController = {};

  homeController.index = function(){
    $('#landing-page').fadeIn().siblings().hide();
  };

  homeController.npsPortion = function(cxt, next) {
    parksView.renderIndexPage();
    next();
  };


  homeController.resetFilters = function(cxt, next) {
    $('#park-filter').val('default');
    $('#state-filter').val('default');
    next();
  };

  module.homeController = homeController;

})(window);
