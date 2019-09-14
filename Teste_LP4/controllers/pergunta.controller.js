
  var config = require('config.json');
  var express = require('express');
  var router = express.Router();
  var Pergunta = require('services/pergunta.service');
  var mongo = require('mongoskin');
  var db = mongo.db(config.connectionString, { native_parser: true });
// db.bind('users');
db.bind('Perguntas');
  // routes
 
  // router.post('/createPergunta', SalvaPergunta);
    router.post('/GravaPergunta', Save);

  

  
  module.exports = router;
  
  function Save(req, res) {
 
  
    Pergunta.GravaPergunta(req.body)
          .then(function () {
              res.sendStatus(200);
          })
          .catch(function (err) {
              res.status(400).send(err);
          });
      
  }
  
  
 


  