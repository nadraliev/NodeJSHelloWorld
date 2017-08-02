var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("shit got")
});

router.post("/", function (req, res) {
    res.send("Shit posted")
});

module.exports = router;
