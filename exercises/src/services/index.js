'use strict';

const answers = require('./answers');

const assignment = require('./assignment');

const course = require('./course');

const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(course);
  app.configure(assignment);
  app.configure(answers);
};
