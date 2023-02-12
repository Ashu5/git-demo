var user=getCurrentUser();
 var userFuncs=getFunctionsByUser(user);
 console.log("USER FUNCTIONS:",userFuncs);

function getCurrentUser(){
    return "CURR_USER";
}

function getFunctionsByUser( user){
const userFunctions= ["LOGIN","EDIT PAGE","PLAY GAMES"]; 
return userFunctions;
}