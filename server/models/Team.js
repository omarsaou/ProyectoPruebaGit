const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, enum: ['Portero', 'Defensa', 'Medio', 'Delantero'], required: true },
  skill: { type: Number, min: 1, max: 10, required: true } 
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  players: [playerSchema], 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Team', teamSchema);