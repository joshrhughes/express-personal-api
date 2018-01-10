// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
  
    message: "Welcome to my personal api! Here's the lowdown!",
    documentation_url: "https://github.com/joshrhughes/express-personal-api",
    base_url: "https://personal-api-hw.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "GET", path: "/api/donut", description: "Denver Donut Shops"},
      {method: "GET", path: "/api/donut/:id", description: "Info about a specific Donut Shop"},
      {method: "POST", path: "/api/donut", description: "Add Denver Donut Shops"},
      {method: "PUT", path: "/api/donut/:id", description: "Edit the info of a specific Donut Shop"},
      {method: "DELETE", path: "/api/donut/:id", description: "Delete a specific Donut Shop"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});


//Me adding stuff to test
