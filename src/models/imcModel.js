var database = require("../database/config");

function buscarUltimasMedidas2(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
                        imc, 
                        DATE_FORMAT(dtImc,'%d/%m/%Y') as dtImc
                        FROM imc
                        WHERE fkUsuario = ${idUsuario}
                        ORDER BY idImc DESC LIMIT ${limite_linhas}
                        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal2(idUsuario) {

    var instrucaoSql = `SELECT 
                        imc, 
                        DATE_FORMAT(dtimc,'%Y:%M:%D') as dtImc
                        FROM imc
                        WHERE fkUsuario = ${idUsuario} 
                        ORDER BY idImc DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2
}