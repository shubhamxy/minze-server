import request from 'supertest';
import server, { httpPromise } from './__mocks__/server';
import { expect } from 'chai';

describe('Test the playground ', () => {
  afterAll(async done => {
    // Closing the connections to allow Jest to exit successfully.
    const http = await httpPromise;
    http.close();
    done();
  });

  test('GET /graphql => 404', async done => {
    const response = await request(server.express)
      .get('/graphql')
      // .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404);
    // console.log(response);
    done();
  });

  test('GET /playground => 200', async done => {
    const response = await request(server.express)
      .get('/playground')
      // .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html')
      .expect(200);
    // console.log(response);
    done();
  });

  test('POST /graphql => 200', async done => {
    const query = {
      query: `
        query {
           me{
               id
            }
          }
      `,
      expected: {
        data: null,
        errors: [{ message: 'Not Authorised!' }]
      }
    };
    const response = await request(server.express)
      .post('/graphql')
      .send({ query: `${query.query}` })
      // .set('Accept', 'application/json')
      // .expect('Content-Type', 'text/html')
      .expect(200);
    // console.log(response.body.errors);
    expect(response.body.data).to.deep.equals(query.expected.data);
    for (let i = 0; i < response.body.errors.length; i++)
      expect(response.body.errors[i].message).to.deep.equals(query.expected.errors[i].message);
    done();
  });
});
