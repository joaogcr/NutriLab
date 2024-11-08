var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.put("/editar/:id", function (req, res) {
    avisoController.editar(req, res);
});

module.exports = router;