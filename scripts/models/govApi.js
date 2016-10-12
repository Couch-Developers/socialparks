(function(module) {

  var parksObj = {};

  parksObj.allParkNames = [];

  parksObj.parkNameJSON = function() {
    var parksNameArray = parksObj.allParkNames.map(function(obj) {
      return {name: obj.name, state: obj.states, code: obj.parkCode};
    });
    localStorage.setItem('parkNames', JSON.stringify(parksNameArray));
  };

  parksObj.fetchParkNames = function() {
      $.ajax({
      url: '/nps/parks?limit=525',
      success: function(data, message, xhr) {
        parksObj.allParkNames = data.data;
        }
      });
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
