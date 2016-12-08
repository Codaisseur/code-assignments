'use strict';

const service = require('feathers-mongoose');
const answers = require('./answers-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: answers,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/answers', service(options));

  // Get our initialize service to that we can bind hooks
  const answersService = app.service('/answers');

  // Set up our before hooks
  answersService.before(hooks.before);

  // Set up our after hooks
  answersService.after(hooks.after);
};
