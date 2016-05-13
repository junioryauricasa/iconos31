(function (d, j) {
	'use strict';

	/*
	console.log(
		'JSON.stringify()',
		j.stringify({}),
		j.stringify(19),
		j.stringify(true),
		j.stringify('foo'),
		j.stringify([1, 'hola', false]),
		j.stringify({x: 5, y: 6}),
		j.stringify(null),
		//j.stringify(undefined),
		'JSON.parse()',
		j.parse('{}'),
		j.parse('19'),
		j.parse('true'),
		j.parse('"foo"'),
		j.parse('[1, "hola", false]'),
		j.parse('{"x": "5", "y": "6"}'),
		j.parse('null')
		//j.parse(undefined)
	);
	*/

	//var movieData = '{"title" : "Batman: The Killing Joke", "year" : "2016", "genres" : "Animation, Crime, Drama", "poster" : "http://ia.media-imdb.com/images/M/MV5BMjQyMzgzNTYzNF5BMl5BanBnXkFtZTgwNjA5OTQ3ODE@._V1_UX182_CR0,0,182,268_AL_.jpg" }',
	var movieData = `
		{
			"title" : "Batman: The Killing Joke",
			"year" : "2016",
			"genres" : "Animation, Crime, Drama",
			"poster" : "http://ia.media-imdb.com/images/M/MV5BMjQyMzgzNTYzNF5BMl5BanBnXkFtZTgwNjA5OTQ3ODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
		}
		`,
		moviesData = `
		{
			"movies" : 
			[
				{
					"title" : "Batman: The Killing Joke",
					"year" : "2016",
					"genres" : "Animation, Crime, Drama",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMjQyMzgzNTYzNF5BMl5BanBnXkFtZTgwNjA5OTQ3ODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					"title" : "Batman: The Dark Knight Returns, Part 2",
					"year" : "2013",
					"genres" : "Animation, Action, Crime",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMTQ1Mjk1NTY2NV5BMl5BanBnXkFtZTgwMTA2MDEwNzE@._V1_UY268_CR3,0,182,268_AL_.jpg"
				},
				{
					"title" : "Batman: The Dark Knight Returns, Part 1",
					"year" : "2012",
					"genres" : "Animation, Action, Crime",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
				},
				{
					"title" : "Batman: Year One",
					"year" : "2011",
					"genres" : "Animation, Action, Crime",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMjE2MzMxNDQ1NF5BMl5BanBnXkFtZTcwNzE1NTI5Ng@@._V1_UY268_CR7,0,182,268_AL_.jpg"
				},
				{
					"title" : "Batman: Under the Red Hood",
					"year" : "2010",
					"genres" : "Animation, Action, Crime",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMTMwNDEyMjExOF5BMl5BanBnXkFtZTcwMzU4MDU0Mw@@._V1_UY268_CR6,0,182,268_AL_.jpg"
				},
				{
					"title" : "Batman: Gotham Knight",
					"year" : "2008",
					"genres" : "Animation, Action, Crime",
					"poster" : "http://ia.media-imdb.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"
				}
			]
		}
		`,
		movieObj = j.parse(movieData),
		moviesObj = j.parse(moviesData),
		movie = d.querySelector('#movie'), 
		movies = d.querySelector('.movies'), 
		//movieTemplate = '<h2>' + movieObj.title + '</h2><p><b>' + movieObj.year + '</b></p><p><i>' + movieObj.genres + '</i></p><img src="' + movieObj.poster + '">';
		//Template String
		movieTemplate = `
			<h2>${movieObj.title}</h2>
			<p><b>${movieObj.year}</b></p>
			<p><i>${movieObj.genres}</i></p>
			<img src="${movieObj.poster}">
		`,
		moviesTemplate = '';

		console.log(
			movieObj,
			movieObj.title,
			moviesObj,
			moviesObj['movies'],
			moviesObj['movies'].length,
			moviesObj['movies'][1],
			moviesObj['movies'][1].title
		);

		for (var n = 0; n < moviesObj['movies'].length; n ++) {
			moviesTemplate += `
				<article>
					<h2>${moviesObj['movies'][n].title}</h2>
					<p><b>${moviesObj['movies'][n].year}</b></p>
					<p><i>${moviesObj['movies'][n].genres}</i></p>
					<img src="${moviesObj['movies'][n].poster}">
				</article>
			`;			
		}

		movie.innerHTML = movieTemplate;
		movies.innerHTML = moviesTemplate;
})(document, JSON);