const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;
const template_path = path.join(__dirname, "../templates/views");
const staticPath = path.join(__dirname, '../');
const Portfolio_data = require("../database/database");
const { constrainedMemory } = require("process");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/home", (req, res) => {
    res.render("index");
});

app.get("*", (req, res) => {
    console.log("render");
    res.render("404");
});

app.post("/des", async (req, res) => {
    try {
        const ques = new Portfolio_data({
            yourname: req.body.name,
            yourmail: req.body.email,
            yourmesge: req.body.message
        });

        const question = await ques.save();
        console.log(question);
        res.render("index");
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
            // Duplicate key error for the 'email' field
            console.error("Duplicate email detected:", req.body.email);
            res.status(400).send("Duplicate email address. Please use a different email.");
        } else {
            // Other MongoDB errors
            console.error("MongoDB Save Error:", error);
            res.status(500).send("Internal Server Error");
        }
    }
});

app.listen(port, () => {
    console.log("port is successful" + "  http://localhost:8000");
});
