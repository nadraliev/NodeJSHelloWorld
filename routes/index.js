var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/results', function (req, res) {
    var str = "Высоко";
    for (var i = 0; i < parseInt(req.query.value); i++)
        str += " высоко";
    str += " молоко";
    res.send({"result": str});
});

module.exports = router;
