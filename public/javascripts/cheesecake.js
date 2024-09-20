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

      if (response.length === 0) {
        const emptyMessage = $("<li>").text("No orders found.");
        orderList.append(emptyMessage);
      } else {
        $.each(response, function (index, order) {
          const orderItem = $("<li>").text(
            `${order.QUANTITY} ${order.TOPPING} cheesecake(s)`
          );
          orderList.append(orderItem);
        });
      }
    },
    error: function (response) {
      console.log("ERR:");
      console.log(response);
    }
  });
}

function sendOrder(orderData) {
  // Make the POST request to send order data
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/neworder",  // Adjust URL to match your route
    data: JSON.stringify(orderData),
    contentType: "application/json",
    success: function (response) {
      console.log("Order saved successfully:", response);
    },
    error: function (response) {
      console.error("Error saving order:", response);
      alert("There was an error placing your order.");
    }
  });
}
$(function () {
  // Hide order details initially
  $(".testing-js").hide();
  $(".display-order").hide();

  let selectedMonth = "Jan"; // Default month selection

  // Order button click handler
  function orderButtonHandler(event) {
    var notes = $("#notes").val().toLowerCase();
    if (notes.includes("vegan")) {
      alert("Warning!! Cheesecakes contain dairy.");
      return;
    }
    var toppingVal = $("input[name=topping]:checked").val();
    var quantityVal = $("#toppingnumber").val();

    if (toppingVal != undefined) {
      $(".hide-on-click").hide();
      $(".display-order").show();
      $("p#order-details.display-order").text(
        `You ordered ${$("#toppingnumber").val()} ${toppingVal} cheesecake(s).`
      );
      if (notes != "") {
        $("p#order-notes.display-order").text("Notes: " + notes);
      }

      var orderData = {
        quantity: quantityVal,
        topping: toppingVal,
        notes: notes
      };

      sendOrder(orderData);
    } else {
      alert("Please select a flavor.");
    }
  }

  // Dropdown click handler
  function dropdownClickHandler(event) {
    selectedMonth = $(this).text(); // Update selected month
    $("#h3-button").text(selectedMonth);
  }

  // Event handlers for hover and leave on the dropdown
  function dropdownHoverHandler(event) {
    $("#h3-button").text("Select Month");
  }

  function dropdownLeaveHandler(event) {
    $("#h3-button").text(selectedMonth);
  }

  // Attach event listener for month clicks
  const h3Button = document.getElementById("h3-button");
  months.forEach(month => {
    $(`#${month}`).on("click", function () {
      handleMonthClick(month, h3Button);
    });
  });

  // Add event listener to order button and dropdown options
  $("#order-button").on("click", orderButtonHandler);
  $("a.dropdown-option").on("click", dropdownClickHandler);
  $("#h3-button").on("mouseover", dropdownHoverHandler);
  $("#h3-button").on("mouseleave", dropdownLeaveHandler);
  $("#dropdown-content").on("mouseover", dropdownHoverHandler);
  $("#dropdown-content").on("mouseleave", dropdownLeaveHandler);

  handleMonthClick("Jan", h3Button);
});