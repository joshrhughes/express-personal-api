// require express and other modules
var express = require('express'),
    app = express();
 var mongoose = require('mongoose');   

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

const personalData = {
  name: 'Josh Hughes',
  github_link: 'https://github.com/joshrhughes',
  github_profile_image: 'https://avatars0.githubusercontent.com/u/33578599?s=460&v=4',
  current_city: 'Denver',
  hobbies: ['Climbing', 'Reading', 'Coding', 'Hiking', 'Travel'],
};

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
// variables 
let counter = 3;

// Get api info
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

//get data about me
app.get('/api/profile', function api_profile(req, res){
  res.json(personalData);
});


//get data about donut shops
app.get('/api/donut', function api_donut(req, res) {
  db.Donut.find({}, function (err, shops) {
    if (err) {
      return console.log("ERROR" + err);
    } else {
      res.json(shops);
    }
  });
});

//get data about specific donut shops
app.get('/api/donut/:id', function api_donut_id(req, res) {

});

//create data about donut shops
app.post('/api/donut', function create_donut(req, res) {
  var donut = req.body;
  //console.log(req.body);
  var newShop = db.Donut({
    Resturant: donut.Resturant,
    Address: donut.Address,
    Website: donut.Website
  });
  newShop.save(function(err,newShop){
    if(err) {
      return handleError(err);
    }
    //console.log("saved", newShop.Resturant);
    res.json(newShop);
  });
});

//get data about me
app.put('/api/donut/:id', function edit_donut(req, res) {

});

//get data about me
app.delete('/api/donut/:id', function delete_donut(req, res) {
  res.json("test");
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
