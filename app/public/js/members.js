// Make sure we wait to attach our handlers until the DOM is fully loaded.

// reference variable
let listEL = $(".collection");
let divEL = $(".giftlist");

$(document).ready(function () {
     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });

     $.get("/api/allRecipients").then((res) => {
          var result = res;
          displayGiftList(result);
     });
});

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

// function to display Gifts

function displayGiftList() {
     const id = $(this).data - id;
     $.get("/api/allRecipients/" + id).then(function (response) {
          var gifts = response;
          for (let i = 0; i < gifts.Length; i++) {
               let li = $("<li>");

               li.text(result[i].gift);
               divEL.append(li);
          }
     });
}

//when user click on one of the recipient names in list ,displayGiftList function will be called
$(document).on("click", ".name", displayGiftList);

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
