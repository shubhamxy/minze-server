import server, { httpPromise } from './__mocks__/server';
import request from 'supertest';
import { expect } from 'chai';
import { getAuthResponse, AuthResponse, firebaseApp } from './__mocks__/firebase';

describe('Test Login Flow', () => {
  let authResponse: AuthResponse;
  let authToken: string;
  let userId: string;
  beforeAll(async done => {
    authResponse = await getAuthResponse();
    done();
  });

  afterAll(async done => {
    // Closing the connections to allow Jest to exit successfully.
    const http = await httpPromise;
    // delete firebase and close its handles
    firebaseApp.delete();
    http.close();
    done();
  });

  test('should login with test user idToken', async done => {
    expect(authResponse.idToken).to.be.string;
    console.log({"idToken": authResponse.idToken});
    const query = {
      query: `
        mutation{
          login(idToken: \"${authResponse.idToken}\"){
            token,
            user{
                id
            }
          }
        }
      `
    };
    const resp = await request(server.express)
      .post('/graphql')
      .send({
        query: `${query.query}`
      })
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', 'application/json')
      .expect(200);
    // console.log(resp.body.data);
    expect(resp.body.data.login.token).to.string;
    expect(resp.body.data.login.user.id).to.string;
    authToken = resp.body.data.login.token;
    userId = resp.body.data.login.user.id;
    done();
  });

  test('Should query user info from database using Auth header', async done => {
    const query = {
      query: `{
        me{
          id,
          uid,
          user_type 
        }
      }
      `
    };
    const resp = await request(server.express)
      .post('/graphql')
      .set('Authorization', 'Bearer ' + authToken) // Works.
      .send({
        query: `${query.query}`
      })
      // .set('Content-Type', 'application/json')
      // .expect('Content-Type', 'application/json')
      .expect(200);
    // console.log(resp.body.data);
    done();
  });
});
