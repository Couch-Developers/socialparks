(function(module){
  var compareController = {};

  compareController.index = function(){
    $('#compare-page').fadeIn().siblings().hide();
    $('#compare-form').show();
  };

  module.compareController = compareController;

})(window);
