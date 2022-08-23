const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// save data for JSON
let users = ['Chen','Linus','Yaniv','Yossi','ABC'];
let companies = ['Microsoft','eWave','Amazon','eBay','YouTube','Netflix','Spotify','abc'];

app.get('/', (req, res) => {
    res.send({message: `Hello World, from Express server ver. 1.0, listening on port ${port}!`});
});

//Return JSON for users
app.get('/api/users', (req, res) => {
    res.json(users)
});

//Return JSON for companies
app.get('/api/companies', (req, res) => {
    res.json(companies)
});

// add new user to json array
router.post('/api/addusers/:user', (req, res) => {
    users.push(req.params.user)
    res.json(users)
});


// add new company to json array
router.post('/api/addcompanies/:company', (req, res) => {
    companies.push(req.params.company)
    res.json(companies)
});

// delete last user from json array
router.delete('/api/delete/users', (req, res) => {
    users.pop()
    res.json(users)
});

// delete last company from json array
router.delete('/api/delete/companies', (req, res) => {
    companies.pop()
    res.json(companies)
});
// add router in the Express app.
app.use("/", router);

let server=app.listen(port, () => console.log(`Server is listening on port ${port}!`));

module.exports = server;
