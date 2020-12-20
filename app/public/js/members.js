// Make sure we wait to attach our handlers until the DOM is fully loaded.

// reference variable

$(document).ready(function () {

     // Setting vars.
     let listEL = $(".collection");
     let divEL = $(".giftlist");
     const recipientsListEl = $("#recipientsList");

     // Setting up nav bar.
     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });


<<<<<<< HEAD
     $.get("/api/allRecipients").then(data => {
          console.log(data);
          data.forEach(element => {
               // console.log(element.id)
               let li = $("<li>");
               li.addClass("name");
               li.attr("data-id", element.id);
               li.text(element.name);
               console.log(li);

               recipientsListEl.append(li);
          });
     });

     $()

     $("ul").on("click", ".name", function(event) {
          console.log(event.target)
          const recipientData = {
               id: $(this).data("id"),
               name: $(this).text()
          }

          displayGiftList(recipientData)
          console.log(recipient)
          console.log(recipientName)
          
     })




     // {
     //      console.log(data)
     //      // }).then((res) => {
     //      //      var result = res;

     //      // displayRecipientsList(data);
     //      // for (let i = 0; i < data.Length; i++) {
     //      //      console.log();
     //      //      console.log();
     //      //      let li = $("<li>");
     //      //      li.addClass("name");
     //      //      li.attr("data-id", data[i].id);
     //      //      li.text(data[i].name);
     //      //      console.log(li);

     //      //      recipientsListEl.append(li);
     //      // }
     // }).then(response => {
     //      for (let i = 0; i < response.Length; i++) {
     //           console.log();
     //           console.log();
     //           let li = $("<li>");
     //           li.addClass("name");
     //           li.attr("data-id", response[i].id);
     //           li.text(response[i].name);
     //           console.log(li);

     //           recipientsListEl.append(li);
     //      }
     // })

     //f


     //function displayRecipientsList

     function displayRecipientsList(result) {
          for (let i = 0; i < result.Length; i++) {
               let li = $("<li>");
               li.addClass("name");
               li.attr("data-id", result[i].id_recipient);
               li.text(result[i].name);

               listEL.append(li);
          }
     }
=======
     // On page load display all the recipients for the current user.
     displayRecipientsList()



     //______________________________________REUSABLE FUNCTIONS_________________________________________________
     // Function for displaying all the recipients.
     function displayRecipientsList() {
          // Emptying out the current list
          recipientsListEl.empty()
>>>>>>> e050930dc8f3d3a8e2710b2ae56d0d81ab95db1f

          // Making ajax call expects an array of the recipients for the current logged in user. 
          $.get("/api/allRecipients").then(data => {

<<<<<<< HEAD
     function displayGiftList(data) {
          const {id, name} = data
          $("#recipName").text(name)
          // const id = $(this).data - id;
          $.get("/api/allRecipients/" + id).then(function (response) {
               var gifts = response;
               for (let i = 0; i < gifts.Length; i++) {
=======
               // For each element in the response...
               data.forEach(element => {
>>>>>>> e050930dc8f3d3a8e2710b2ae56d0d81ab95db1f

                    // Create an li and set its name and data-id attr
                    let li = $("<li>");
                    li.addClass("name");
                    li.attr("data-id", element.id);
                    li.text(element.name);

                    // Append the new li to the recipients list
                    recipientsListEl.append(li);
               });
          });


     }

     // function to display Gifts
<<<<<<< HEAD
     // function displayGiftList() {
     //                const id = $(this).data("id");
     //                $.get("/api/allRecipients/" + id).then(function (response) {
     //                     var gifts = response;
     //                     for (let i = 0; i < gifts.Length; i++) {
     //                          let li = $("<li>");
     //                          li.attr("data-id", result[i].id);
     //                          li.text(result[i].gift);
     //                          let icon = $("<icon>").addClass("small material-icons removeGift").text("check");
     //                          li.append(icon)
     //                          // <i class="material-icons">add</i>
     //                          divEL.append(li);
     //                     }
     //                });
     //           }

     //when user click on one of the recipient names in list ,displayGiftList function will be called
     $(".name").on("click", function(){
          displayGiftList();

          $(function () {
               // adding new recipient

               $("#newrecipient").on("submit", function (event) {
                    // Make sure to preventDefault on a submit event.
                    event.preventDefault();
                    var result = $("#recipientname").val().trim();
                    console.log(result);

                    var newRecipient = {
                         name: $("#recipientname").val().trim(),
                    };

                    // Send the POST request.
                    $.ajax("/api/recipients", {
                         type: "POST",
                         data: newRecipient,
                    }).then(function () {
                         console.log("Added new recipient");
                         // Reload the page to get the updated list
                         location.reload();
                    });
=======
     function displayGiftList(recipient_id) {
          // Empty out the current gift list
          listEL.empty();
          // making sure the id is a int
          const id = parseInt(recipient_id)
          // Making an ajax call for all the gifts for a given recipient expects an array of gifts.
          $.get("/api/allGifts/" + id).then(function (response) {

               // For each of the gifts...
               response.forEach(element => {

                    // create an li with gift name data-id and a button to delete them.
                    let li = $("<li>");
                    li.addClass("gift");
                    li.attr("data-id", element.id);
                    li.text(element.gift);
                    let button = $("<button>").addClass("deleteGift");
                    let icon = $("<icon>").addClass("small material-icons removeGift").text("check");

                    // Adding icon to the button then the button the li and finally li to the list
                    button.append(icon)
                    li.append(button)
                    listEL.append(li);
>>>>>>> e050930dc8f3d3a8e2710b2ae56d0d81ab95db1f
               });
          });
     }
     // ___________________________________________________________________________________________________________________




     //____________________________________ON CLICK FUNCTIONS__________________________________________________________________
     // In the side nave if a li with the class .name is clicked...
     $("ul").on("click", ".name", function (event) {

          // Capture this elements data-id and text field.
          const currentRecipients_id = $(this).data("id")
          const currentRecipient_name = $(this).text()

          // Using stored values for the recipients data to update the 
          // which recipients gifts will be displayed or modified.
          $('#recipName').text(currentRecipient_name);
          $('#recipName').data("recipient", currentRecipients_id);

          // After the current recipients data is set display all their gifts.
          displayGiftList(currentRecipients_id)
     });


     // When the button to add a new list item is clicked...
     $("#addlist").on("click", function (event) {
          // Prevent the default action
          event.preventDefault();

          // Storing the currents recipients name and id
          const currentRecipient = $("#recipName");
          const recipient_id = currentRecipient.data("recipient");

          // Constructing an obj to send to the db with the value of the input for the gift and recipients id.
          const newGift = {
               gift: $("#listitem1").val().trim(),
               id_recipient: parseInt(recipient_id)
          }

          // Making and ajax call to create the new gift.
          $.ajax({
               type: "POST",
               url: "/api/newGift",
               data: newGift
          }).then(res => {
               // After the call is completed display the gifts for the user with the updated gift
               displayGiftList(recipient_id);
               // then clear the input.
               $("#listitem1").val("");
          })
     })

     // When new recipients btn is clicked...
     $("#newrecipient").on("click", function (event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();

          // Store value of the input fiend
          var newRecipient = $("#recipientname").val().trim();

          // Send the POST request to create the new recipient
          $.post("/api/newRecipient/" + newRecipient, function () {
               // Call the display recipients function to get updated recipient.
               displayRecipientsList();
               // clear out the input field.
               $("#recipientname").val("");
          });
     });
     //__________________________________________________________________________________________________________________________

});