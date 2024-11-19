var database = require("../database/config");

console.log("to aqui porra")
function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
                        peso, 
                        DATE_FORMAT(dtPeso,'%d/%m/%Y') as dtPeso
                        FROM peso
                        WHERE fkUsuario = ${idUsuario}
                        ORDER BY idPeso DESC LIMIT ${limite_linhas}
                        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT 
                        peso, 
                        DATE_FORMAT(dtPeso,'%Y:%M:%D') as dtPeso
                        FROM peso
                        WHERE fkUsuario = ${idUsuario} 
                        ORDER BY idPeso DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}