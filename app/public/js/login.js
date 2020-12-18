$(document).ready(() => {
     let loginButton = $("#login-btn");
     let emailInput = $("#username");
     let passwordInput = $("#password");

     loginButton.on("click", (event) => {
          event.preventDefault();

          const userInfo = {
               email: emailInput.val().trim(),
               password: passwordInput.val().trim()
          };

          console.log(emailInput.val());

          console.log(userInfo);

          if (!userInfo.email || !userInfo.password) {
               return;
          };

          userLogin(userInfo.email, userInfo.password);

          emailInput.val("");
          passwordInput.val("");
     })

     const userLogin = (email, password) => {
          $.post("/api/login", {
               email: email,
               password: password
          }).then(() => {
               window.location.replace("/members");
          }).catch((err) => {
               console.log(err);
          });
     };

     // 
     // Snow animation and christmas countdown credit goes to the awesome person below!!!
     //_______________________________https://codepen.io/sashatran/pen/mOWLLB  ______________________________________ 

     const myDate = new Date();
     const xmas = Date.parse("Dec 25, " + myDate.getFullYear())
     const today = Date.parse(myDate)

     const daysToChristmas = Math.round((xmas - today) / (1000 * 60 * 60 * 24))


     if (daysToChristmas == 0)
          $('#days').text("It's Christmas!! Merry Christmas!");

     if (daysToChristmas < 0)
          $('#days').text("Christmas was " + -1 * (daysToChristmas) + " days ago.");

     if (daysToChristmas > 0)
          $('#days').text(daysToChristmas + " days to Christmas!");

     //make snow
     snowDrop(150, randomInt(1035, 1280));
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
               var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

               $('body').append(drop);
               $('#drop_' + num).css('left', position);
               num--;
               snowDrop(num, randomInt(60, 1280));
          }
     };

     function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
     };
     // __________________________________________________________________________________________________________
});

// $(document).ready(function () {
//      // Getting jquery references
//      var loginForm = $("#login");
//      var usernameInput = $("#username");
//      var passwordInput = $("#password");
//      var url;
//      var userId;

//      // Adding an event listener for when the form is submitted
//      $(loginForm).on("submit", loginFormSubmit);
//      function displayMessage(type, message) {
//           msgDiv.textContent = message;
//           msgDiv.setAttribute("class", type);
//      }

//      // A function
//      function loginFormSubmit(event) {
//           event.preventDefault();
//           console.log("1");

//           var userName = usernameInput.val().trim();
//           var passWord = passwordInput.val().trim();

//           if (userName === "") {
//                displayMessage("error", "Email cannot be blank");
//           } else if (passWord === "") {
//                displayMessage("error", "Password cannot be blank");
//           } else {
//                url = window.location.search;
//                if (
//                     url.indexOf("?usernameInput=") !== "" &&
//                     url.indexOf("?passwordInput=") != ""
//                ) {
//                     userName = url.split("=")[1];
//                     passWord = url.split("=")[2];
//                     var user = {};
//                     user.usernameInput = userName;
//                     user.passwordInput = passWord;

//                     getUserData(user, "get");
//                }
//           }
//      }

//      function getUserData(user, type) {
//           console.log("2");
//           var queryUrl;
//           switch (type) {
//                case "get":
//                     queryUrl = "/api/users/" + user;
//                     break;

//                default:
//                     return;
//           }
//           $.get(queryUrl, function (data) {
//                if (data) {
//                     console.log(data);
//                }
//           });
//      }
// });


