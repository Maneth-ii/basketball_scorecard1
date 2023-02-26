let home_score = document.getElementById("home-score")
let guest_score  =document.getElementById("guest-score")
let home_scorev =0
let guest_scorev =0
//Home Score**
function increaseHomeScoreOne(){
    home_scorev+=1
    home_score.textContent =home_scorev
} 

function increaseHomeScoreTwo(){
    home_scorev+=2
    home_score.textContent=home_scorev
} 
function increaseHomeScoreThree(){
    home_scorev+=3
    home_score.textContent =home_scorev
} 

//Guest Score**

function increaseGuestScoreOne(){
    guest_scorev=guest_scorev+1
    guest_score.textContent =guest_scorev
} 

function increaseGuestScoreTwo(){
    guest_scorev=guest_scorev+2
    guest_score.textContent =guest_scorev
} 
function increaseGuestScoreThree(){
    guest_scorev=guest_scorev+3
    guest_score.textContent =guest_scorev
} 




