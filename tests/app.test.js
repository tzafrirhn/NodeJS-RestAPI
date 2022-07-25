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
      response.expect(200, {}, done);
    });
  });

describe('GET /api/users', () => {
    it('responds with json', (done) => {
      const response = request(app).get('/api/users');
      response.expect(200, [ 'Chen', 'Linus', 'Yaniv', 'Yossi', 'ABC' ], done);
    });
  });
  