(function(module){
  var regionalController = {};

  regionalController.index = function(){
    
    $('#regional-page').fadeIn().siblings().hide();
  };

  module.regionalController = regionalController;

}(window));
