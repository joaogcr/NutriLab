var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/calcularimc", function (req, res) {
    usuarioController.calcularimc(req, res);
});

router.post("/editar", function (req, res) {
    usuarioController.editar(req, res);
});

module.exports = router;