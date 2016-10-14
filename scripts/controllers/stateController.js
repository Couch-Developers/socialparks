(function(module){
  var stateController = {};

  stateController.index = function(){
    $('#state-page').fadeIn().siblings().hide();
  };

  stateController.emptyHtml = function(ctx, next) {
    $('#state-page').empty();
    next();
  };

  stateController.loadData = function(ctx, next) {
    var statesId = states.reduce(function(acc, curr, index) {
      if (index === 0) {
        return curr['id'];
      } else {
        acc = acc + ',' + curr['id'];
        return acc;
      }
    }, '');
    console.log(statesId);
    stateController.fetchData(statesId, stateController.populateHandlebars);
    next();
  };

  stateController.fetchData = function(statesId, nextFunction) {
    $.ajax({
      type: 'GET',
      url: '/nps/parks?fields=images&stateCode=' + statesId,
      success: function(data) {
        nextFunction(data);
      }
    });
  };

  // Handlebars template
  stateController.toHtml = function(obj) {
    var template = Handlebars.compile($('#state-template').html());
    return template(obj);
  };
// THIS IS STILL BROKEN ==> make this function spit out state-specific parks to the DOM
  stateController.populateHandlebars = function (obj) {
    var lastElem = states.length - 1;
    var stateName = states.reduce(function (acc, curr, index) {
      if (index === 0) {
        return ' ' + curr['title'];
      } else if (lastElem === index) {
        return acc = acc + ' and ' + curr['title'];
      } else {
        return acc = acc + ', ' + curr['title'];
      }
    }, '');
    $('#state-page').append('<h1>Parks in: ' + stateName + '</h1>');
    obj.data.forEach(function(park) {
      $('#state-page').append(stateController.toHtml(park));
    });
    parksView.navigateToPark();
  };

  module.stateController = stateController;

})(window);
