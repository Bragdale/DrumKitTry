


var a = new Audio("sounds/tom-1.mp3");
    document.querySelector(".btnA").addEventListener("click", 
        function () { a.play();   }
    );
    
var s = new Audio("sounds/tom-2.mp3");
    document.querySelector(".btnS").addEventListener("click", 
        function () {  s.play();  }
    );

var x = new Audio("sounds/tom-3.mp3");
    document.querySelector(".btnX").addEventListener("click", 
        function () {  x.play();  }
    );

var m = new Audio("sounds/tom-4.mp3");
    document.querySelector(".btnM").addEventListener("click", 
        function () {  m.play();  }
    );

var space = new Audio("sounds/crash.mp3");
    document.querySelector(".space").addEventListener("click", 
        function () {  space.play();  }
    );

var l = new Audio("sounds/kick-bass.mp3");
    document.querySelector(".btnL").addEventListener("click", 
        function () {  l.play();  }
    );

var k = new Audio("sounds/snare.mp3");
    document.querySelector(".btnK").addEventListener("click", 
        function () {  k.play();  }
    );

var fail = new Audio("sounds/fail-buzzer-02.mp3");

document.onkeydown = teclado;
function teclado (clicado) {
    if (clicado.keyCode == 65) {
       a.play();  
    } else if (clicado.keyCode == 83) {
       s.play();
    } else if (clicado.keyCode == 88) {
       x.play();  
    } else if (clicado.keyCode == 77) {
       m.play();
    } else if (clicado.keyCode == 32) {
       space.play();
    } else if (clicado.keyCode == 76) {
        l.play();
    } else if (clicado.keyCode == 75) {
        k.play();
    } else { 
        fail.play();
    }


}