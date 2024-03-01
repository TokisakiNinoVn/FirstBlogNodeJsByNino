const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded(
    {
        extended: true,
    }
)); //Middleware
app.use(express.json()); //Middleware
// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({
    extname: ".hbs",
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Application/Page
app.get("/", (request, response) => {
    response.render("home");
});

app.get("/news", (request, response) => {
    response.render("news");
});
app.post("/news", (request, response) => {
    console.log(">> All Query: " + JSON.stringify(request.query));
    console.log(">> q: " + JSON.stringify(request.query.q));
    response.render("search");
});

app.get("/search", (request, response) => {
    console.log(">> All Query: " + JSON.stringify(request.query));
    console.log(">> q: " + JSON.stringify(request.query.q));
    response.render("search");
});

app.post("/search", (request, response) => {
    console.log(">> All Query: " + JSON.stringify(request.body))
    response.send("");
});


app.listen(port, () => {
    console.log(`>> Ctrl + Click: http://localhost:${port}`)
});