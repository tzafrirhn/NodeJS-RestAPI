const request=require('supertest');
const app=require('../index.js');

beforeAll(done => {
    done()
  })
  
  afterAll(done => {
    // Closing the RestAPI server allows Jest to exit successfully.
    app.close();
    done()
  })

describe('GET /', () => {
    it('responds with message', (done) => {
      const response = request(app).get('/');
      response.expect(200, {message: 'Hello World, from Express server ver. 1.0, listening on port 3000!'}, done);
      console.log(response);
    });
  });

describe('GET /api/users', () => {
    it('responds with json', (done) => {
      const response = request(app).get('/api/users');
      response.expect(200, [ 'Chen', 'Linus', 'Yaniv', 'Yossi', 'ABC' ], done);
    });
  });

//Companies async

describe('companies endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(app).get('/api/companies');

		expect(response.statusCode).toBe(200);
		expect(response.body).toMatchObject(
		["Microsoft", "eWave", "Amazon", "eBay", "YouTube", "Netflix", "Spotify"])
	});
});

/*
describe("POST /api/newusers", () => {
  const newUser = {
    'name' : 'test123'
  }
  it("should add an item to users array", async () => {
    const response = await request(app).post("/api/addusers").send(newUser.name);

    //length=response.body.data.length;
    //const lastItem = response.body.data[length-1]
    expect(response.statusCode).toBe(201);
    expect(lastItem.item).toBe(newUser["item"]);
    expect(lastItem.completed).toBe(newUser["completed"]);
  });
});

describe("POST /api/newcompany", () => {
  const newCompany = {
    'name' : 'test123'
  }
  it("should add an item to companies array", async () => {
    const response = await request(app).post("/api/addcompanies").send(newCompany.name);

    //length=response.body.data.length;
    //const lastItem = response.body.data[length-1]
    expect(response.statusCode).toBe(201);
    expect(lastItem.item).toBe(newCompany["item"]);
    expect(lastItem.completed).toBe(newCompany["completed"]);
  });
});
*/