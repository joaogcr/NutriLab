var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.post("/registrar", function (req, res) {
    pesquisaController.registrar(req, res);
})
module.exports = router;