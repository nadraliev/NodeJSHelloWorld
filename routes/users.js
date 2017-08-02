var express = require('express');
var router = express.Router();

var synaptic = require('synaptic')
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("shit")


});

router.post("/", function (req, res) {
    var myPerceptron = new Perceptron(2, 3, 1);
    var myTrainer = new Trainer(myPerceptron);
    myTrainer.XOR();

    var result = myPerceptron.activate([req.body.firstN, req.body.secondN]);

    res.send(result)
});

module.exports = router;

function Perceptron(input, hidden, output) {
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}


Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;
