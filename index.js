var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

// Where we will keep users and companies
let users = ['chtz','user1','yaniv','alex'],companies = ['Microsoft','eWave','Amazon','eBay','YouTube'];

app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
    res.send('Hello World, from Express server ver. 1.0');
});
