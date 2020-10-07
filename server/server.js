const express = require('express');
const app = express();

// connect mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://oge:oge@cluster0-ciwdg.mongodb.net/problems");

const restRouter = require("./routes/rest.js");
app.use('/api/v1', restRouter);

app.listen(8080, () => {
    console.log('App is now listening to port 8080');
});