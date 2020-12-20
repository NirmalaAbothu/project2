// Make sure we wait to attach our handlers until the DOM is fully loaded.

// reference variable


$(document).ready(function () {

     let listEL = $(".collection");
     let divEL = $(".giftlist");
     const recipientsListEl = $("#recipientsList");

     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });


     displayRecipientsList()


     $("ul").on("click", ".name", function (event) {
          
          // listEL.empty();

          
               const currentRecipients_id = $(this).data("id")
               const currentRecipient_name =  $(this).text()
          
          $('#recipName').text(currentRecipient_name);
          $('#recipName').data("recipient", currentRecipients_id);
          displayGiftList(currentRecipients_id)

     })


     function displayRecipientsList() {
          recipientsListEl.empty()
          $.get("/api/allRecipients").then(data => {
              
               // displayRecipientsList(data)
               data.forEach(element => {
                    
                    let li = $("<li>");
                    li.addClass("name");
                    li.attr("data-id", element.id);
                    li.text(element.name);
                    
     
                    recipientsListEl.append(li);
               });
          });


     }

     // function to display Gifts

     function displayGiftList(recipient_id) {
          listEL.empty();
          const  id = parseInt(recipient_id)
          $.get("/api/allGifts/" + id).then(function (response) {
               response.forEach(element => {

                    let li = $("<li>");
                    li.addClass("gift");
                    li.attr("data-id", element.id);
                    li.text(element.gift);
                    let button = $("<button>").addClass("deleteGift");
                    let icon = $("<icon>").addClass("small material-icons removeGift").text("check");
                    button.append(icon)
                    li.append(button)
                    

                    listEL.append(li);
               })

          })
     }
     $("#addlist").on("click", function (event) {
          event.preventDefault();

          const currentRecipient = $("#recipName");
          recipient_id = currentRecipient.data("recipient");
          



          const newGift = {
               gift: $("#listitem1").val().trim(),
               id_recipient: parseInt( recipient_id)
          }



          $.ajax({
               type: "POST",
               url: "/api/newGift",
               data: newGift
          }).then(res => {

               displayGiftList( recipient_id);
               $("#listitem1").val("");
          })
     })

     $("#newrecipient").on("click", function(event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          
        

          var newRecipient = $("#recipientname").val().trim();
          
          // Send the POST request.
          $.post("/api/newRecipient/" + newRecipient, function () {
               // Reload the page to get the updated list
               displayRecipientsList()
               $("#recipientname").val("")
          });
     });

     // function

     // // function to display Gifts
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
     // $(".name").on("click", function(){
     //      displayGiftList();

     //      $(function () {
     //           // adding new recipient

     //           $("#newrecipient").on("submit", function (event) {
     //                // Make sure to preventDefault on a submit event.
     //                event.preventDefault();
     //                var result = $("#recipientname").val().trim();
     //                console.log(result);

     //                var newRecipient = {
     //                     name: $("#recipientname").val().trim(),
     //                };

     //                // Send the POST request.
     //                $.ajax("/api/recipients", {
     //                     type: "POST",
     //                     data: newRecipient,
     //                }).then(function () {
     //                     console.log("Added new recipient");
     //                     // Reload the page to get the updated list
     //                     location.reload();
     //                });
     //           });

     //           //adding new list to the recipient

     //           $("#addlist").on("submit", function (event) {
     //                // Make sure to preventDefault on a submit event.
     //                event.preventDefault();
     //                var result = $("#listitem1").val().trim();
     //                console.log(result);

     //                var newGift = {
     //                     gift: $("#listitem1").val().trim(),
     //                };

     //                // Send the POST request.
     //                $.ajax("/api/gifts", {
     //                     type: "POST",
     //                     data: newGift,
     //                }).then(function () {
     //                     console.log("Added new gift");
     //                     // Reload the page to get the updated list
     //                     location.reload();
     //                });
     //           });
     //      });
     // });
});

