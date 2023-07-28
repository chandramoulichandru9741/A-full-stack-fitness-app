require('dotenv').config();
const express = require('express');

//express app
const app = express();

app.get("/", (req, res) => {
    res.json({mssg: "welcome to the app"});
});

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT);
});