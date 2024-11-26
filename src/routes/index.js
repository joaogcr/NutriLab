var express = require("express");
var router = express.Router();
var indexController = require("../controllers/indexController.js");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/ultimas/:idUsuario", function (req, res) {
    indexController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    indexController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;