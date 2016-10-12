(function(module) {

  var flickrData = {};

  var parkName = 'yosemite';

  flickrData.fetchData = function(parkName, nextFunction) {
    $.ajax({
      type: 'GET',
      url: '/flickr/?method=flickr.photos.search&format=json&tags=' + parkName + '+national+park',
      success: function(data){
        flickrData.flickrArray = data.photos.photo;
        nextFunction(flickrData.flickrArray);
      }
    });
  };

  // Handlebars template
  flickrData.toHtml = function(obj) {
    var template = Handlebars.compile($('#flickr-template').html());
    return template(obj);
  };

  flickrData.populateHandlebars = function (arr) {
    arr.forEach(function(obj) {
      $('#flickr').append(flickrData.toHtml(obj));
    });
  };

  module.flickrData = flickrData;

}(window));
