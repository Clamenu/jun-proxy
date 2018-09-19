import request from 'supertest';
import app from '../server';

describe('Server tests', () => {
  test('should respond status 200 to a get method', (done) => {
    request(app).get('/1/').then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  test('should return an object with db data', (done) => {
    request(app).get('/restaurants/1').then((res) => {
      expect(res.statusCode).toBe(200);
      expect(typeof res.body[0]).toBe('object');
      done();
    });
  });
  test('should return status code 404 when given an invalid id', (done) => {
    request(app).get('/101').then((res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
