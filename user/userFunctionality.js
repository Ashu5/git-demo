const MAX_SESSION=3;

var user=getCurrentUser();
 var userFuncs=getFunctionsByUser(user);
 var session=countUserSession(user);
 console.log("USER FUNCTIONS:",userFuncs);
 console.log("USER SESSION:",sessiong);

function getCurrentUser(){
    return "CURR_USER";
}

function getFunctionsByUser( user){
const userFunctions= ["LOGIN","EDIT PAGE","PLAY GAMES"]; 
return userFunctions;
}

function countUserSession(user){
    return MAX_SESSION;
}