     // Snow animation and christmas countdown credit goes to the awesome person below!!!
     //_______________________________https://codepen.io/sashatran/pen/mOWLLB  ______________________________________ 

     //make snow
     snowDrop(150, randomInt(1035, 2000));
     snow(150, 150);

     function snow(num, speed) {
          if (num > 0) {
               setTimeout(function () {
                    $('#drop_' + randomInt(1, 250)).addClass('animate');
                    num--;
                    snow(num, speed);
               }, speed);
          }
     };

     function snowDrop(num, position) {
          if (num > 0) {
               var drop = '<div class="drop dropSnow" id="drop_' + num + '"></div>';

               $('body').append(drop);
               $('#drop_' + num).css('left', position);
               num--;
               snowDrop(num, randomInt(60, 2000));
          }
     };

     function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
     };

// __________________________________________________________________________________________________________

  // 
     // Snowglobe animation and christmas countdown credit goes to the awesome person below!!!
     //________________https://codepen.io/cooper5/pen/PoGGXGR ________________________ 
const countDownDate = new Date("Dec 25, 2020 12:00:00").getTime();
const x = setInterval(function () {
   let now = new Date().getTime();
   let distance = countDownDate - now;
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
   if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
   }
}, 1000);
// __________________________________________________