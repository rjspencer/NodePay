'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaycheckSchema = new Schema({
  checkNumber: String,
  employeeId:  Schema.ObjectId,
  companyId:   Schema.ObjectId,
  userId:      Schema.ObjectId,
  period: { 
    start: Date, 
    end:   Date 
  },
  standardHours: { 
    hours:  Number, 
    rate:   Number, 
    pay:    Number 
  },
  overtimeHours: { 
    hours:  Number, 
    rate:   Number, 
    pay:    Number 
  },
  specialHours:  { 
    hours:  Number, 
    rate:   Number, 
    pay:    Number,
    note:   String 
  },
  salary:     Number, 
  commission: Number,
  bonus: { 
    pay:   Number, 
    note:  String 
  },
  incomeTaxes: { 
    federal:  Number, 
    state:    Number, 
    county:   Number, 
    city:     Number, 
    fica:     Number, 
    medicare: Number 
  },
  employerTaxes: { 
    fica:     Number, 
    medicare: Number 
  },
  totals: { 
    grossPay:     Number, 
    withholding:  Number, 
    netPay:       Number 
  },
  deleted: Boolean
});

module.exports = mongoose.model('Paycheck', PaycheckSchema);