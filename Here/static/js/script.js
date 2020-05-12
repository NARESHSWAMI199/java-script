

function ageInDays() {
    age = prompt("emter the age bro when you were bron : ");
    currentYear = 2020;
    currentageInDay = (currentYear - age) * 365;
    var h1 = document.createElement('h1'); // here create a h1 tag
    var textAnswer = document.createTextNode("you are " + currentageInDay + ' days old');  // creating a TextNode for show on html page
    h1.setAttribute('id', 'ageInDays'); // set the id for h1
    h1.appendChild(textAnswer);  //  here the answer putting in h1 tag

    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById("ageInDays").remove();   // this will remove the Element
}


// Challange 2

function gentrateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('contain-cat');
    image.src = "static/image/challange2/anigif_sub-buzz-17757-1540383468-2.gif";
    div.appendChild(image);
}



// Challange 3 : Rock ,Paper ,Scissors

function rpsGame(yourchoice) {   // Here yourchoice is a perameter passing from html page
    console.log(yourchoice.src);   /// Here this is work like object 

    var humanChoice, botChoice, result;
    humanChoice = yourchoice.id;
    console.log(humanChoice);
    botChoice = numberToChoice(getRand());  // Here we passing a function as a permeter
    console.log('computer choice  : ', botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log("the result is : ", result);
    message = finalMessage(result);  // this will retrun an object something like that {message" : "you won !!" 'color': 'winner' }
    console.log(message);
    rpsFrontEnd(yourchoice.id, botChoice, message);

}

// Get Random number in js 
// Math.floor(Math.random() * 3);  /// this will the numbers bettween 0 to 3 or you can say 0,1,2

function getRand() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourchoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    var yourScore = rpsDatabase[yourchoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourchoice];

    return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'you lose !!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'you tied !!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'you won !!', 'color': 'green' };
    }
}


function rpsFrontEnd(humamImageChoice, botImageChoice, finalMessage) {

    // if you do like that you can eaisly get any value or Image form object
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }


    document.getElementById('scissors').remove();
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    // console.log("the humanImage choice is : " +imageDatabase[humamImageChoice])

    humanDiv.innerHTML = "<img src='" + imageDatabase[humamImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1)' >";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(233, 50, 37,1)' >";
    messageDiv.innerHTML = "<h1 style='color :" + finalMessage['color'] + "; font-size:60px;padding:30px;'> '" + finalMessage['message'] + "' </h1  >";

    document.getElementById("flex-box-rps-box").appendChild(humanDiv);
    document.getElementById("flex-box-rps-box").appendChild(messageDiv);
    document.getElementById("flex-box-rps-box").appendChild(botDiv);

}


// Challange 4 : Change the color of all buttons

var allButtons = document.getElementsByTagName('button');  // this will return an array of all button
console.log(allButtons);

var copyAllbuttons = [];   // this for remember the buttons orignal color

for (let i = 0; i < allButtons.length; i++) {
    copyAllbuttons.push(allButtons[i].classList[1]); // this will push each element of allbutton's class  in copyAllbuttons array  
}
console.log(copyAllbuttons);


function btnColorChange(buttonThangy) {
    if (buttonThangy.value === 'red') {
        buttonRed();
    }
    else if (buttonThangy.value === 'green') {
        buttonGreen();
    }
    else if (buttonThangy.value === 'reset') {
        buttonReset();
    }
    else if (buttonThangy.value === 'random') {
        buttonRandom();
    }
}


function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllbuttons[i]);
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllbuttons[i]);
    }
}


function buttonRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < allButtons.length; i++) {
        let randNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randNumber]);
    }
}


// Challange 5 : Blackjack

// Here we use qurey listner

// simple logic this will select wich item wich id something like this (blackjack-hit-button) and add a event ( click ) 
// and calling  ( blackjackHit() ) function 
// Advantage : you don't need  to write any thing in index.html for eg : onclick  


let blackjackGane = {
    'you': { 'scoreSpan': "#your-blackjack-result", 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': "#dealer-blackjack-result", 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'folder': ['heart', 'birds', 'black', 'it'],
    'wins': 0,
    'losses': 0,
    'drows': 0,
    'isStand': false,
    'turnOver': false

}



// FOR JUST ONLY MAKE RETRIVE DATA EAISER

const YOU = blackjackGane['you'];
const DEALER = blackjackGane['dealer'];


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);





function blackjackHit() {
    if (blackjackGane['isStand'] === false) {
        let card = randomCard();
        let allfolder = randomFolder();
        showCard(allfolder, card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}


function showCard(folder, card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        const hitsound = new Audio('static/image/swish.mp3');
        var cardImage = document.createElement('img');
        cardImage.src = `static/image/challange5/${folder}/${card}.png`;
        cardImage.width = '90';
        cardImage.height = '120';
        cardImage.style = "padding:10px;";
        console.log(cardImage);
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitsound.play();
    }

}


function blackjackDeal() {

    if (blackjackGane['turnOver'] === true) {

        blackjackGane['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        // here remove function don't remove an array this removed only items

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector("#blackjack-result").style.color = 'black';
        blackjackGane['turnOver'] = false;

    }
}


function randomCard() {
    random = Math.floor(Math.random() * 13);
    return blackjackGane['cards'][random];
}


function randomFolder() {
    randomFolders = Math.floor(Math.random() * 4);
    return blackjackGane['folder'][randomFolders];
}

function updateScore(card, activePlayer) {

    if (card === "A") {
        if (activePlayer['score'] + blackjackGane['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGane['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGane['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGane['cardsMap'][card];
    }

}


function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
    // the textContent is not suggest this editor but must wirte textContent 
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}


// you must need that this function will a async function beacuse we use in this sleep fuction beacuse we don't want 
// the full brower stop for you given time so we apply only on one function 
async function dealerLogic() {

    blackjackGane['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackGane['isStand'] === true) {
        let card = randomCard();
        let allfolder = randomFolder();
        showCard(allfolder, card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGane['turnOver'] = true;
    winner = computeWinner();
    showResult(winner);
}

function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            // console.log('You win');
            blackjackGane['wins']++;
            winner = YOU;


            // Here you don't need handle your bust case beacuse that allready handeled on top of this function
        } else if (DEALER['score'] > YOU['score']) {
            // console.log('you lose !');
            blackjackGane['losses']++;
            winner = DEALER;
        } else if (DEALER['score'] === YOU['score']) {
            console.log('tied !');
            blackjackGane['drows']++;
        }

        // condition : when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        console.log('you lost !')
        blackjackGane['losses']++;
        winner = DEALER;
    }

    // condition when you AND dealer both are bust

    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('you drew');
        blackjackGane['drows']++;
    }
    return winner;
}



function showResult(winner) {
    if (blackjackGane['turnOver'] === true) {
        let message, messageColor;
        if (winner === YOU) {
            message = 'you win !'
            messageColor = 'green';
            document.querySelector('#wins').textContent = blackjackGane['wins'];

        }
        else if (winner === DEALER) {
            message = 'you lose !';
            messageColor = 'red';
            document.querySelector('#losses').textContent = blackjackGane['losses'];
        }
        else {
            message = 'you tied !';
            messageColor = 'black';
            document.querySelector('#drows').textContent = blackjackGane['drows'];

        }
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColor;
    }
}
