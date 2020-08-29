var selectedPokemon = Cookies.get("Pokemon");
var selection = document.getElementById("pokemonSelection");
selection.innerHTML = selectedPokemon; 

if(selectedPokemon == "Litten"){
pokemonSelection.innerHTML = "<img src='../images/Litten.png' alt='Litten'>";
} else if (selectedPokemon == "Popplio"){
    pokemonSelection.innerHTML = "<img src='../images/Popplio.png' alt='Popplio'>";
} else if (selectedPokemon == "Rowlet") {
    pokemonSelection.innerHTML = "<img src='../images/Rowlet.png' alt='Litten'>"; 
}

var selectedPokemonHP = document.getElementById("pokemonSelectionHP");

if(Cookies.get ("userCurrentHealth") == undefined){
    selectedPokemonHP.innerHTML = 50; 
} else {
    selectedPokemonHP.innerHTML = Cookies.get("userCurrentHealth");
}

var compPokemonHP = document.getElementById("computerPokemonHP");

if(Cookies.get ("computerCurrentHealth") == undefined){
   compPokemonHP.innerHTML = 50; 
} else {
    compPokemonHP.innerHTML = Cookies.get("computerCurrentHealth");
}


function attackOne() {
 compPokemonHP.innerHTML = compPokemonHP.innerHTML - 10;
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - 5;
 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
 

 if(compPokemonHP.innerHTML <= 0) {
 document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html"> Click here to play again! </a>';
 }

 if(selectedPokemonHP.innerHTML <= 0) {
    document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html"> Click here to play again! </a>';
    }


}

function attackTwo() {
    compPokemonHP.innerHTML = compPokemonHP.innerHTML - 5;
    selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - 10;
    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }
   
   function attackThree() {
    compPokemonHP.innerHTML = compPokemonHP.innerHTML - 2;
    selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - 0;
    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }
   
   function attackFour() {
    compPokemonHP.innerHTML = compPokemonHP.innerHTML - 5;
    selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - 5;
    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }
   
function removeCookies() {
    Cookies.remove("userCurrentHealth");
    Cookies.remove("computerCurrentHealth");
    Cookies.remove("Pokemon");
}
