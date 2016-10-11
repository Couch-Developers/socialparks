(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('#about-page').fadeIn().siblings().hide();
  };

  module.aboutController = aboutController;

}(window));
