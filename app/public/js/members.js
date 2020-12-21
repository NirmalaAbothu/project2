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


     // On page load display all the recipients for the current user.
     displayRecipientsList()


<<<<<<< HEAD
          $("#recipName").text(currentRecipient_name);
          $("#recipName").data("recipient", currentRecipients_id);
          displayGiftList(currentRecipients_id);
          

     });
=======
>>>>>>> develop

     //______________________________________REUSABLE FUNCTIONS_________________________________________________
     // Function for displaying all the recipients.
     function displayRecipientsList() {
          // Emptying out the current list
          recipientsListEl.empty()

          // Making ajax call expects an array of the recipients for the current logged in user. 
          $.get("/api/allRecipients").then(data => {

               // For each element in the response...
               data.forEach(element => {

                    // Create an li and set its name and data-id attr
                    let li = $("<li>");
                    li.addClass("name");
                    li.attr("data-id", element.id);
                    li.text(element.name);
          
                    let button = $("<button>");
                    button.addClass("close-button");
                    button.attr("data-id", element.id);
                    button.text("x");

                    // Append the new li to the recipients list
                    recipientsListEl.append(li);
                    li.append(button);
               });
          });


     }

     // function to display Gifts
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
<<<<<<< HEAD

     // Event listener and AJAX call to delete recipient.

     $(".close-button").on("click", function(event) {
          event.preventDefault();

          
          const id = $(this).data("id");
          console.log(id);

          $.ajax("/api/deleteRecipient/" + id, {
               type: "DELETE",
           }).then(
               function() {
                   console.log("Deleted recipient with ID" + id);
                   location.reload();
               }
           );
     });
});
=======
     //__________________________________________________________________________________________________________________________

});
>>>>>>> develop
