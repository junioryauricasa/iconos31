(function (d, j) {
	'use strict';

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
})(document, JSON);