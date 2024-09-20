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

const orders = [
  {topping: 'cherry', quantity: 2},
  {topping: 'plain', quantity: 6},
  {topping: 'chocolate', quantity: 3}
]

router.get('/', function(req, res, next) {
  res.send("Placeholder");
});

// Create a POST for each month
// Create sql query to send to the database for each month
router.post("/Jan", function (req, res, next) {

  let query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'JAN' GROUP BY TOPPING";
  dbms(query,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/Feb", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'FEB' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Mar", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'MAR' GROUP BY TOPPING";
  dbms(query,  (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Apr", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'APR' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/May", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'MAY' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Jun", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'JUN' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Jul", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'JUL' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Aug", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'AUG' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Sep", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'SEP' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Oct", function (req, res, next) {

  var  query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'OCT' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Nov", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'NOV' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/Dec", function (req, res, next) {

  var query = "SELECT SUM(QUANTITY) AS QUANTITY, TOPPING FROM ORDERS WHERE MONTH = 'DEC' GROUP BY TOPPING";
  dbms(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
