(function(module){
  var aboutController = {};

  aboutController.index = function(){
    console.log('aboutController.index called')
    $('#about-page').fadeIn().siblings().hide();
  };

  module.aboutController = aboutController;

}(window));
