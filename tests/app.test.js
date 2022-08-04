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
