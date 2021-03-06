// # Importar express
const express = require('express');

// # Invocar express
const app = express();

// # Biblioteca pra utilizar caminhos
const path = require('path');

// # Setar view do projeto pra EJS
app.set("view engine", "ejs");

// # Express vai utilizar arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded());

// # Array pokedex que vai armazenar input
const pokedex = [
	{
		id: 1,
		altura: '0.7 m',
		peso: '6.9 kg',
		category: 'Semente',
		name: 'Bulbasaur',
		description:'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
		type: ['Envenenamento','Combustão'],
		Fraqueza: ['Fogo', 'Não Voa', 'Não solta gelo'],
		image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
	},
	{
		id: 2,
		altura: '1.1 m',
		peso: '19.0 kg',
		category: 'chamas',
		name: 'Charmeleon',
		description:'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
		type: 'fogo',
		Fraqueza: ['agua', 'Não Voa', 'Não solta gelo'],
		image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
	},
	{
		id: 3,
		altura: '0.7 m',
		peso: '7.5 kg',
		category: 'água',
		name: 'Wartortle',
		description:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
		type: ['Envenenamento','Combustão'],
		Fraqueza: ['semente', 'eletricidade'],
		image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
	},
	{
		id: 4,
		altura: '3 m',
		peso: '65 kg',
		category: 'veneno',
		name: 'Arbok',
		description:'The frightening patterns on its belly have been studied. Six variations have been confirmed.',
		type: ['Envenenamento','Combustão'],
		Fraqueza: ['ground', 'Não Voa', 'Não solta gelo'],
		image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
	},
];

let pokemon = undefined; 

// # Rota principal
app.get('/', (req,res) => {
	/*
		Objetivo: Lá na view index.ejs,  vou pegar essas variáveis pokemon e pokedex,
		percorrer a pokedex, e acessar as propriedades dela que são varios objetos.
	*/
  res.render('index', {pokedex});
});


// # Rota pro cadastro
app.get('/cadastro', (req, res) =>{
	/*
		Objetivo: Assim que usuario clicar no cadastro, essa rota vai renderizar a 
		view cadastro
	*/
	res.render('cadastro');
});


// # Rota formulario
app.post('/add', (req, res) => {

	/*
		Objetivo: Assim que o usuário clicou no submit do formulario,
	*/
	pokemon = req.body;
	pokemon.id = pokedex.length + 1;
	pokedex.push(pokemon);
	res.redirect('/');
});

// # Rota ver detalhes do pokemon
app.get('/detalhes/:id', (req,res) => {
	// # Indice do pokemon
	const id = req.params.id;
	pokemon = pokedex[id - 1];
	res.render('detalhes', {pokemon,pokedex})
})



// # Porta do servidor
const porta = 3000;
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
})
