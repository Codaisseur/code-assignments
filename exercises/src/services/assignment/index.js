'use strict';

const service = require('feathers-mongoose');
const assignment = require('./assignment-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: assignment,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/assignments', service(options));

  // Get our initialize service to that we can bind hooks
  const assignmentService = app.service('/assignments');

  // Set up our before hooks
  assignmentService.before(hooks.before);

  // Set up our after hooks
  assignmentService.after(hooks.after);
};
