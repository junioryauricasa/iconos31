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