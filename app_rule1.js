/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls two 6 in a row, he looses entire score. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// set varialbe n initial status

var sores, roundScore, activePlayer, gamePlaying;


initial();

var lastDice;

// click dice roll 
document.querySelector('.btn-roll').addEventListener('click', function (){
    
    if(gamePlaying){
         // 1 random number
    var dice1 = Math.floor(Math.random() *6) + 1;
    var dice2 = Math.floor(Math.random() *6) + 1;
    
    // 2 display result with dice img
    document.getElementById('dice-1').style.display ='block';
    document.getElementById('dice-2').style.display ='block';
    document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
    
        
      // 3 update round score 
    if(dice1 !== 1 && dice2 !== 1 ){
        // add score then display
        roundScore += dice1 + dice2;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    } else{
        // next player
        nextPlayer();
      }   
          
    /*    
    // 3 update round score 
    if(dice===6 && lastDice===6){
        // lose entire score
        scores [activePlayer]  = 0;
        document.getElementById('score-' + activePlayer).textContent ='0';
        nextPlayer();
    }else if(dice !== 1){
        // add score then display
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;  
    } else{ 
        // next player
        nextPlayer();
      }
     */   
    //lastDice = dice;
            
    }
   
});

// click hold button 
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
         // 1 add current scole to global score 
    scores [activePlayer] += roundScore;

    // 2 update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        
    var input = document.querySelector('.winningscore').value;
    
    if(input){
        var winningScore =input;
    }else {
        var winningScore = 100;
    }
    // 3 if player won the game 
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.getElementById('dice-1').style.display ='none';
        document.getElementById('dice-2').style.display ='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;  
    } else {
        // next player
        nextPlayer();
    } 
    } 
});

//DRY
function nextPlayer (){
     // next player
        activePlayer === 0 ? activePlayer =1 : activePlayer =0;
        roundScore = 0;
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent ='0';
        
        // toggle element
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice-1').style.display ='none';
        document.getElementById('dice-2').style.display ='none';
}


// click new game 
document.querySelector('.btn-new').addEventListener('click', initial);

function initial (){
    scores =[0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display ='none';
    document.getElementById('dice-2').style.display ='none';

    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');  
    
    
}






//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice +'</em>'

//var x=document.querySelector('#score-0').textContent;
//console.log(x);