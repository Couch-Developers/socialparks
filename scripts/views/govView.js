(function(module) {

  var parksView = {};

  parksView.populateFilters = function() {
    var parksNameArray = JSON.parse(localStorage.getItem('parkNames'));
    var statesArray = [];
    parksNameArray.forEach(function(obj) {
      console.log(obj);
      statesArray.push(obj.states);
    });
  };

  module.parksView = parksView;
})(window);
