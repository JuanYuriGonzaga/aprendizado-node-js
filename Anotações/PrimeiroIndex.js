const express = require("express"); // Adiciona as funcionalidades do express na aplicação.
const app = express(); // Utiliza da funcionalidade criada para dar início ao FrameWork.
const path = require("path"); // Adiciona funcionalidade de path dentro da aplicação.
const router = express.Router(); // Com a ajuda do express, da início a configuração de rota da aplicação.

// Caso o usuário esteja na rota padrão, na rota barra.
// Será renderizado o arquivo index.html.
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname + '/html/index.html') );
});

// Outra maneira de se enviar dados para a view.
router.get("/teste_envio_dados_view/:mensagem_teste", function(req, res){
	// Mensagem utilizando envio de parâmetros através da URL.
	res.send("Apenas uma mensagem enviada como parâmetro: " + req.params.mensagem_teste);
});

// Diz para a aplicação utilizar o '/' como uma rota válida.
app.use('/', router);

// Diz para o servidor iniciar e utilizar a porta padrão ou então a porta 3000.
// Deve ser a última linha de comando de todo o arquivo.
app.listen(process.env.port || 3000, function(){
	console.log("O servidor está rodando na URL: http://localhost:3000");
})