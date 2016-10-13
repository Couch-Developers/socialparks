(function(module){

var compareForm = {};

compareForm.submitForm = function(event) {
  event.preventDefault();
  var arr = []

  $('form input:checked').each(function() {
    arr.push($(this).val());
  });
  console.log(arr);
  arr.forEach(function(el) {
    $('tr[data-compare]').hide();
    $('tr[data-compare=' + el + ']').show();
  });
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
