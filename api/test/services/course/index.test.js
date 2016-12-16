'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('course service', function() {
  it('registered the courses service', () => {
    assert.ok(app.service('courses'));
  });
});
