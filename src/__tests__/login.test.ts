import server, {httpPromise} from '../index';
import request from 'supertest';
import {expect} from 'chai';
import {getAuthResponse, AuthResponse, firebaseApp} from '../__mocks__/firebase';

describe('Test Login Flow', () => {
  let authResponse: AuthResponse;
  beforeAll(async done => {
    authResponse = await getAuthResponse();
    done();
  });

  afterAll(async done => {
    firebaseApp.delete();
    (await httpPromise).close(() => {
      done();
    });
  });

  test('should login with test user idToken', async done => {
    expect(authResponse.idToken).to.be.string;
    const req = {
      query: `
        mutation{
          login(idToken: \"${authResponse.idToken}\"){
            token
          }
        }
      `
    };
    const resp = await request(server.express)
      .post('/graphql')
      .send({
        query: `${req.query}`
      })
      .expect('Content-Type', 'application/json')
      .expect(200);
    expect(resp.body.data.login.token).to.string;
    done();
  });
});
