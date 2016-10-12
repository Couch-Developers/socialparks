(function(module) {

  var parksObj = {};

  parksObj.parkNameJSON = function(array) {
    array = array.map(function(obj) {
      return {name: obj.name, states: obj.states, code: obj.parkCode};
    });
    localStorage.setItem('parkNames', JSON.stringify(array));
  };

  parksObj.fetchParkNames = function() {
    if(localStorage.parkNames) {
      var parksStateArray = JSON.parse(localStorage.getItem('parkNames'));
      parksView.populateParksFilter(parksStateArray);
      parksView.populateStateFilter(parksStateArray);
    } else {
      $.ajax({
      url: '/nps/parks?limit=525',
      success: function(data, message, xhr) {
        parksView.populateParksFilter(data.data);
        parksView.populateStateFilter(data.data);
        parksObj.parkNameJSON(data.data);
        }
      });
    }
  };

  //Handlebars template
  parksObj.toHtml = function(data) {
    var source = $('#gov-template').html();
    var template = Handlebars.compile(source);
    var html = template(data);
    return html;
  };

  module.parksObj = parksObj;
})(window);
