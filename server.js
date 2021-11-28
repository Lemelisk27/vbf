const express = require('express');
const sequelize = require("./config/connection")
const routes = require("./controllers")
const compression = require("compression");
const cors = require("cors")

const app = express();
// app.use(cors())
app.use(cors({
    origin:["https://vetbestfriend.herokuapp.com"]
}))
const PORT = process.env.PORT || 3001;

const { User, Role, Client, Animal, Species, Breed, Clinic, Allergy, Allergyjoins, Inventory, Unit, Inventoryitems, Inventoryjoin, Apiuser, Appt} = require("./models")

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