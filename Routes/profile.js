const express = require('express');
const router = express.Router();

const personalData = {
    name: 'Josh Hughes',
    github_link: 'https://github.com/joshrhughes',
    github_profile_image: 'https://avatars0.githubusercontent.com/u/33578599?s=460&v=4',
    current_city: 'Denver',
    hobbies: ['Climbing', 'Reading', 'Coding', 'Hiking', 'Travel'],
};

router.route('/profile')
    .get((req, res) => {
        res.json(personalData);
    });

module.exports = router;