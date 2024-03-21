const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const score1 = document.getElementById("score-team1");
const score2 = document.getElementById("score-team2");
const wicket1 = document.getElementById("wickets-team1");
const wicket2 = document.getElementById("wickets-team2");
console.log("superover")
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
    console.log("inside click");
    random = possibility[Math.floor(Math.random() * possibility.length)];

    if(turn == 1){
        team1ball++;

        if(random == 'W')
        wicket1++;
        
        else
        scoret1 += random;
    }
    if(turn == 2){
        team2ball++;

        if(random == 'W')
        wicket2++;
        
        else
        scoret2 += random;
    }


})

let update = () => {
    score1.textContent = scoret1;
    score2.textContent= scoret2;
    wicket1.textContent = wickett1;
    wicket2.textContent = wickett2;
    let team = document.querySelector(`team${turn}-superover > div:nth-child(${turn == 1 ? team1ball : team2ball})`);
    team.textContent = turn == 1 ? scoret1 : scoret2;
}

resetButton.onclick(() => {
    window.location.reload();
})