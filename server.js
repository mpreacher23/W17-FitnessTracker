const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require('path');


const PORT = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// var MONGODB_URI = process.env.MONGODB_URI || "monogodb://localhost/workout.js";
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: true
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://<mpreacher>:<snowman19>@ds047345.mlab.com:47345/heroku_584s2bjn", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});