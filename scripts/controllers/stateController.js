(function(module){
  var stateController = {};

  stateController.index = function(){

    $('#state-page').fadeIn().siblings().hide();
  };

  stateController.emptyHtml = function(ctx, next) {
    $('#state-page').empty();
    next();
  };

  stateController.fetchData = function(stateId, nextFunction) {
    $.ajax({
      type: 'GET',
      url: '/nps/parks?stateCode=' + stateId,
      success: function(data) {
        nextFunction(data);
      }
    });
  };

  stateController.loadData = function(ctx, next) {
    var id = states.map(function (data) {
      return data.id;
    });
    stateController.fetchData(id[0], stateController.populateHandlebars);
    next();
  };

  // Handlebars template
  stateController.toHtml = function(obj) {
    var template = Handlebars.compile($('#state-template').html());
    return template(obj);
  };

  stateController.populateHandlebars = function (obj) {
    console.log(obj, "obj passed into function");
    obj.data.forEach(function(park) {
      $('#state-page').append(stateController.toHtml(park));
    });
  };

  module.stateController = stateController;

})(window);
