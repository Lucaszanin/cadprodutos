const routes = require('express').Router();/* Importa o express criando uma constante para isso*/ 

routes.get('/usuarios',(req,res)=>{
 res.json({msg: 'usuários'});/* Função de call back , para teste da rota*/ 
})


routes.post('/usuarios',(req,res)=>{
    const nome=req.body.nome;
    const idade=req.body.idade;
    res.json({msg: `O Nome é ${nome}/ A idade é ${idade}`});/* Função de call back , para teste da rota*/ 

})

module.exports=routes;/* Exporta o routes para fora para que o app.js utilize a rota*/ 