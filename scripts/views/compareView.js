(function(module){

var compareForm = {};

compareForm.submitForm = function(event) {
  event.preventDefault();
  var arr = []
  arr.push($('form input').attr('checked'));
  console.log(arr);
}

$('form').on('submit', compareForm.submitForm);

module.compareForm = compareForm;

})(window);
