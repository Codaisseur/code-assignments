'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('assignment service', function() {
  it('registered the assignments service', () => {
    assert.ok(app.service('assignments'));
  });
});
