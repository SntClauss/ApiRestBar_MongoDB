var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DevolutionSchema = Schema({
  product: { type: Schema.ObjectId, ref: 'Product'}, 
  turn:  { type: Schema.ObjectId, ref: 'turn'},        
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Devolution', DevolutionSchema)
