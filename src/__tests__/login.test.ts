import server, { httpPromise } from "../index";
import request from "supertest";
import { expect } from "chai";
import { getAuthResponse, AuthResponse, firebaseApp } from "../__mocks__/firebase";

describe("Test Login Flow", () => {
  let authResponse: AuthResponse;
  beforeAll(async done => {
    authResponse = await getAuthResponse();
    done();
  });

  afterAll(async done => {
    // Closing the connections to allow Jest to exit successfully.
    // delete firebase and close its handles
    firebaseApp.delete();
    (await httpPromise).close(() => {
      done();
    });
  });

  test("should login with test user idToken", async done => {
    expect(authResponse.idToken).to.be.string;
    console.log({"Token": authResponse.idToken});
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
      .post("/graphql")
      .send({
        query: `${req.query}`
      })
      .expect('Content-Type', 'application/json')
      .expect(200);
    console.log(resp.body);
    expect(resp.body.data.login.token).to.string;
    done();
  });

  // test("Should query user info from database using Auth header", async done => {
  //   const query = {
  //     query: `{
  //       viewer {
  //         me{
  //           id,
  //           uid,
  //           user_type 
  //         }
  //       }
  //     }
  //     `
  //   };
  //   const resp = await request(server.express)
  //     .post("/graphql")
  //     .set("Authorization", "Bearer " + authToken) // Works.
  //     .send({
  //       query: `${query.query}`
  //     })
  //     // .set('Content-Type', 'application/json')
  //     // .expect('Content-Type', 'application/json')
  //     .expect(200);
  //   // console.log(resp.body.data);
  //   done();
  // });
});
