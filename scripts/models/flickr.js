(function(module) {

  var flickrData = {};

  var parkName = 'yosemite';

  flickrData.fetchData = function() {
    $.ajax({
      type: 'GET',
      url: '/flickr/?method=flickr.photos.search&format=json&tags=' + parkName,
      success: function(data){
        
      }
    });
  };

  module.flickrData = flickrData;
  flickrData.fetchData();


}(window));
