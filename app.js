const PORT = process.env.PORT || 4600;

const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
const publicDirectoryPath = path.join(__dirname, "./public");


app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {title:"Barsky Stanislav"});
    });

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})