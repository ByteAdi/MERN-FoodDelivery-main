const express = require("express");
const router = express.Router();
const foodData = require('../Data/foodData');
const foodCategory = require('../Data/foodCategory');

router.post('/foodData', async (req, res) => {
    try {
        res.send([foodData, foodCategory])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})


module.exports = router;