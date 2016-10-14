(function(module) {

  var parksObj = {};

  parksObj.parkNameJSON = function(array) {

      parksObj.allParks = array.map(function(obj) {
      return {name: obj.name, states: obj.states, code: obj.parkCode, designation: obj.designation};
    });

    localStorage.setItem('parkNames', JSON.stringify(parksObj.allParks));
  };

  parksObj.fetchParkNames = function() {
    if(localStorage.parkNames) {

      parksObj.allParks = JSON.parse(localStorage.getItem('parkNames'));
      parksView.populateParksFilter(parksObj.allParks);
      // parksView.populateStateFilter(parksObj.allParks);

    } else {
      $.ajax({
        url: '/nps/parks?limit=525',
        success: function(data, message, xhr) {
          parksView.populateParksFilter(data.data);

          parksObj.parkNameJSON(data.data);
        }
      });
    }
  };

  parksObj.getPark = function(name) {
    var baseUrl = '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&parkCode=';
    $.ajax({
      url: baseUrl + parkController.nameToCode(name),
      success: function(data) {
        parksView.showPark(data.data[0]);
      }
    });
  };
  parksObj.counter = 0

  parksObj.getMultiParks = function(arr, callback) {
    parksObj.multiParks = [];
    var baseUrl = '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&parkCode=';
    arr.forEach(function(el){
      $.ajax({
        url: baseUrl + el,
        success: function(data) {
          parksObj.multiParks.push(data.data[0]);
          parksObj.counter += 1;
          if (parksObj.counter === arr.length) {
            callback(parksObj.multiParks);
          }
        }

      }
    );
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
