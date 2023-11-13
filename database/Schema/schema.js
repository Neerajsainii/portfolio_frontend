const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
    name: String,
    email: String,
    Message: String
});

module.exports =  playlistSchema ;

const portfolio_dataSchema = new mongoose.Schema({
    yourname: String,
    yourmail: { type: String, unique: true },
    yourmesge: String
});

module.exports = portfolio_dataSchema