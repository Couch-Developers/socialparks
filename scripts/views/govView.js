(function(module) {

  var parksView = {};

  parksView.populateFilters = function() {
    var parksNameArray = JSON.parse(localStorage.getItem('parkNames'));
    var statesArray = [];
    parksNameArray.forEach(function(obj) {
      statesArray.push(obj.state);
    });
    var myout = statesArray.reduce(function(prev, next) {
      console.log(statesArray);
      prev[next] = (prev[next] || 0) + 1;
      return prev;
    }, {});
    for (keys in myout) {
      this.keys = myout.keys;
      var optionTag = '<option value="' + keys + '">' + keys + ' ' + myout[keys] + '</option>';
      $('#state-filter').append(optionTag);
    }
  };

  module.parksView = parksView;
})(window);
