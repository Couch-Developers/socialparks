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

module.compareForm = compareForm;

})(window);
