let strikeButton = document.getElementById("strike");
let resetButton = document.getElementById("reset");
let score1 = document.getElementById("score-team1");
let score2 = document.getElementById("score-team2");
let wicket1 = document.getElementById("wickets-team1");
let wicket2 = document.getElementById("wickets-team2");
console.log(resetButton)
var scoret1 = 0;
var scoret2 = 0;
var wickett1 = 0;
var wickett2 = 0;
var turn = 1;
var random = 0;
var team1ball = 0;
var team2ball = 0;

var possibility = [0, 1, 2, 3, 4, 6, "W"]

strikeButton.addEventListener("click",() => {
    
    random = possibility[Math.floor(Math.random() * possibility.length)];

    if(turn == 1){
        team1ball++;

        if(random == 'W')
        wickett1++;
        
        else
        scoret1 += random;

        document.querySelector(
            `#team1-superover div:nth-child(${team1ball})`)
            .textContent = random;
            
        if(team1ball == 6){
            turn = 2;
            team1ball = 0;
            return;
        }
    }
    
    if(turn == 2){
        team2ball++;

        if(random == 'W')
        wickett2++;
        
        else
        scoret2 += random;

        document.querySelector(
            `#team2-superover div:nth-child(${team2ball})`)
            .textContent = random;
        if(team2ball == 6){
            team2ball = 0;
            decision();
        }
    }
     
    
    update();  
})

let update = () => {
    score1.textContent = scoret1;
    score2.textContent= scoret2;
    wicket1.textContent = wickett1;
    wicket2.textContent = wickett2;
    let team = document.querySelector(`team${turn}-superover > div:nth-child(${turn == 1 ? team1ball : team2ball})`);
    console.log(team);
    team.textContent = random;
}

let decision = () => {
    if(scoret1 > scoret2)
        alert("IND Wins!")
    else if(scoret2 > scoret1)
        alert("PAK Wins!")
    else{
        alert("Play Again!");
        window.location.reload();
    }
}

resetButton.addEventListener("click",() => {
    window.location.reload();
})