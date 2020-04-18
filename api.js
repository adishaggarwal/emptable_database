const { Client } = require("pg");
const client = new Client({
    user: "postgres",
    password: "adish",
    host: "localhost",
    port: 5432,
    database: 'userdb'
});
let express = require("express");
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
app.listen(3000);
app.use(bodyParser.json());
function getData(req, res) {
    client.connect().then(() => console.log("Successfully Connected"));
    client.query('select users.empid,users.firstname,users.middlename,users.lastname,users.email,users.phoneno,roles.role_name,users.address,customer.website from users,customer,roles where users.role=roles.role_key AND users.customer_id=customer.customer_id order by users.empid asc;', (err, result) => {
        res.status(200).json(result.rows);
    });
}
app.get("/fetchuserdata", getData);
app.delete("/deleterow/:id", function (req, res) {
    let id = req.params.id;
    client.query(`delete from users where empid=${id};`, (err, result) => {
        res.send();
    });
});
app.put("updateuser/:id", function (req, res) {
    let id = req.params.id;
    client.query(`update users set firstname=$1,middlename=$2,lastname=$3,email=$4,phoneno=$5,address=$6,role=$7,customer_id=$8
  where empid=${id};`, [value.firstname, value.middlename, value.lastname, value.email, value.phoneno, value.address, value.role_name, value.customer_id]);
    res.send();
});
app.get('/getroles', function (req, res) {
    client.query(`select role_name,role_key from roles`, (error, result) => {
        res.status(200).json(result.rows);
    });
});
app.get('/getwebsites', function (req, res) {
    client.query(`select customer_id,website from customer`, (error, result) => {
        res.status(200).json(result.rows);
    });
});
