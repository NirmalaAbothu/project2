// Make sure we wait to attach our handlers until the DOM is fully loaded.

// reference variable

$(document).ready(function () {
     let listEL = $(".collection");
     let divEL = $(".giftlist");
     const recipientsListEl = $("#recipientsList");

     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });

     displayRecipientsList();

     $("ul").on("click", ".name", function (event) {
          const currentRecipients_id = $(this).data("id");
          const currentRecipient_name = $(this).text();

          $("#recipName").text(currentRecipient_name);
          $("#recipName").data("recipient", currentRecipients_id);
          displayGiftList(currentRecipients_id);
          

     });

     function displayRecipientsList() {
          recipientsListEl.empty();
          $.get("/api/allRecipients").then((data) => {
               // displayRecipientsList(data)
               data.forEach((element) => {
                    let li = $("<li>");
                    li.addClass("name");
                    li.attr("data-id", element.id);
                    li.text(element.name);
          
                    let button = $("<button>");
                    button.addClass("close-button");
                    button.attr("data-id", element.id);
                    button.text("x");

                    recipientsListEl.append(li);
                    li.append(button);
               });
          });
     }

     // function to display Gifts

     function displayGiftList(recipient_id) {
          listEL.empty();
          const id = parseInt(recipient_id);
          $.get("/api/allGifts/" + id).then(function (response) {
               response.forEach((element) => {
                    let li = $("<li>");
                    li.addClass("gift");
                    li.attr("data-id", element.id);
                    li.text(element.gift);
                    let button = $("<button>").addClass("deleteGift");
                    let icon = $("<icon>")
                         .addClass("small material-icons removeGift")
                         .text("check");
                    button.append(icon);
                    li.append(button);

                    listEL.append(li);

               });
          });
     }
     $("#addlist").on("click", function (event) {
          event.preventDefault();

          const currentRecipient = $("#recipName");
          recipient_id = currentRecipient.data("recipient");

          const newGift = {
               gift: $("#listitem1").val().trim(),
               id_recipient: parseInt(recipient_id),
          };

          $.ajax({
               type: "POST",
               url: "/api/newGift",
               data: newGift,
          }).then((res) => {
               displayGiftList(recipient_id);
               $("#listitem1").val("");
          });
     });

     $("#newrecipient").on("click", function (event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();

          var newRecipient = $("#recipientname").val().trim();

          // Send the POST request.
          $.post("/api/newRecipient/" + newRecipient, function () {
               // Reload the page to get the updated list
               displayRecipientsList();
               $("#recipientname").val("");
          });
     });

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
