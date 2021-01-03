const db = require('./db');

// Criando a tabela de usuários:
const Usuarios = db.sequelize.define('usuarios', {
	us_nome: {
		type: db.Sequelize.STRING,
	},
	us_descricao: {
		type: db.Sequelize.STRING,
	}
})

//Usuarios.sync({force: true});

module.exports = Usuarios;