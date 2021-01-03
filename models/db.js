// Conexão com o banco de dados MYSQL.
const Sequelize = require('sequelize');
const sequelize = new Sequelize("cadastro_simples", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

// Torna global a configuração do banco de dados.
// Nome a ser utilizado para referenciar as configurações ao lado esquerdo do objeto.
// Nome das constantes ao lado direito.
module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize,
}