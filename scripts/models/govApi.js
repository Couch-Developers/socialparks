(function(module) {

  var parksObj = {};

  //parksObj.allParks = [];
  parksObj.allParkNames = [];

  // parksObj.requestAllParkData = function(callback) {
  //   $.ajax({
  //     url: '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&limit=525',
  //     success: function(data) {
  //       parksObj.allParks = data;
  //       console.log(data);
  //       callback();
  //     }
  //   });
  // };

  parksObj.parkNameJSON = function() {
    var parksNameArray = parksObj.allParkNames.map(function(obj) {
      return {name: obj.name, state: obj.states};
    });
    localStorage.setItem('parkNames', JSON.stringify(parksNameArray));
  };

  parksObj.fetchParkNames = function() {
      $.ajax({
      url: '/nps/parks?limit=525',
      success: function(data, message, xhr) {
        parksObj.allParkNames = data.data;
        console.log(parksObj.allParkNames);
        }
      });
  };


  module.parksObj = parksObj;
})(window);
