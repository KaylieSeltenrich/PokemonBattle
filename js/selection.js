var selectedPokemon = Cookies.get("Pokemon");
var selection = document.getElementById("pokemonSelection");
selection.innerHTML = selectedPokemon; 


if(selectedPokemon == "Litten"){
pokemonSelection.innerHTML = "<img src='../images/Litten.png' alt='Litten'>";
document.getElementById("attack-container").innerHTML = '<p class="attack" onclick="attackOne()">Bite</p><p class="attack" onclick="attackTwo()">Ember</p><p class="attack" onclick="attackThree()">Flamethrower</p><p class="attack" onclick="attackFour()"> Scratch</p><p id="dodge" onclick="dodge()"> Attempt to Dodge! </p><p id="heal" onclick="heal()"> Heal 10 points! </p>';
} else if (selectedPokemon == "Popplio"){
    pokemonSelection.innerHTML = "<img src='../images/Popplio.png' alt='Popplio'>";
    document.getElementById("attack-container").innerHTML = '<p class="attack" onclick="attackOne()">Pound</p><p class="attack" onclick="attackTwo()">Water Gun</p><p class="attack" onclick="attackThree()">Bubble Beam</p><p class="attack" onclick="attackFour()"> Splash</p><p id="dodge" onclick="dodge()"> Attempt to Dodge! </p><p id="heal" onclick="heal()"> Heal 10 points! </p>';
} else if (selectedPokemon == "Rowlet") {
    pokemonSelection.innerHTML = "<img src='../images/Rowlet.png' alt='Rowlet'>"; 
    document.getElementById("attack-container").innerHTML = '<p class="attack" onclick="attackOne()">Tackle</p><p class="attack" onclick="attackTwo()">Peck</p><p class="attack" onclick="attackThree()">Razor Leaf</p><p class="attack" onclick="attackFour()"> Astonish </p><p id="dodge" onclick="dodge()"> Attempt to Dodge! </p><p id="heal" onclick="heal()"> Heal 10 points! </p>';
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

if (selectedPokemon == "Litten"){
 compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 5));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 10));
 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

} else if (selectedPokemon == "Popplio") {
 compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 3));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 5));
 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

} else if (selectedPokemon =="Rowlet") {
compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 3));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 5));

 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

}

 if(compPokemonHP.innerHTML <= 0) {
 document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html"> Click here to play again! </a>';
 }

 if(selectedPokemonHP.innerHTML <= 0) {
    document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html"> Click here to play again! </a>';
    }


}

function attackTwo() {
    
if (selectedPokemon == "Litten"){
 compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 8));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 4));
 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

} else if (selectedPokemon == "Popplio") {
 compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 5));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 3));
 Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
 Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

} else if (selectedPokemon =="Rowlet") {
compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 6));
 selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 4));

    
    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
}

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }
   
   function attackThree() {
    
    if (selectedPokemon == "Litten"){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 12));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 5));
        Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
        Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
       
       } else if (selectedPokemon == "Popplio") {
        compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 10));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 3));
        Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
        Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
       
       } else if (selectedPokemon =="Rowlet") {
       compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 12));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 4));


    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
    
}

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }
   
   function attackFour() {
    
    if (selectedPokemon == "Litten"){
        compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 2));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 8));
        Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
        Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
       
       } else if (selectedPokemon == "Popplio") {
        compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 2));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 8));
        Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
        Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
       
       } else if (selectedPokemon =="Rowlet") {
       compPokemonHP.innerHTML = compPokemonHP.innerHTML - (Math.ceil(Math.random() * 8));
        selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - (Math.ceil(Math.random() * 3));

    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);

    }

    if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
    
   }


   function dodge() {
    var dodgeStatus = Math.random() < 0.5; 

    if (dodgeStatus == true ) {
       compPokemonHP.innerHTML = compPokemonHP.innerHTML - 10;
       } else { selectedPokemonHP.innerHTML = selectedPokemonHP.innerHTML - 15;
    }

       if(compPokemonHP.innerHTML <= 0) {
        document.querySelector('body').innerHTML = '<p> YOU WIN!!</p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
        }
       
        if(selectedPokemonHP.innerHTML <= 0) {
           document.querySelector('body').innerHTML = '<p> YOU LOST :( </p> <a onclick="removeCookies()" href="index.html">  Click here to play again! </a>';
           }
        
  }
  
  function heal() {
    var healPoints = parseInt(Cookies.get("userCurrentHealth"));
    
    if(Cookies.get ("userCurrentHealth") == undefined){
        selectedPokemonHP.innerHTML = 50; 
    } else {
        selectedPokemonHP.innerHTML = healPoints + 10;
        var finishedHealing = document.getElementById ('heal');
        finishedHealing.remove('heal');
    }

    if(selectedPokemonHP.innerHTML > 50) {
      selectedPokemonHP.innerHTML = 50; 
    }


    Cookies.set ("userCurrentHealth", selectedPokemonHP.innerHTML);
    Cookies.set ("computerCurrentHealth", compPokemonHP.innerHTML);
    
  
    }


   
function removeCookies() {
    Cookies.remove("userCurrentHealth");
    Cookies.remove("computerCurrentHealth");
    Cookies.remove("Pokemon");
}
