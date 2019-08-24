import server from '../server';
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
    const resp = await request(server)
      .post('/graphql')
      .send({
        query: `${req.query}`
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
    expect(resp.body.data.login.token).to.string;
    done();
  });
});
