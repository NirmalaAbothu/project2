$(document).ready(() => {

    const registerBtn = $("#register-btn");
    const firstName = $("#userfirstname");
    const lastName = $("#userlastname");
    const email = $("#email");
    const passwordOne = $("#password1");
    const passwordTwo = $("#password2");
  
    registerBtn.on("click", function(event) {
      event.preventDefault();

      if (passwordOne.val().trim() !== passwordTwo.val().trim()) {

        alert("Passwords do not match");

      } else {

      const userInfo = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        email: email.val().trim(),
        password: passwordOne.val().trim()
      };

      console.log(userInfo);
  
      if (!userInfo.firstName || !userInfo.lastName || !userInfo.email || !userInfo.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password);
      firstName.val("");
      lastName.val("");
      email.val("");
      passwordOne.val("");
      passwordTwo.val("");
    }

    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstName, lastName, email, password) {

      $.post("/api/signup", {

        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      // Need to find a better way to handle the error
      console.log(err);
    }
  });

  