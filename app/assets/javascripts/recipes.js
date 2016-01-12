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
    var id = input.id.replace( /recipe_directions_attributes_/g , "" );
    id = id.replace( /_image/g , "" );
    id = 1 + parseInt(id);
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#element'+ id)
        .attr('src', e.target.result);
        // .width(150)
        // .height(200);
        console.log(id);
    };
    reader.readAsDataURL(input.files[0]);
  }
}


var lastNumber = 1;

$(document).on('fields_added.nested_form_fields', function(event, params) {
  // function changeValOfLastRecipe() {
  //   var $lastInput = $('.form-control_number').last();
  //   // $lastInput.val(lastNumber);
  //   lastNumber++;
  // }

  $(function(){
      $('.ingredients table td img').each(function(i){
          $(this).attr('id','element' + (i+1));
      });
  });
  $(function(){
      $('.ingredients table td .form-control_number').each(function(i){
          $(this).attr('value',(i+1));
      });
  });

  // if (event.type === "fields_added") {
  //   changeValOfLastRecipe();
  // }
});

// $(document).on('fields_removed.nested_form_fields', function(event, params) {
//   console.log(event)
// })