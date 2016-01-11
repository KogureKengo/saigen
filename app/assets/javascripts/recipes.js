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
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#img_prev2')
        .attr('src', e.target.result)
        // .width(150)
        // .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function calc(input) {
  console.log("Hello world");
}

window.addEventListener("load", function () {

  var btn = document.querySelector(".recipe_button_test");
  i = 0;
  function printHello() {
    // var p = document.querySelector(".recipe_p");
    // if (i == 0){
    //   p.innerText = "クリックされた！";
    //   i=1;
    // }else{
    //   p.innerText = "クリックされなかった！";
    //   i=0;
    // }
    // console.log("Hello world");

    // $(".recipe_p2").show("slow");
    // $(".recipe_p2").append('');
  }
  // 関数内で定義された関数は、関数の中でしか呼び出せないという性質があるだけで、
  // 通常の関数同様に呼び出せる

  // recipes/index プルダウン


  btn.addEventListener("click", printHello);

  // または
  // btn.addEventListener("click", function() {
  //   console.log("Hello world");
  // });

});
// これを書かないとjsがすべて読み込まれない

// $(document).on('ready page:load', function() {
  // var lastNumber = 0;
  // console.log(11);
  // function changeValOfLastRecipe() {
  //   var $lastInput = $('.form-control_number').last();
  //   $lastInput.val(lastNumber + 1);
  //   lastNumber++;
  //   console.log(lastNumber);
  // }

//   $('#addBtn').on('click', function() {
//     changeValOfLastRecipe();
//   });
// });

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