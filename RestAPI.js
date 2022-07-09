const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep users and companies
let users = [chtz,user1,yaniv,alex],companies = [Microsoft,eWave,Amazon,eBay,YouTube];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
    res.json(users)
});

app.post('/api/companies', (req, res) => {
    res.json(companies)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));