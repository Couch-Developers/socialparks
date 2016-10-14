(function(module){
  var compareController = {};

  compareController.index = function(){
    $('#compare-page').fadeIn().siblings().hide();
    $('#compare-form').show();
    $('#formHide').hide();
  };

  module.compareController = compareController;

})(window);
