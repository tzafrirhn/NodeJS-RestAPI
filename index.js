const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// save data for JSON
let users = ['Chen','Linus','Yaniv','Yossi'];
let companies = ['Microsoft','eWave','Amazon','eBay','YouTube','Netflix'];

app.get('/', (req, res) => {
    res.send(`Hello World, from Express server ver. 1.0 <br> listening on port ${port}!`);
});

//Return JSON for users
app.get('/api/users', (req, res) => {
    res.json(users)
});

//Return JSON for companies
app.get('/api/companies', (req, res) => {
    res.json(companies)
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
