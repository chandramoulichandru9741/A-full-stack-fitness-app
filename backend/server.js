require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workouts')

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/workouts", workoutRouter);

//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(() => {})
.catch((error) => {
    console.log(error);
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT);
});