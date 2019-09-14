

var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
// db.bind('users');
db.bind('Perguntas');



var service = {};


service.GravaPergunta = GravaPergunta; 


module.exports = service;


        
function GravaPergunta(pergunta) {

    var deferred = Q.defer();  
        db.Perguntas.insert(
            pergunta,
            function (err, doc) {
                if (err) 
             
                deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
        
        return deferred.promise;
}
