 // Adiciona as funcionalidades do sequelize na aplicação.
 // Fazendo assim, referência aos itens presentes no frameWork.
const Sequelize = require('sequelize');

 // Faz referência aos itens presentes na base de dados.
const sequelize = new Sequelize("cadastro_simples", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

// Exibe uma mensagem de acordo com o retorno da conexão com a base de dados.
sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso a base de dados!");
}).catch(function(erro){
	console.log("Falha ao se conectar! Erro: " + erro);
});

// Cria uma nova tabela na base de dados de acordo com os parâmetros informados.
const Postagem = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING,
	},

	conteudo: {
		type: Sequelize.TEXT,
	},


});

// Insere dados dentro da tabela.
Postagem.create({
	titulo: "Um título muito maneiro e inesperado",
	conteudo: "Nossa que conteudo incrivel"
});

// Essa linha deve ser comentada depois que o arquivo for iniciado pela primeira vez.
Postagem.sync({force: true});