const mongoose = require("mongoose");

// Define the schema for the player_stats collection
const playerStats = new mongoose.Schema({
    rank: Number,
    firstName: String,
    lastName: String,
    nation: String,
    position: String,
    squad: String,
    age: Number,
    born: String,
    MP: Number,
    starts: Number,
    mins: Number,
    ninety: Number,
    goals: Number,
    asts: Number,
    gasts: Number,
    gpk: Number,
    pk: Number,
    link: String,
    flag: String,
});

// Create a Mongoose model for the player_stats collection
const playerModal = mongoose.model("player_stats", playerStats);

module.exports = playerModal;
