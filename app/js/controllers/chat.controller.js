/*angular.module('cbsChat').controller('chatCtrl', ['ChatService', function(ChatService){

var vm = this;

    vm.sendMessage = function(){

        var message = {
            text: vm.newMessage
        }
        ChatService.sendMessage(message);
    }
}
    
])*/
function chatCtrl(ChatService, $firebaseAuth){
    var vm = this;
    var auth = $firebaseAuth();

    vm.messages = ChatService.getMessages();
    vm.shownMessages = ChatService.shownMessages();

    vm.sendMessage = function(){
        if( vm.author != null ){
            var message = {
                authorName: vm.author.displayName,
                authorId: vm.author.uid,
                authorPhoto: vm.author.photoURL,
                text: vm.newMessage
            }
        }else{
            alert('Сначала зарегистрируйтесь');
        }
        
        if(vm.newMessage != ''){
            ChatService.sendMessage(message);
            vm.newMessage = '';
        }else {
            alert('Введите сообщение!');
        }
        
    }

    vm.login = function(){
        auth.$signInWithPopup('google');
    }

    vm.logout = function(){
        auth.$signOut();
    }

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
    })
}


angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl])
