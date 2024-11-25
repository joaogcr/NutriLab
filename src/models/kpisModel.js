var database = require("../database/config");

function buscarUltimasMedidasKpi1(idUsuario) {

    var instrucaoSql = `SELECT ifnull(max(peso), 'N/A') AS maiorPeso FROM peso WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi1(idUsuario) {

    var instrucaoSql = `SELECT ifnull(max(peso), 'N/A') AS maiorPeso FROM peso WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasKpi2(idUsuario) {

    var instrucaoSql = `SELECT ifnull(min(peso), 'N/A') AS menorPeso FROM peso WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi2(idUsuario) {

    var instrucaoSql = `SELECT ifnull(min(peso), 'N/A') AS menorPeso FROM peso WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasKpi3(idUsuario) {

    var instrucaoSql = `
    SELECT
    (IFNULL((
                SELECT peso
                FROM peso
                WHERE fkUsuario = ${idUsuario}
                ORDER BY idPeso DESC
                LIMIT 1
            ), 'N/A')
        -
        IFNULL((
                SELECT peso
                FROM peso
                WHERE fkUsuario = ${idUsuario}
                ORDER BY idPeso DESC
                LIMIT 1 OFFSET 1
            ), 'N/A')) 
            AS diferencaPeso;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi3(idUsuario) {

    var instrucaoSql = `
    SELECT
    (IFNULL((
                SELECT peso
                FROM peso
                WHERE fkUsuario = ${idUsuario}
                ORDER BY idPeso DESC
                LIMIT 1
            ), 'N/A')
        -
        IFNULL((
                SELECT peso
                FROM peso
                WHERE fkUsuario = ${idUsuario}
                ORDER BY idPeso DESC
                LIMIT 1 OFFSET 1
            ), 'N/A')) 
            AS diferencaPeso;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasKpi4(idUsuario) {

    var instrucaoSql = `SELECT ifnull(TRUNCATE(max(imc), 2), 'N/A') AS maiorImc FROM imc WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi4(idUsuario) {

    var instrucaoSql = `SELECT ifnull(TRUNCATE(max(imc), 2), 'N/A') AS maiorImc FROM imc WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasKpi5(idUsuario) {

    var instrucaoSql = `SELECT ifnull(TRUNCATE(min(imc), 2), 'N/A') AS menorImc FROM imc WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi5(idUsuario) {

    var instrucaoSql = `SELECT ifnull(TRUNCATE(min(imc), 2), 'N/A') AS menorImc FROM imc WHERE fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasKpi6(idUsuario) {

    var instrucaoSql = `
    SELECT CASE
        WHEN imc IS NULL THEN 'N/A'
	    WHEN imc < 18.5 THEN 'Abaixo do Peso'
        WHEN imc BETWEEN 18.5 AND 24.9 THEN 'Peso Normal'
        WHEN imc BETWEEN 25 AND 29.9 THEN 'Sobrepeso'
        WHEN imc BETWEEN 30 AND 34.9 THEN 'Obesidade I'
        WHEN imc BETWEEN 35 AND 39.9 THEN 'Obesidade II'
        WHEN imc >= 40 THEN 'Obesidade III'
    ELSE 'N/A'
    END AS classificacaoImc
    FROM imc
    WHERE fkUsuario = ${idUsuario}
    ORDER BY idImc DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealKpi6(idUsuario) {

    var instrucaoSql = `
    SELECT CASE
    WHEN imc IS NULL THEN 'N/A'
	WHEN imc < 18.5 THEN 'Abaixo do Peso'
    WHEN imc BETWEEN 18.5 AND 24.9 THEN 'Peso Normal'
    WHEN imc BETWEEN 25 AND 29.9 THEN 'Sobrepeso'
    WHEN imc BETWEEN 30 AND 34.9 THEN 'Obesidade I'
    WHEN imc BETWEEN 35 AND 39.9 THEN 'Obesidade II'
    WHEN imc >= 40 THEN 'Obesidade III'
    ELSE 'N/A'
    END AS classificacaoImc
    FROM Imc
    WHERE fkUsuario = ${idUsuario}
    ORDER BY idImc DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasKpi1,
    buscarMedidasEmTempoRealKpi1,
    buscarUltimasMedidasKpi2,
    buscarMedidasEmTempoRealKpi2,
    buscarUltimasMedidasKpi3,
    buscarMedidasEmTempoRealKpi3,
    buscarUltimasMedidasKpi4,
    buscarMedidasEmTempoRealKpi4,
    buscarUltimasMedidasKpi5,
    buscarMedidasEmTempoRealKpi5,
    buscarUltimasMedidasKpi6,
    buscarMedidasEmTempoRealKpi6
}