// Início configurações:

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Config body-parser.
// Receita de bolo.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Faz a configuração do template engine para o Handlebars.
// Receita de bolo.
app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	runtimeOptions: {
	    allowProtoPropertiesByDefault: true,
	    allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');

const Usuarios = require('./models/usuarios');

// Final configurações.

// Início da configuração de rota do projeto:
app.get('/', function(req, res){
	res.render('formulario');
});

app.post('/envioFormulario/', function(req, res){

	let nome_usuario = req.body.nome_usuario;
	let descricao_usuario = req.body.descricao_usuario;

	if (nome_usuario == "" || descricao_usuario == "")
	{
		res.send("Todos os campos devem ser preenchidos!");
	}

	Usuarios.create({
		us_nome: nome_usuario,
		us_descricao: descricao_usuario,
	}).then(function(){
		res.redirect("/home");
	}).catch(function(erro){
		res.send("Ocorreu um problema durante a criação do usuario, erro: " + erro);
	});
});

app.get("/home", function(req, res){
	Usuarios.findAll({
		order: [['id', 'DESC']]
	})
	.then(function(dados_usuarios){
		res.render("home", {dados_usuarios: dados_usuarios});
	});
});

app.get("/deletarUsuario/:id", function(req, res){
	Usuarios.destroy({where: {'id': req.params.id}})
	.then(function(){
		res.redirect("/home");
	}).catch(function(erro){
		res.send("Ocorreu um erro durante a exclusão do usuário! Erro: " + erro);
	});
});

app.listen(8080, function(req, res){
	console.log("A operação foi um sucesso! Servidor rodando na URL: http://localhost:8080");
});

// Final da configuração de rota do projeto.