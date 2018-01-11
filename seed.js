// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// }) 


const db = require('./models');

const donutShops = [
    {
        Resturant: 'Voodoo Donuts', 
        Address:'1520 E Colfax Ave, Denver, CO 80218',
        Website: 'voodoodoughnut.com'
    },
    {
        Resturant: 'HotBox Roasters',
        Address: '3460 Larimer St, Denver, CO 80205',
        Website: 'hotboxroasters.com'
    },
    {
        Resturant: 'Habit Donuts',
        Address: '1553 Platte St #130, Denver, CO 80202',
        Website: 'habitdoughnuts.com'
    }
];

// clear db
db.Donut.remove({}, (err) => {
    if (err) console.log(err);
    console.log('Seed.js: cleared Donut collection');
    // seed db
    db.Donut.create(donutShops, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Seed.js: created seed Donut data');
            console.log(donutShops);
            process.exit(); 
        }
    });
});