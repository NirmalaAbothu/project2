$(document).ready(function () {
     // Getting jquery references
     var loginForm = $("#login");
     var usernameInput = $("#username");
     var passwordInput = $("#password");
     var url;
     var userId;

     // Adding an event listener for when the form is submitted
     $(loginForm).on("submit", loginFormSubmit);
     function displayMessage(type, message) {
          msgDiv.textContent = message;
          msgDiv.setAttribute("class", type);
     }

     // A function
     function loginFormSubmit(event) {
          event.preventDefault();
          console.log("1");

          var userName = usernameInput.val().trim();
          var passWord = passwordInput.val().trim();

          if (userName === "") {
               displayMessage("error", "Email cannot be blank");
          } else if (passWord === "") {
               displayMessage("error", "Password cannot be blank");
          } else {
               url = window.location.search;
               if (
                    url.indexOf("?usernameInput=") !== "" &&
                    url.indexOf("?passwordInput=") != ""
               ) {
                    userName = url.split("=")[1];
                    passWord = url.split("=")[2];
                    var user = {};
                    user.usernameInput = userName;
                    user.passwordInput = passWord;

                    getUserData(user, "get");
               }
          }
     }

     function getUserData(user, type) {
          console.log("2");
          var queryUrl;
          switch (type) {
               case "get":
                    queryUrl = "/api/users/" + user;
                    break;

               default:
                    return;
          }
          $.get(queryUrl, function (data) {
               if (data) {
                    console.log(data);
               }
          });
     }
});
