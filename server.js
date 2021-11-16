const express = require('express');
const sequelize = require("./config/connection")
const routes = require("./controllers")
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
app.use(express.static("public"));
app.use(compression());

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
    });
});