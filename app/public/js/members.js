// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {
     $(".sidenav").sidenav();
     $("#sidenav-1").sidenav({ edge: "left" });

     $.get("/api/allRecipients").then((res) => {
          var result = recipients;
          // The <ul> that we will add <li> elements to:
          let myList = document.querySelector("ul.mylist");

          // Create an <li> element:
          for (let i = 0; i < result.Length; i++) {
               let li = document.createElement("li");

               // Give it the desired classes & attributes:
               li.classList.add("ui-menu-item");
               li.setAttribute("name", "menuitem");

               // Now create an <a> element:
               let a = document.createElement("a");

               // Give it the desired classes & attributes:
               a.classList.add("ui-all");

               a.innerText = result[i].name; //  <--- the recipient name from the result
               a.href = app.get("/gifts/:result[i].name");
               // li.setAttribute()

               // Now add the <a> to the <li>, and add the <li> to the <ul>
               li.appendChild(a);
               myList.appendChild(li);
          }
     });
});

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
