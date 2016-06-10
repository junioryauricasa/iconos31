/*
Comentario en SQL:

SQL NO distingue entre MÁYUSCULAS y minúsculas pero:
	Comandos y Palabras reservadas de SQL van en MÁYUSCULAS
	Nombres de Objetos y Datos van en minúsculas con snake_case
	Para strings usar ''
	Todas las sentencias terminan con ;

Tipos de Datos en MySQL
	http://mysql.conclase.net/curso/index.php?cap=005#
	http://dev.mysql.com/doc/refman/5.7/en/data-types.html
*/

DROP DATABASE IF EXISTS mexflix31;

CREATE DATABASE IF NOT EXISTS mexflix31;

USE mexflix31;

CREATE TABLE status(
	status_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	status VARCHAR(20) NOT NULL
);

CREATE TABLE movieseries(
	imdb_id CHAR(9) PRIMARY KEY,
	title VARCHAR(80) NOT NULL,
	plot TEXT,
	author VARCHAR(100) DEFAULT 'Pending',
	actors VARCHAR(100) DEFAULT 'Pending',
	country VARCHAR(30) DEFAULT 'Unknown',
	premiere YEAR(4) NOT NULL,
	poster VARCHAR(150) DEFAULT 'no-poster.jpg',
	trailer VARCHAR(150) DEFAULT 'no-trailer.jpg',
	rating DECIMAL(2,1) UNSIGNED,
	genres VARCHAR(50) NOT NULL,
	status INTEGER UNSIGNED NOT NULL,
	category ENUM('Movie', 'Serie') NOT NULL,
	FULLTEXT KEY search(title, author, actors, genres),
	FOREIGN KEY (status) REFERENCES status(status_id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
);

CREATE TABLE users(
	user VARCHAR(15) PRIMARY KEY,
	email VARCHAR(80) UNIQUE NOT NULL,
	name VARCHAR(100) NOT NULL,
	birthday DATE NOT NULL,
	pass CHAR(32) NOT NULL,
	role ENUM('Admin', 'User') NOT NULL
);