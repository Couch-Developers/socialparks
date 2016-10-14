(function(module) {

  var flickrData = {};

  var parkName = 'yosemite';

  flickrData.flickrArray = [];
  flickrData.picIndex = 0;


  flickrData.fetchData = function(parkName, nextFunction) {
    $.ajax({
      type: 'GET',
      url: '/flickr/?method=flickr.photos.search&format=json&tags=' + parkName + '+national+park',
      success: function(data){
        flickrData.flickrArray = data.photos.photo;
        nextFunction(flickrData.flickrArray);
        flickrData.buttonHandler();
      }
    });
  };

  // Handlebars template
  flickrData.toHtml = function(obj) {
    var template = Handlebars.compile($('#flickr-template').html());
    return template(obj);
  };

  flickrData.populateHandlebars = function (arr) {
    if (flickrData.flickrArray.length === 0) {
      $('#flickr').append('<img src="/images/flickr.png" alt="Flickr Logo">');
      $('#flickr-container button').hide();
    } else {
      $('#flickr').empty();
      $('#flickr').append(flickrData.toHtml(arr[flickrData.picIndex]));
      $('#flickr-container button').show();
    };
  };

  flickrData.buttonHandler = function() {
    $('button.flickr-next-media').on('click', function() {
      console.log('next-button clicked');
      if (flickrData.picIndex <= (flickrData.flickrArray.length - 1)) {
        flickrData.picIndex++;
        flickrData.populateHandlebars(flickrData.flickrArray);
      }
    });
    $('button.flickr-previous-media').on('click', function() {
      console.log('previous-button clicked');
      if (flickrData.picIndex > 0) {
        flickrData.picIndex--;
        flickrData.populateHandlebars(flickrData.flickrArray);
      }
    });
  };


  module.flickrData = flickrData;

})(window);
