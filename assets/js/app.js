//variables


//event listeners
function eventListeners(){
    document.querySelector('#form').addEventListener('submit',newMessage)
}


//funtions
function newMessage(e){
    e.preventDefault();
}