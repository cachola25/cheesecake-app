//Author: Jayven Cachola
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Function to handle the click event
function handleMonthClick(month, h3Button) {
  h3Button.textContent = month;
  const orderURL = `http://localhost:3000/orders/${month}`;
  
  $.ajax({
    type: "POST",
    url: orderURL,
    dataType: "json",
    success: function (response) {
      console.log(response);
      const orderList = $("#orders-list");
      orderList.empty();  // Clear existing items

      $.each(response, function (index, order) {
        const orderItem = $("<li>").text(
          `${order.QUANTITY} ${order.TOPPING} cheesecake(s)`
        );
        orderList.append(orderItem);
      });
    },
    error: function (response) {
      console.log("ERR:");
      console.log(response);
    }
  });
}

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
      months.forEach(month => {
        $(`#${month}`).on("click", function () {
          handleMonthClick(month, h3Button);
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
