'use strict';

var _ = require('lodash');
var Paycheck = require('./paycheck.model');

// Get list of paychecks
exports.index = function(req, res) {
  Paycheck.find(function (err, paychecks) {
    if(err) { return handleError(res, err); }
    return res.json(200, paychecks);
  });
};

// Get a single paycheck
exports.show = function(req, res) {
  Paycheck.findById(req.params.id, function (err, paycheck) {
    if(err) { return handleError(res, err); }
    if(!paycheck) { return res.send(404); }
    return res.json(paycheck);
  });
};

// Creates a new paycheck in the DB.
exports.create = function(req, res) {
  Paycheck.create(req.body, function(err, paycheck) {
    if(err) { return handleError(res, err); }
    return res.json(201, paycheck);
  });
};

// Updates an existing paycheck in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Paycheck.findById(req.params.id, function (err, paycheck) {
    if (err) { return handleError(res, err); }
    if(!paycheck) { return res.send(404); }
    var updated = _.merge(paycheck, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, paycheck);
    });
  });
};

// Deletes a paycheck from the DB.
exports.destroy = function(req, res) {
  Paycheck.findById(req.params.id, function (err, paycheck) {
    if(err) { return handleError(res, err); }
    if(!paycheck) { return res.send(404); }
    paycheck.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}