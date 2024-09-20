//Author: Jayven Cachola

$(function () {
  // Hide order details
  $(".testing-js").hide();
  $(".display-order").hide();

  // Handles order button click events
  orderButtonHandler = function (event) {
    // Check if notes contain vegan
    var notes = $("#notes").val();
    vegan = notes.toLowerCase();
    if (vegan.includes("vegan")) {
      alert("Warning!! Cheesecakes contain dairy.");
      return;
    }
    // Check if topping is selected and get order details
    var toppingVal = $("input[name=topping]:checked").val();
    if (toppingVal != undefined) {
      //Hide order form and show order details
      $(".hide-on-click").hide();
      $(".display-order").show();
      $("p#order-details.display-order").text(
        "You ordered " +
          $("#toppingnumber").val() +
          " " +
          toppingVal +
          " cheesecake(s)."
      );
      // Check if notes need to be added to the order details
      if (notes != "") {
        $("p#order-notes.display-order").text("Notes: " + notes);
      }
    } else {
      // Make sure user selects a flavor
      alert("Please select a flavor.");
    }
  };

  var option = "Jan";
  // Handles dropdown click events
  dropdownClickHandler = function (event) {
    option = $(this).text();
    $("#h3-button").text(option);

    //Update past order details to JSON object
    //Author: Jayven Cachola

    $(function () {
      // Hide order details
      $(".testing-js").hide();
      $(".display-order").hide();

      // Handles order button click events
      orderButtonHandler = function (event) {
        // Check if notes contain vegan
        var notes = $("#notes").val();
        vegan = notes.toLowerCase();
        if (vegan.includes("vegan")) {
          alert("Warning!! Cheesecakes contain dairy.");
          return;
        }
        // Check if topping is selected and get order details
        var toppingVal = $("input[name=topping]:checked").val();
        if (toppingVal != undefined) {
          //Hide order form and show order details
          $(".hide-on-click").hide();
          $(".display-order").show();
          $("p#order-details.display-order").text(
            "You ordered " +
              $("#toppingnumber").val() +
              " " +
              toppingVal +
              " cheesecake(s)."
          );
          // Check if notes need to be added to the order details
          if (notes != "") {
            $("p#order-notes.display-order").text("Notes: " + notes);
          }
        } else {
          // Make sure user selects a flavor
          alert("Please select a flavor.");
        }
      };

      // Handles dropdown click events
      // if a dropdown is clicked, the text of the dropdown is set to the text of the button
      // and POST request is sent to the server
      const h3Button = document.getElementById("h3-button");
      $("#Jan").on("click", function () {
        h3Button.textContent = "Jan";
        var orderURL = "http://localhost:3000/orders/" + "Jan";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
          error: function (response) {
            console.log("ERR:")
            console.log(response)
          }
        });
      });

      $("#Feb").on("click", function () {

        h3Button.textContent = "Feb";
        var orderURL = "http://localhost:3000/orders/" + "Feb";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Mar").on("click", function () {

        h3Button.textContent = "Mar";
        var orderURL = "http://localhost:3000/orders/" + "Mar";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Apr").on("click", function () {

        h3Button.textContent = "Apr";
        var orderURL = "http://localhost:3000/orders/" + "Apr";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#May").on("click", function () {

        h3Button.textContent = "May";
        var orderURL = "http://localhost:3000/orders/" + "May";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Jun").on("click", function () {

        h3utton.textContent = "Jun";
        var orderURL = "http://localhost:3000/orders/" + "Jun";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Jul").on("click", function () {

        h3Button.textContent = "Jul";
        var orderURL = "http://localhost:3000/orders/" + "Jul";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Aug").on("click", function () {

        h3Button.textContent = "Aug";
        var orderURL = "http://localhost:3000/orders/" + "Aug";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Sep").on("click", function () {

        h3Button.textContent = "Sep";
        var orderURL = "http://localhost:3000/orders/" + "Sep";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Oct").on("click", function () {

        h3Button.textContent = "Oct";
        var orderURL = "http://localhost:3000/orders/" + "Oct";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });

      $("#Nov").on("click", function () {
          
          h3Button.textContent = "Nov";
          var orderURL = "http://localhost:3000/orders/" + "Nov";
          $.ajax({
            type: "POST",
            url: orderURL,
            dataType: "json",
            // Update list if post is successful
            success: function (response) {
              console.log(response);
              var orderList = $("#orders-list");
              // Remove any existing list items
              orderList.empty();
              $.each(response, function (index, order) {
                var orderItem = $("<li>").text(
                  order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
                );
                orderList.append(orderItem);
              });
            },
          });
      });

      $("#Dec").on("click", function () {

        h3Button.textContent = "Dec";
        var orderURL = "http://localhost:3000/orders/" + "Dec";
        $.ajax({
          type: "POST",
          url: orderURL,
          dataType: "json",
          // Update list if post is successful
          success: function (response) {
            console.log(response);
            var orderList = $("#orders-list");
            // Remove any existing list items
            orderList.empty();
            $.each(response, function (index, order) {
              var orderItem = $("<li>").text(
                order.QUANTITY + " " + order.TOPPING + " cheesecake(s)"
              );
              orderList.append(orderItem);
            });
          },
        });
      });
      

      // Handles dropdown hover events
      dropdownHoverHandler = function (event) {
        $("#h3-button").text("Select Month");
      };

      // Handles dropdown leave events
      dropdownLeaveHandler = function (event) {
        $("#h3-button").text(option);
      };
      // Add event listener to order button and dropdown options
      $("#order-button").on("click", orderButtonHandler);
      //$("a.dropdown-option").on("click", dropdownClickHandler);
      $("#h3-button").on("mouseover", dropdownHoverHandler);
      $("#h3-button").on("mouseleave", dropdownLeaveHandler);
      $("#dropdown-content").on("mouseover", dropdownHoverHandler);
      $("#dropdown-content").on("mouseleave", dropdownLeaveHandler);
    });
  };

  // Handles dropdown hover events
  dropdownHoverHandler = function (event) {
    $("#h3-button").text("Select Month");
  };

  // Handles dropdown leave events
  dropdownLeaveHandler = function (event) {
    $("#h3-button").text(option);
  };
  // Add event listener to order button and dropdown options
  $("#order-button").on("click", orderButtonHandler);
  $("a.dropdown-option").on("click", dropdownClickHandler);
  $("#h3-button").on("mouseover", dropdownHoverHandler);
  $("#h3-button").on("mouseleave", dropdownLeaveHandler);
  $("#dropdown-content").on("mouseover", dropdownHoverHandler);
  $("#dropdown-content").on("mouseleave", dropdownLeaveHandler);
});
