    

	



    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
		'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
    
    var wins = 0;
 	var losses = 0;
    var guesses = 10;
    var soFar =[];
 		
 		
        
       
 		
 		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 		console.log(computerChoice); 
        
       
    	
    	document.onkeypress = function(event) {
 		var userGuess = event.key;

 		soFar.push(userGuess);
 		document.getElementById('soFar').innerHTML = 'Your Guesses so far: ' + soFar;


 		if(userGuess === computerChoice){
        	
        	document.getElementById('result').innerHTML = 'Wow, you Guessed it!'
        	wins++;
        	guesses =10;
     		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
     		console.log(computerChoice); 
        }else{
        	
        	document.getElementById('result').innerHTML = 'Nope, Guess again!'
        	guesses--;
        }
 		
 		if(guesses === 0){

 			document.getElementById('result').innerHTML = 'Game Over!'
 			
 			losses++
 			guesses = 10;
 			computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 			console.log(computerChoice); 
 			

 			
        }  

        document.getElementById('wins').innerHTML = "Wins: " + wins;
    	document.getElementById('losses').innerHTML = "losses: " + losses;
    	document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;


    }   
      

        


    
        
    		
 		



