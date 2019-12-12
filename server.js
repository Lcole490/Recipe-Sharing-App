const express = require("express");


const app = express();
const port = process.env.PORT || 8080;

const handlebars = require("express-handlebars");
const routes = require("./controllers/recipes-controller.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);



    
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const server = app.listen(port, () => {
  console.log(`Running on ${server.address().address}${server.address().port}`);
});
