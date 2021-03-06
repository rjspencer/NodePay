'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  info: String,
  addresses: [{
    name:     String,
    street1:  String,
    street2:  String,
    city:     String,
    state:    String,
    zipCode:  String
  }],
  phones: [{
    name:   String,
    number: String
  }],
  startDate:     Date,
  endDate:      Date,
  active:       Boolean,
  exemptions:   Number,
  filingStatus: String,
  companyId:    Schema.ObjectId,
});

module.exports = mongoose.model('Employee', EmployeeSchema);