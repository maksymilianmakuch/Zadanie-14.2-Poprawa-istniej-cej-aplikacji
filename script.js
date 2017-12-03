var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: './img/harry.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: './img/lion.jpg'
	},
	{
		id: 3,
		title: 'Gwiezdne Wojny: Przebudzenie Mocy',
		desc: 'Miecze świetlne, bitwy kosmiczne, remake Nowej Nadzieja',
		img: './img/force.png'
	},
	{
		id: 4,
		title: 'Gwiezdne Wojny: Ostatni Jedi',
		desc: 'Miecze świetlne, bitwy kosmiczne, może jednak to nie będzie remake',
		img: './img/last.jpg'
	},
	{
		id: 5,
		title: 'Łotr 1',
		desc: 'A tu bez miecza świetlnego;-)',
		img: './img/rogue.jpg' 
	},
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img}),
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

	ReactDOM.render(element, document.getElementById('app'));