(function(module) {

  var parksView = {};
  var completeData;

  parksView.populateStateFilter = function(array) {
    var statesArray = [];
    array.forEach(function(obj) {
      var str = obj.states.split(',');
      statesArray.push(str);
    });
    var concatArray = statesArray.reduce(function(acc, curr) {
      return acc.concat(curr);
    },[]);
    concatArray = concatArray.sort();
    var myout = concatArray.reduce(function(prev, next) {
      prev[next] = (prev[next] || 0) + 1;
      return prev;
    }, {});

    for (keys in myout) {
      this.keys = myout.keys;
      var optionTag = '<option value="' + keys + '">' + keys + ' ' + myout[keys] + '</option>';
      $('#state-filter').append(optionTag);
    }
  };

  parksView.populateParksFilter = function(array) {
    if ($('#park-filter option').length < 2) {
      array.forEach(function(obj) {
        var name = obj.name;
        var code = obj.code;
        var optionTag = '<option value="' + code + '">' + name + '</option>';
        $('#park-filter').append(optionTag);
      });
    }
  };

  parksView.handleParksFilter = function() {
    $('#park-filter').on('change', function() {
      if ($(this).val()) {
        var codeValue = $(this).val();
        $.ajax({
          url: '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&parkCode=' + codeValue,
          success: function(data) {
            completeData = data;
            $('#gov-data').append(parksObj.toHtml(completeData));
          }
        });

      }
    });
  };


  parksView.navigateFromParksFilter = function(ctx, next) {
    $('#park-filter').on('change', function() {
      var parkName = $('option[value=' + $(this).val() +']').text();
      page('/park/' + parkName.toLowerCase().replace(/\W+/g, '+'));
    });

  };

  parksView.showPark = function() {
    $('#gov-data').append(parksObj.toHtml(completeData));
  };

  parksView.renderIndexPage = function() {
    parksObj.fetchParkNames();
    parksView.handleParksFilter();


  };
  parksView.navigateFromParksFilter();

  module.parksView = parksView;

})(window);
