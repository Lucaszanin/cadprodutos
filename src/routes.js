const routes = require('express').Router();/* Importa o express criando uma constante para isso*/ 
const UserController= require('./app/controllers/UserController')

/*Rotas para acessar o usuário */
routes.get('/users',UserController.index);  /* Mostra todos os usuários */
routes.get('/users/:_id',UserController.show);/* Mostra um usuário */
routes.post('/users',UserController.create);/* Cria um usuário */
routes.put('/users/:_id',UserController.update);/* Atualiza um usuário */
routes.delete('/users/:_id',UserController.delete);/* Deleta um usuário */

module.exports=routes;/* Exporta o routes para fora para que o app.js utilize a rota*/ 