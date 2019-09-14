



(function ()  
{
    'use strict';

    angular
        .module('app')
        .controller('Pergunta.IndexController', Controller);
       
    function Controller(Pergunta, FlashService,UserService) {
  
        var vm = this;

        vm.GravaPergunta = GravaPergunta;
        // vm.question= question;
        // vm.question = null;
        
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }




        function GravaPergunta()
        {
            // debugger;
            let questionToBeSaved = {
                question: vm.question,
                userId: vm.user._id
            }
           
           Pergunta.SavePergunta(questionToBeSaved)
           .then(function () {
               FlashService.Success("Pergunta salva.");
           })
           .catch(function (error) {
               FlashService.Error(error);
           });
        }
              
        

        
         
         
         
    }
    
    


})();
