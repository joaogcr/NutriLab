create database webdataviz;

use webdataviz;

show tables;

create table usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
telefone CHAR(11),
email VARCHAR(45),
dtNasc DATE,
senha VARCHAR(45)
);

create table peso (
idPeso INT PRIMARY KEY AUTO_INCREMENT,
peso FLOAT,
dtPeso DATE,
fkUsuario INT,
CONSTRAINT fkUsuPeso FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

create table imc (
idImc INT PRIMARY KEY AUTO_INCREMENT,
imc FLOAT,
dtImc DATE,
fkUsuario INT,
CONSTRAINT fkUsuImc FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

select * from usuario;
select * from imc;
select * from peso;

SELECT id, nome, email as usuarioId FROM usuario WHERE email = 'joao.nribeiro@sptech.school' AND senha = '1010101010';