(function(module){
  var stateController = {};

  stateController.index = function(){

    $('#state-page').fadeIn().siblings().hide();
  };

  module.stateController = stateController;

}(window));
