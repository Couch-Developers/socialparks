(function(module) {

  var flickrData = {};

  var parkName = 'yosemite';

  flickrData.fetchData = function() {
    $.ajax({
      type: 'GET',
      url: '/flickr/?method=flickr.photos.search&format=json&tags=' + parkName,
      success: function(data){
        console.log(data);
      }
    });
  };

  module.flickrData = flickrData;

}(window));

flickrData.fetchData();
