import request from "supertest";

describe("Test the playground ", () => {
  test("It should response the GET method", (done) => {
    request("http://localhost:3000")
      .get("/playground")
      .then((response: any) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

