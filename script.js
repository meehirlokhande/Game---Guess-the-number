'use strict';



let SecretNumber = Math.trunc((Math.random()*20))+1;
let highscore=0;
let score=20;

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
//THERE IS NO INPUT
    if(!guess){
        document.querySelector('.message').textContent="Not a number!🙅‍♀️";
    }
// WININNG CONDITION
    else if(guess===SecretNumber){
        document.querySelector('.message').textContent= "Congratulations, You Won!! 🎉🙌";

        document.querySelector('.number').textContent=SecretNumber;

        document.querySelector('body').style.backgroundColor= '#60b347';

        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
//LOSING CONDITION
    else if(guess < SecretNumber){
        if(score>1){
        document.querySelector('.message').textContent='Too Low..📉';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You Lose..😭';
            document.querySelector('.score').textContent='0';
        }
    }
    else if(guess> SecretNumber){
        if(score>1){
        document.querySelector('.message').textContent="Too High..📈";
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="You Lose..😭";
            document.querySelector('.score').textContent='0';
        }
    }
    else{
        document.querySelector('.message').textContent="You Lose..😭";
        document.querySelector('.score').textContent=0;
    }
});

document.querySelector('.again').addEventListener('click',function() {
     score=20;
    SecretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent=score;

});