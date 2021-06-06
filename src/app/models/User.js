const mongoose= require('../../database'); /*Importa o banco de dados */

const UserSchema = new mongoose.Schema({    
    firstname:{type:String, required: true},
    lastname:{type:String, required: true}, /* Criou o usuário com os atributos */
    age:{type:Number, required: true},
    email:{type:String, required: true},
    address:{type:String, required: false},
    createdAt:{type: Date,default: Date.now}
});

const User= mongoose.model('User',UserSchema);/*Cria um modelo de usuário com as propriedades do Schema */

module.exports=User;