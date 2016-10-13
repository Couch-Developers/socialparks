(function(module) {

  var parksView = {};

    parksView.designationFilter = function(array) {
    if($('#state-filter option').length < 2) {
    var desArray = [];
    array.forEach(function(obj) {
      var des = obj.designation;
      desArray.push(des);
    });
    var myout = desArray.reduce(function(prev, next) {
      prev[next] = (prev[next] || 0) + 1;
      return prev;
    }, {});
    for (keys in myout) {
      this.keys = myout.keys;
      var optionTag = '<option value="' + keys + '">' + keys + ' ' + myout[keys] + '</option>';
      $('#state-filter').append(optionTag);
    }
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
// This code is not necessary, but I'm not yet willing to delete it.
  // parksView.handleParksFilter = function(parkCode) {
  //   $('#park-filter').on('change', function() {
  //     if ($(this).val()) {
  //       parkCode = $(this).val();
  //     };
  //   });
  // };
// This has been moved to govApi
  // renderParks(ctx)
  // $.ajax({
  //   url: '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&parkCode=' + ctx.parkCode,
  //   success: function(data) {
  //     parksView.showPark(data.data[0]);
  //   }


  parksView.navigateFromParksFilter = function(ctx, next) {
    $('#park-filter').on('change', function() {
      var parkName = $('option[value=' + $(this).val() +']').text();
      page('/park/' + parkName.replace(/\W+/g, '+'));
    });
  };

  parksView.showPark = function(data) {
    $('#gov-data').append(parksObj.toHtml(data));
  };

  parksView.renderIndexPage = function() {
    parksObj.fetchParkNames();
  };

  parksView.navigateFromParksFilter();

  module.parksView = parksView;

})(window);
