(function(module){

  var compareForm = {};

  compareForm.submitForm = function(event) {
    event.preventDefault();
    var arr = [];
    $('form input:checked').each(function() {
      arr.push($(this).val());
    });
    console.log(arr);
  };

  $('form').on('submit', compareForm.submitForm);

  module.compareForm = compareForm;

})(window);
