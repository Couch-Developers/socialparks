(function(module){

var compareForm = {};

compareForm.submitForm = function(event) {
  event.preventDefault();
  var arr = []
  arr.push($('form input:checked').attr('value'));
  console.log(arr);
}

$('form').on('submit', compareForm.submitForm);

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


module.compareForm = compareForm;

})(window);
