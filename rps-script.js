
//delay. wait(2000) gives a 2s wait
//(async () => { await wait(2000); nextFunctionToCall() })()
var wait = ms => new Promise((r, j)=>setTimeout(r, ms));

function togglePlayControls() {
    const playButton = document.querySelector('#play');
    playButton.classList.toggle('inactive');
    let selectButtons = document.querySelectorAll('.hidden');
    selectButtons.forEach(foo => foo.classList.toggle('hidden'));
    selectButtons.forEach(foo => foo.classList.toggle('rpsControl'))
}

function playRound(playerChoice) {
    highlightButton(playerChoice);
    disableRpsControls()
    console.log('Player chose ' + playerChoice);
    let computerChoice=computerPlay();
    console.log('Computer chose ' + computerChoice);
    let result=compareChoices(playerChoice, computerChoice);
    console.log(result);
    document.querySelector('#winnerText').textContent='';
    (async () => { await wait(200);
        document.querySelector('#computerText').textContent='Choosing...'; 
        document.querySelector('#computerText').style.visibility='inherit'; })();
    (async () => { await wait(1000);
        document.querySelector('#computerText').textContent='Computer chose ' + computerChoice;})();
    console.log('winner is ' + winner);
    countWins(winner);
    (async () => { await wait(1800);
            document.querySelector('#resultText').textContent=result; 
        document.querySelector('#resultText').style.visibility='inherit';})();
    (async () => { await wait(2600);
        updateWinnerText(winner);})();
    (async () => { await wait(3400);
        document.querySelector('#replay').style.display='inherit'; 
        document.querySelector('#resultsTable').classList.remove('inactive');
        updateResultsTable();})();
}

function compareChoices(playerChoice, computerChoice) {
    console.log('comparing ' + playerChoice + ' to ' + computerChoice);
    switch (playerChoice) {
        case computerChoice:
        result='You both chose ' + playerChoice + '. That\'s a draw!';
        winner='draw';
        break;
    
        case 'Rock':
            if (computerChoice==='Scissors') {result='Rock blunts Scissors. You win!'; winner='player';}
            else {result='Paper covers Rock. You lose!'; winner='computer';};
        break;
    
        case 'Paper':
            if (computerChoice==='Rock') {result='Paper covers Rock. You win!'; winner='player';}
            else {result='Scissors cuts Paper. You lose!'; winner='computer';};
        break;
    
        case 'Scissors':
            if (computerChoice==='Paper') {result='Scissors cuts Paper. You win!'; winner='player';}
            else {result='Rock blunts Scissors. You lose!'; winner='computer';};
        break;
        
        default: console.error('Invalid comparison: ' + playerChoice + ' + ' + computerChoice);}
        return result;
}

   function updateWinnerText(winner) {
    let winnerText = document.querySelector('#winnerText');
    if (winner=='player') {winnerText.textContent='You won the last round.';}
    else if (winner=='computer') {winnerText.textContent='The computer won the last round.';}
    else {winnerText.textContent='The last round was a draw.';}
}

function computerPlay() {
    //choose a random number 1-3
    function randomInteger (max) { 
        let myRandomInt = (Math.floor(Math.random()*max)+1);
        return myRandomInt;
        }
    let computerChoice = randomInteger(3);
    switch(computerChoice) {
        case 1: computerChoice = 'Rock'; break;
        case 2: computerChoice = 'Paper'; break;
        case 3: computerChoice = 'Scissors'; break;
        default: console.error('Error: computer didn\'t choose anything');
        }
    return computerChoice;
}

function highlightButton(selectedButton) {
    selectedButton=document.querySelector('#'+selectedButton);
    selectedButton.style.background = '#deeff5';
    selectedButton.style['border-color'] = '#deeff5';
    selectedButton.style.color = '#45565c';
    return selectedButton;
}

function disableRpsControls() {
  let rpsControls=document.querySelectorAll('.rpsControl');
  rpsControls.forEach(rpsControl => rpsControl.disabled = true);
}

function enableRpsControls() {
    let rpsControls=[document.querySelector('#Rock'), document.querySelector('#Paper'), document.querySelector('#Scissors')];
    rpsControls.forEach(resetRpsStyle);
    function resetRpsStyle(x) {
        x.style.background = null;
        x.style.color = null;
        x.style['border-color'] = null;
        x.disabled = false;
    }
}

function replay() {
    console.log('replaying');
    document.querySelector('#computerText').style.visibility='hidden';
    document.querySelector('#resultText').style.visibility='hidden';
    enableRpsControls();
    document.querySelector('#replay').style.display='none';
}

//Counters for round winners
let w=0; let c=0; let d=0; let i=0;

function updateResultsTable() {
    document.querySelector('#playerWins').textContent=w;
    document.querySelector('#computerWins').textContent=c;
    document.querySelector('#draws').textContent=d;
}

function countWins(winner) {
    if (winner==='draw'){d++}
    else if (winner==='player'){w++}
    else {c++};
    console.log('wins counted' + w + c +d);
}

function fiveRoundGame() {
    if (i<5) {
        let winner=playRound();
        i++;
        if (winner==='draw'){console.log('Round ' + i + ' was a draw.');}
        else if (winner==='player'){
            console.log('You won round ' + i + '!');
            w++;
        }
        else {
            console.log('The computer won round ' + i + '.');
            c++;
        }
        }
    else {
        console.log('After five games played, you won ' + w + ' of them. The computer won ' + c + '. ');
        if (w>c) {console.log('That makes you the overall winner!');}
        else if (c>w) {console.log('That means the computer won overall. Hard luck.');}
        else {console.log('It was a draw.')}
        }
}




