var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

router.get("/dadoskpi1/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi1(req, res);
});

router.get("/dadoskpi2/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi2(req, res);
});

router.get("/dadoskpi3/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi3(req, res);
});

router.get("/dadoskpi4/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi4(req, res);
});

router.get("/dadoskpi5/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi5(req, res);
});

router.get("/dadoskpi6/:idUsuario", function (req, res) {
    kpisController.buscarUltimasMedidasKpi6(req, res);
});

module.exports = router;