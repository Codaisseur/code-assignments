'use strict';

const service = require('feathers-mongoose');
const course = require('./course-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: course,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/courses', service(options));

  // Get our initialize service to that we can bind hooks
  const courseService = app.service('/courses');

  // Set up our before hooks
  courseService.before(hooks.before);

  // Set up our after hooks
  courseService.after(hooks.after);
};
