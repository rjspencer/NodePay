/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Paycheck = require('./paycheck.model');

exports.register = function(socket) {
  Paycheck.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Paycheck.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('paycheck:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('paycheck:remove', doc);
}