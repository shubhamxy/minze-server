import server, { httpPromise } from "../index";
import request from "supertest";
import { expect } from "chai";
import { getAuthResponse, AuthResponse, firebaseApp } from "../__mocks__/firebase";

describe("Test signup flow", () => {
  let authResponse: AuthResponse;
  let authToken: string;

  beforeAll(async done => {
    // make sure we explicitly delete user from db after the test
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

  test("It should login with test user idToken", async done => {
    expect(authResponse.idToken).to.be.string;
    const req = {
      query: `
        mutation{
          signup(idToken: \"${authResponse.idToken}\"){
            token,
            user{
                id
            }
          }
        }
      `,
      expected: {
        data: null,
        errors: [
          {
            message: "A unique constraint would be violated on User. Details: Field name = uid"
          }
        ]
      }
    };
    const response = await request(server.express)
      .post("/graphql")
      .send({
        query: `${req.query}`
      })
      .expect(200);
    //TODO: since signup with phone requires captcha verify unable to test signup
    for (let i = 0; i < response.body.errors.length; i++) {
      expect(response.body.errors[i].message).to.deep.equals(req.expected.errors[i].message);
    }
    done();
  });

  // test("It should delete the test user", async done => {
  //   const req = {
  //     query: `
  //         mutation{
  //          deleteuser{
  //              id
  //           }
  //         }
  //     `
  //   };
  //   const resp = await request(server.express)
  //     .post("/graphql")
  //     .set("Authorization", "Bearer " + authToken) // Works.
  //     .send({
  //       query: `${req.query}`
  //     })
  //     .expect(200);
  //   console.log(resp.body);
  //   // expect(resp.body.data.deleteuser.id).to.string;
  //   done();
  // });
});
