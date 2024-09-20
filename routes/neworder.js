
/*Author: Jayven Cachola*/

/* NOTE: 
    The HW#5 specifications do not work, I am submitting 
    what I think would work for this specification
    I kept getting this error: 
    "Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
    I tried to fix it but I couldn't find a solution
    I also tried to use the mysql2 package but I couldn't get it to work
*/

var express = require("express");
var router = express.Router();
var dbms = require("./dbms").dbquery;

// Have placeholder web page for now
router.get('/', function(req, res, next) {
  res.send("This is a new order");
});

router.post("/", function (req, res, next) {

    var query = 'INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (154,"AUG", 08, "' + 
    req.body.quantity + '", "' + req.body.topping + '", "' + req.body.notes + '")';

    dbms(query, (err, result) => {

        if(err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send("Success");
            res.json(result);
        }
    });
});

module.exports = router;