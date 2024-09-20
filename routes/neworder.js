
/*Author: Jayven Cachola*/
var express = require("express");
var router = express.Router();
var dbms = require("./dbms").dbquery;

// Have placeholder web page for now
router.get('/', function(req, res, next) {
  res.send("This is a new order");
});

router.post("/", function (req, res, next) {

    const orderID = Math.floor(Math.random() * 10000);
    // const month = new Date().toLocaleString('default', { month: 'short' }).toUpperCase();
    const month = "JAN";
    const lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const day = Math.floor(Math.random() * lastDayOfMonth) + 1;

    var query = `INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) 
                 VALUES (${orderID}, "${month}", ${day}, ${req.body.quantity}, "${req.body.topping}", "${req.body.notes}");`;

    dbms(query, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).json({ message: "Error inserting order into the database." });
        } else {
            // Send the success message and result together as a JSON object
            res.status(200).json({
                message: "Order placed successfully",
                result: result
            });
        }
    });
});

module.exports = router;