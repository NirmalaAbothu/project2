// Make sure we wait to attach our handlers until the DOM is fully loaded.
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
     });

     //adding new list to the recipient

     $("#addlist").on("submit", function (event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          var result = $("#listitem1").val().trim();
          console.log(result);

          var newGift = {
               gift: $("#listitem1").val().trim(),
          };

          // Send the POST request.
          $.ajax("/api/gifts", {
               type: "POST",
               data: newGift,
          }).then(function () {
               console.log("Added new gift");
               // Reload the page to get the updated list
               location.reload();
          });
     });
});
