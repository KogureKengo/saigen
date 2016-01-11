function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#img_prev')
        .attr('src', e.target.result)
        // .width(150)
        // .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function readURL2(input) {
  if (input.files && input.files[0]) {
    var id = input.id;
    var img = 'img_prev2';
    console.log(id);
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#' + img)
        .attr('src', e.target.result);
        // .width(150)
        // .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

var lastNumber = 1;

$(document).on('fields_added.nested_form_fields', function(event, params) {
  function changeValOfLastRecipe() {
    var $lastInput = $('.form-control_number').last();
    $lastInput.val(lastNumber);
    lastNumber++;
  }

  if (event.type === "fields_added") {
    changeValOfLastRecipe();
  }
});

// $(document).on('fields_added.nested_form_fields', function(event, params) {
//   console.log(event)
// })