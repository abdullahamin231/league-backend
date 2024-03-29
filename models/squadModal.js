const mongoose = require("mongoose");

// Define the schema for the player_stats collection
const squadStats = new mongoose.Schema({
    name: String,
    link: String,
    players_used: String,
    avg_age: String,
    possession: String,
    games: String,
    games_starts: String,
    minutes: String,
    minutes_90s: String,
    goals: String,
    assists: String,
    goals_assists: String,
    goals_pens: String,
    pens_made: String,
    pens_att:String,
    cards_yellow: String,
    cards_red: String,
});

// Create a Mongoose model for the squad_stats collection
const squadModal = mongoose.model("squad_stats", squadStats);

module.exports = squadModal;
