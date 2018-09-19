import fetchMock from 'fetch-mock';
import request from 'request';
import get from '../client/service/fetch';

describe('get request', () => {
  test('should be able to get mock data', () => {
    fetchMock.get('/restaurants/1', [{ hasReservation: true }]);
    get('/restaurants/1')
      .then(data => expect(data.hasReservation).toBe(true));
  });
  test('should throw error at wrong url', async () => {
    fetchMock.get('/apple', { throws: 'Invalid URI /apple' });
    expect(await get('/apple')).toBe('Invalid URI /apple');
  });
  test('should be able to get a status code 200 from the server', (done) => {
    request('http://127.0.0.1:7878/restaurants/1', (err, res) => {
      if (err) { expect(err).toBe(); }
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  test('should be able to get id 1 with endpoint 1', (done) => {
    request('http://127.0.0.1:7878/restaurants/1', (err, res, body) => {
      if (err) { expect(err).toBe(); }
      expect(JSON.parse(body)[0].id).toBe(1);
      done();
    });
  });
  test('should be able to get id 2 with endpoint 2', (done) => {
    request('http://127.0.0.1:7878/restaurants/2', (err, res, body) => {
      if (err) { expect(err).toBe(); }
      expect(JSON.parse(body)[0].id).toBe(2);
      done();
    });
  });
  test('should be able to get a correct restaurant name', (done) => {
    request('http://127.0.0.1:7878/restaurants/1', (err, res, body) => {
      if (err) { expect(err).toBe(); }
      expect(JSON.parse(body)[0].name).toBe('Minhas Micro Brewery');
      done();
    });
  });
});
