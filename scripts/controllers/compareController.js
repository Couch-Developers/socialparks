(function(module){
  var compareController = {};

  compareController.index = function(){
    $('#compare-page').fadeIn().siblings().hide();
  };

  module.compareController = compareController;

}(window));
