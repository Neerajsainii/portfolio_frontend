const express = require('express');
const app = express();
const mongoose = require("mongoose");
const env = require("../database/env");
// const playlistSchema = require("../database/Schema/schema");
const portfolio_dataSchema = require("../database/Schema/schema");
mongoose.connect(env)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Error occurred while connecting to the database: ', err);
    });

// const Playlist = new mongoose.model("Playlist", playlistSchema);
const Portfolio_data = new mongoose.model("Portfolio_data", portfolio_dataSchema);

// const createDoc = async () => {
//     try {
//         const playlistSchema2 = new Playlist({
//             name: "Jagannathdham",
//             email: "hari@gmail.com",
//             Message: "hari hari"
//         });
//         const result = await playlistSchema2.save();
//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }
// }
// createDoc();

module.exports = Portfolio_data;