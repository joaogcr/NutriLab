var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 'Atividade Física' AS categoria,
                            COUNT(CASE WHEN atividade = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN atividade = 0 THEN 1 END) AS nao
                        FROM pesquisa
                        UNION ALL
                        SELECT 'Consciência Corporal' AS categoria,
                            COUNT(CASE WHEN consciencia = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN consciencia = 0 THEN 1 END) AS nao
                        FROM pesquisa
                        UNION ALL
                        SELECT 'Alimentação Saudável' AS categoria,
                            COUNT(CASE WHEN alimentacao = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN alimentacao = 0 THEN 1 END) AS nao
                        FROM pesquisa;
                        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT 'Atividade Física' AS categoria,
                            COUNT(CASE WHEN atividade = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN atividade = 0 THEN 1 END) AS nao
                        FROM pesquisa
                        UNION ALL
                        SELECT 'Consciência Corporal' AS categoria,
                            COUNT(CASE WHEN consciencia = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN consciencia = 0 THEN 1 END) AS nao
                        FROM pesquisa
                        UNION ALL
                        SELECT 'Alimentação Saudável' AS categoria,
                            COUNT(CASE WHEN alimentacao = 1 THEN 1 END) AS sim,
                            COUNT(CASE WHEN alimentacao = 0 THEN 1 END) AS nao
                        FROM pesquisa;
                        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}