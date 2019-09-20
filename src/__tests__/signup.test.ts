import server, { httpPromise } from './__mocks__/server';
import request from 'supertest';
import { expect } from 'chai';
import { getAuthResponse, AuthResponse, firebaseApp } from './__mocks__/firebase';

describe('Test signup flow', () => {
  let authResponse: AuthResponse;
  let authToken: string;

  beforeAll(async done => {
    // make sure we explicitly delete user from db after the test
    authResponse = await getAuthResponse('test-signup@test.com', 'test123');
    done();
  });

  test('It should login with test user idToken', async done => {
    expect(authResponse.idToken).to.be.string;
    const query = {
      query: `
        mutation{
          signup(idToken: \"${authResponse.idToken}\"){
            token,
            user{
                id
            }
          }
        }
      `
    };
    const response = await request(server.express)
      .post('/graphql')
      .send({
        query: `${query.query}`
      })
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', 'application/json')
      .expect(200);
    console.log(JSON.stringify(response, null, 4));
    // expect(response.body.data.signup.token).to.string;
    // expect(response.body.data.signup.user.id).to.string;
    // authToken = response.body.data.signup.token;
    // console.warn(authToken);
    // console.warn(userId);
    // console.warn(response.body.data);
    done();
  });

  test('It should query user info from database using Auth header', async done => {
    console.log(authToken);
    if (authToken) {
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

      // expect(resp.body.data.id).to.string;

      console.warn(resp.body);
      done();
    } else {
      // throw Error('No authToken');
      done();
    }
  });

  test('It should delete the test user', async done => {
    const query = {
      query: `
          mutation{
           deleteuser{
               id
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
      .expect(200);
    console.warn(resp.body);
    // expect(resp.body.data.deleteuser.id).to.string;
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
});
