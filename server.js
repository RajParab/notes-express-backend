const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
    initialEntries();
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Express application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/notes.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


function initialEntries() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}