CREATE DATABASE webdataviz;
USE webdataviz;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
telefone CHAR(11),
email VARCHAR(45),
dtNasc DATE,
senha VARCHAR(45)
);

CREATE TABLE peso (
idPeso INT PRIMARY KEY AUTO_INCREMENT,
peso FLOAT,
dtPeso DATE,
fkUsuario INT,
CONSTRAINT fkUsuPeso FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

CREATE TABLE imc (
idImc INT PRIMARY KEY AUTO_INCREMENT,
imc FLOAT,
dtImc DATE,
fkUsuario INT,
CONSTRAINT fkUsuImc FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

CREATE TABLE pesquisa (
idPesquisa INT PRIMARY KEY AUTO_INCREMENT,
consciencia INT,
atividade INT,
alimentacao INT,
fkUsuario INT,
CONSTRAINT chkConsc CHECK (consciencia IN(0, 1)),
CONSTRAINT chkAtv CHECK (atividade IN(0, 1)),
CONSTRAINT chkDieta CHECK (alimentacao IN(0, 1)),
CONSTRAINT fkUsuPes FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

SELECT * FROM usuario;
SELECT * FROM imc;
SELECT * FROM peso;
SELECT * FROM pesquisa;

SELECT max(peso) AS maiorPeso FROM peso WHERE fkusuario = 3;
SELECT min(peso) AS menorPeso FROM peso WHERE fkusuario = 3;

SELECT
    (IFNULL((
		SELECT peso
		FROM peso
		WHERE fkUsuario = 1
		ORDER BY idPeso DESC
		LIMIT 1
		), 'N/A')
	-
	IFNULL((
		SELECT peso
		FROM peso
		WHERE fkUsuario = 1
		ORDER BY idPeso DESC
		LIMIT 1 OFFSET 1
		), 'N/A')) 
		AS diferencaPeso;
    
SELECT CASE
	WHEN imc < 18.5 THEN 'Abaixo do Peso'
    WHEN imc BETWEEN 18.5 AND 24.9 THEN 'Peso Normal'
    WHEN imc BETWEEN 25 AND 29.9 THEN 'Sobrepeso'
    WHEN imc BETWEEN 30 AND 34.9 THEN 'Obesidade I'
    WHEN imc BETWEEN 35 AND 39.9 THEN 'Obesidade II'
    WHEN imc >= 40 THEN 'Obesidade III'
    END AS classificacaoImc
    FROM Imc
    WHERE fkUsuario = 1
    ORDER BY idImc DESC LIMIT 1;
    
SELECT 
	(SELECT count(atividade) FROM pesquisa WHERE atividade = 1) AS sim_atividade, 
	(SELECT count(atividade) FROM pesquisa WHERE atividade = 0) AS não_atividade,
	(SELECT count(consciencia) FROM pesquisa WHERE consciencia = 1) AS sim_consciencia, 
	(SELECT count(consciencia) FROM pesquisa WHERE consciencia = 0) AS não_consciencia,
	(SELECT count(alimentacao) FROM pesquisa WHERE alimentacao = 1) AS sim_alimentacao, 
	(SELECT count(alimentacao) FROM pesquisa WHERE alimentacao = 0) AS não_alimentacao;
    
SELECT 'Atividade Física' AS categoria,
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

SELECT 
    TRUNCATE((COUNT(CASE WHEN consciencia = 1 THEN 1 END) * 100) / COUNT(consciencia), 0) AS proporcao
FROM pesquisa;

SELECT 
    TRUNCATE((COUNT(CASE WHEN atividade = 1 THEN 1 END) * 100) / COUNT(atividade), 0) AS proporcao
FROM pesquisa;

SELECT 
    TRUNCATE((COUNT(CASE WHEN alimentacao = 1 THEN 1 END) * 100) / COUNT(alimentacao), 0) AS proporcao
FROM pesquisa;

SELECT COUNT(fkUsuario) FROM pesquisa;