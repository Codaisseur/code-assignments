'use strict';

const authentication = require('feathers-authentication');

const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function() {
  const app = this;

  let config = app.get('auth');

  config.github.strategy = GithubStrategy;
  config.google.strategy = GoogleStrategy;

  app.set('auth', config);
  app.configure(authentication(config));
};
