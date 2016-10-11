
//Place or pull from localStorage
  // Projects.fetchAll = function() {
  //   var $getETag = function() {
  //     $.getJSON('/scripts/data/projectObjects.json').done(function(response, status, jqxhr){
  //       var eTag = (jqxhr.getResponseHeader('ETag'));
  //       return eTag;
  //     });
  //   };
  //   var $setLocalStorage = function () {
  //     $.getJSON('/scripts/data/projectObjects.json').done(function(response, status, jqxhr){
  //       localStorage.eTag = jqxhr.getResponseHeader('ETag');
  //       localStorage.projectObjects = response;
  //       Projects.loadAll(response);
  //       projectView.renderIndexPage();
  //     });
  //   };
  //   if (localStorage.projectObjects && $getETag() === localStorage.getItem('ETag')) {
  //     Projects.loadAll(JSON.parse(localStorage.getItem('projectObjects')));
  //     projectView.renderIndexPage();
  //   } else {
  //     $setLocalStorage();
  //   }
  // };

  var parksObj = {};

    parksObj.allParks = [];
    parksObj.allParkNames = [];

    parksObj.requestAllParkData = function(callback) {
      $.ajax({
        url: '/nps/parks?fields=addresses%2Ccontacts%2CentranceFees%2CentrancePasses%2Cimages%2CoperatingHours&limit=525',
        success: function(data) {
          parksObj.allParks = data;
          console.log(data);
          callback();
        }
      });
    };

    parksObj.requestAllParkNames = function(callback) {
      $.ajax({
        url: '/nps/parks?limit=525',
        success: function(data) {
          parksObj.allParkNames = data;
          console.log(data);
          localStorage.setItem('defaultParksData', JSON.stringify(parksObj.allParkNames));
        }
      });
    };
