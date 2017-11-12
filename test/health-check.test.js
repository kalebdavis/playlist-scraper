import chai from 'chai';
import request from 'supertest';
import httpStatus from 'http-status';

import app from '../index';

describe('API Health Check', () => {
  describe('GET /api/health-check', () => {
    it('should return OK', (done) => {
      request(app)
        .get('/api/health-check')
        .expect(httpStatus.OK)
        .then((result) => {
            chai.assert.equal(result.status, 200);
            done();
        }).catch(err => done(err));
    });
  });
});
