document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Coder", "Google Code-in 2019 Finalist", "Google Code to Learn 2019 🏆", "Google enthusiast", "Developer", `a ${Math.abs(new Date().getFullYear() - 2004 - ((new Date().getMonth() > 5 || (new Date().getMonth() === 5 && new Date().getDate() >= 20)) ? 0 : 1))} y/o`];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("bio").innerHTML = text.substring(0, i+1) +' <span id="blinking-cursor">|</span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 150);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });