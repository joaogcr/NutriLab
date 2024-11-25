var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

// var indexController = require("../controllers/indexController");

// router.get("/ultimas/:idUsuario", function (req, res) {
//     indexController.buscarUltimasMedidas(req, res);
//     console.log(req.params.idUsuario, "fk")
// });

// router.get("/tempo-real/:idUsuario", function (req, res) {
//     indexController.buscarMedidasEmTempoReal(req, res);
// });

module.exports = router;