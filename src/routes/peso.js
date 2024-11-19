var express = require("express");
var router = express.Router();

var pesoController = require("../controllers/pesoController");

router.get("/ultimas/:idUsuario", function (req, res) {
    pesoController.buscarUltimasMedidas(req, res);
    console.log(req.params.idUsuario, "fk")
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    pesoController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;