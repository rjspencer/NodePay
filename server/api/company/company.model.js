'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name: String,
  info: String,
  addresses: [{
    name:     String,
    primary:  Boolean,
    street1:  String,
    street2:  String,
    city:     String,
    state:    String,
    zipCode:  String
  }],
  phones: [{
    name:   String,
    primary:  Boolean,
    number: String
  }],
  active: Boolean
});

module.exports = mongoose.model('Company', CompanySchema);