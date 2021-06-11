const User= require('../models/User');


class UserController{
     async create(req, res){  /*Cria um usuário no banco */
        const {firstname,lastname,age,email,address}= req.body; /*Passa os atributos para o cadastro do banco */
       try {
        const creadetUser = await User.create({firstname,lastname,age,email,address});
        
        return res.status(200).json(creadetUser); /*Retornar Status Ok*/
    } catch(err) {
       return res.status(400).json(err);/*Retornar Erro caso não consiga cadastrar*/

    }
    
    }

    async index(req, res){ /*Mostra todos os usuários cadastrados no banco */
        try {
           const users = await User.find();/* Utiliza a Função Find para mostrar os cadastros do banco */ 
            
            return res.status(200).json(users);
        } catch(err){
           return res.status(400).json(err);
        }

    }
    async show(req, res){
        const{_id}=req.params;
         try{
               const user = await User.findOne({_id});
               return res.status(200).json(user);
            }catch(err) {
               return res.status(400).json(err);
          }     
            
         }
    
    async update(req ,res){
      const {_id } =req.params;

      try{
            const updated = await User.update({id},req.body).exec();
            return res.status(200).json(updated);
         }catch(err){
            return res.status(400).json(err);
         }
   
    }
    async delete(req, res){
      const{_id}=req.params;
      try{
         const deleted = await User.deleteOne({_id});
         return res.status(200).json(deleted);
      }catch(err){
         return res.status(400);
      }
    
    }
}

module.exports= new UserController();/*Cria um controlador e exporta a palavra New por ser uma classe é utilizada para instanciar o objeto */
