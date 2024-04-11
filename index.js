const express = require("express"); // Import Express
const exphbs = require("express-handlebars"); // Import Express-handlebars

const app = express(); // Create the express module

// Specify default layout/ main template ie(main.handlebars)
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));

// Use handlebars as a template engine
app.set("view engine", "handlebars"); // Use handlebars as a template engine

// Render the homepage to the browser (Also set the title for that page)
app.get("/", (req, res) => {
  res.render("index", {
    title: "Sunny Side Sandcastle",
  });
});

// Render the homepage to the browser (Also set the title for that page)
app.get("/", (req, res) => {
  res.render("index", {
    title: "Sunny Side Sandcastle",
  });
});

// Rendering the admin.handlebars file (Serve as a template for other pages)
app.get("/adminpage", (req, res) => {
  res.render("admin", {
    title: "Admin Secret Page",
    // ADD OTHER ITEMS HERE FROM THE DATABASE. (products)
  });
});

// Set the folder for static files (css, jpg)
app.use(express.static("public"));
const PORT = process.env.PORT || 5000; // Initializing the port to be used
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Confirmation of server running succcessfully