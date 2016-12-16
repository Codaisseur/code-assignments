'use strict';

const hooks = require('./hooks');
const request = require('request-promise');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return this.makeRequest('/');
  }

  get(id, params) {
    return this.makeRequest(`/${id}`);
  }

  create(data, params) {
    return this.makeRequest({
      uri: `/`,
      method: 'POST',
      body: data
    });
  }

  update(id, data, params) {
    return this.makeRequest({
      uri: `/${id}`,
      method: 'PUT',
      body: data
    });
  }

  patch(id, data, params) {
    return this.makeRequest({
      uri: `/${id}`,
      method: 'PATCH',
      body: data
    });
  }

  remove(id, params) {
    // Retrieve the original Todo first so we can return it
    // The API only sends an empty body
    return this.get(id, params).then(todo => this.makeRequest({
      method: 'DELETE',
      uri: `/${id}`
    }).then(() => todo));
  }

  makeRequest() {
    return request.defaults({
      baseUrl: `${Process.env.EXERCISES_API_URL}/courses`,
        json: true
    });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/courses', new Service());

  // Get our initialize service to that we can bind hooks
  const courseService = app.service('/courses');

  // Set up our before hooks
  courseService.before(hooks.before);

  // Set up our after hooks
  courseService.after(hooks.after);
};

module.exports.Service = Service;
