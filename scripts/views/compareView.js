(function(module){

var compareForm = {};

  $('#toggleCompare').click(function(){
    $('#formHide').toggle();
  })

compareForm.submitForm = function(event) {
  event.preventDefault();
  var compareArr = [];
  var parkArr = [];

  $(':checkbox:checked').each(function() {
    parkArr.push($(this).val());
  });

  $('form input:checked').each(function() {
    compareArr.push($(this).val());
  });

  $('tr[data-compare]').hide();
  compareArr.forEach(function(el) {
    $('tr[data-compare=' + el + ']').show();
  });

  parksObj.getMultiParks(parkArr, compareForm.renderResults)

  page('/compare');
};


parksObj.CompareHtml = function(data) {
  var source = $('#compare-template').html();
  var template = Handlebars.compile(source);
  var html = template(data);
  return html;
};

compareForm.renderResults = function (arr) {

  var context = {park: arr};
  console.log('context', context);
  var newHtml =  parksObj.CompareHtml(context);
  console.log('newHtml', newHtml);
  $('#compare-results').append(newHtml);
}

$('form').on('submit', compareForm.submitForm);

module.compareForm = compareForm;

})(window);
