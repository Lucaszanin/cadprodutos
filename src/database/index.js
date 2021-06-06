const mongoose = require('mongoose'); /* Importa o Mongoose */

mongoose.connect(process.env.MONGODB_HOST|| 'mongodb://localhost/crud');/* Conecta no nosso banco de dados */
mongoose.Promise=global.Promise;/* Deixa o acesso de forma global */

module.exports=mongoose;/* Exporta o mongoose para ser utilizado em outros documentos*/