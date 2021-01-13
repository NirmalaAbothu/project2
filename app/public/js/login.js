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
});
