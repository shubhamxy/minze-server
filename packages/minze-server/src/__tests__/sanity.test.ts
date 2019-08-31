import request from 'supertest';
import server from '../server';
import {expect} from 'chai';

describe('Test the basic sanity queries ', () => {
  afterAll(async done => {
    done()
  });
  
  // test('GET / => 200', async done => {
  //   await request(server)
  //     .get('/')
  //     .expect('Content-Type', 'text/html; charset=utf-8')
  //     .expect(200);
  //   done();
  // });

  test('POST /graphql => 200', async done => {
    const req = {
      query: `
        query {
          topExperiences{
           id
          }
        }
      `,
      expected: {
        data: {
          topExperiences: []
        },
        errors: [{message: 'Not Authorised!'}]
      }
    };
    const response = await request(server)
      .post('/graphql')
      .send({query: `${req.query}`})
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
    expect(Object.keys(response.body.data)).to.deep.equals(Object.keys(req.expected.data));
    done();
  });

  test('POST Not authorized query => 200', async done => {
    const req = {
      query: `
        query {
          viewer{
           me{
             id
           }
         }
       }
      `,
      expected: {
        data: {
          viewer: null
        },
        errors: [{message: 'Not authorized'}]
      }
    };
    const response = await request(server)
      .post('/graphql')
      .send({query: `${req.query}`})
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);

    expect(Object.keys(response.body.data)).to.deep.equals(Object.keys(req.expected.data));
    for (let i = 0; i < response.body.errors.length; i++) {
      expect(response.body.errors[i].message).to.deep.equals(req.expected.errors[i].message);
    }
    done();
  });
});
