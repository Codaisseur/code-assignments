'use strict';

// assignment-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  courseId: { type: Number, required: true },
  title: { type: String, required: true },
  instructions: { type: String, required: true },
  testFixture: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const assignmentModel = mongoose.model('assignment', assignmentSchema);

module.exports = assignmentModel;
