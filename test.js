const request = require('request');
const test = require('tape');

let testPort = 3000

test('Test api router', (t) => {
  t.plan(6);


  request('http://127.0.0.1:' + testPort + '/api/test', (error, response, body) => {
    // No error
    t.false(error);
    // Successful response
    t.equal(response.statusCode, 200);
    // Assert content checks

    var jsonResponse = null
    try {
      jsonResponse = JSON.parse(body)
    }
    catch (e) { }

    t.notEqual(jsonResponse, null);
    t.equal(typeof jsonResponse === 'object', true);
    t.equal(jsonResponse.status, 0);
    t.equal(jsonResponse.result, true);
  });
})
