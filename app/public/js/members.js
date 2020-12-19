// Make sure we wait to attach our handlers until the DOM is fully loaded.

// reference variable


$(document).ready(function () {

     // let listEL = $(".collection");
     let divEL = $(".giftlist");
     const recipientsListEl = $("#recipientsList");

     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });


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

// function to display Gifts

function displayGiftList() {
     const id = $(this).data - id;
     $.get("/api/allRecipients/" + id).then(function (response) {
          var gifts = response;
          for (let i = 0; i < gifts.Length; i++) {

               let li = $("<li>");
               li.addClass("name");
               li.attr("data-id", result[i].id);
               li.text(result[i].name);
               console.log(li);

               recipientsListEl.append(li);
          }
     }

     // function

     // function to display Gifts
     function displayGiftList() {
          const id = $(this).data("id");
          $.get("/api/allRecipients/" + id).then(function (response) {
               var gifts = response;
               for (let i = 0; i < gifts.Length; i++) {
                    let li = $("<li>");
                    li.attr("data-id", result[i].id);
                    li.text(result[i].gift);
                    let icon = $("<icon>").addClass("small material-icons removeGift").text("check");
                    li.append(icon)
                    // <i class="material-icons">add</i>
                    divEL.append(li);
               }
          });
     }

     //when user click on one of the recipient names in list ,displayGiftList function will be called
     $(".name").on("click", displayGiftList);

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
});
