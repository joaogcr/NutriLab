var express = require("express");
var router = express.Router();

var imcController = require("../controllers/imcController");

router.get("/ultimas/:idUsuario", function (req, res) {
    imcController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    imcController.buscarMedidasEmTempoReal2(req, res);
});

module.exports = router;