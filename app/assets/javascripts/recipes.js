window.addEventListener("load", function () {
  var btn = document.querySelector(".recipe_button");
  i = 0;
  function printHello() {
    var p = document.querySelector(".recipe_p");
    if (i == 0){
      p.innerText = "クリックされた！";
      i=1;
    }else{
      p.innerText = "クリックされなかった！";
      i=0;
    }
    console.log("Hello world");
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


