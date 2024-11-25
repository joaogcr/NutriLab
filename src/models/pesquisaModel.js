var database = require("../database/config")

function registrar(atividade, alimentacao, consciencia, id) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO pesquisa (consciencia, atividade, alimentacao, fkUsuario) VALUES (${consciencia}, ${atividade}, ${alimentacao}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};