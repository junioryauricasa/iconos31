/*Quieries CRUD*/

/* ********** READ ********** */
SELECT * FROM status;

SELECT * FROM movieseries;

SELECT COUNT(*) FROM movieseries;

SELECT title, premiere, country, genres, category, status FROM movieseries;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Serie';

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Serie'
	ORDER BY premiere;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Serie'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Serie'
	ORDER BY premiere DESC, genres;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Movie' AND country = 'USA'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Movie' AND country LIKE 'USA%'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Movie' AND country LIKE '%USA'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE category = 'Movie' AND country LIKE '%USA%'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE genres LIKE '%THRILLER%' OR genres LIKE '%sci-fi%'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE premiere IN ('2014', '2015')
	/*WHERE premiere = '2014' OR premiere = '2015'*/
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE NOT country = 'USA'
	ORDER BY premiere DESC;

SELECT title, premiere, country, genres, category
	FROM movieseries
	WHERE premiere BETWEEN '2007' AND '2013'
	ORDER BY premiere DESC;

SELECT title, premiere, rating, country, genres, category
	FROM movieseries
	WHERE rating BETWEEN 8.0 AND 8.9
	ORDER BY rating, premiere DESC;

/* ********** CREATE ********** */
INSERT INTO movieseries 
	(title, imdb_id, genres, premiere, status, category)
	VALUES
	('Batman: The Killing Joke', 'tt4853102', 'Animation, Action, Crime', '2016', 1, 'Movie');

SELECT * FROM movieseries
	WHERE imdb_id = 'tt4853102';

/* ********** UPDATE ********** */
UPDATE movieseries
	SET author = 'Sam Liu', actors = 'Kevin Conroy, Ray Wise, Mark Hamill', country = 'USA', rating = 0, poster = 'http://ia.media-imdb.com/images/M/MV5BMjQyMzgzNTYzNF5BMl5BanBnXkFtZTgwNjA5OTQ3ODE@._V1_UX182_CR0,0,182,268_AL_.jpg', plot = 'As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.'
	WHERE imdb_id = 'tt4853102';

/* ********** DELETE ********** */
DELETE FROM movieseries WHERE imdb_id = 'tt4853102';

/* ********** INTEGRIDAD REFERENCIAL ********** */
DELETE FROM status WHERE status_id = 1;

/*
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`mexflix31`.`movieseries`, CONSTRAINT `movieseries_ibfk_1` FOREIGN KEY (`status`) REFERENCES `status` (`status_id`) ON UPDATE CASCADE)
*/

UPDATE status SET status = 'Proximamente' WHERE status_id = 1;

UPDATE status SET status = 'Próximamente', status_id = 6 WHERE status_id = 1;

/* ********** CONSULTAS MÚLTIPLES ********** */
SELECT * FROM movieseries AS ms 
	INNER JOIN status AS s
	ON ms.status = s.status_id;

SELECT title, premiere, country, category, status 
	FROM movieseries;

SELECT ms.title, ms.premiere, ms.country, ms.category, s.status 
	FROM movieseries AS ms 
	INNER JOIN status AS s
	ON ms.status = s.status_id;

SELECT ms.title, ms.premiere, ms.country, ms.category, s.status 
	FROM movieseries AS ms 
	INNER JOIN status AS s
	ON ms.status = s.status_id
	ORDER BY ms.premiere DESC;

SELECT ms.premiere, ms.category, s.status, ms.title, ms.country 
	FROM movieseries AS ms 
	INNER JOIN status AS s
	ON ms.status = s.status_id
	WHERE ms.category = 'Serie'
	ORDER BY ms.premiere DESC;

/* ********** CONSULTAS FULLTEXT ********** */

SELECT * FROM movieseries
	WHERE MATCH(title, author, actors, genres)
	AGAINST('drama' IN BOOLEAN MODE);

SELECT title, author, actors, genres FROM movieseries
	WHERE MATCH(title, author, actors, genres)
	AGAINST('drama' IN BOOLEAN MODE);

SELECT title, author, actors, genres FROM movieseries
	WHERE MATCH(title, author, actors, genres)
	AGAINST('stallone' IN BOOLEAN MODE);

SELECT ms.title, ms.author, ms.actors, ms.genres, s.status
	FROM movieseries AS ms
	INNER JOIN status AS s
	ON ms.status = s.status_id
	WHERE MATCH(ms.title, ms.author, ms.actors, ms.genres)
	AGAINST('stallone' IN BOOLEAN MODE);


/* ********** SENTENCIA REPLACE ********** */
INSERT INTO status (status_id, status) VALUES (2, 'Estrenada');

UPDATE status 
	SET status_id = 2, status = 'Estrenada' 
	WHERE status_id = 2;

REPLACE INTO status (status_id, status) VALUES (1, 'Release');

REPLACE INTO status (status_id, status) VALUES (1, 'otro status');

REPLACE status SET status_id = 1, status = 'Otro status más';

REPLACE status SET status_id = 7, status = 'Otro status más';
