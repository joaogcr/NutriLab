var pesquisaModel = require("../models/pesquisaModel");

function registrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var atividade = req.body.atividadeServer;
    var alimentacao = req.body.alimentacaoServer;
    var consciencia = req.body.conscienciaServer;
    var id = req.body.idServer

    // Faça as validações dos valores
    if (atividade == '#') {
        res.status(400).send("Seu atividade está undefined!");
    } else if (alimentacao == '#') {
        res.status(400).send("Seu alimentacao está undefined!");
    } else if (consciencia == '#') {
        res.status(400).send("Sua consciencia está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pesquisaModel.registrar(atividade, alimentacao, consciencia, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    registrar
}