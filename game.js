var rockbtn= document.getElementById("rock");
var paperbtn= document.getElementById("paper");
var scissorsbtn= document.getElementById("scissors");
var youimage=document.getElementById("image-container");
var compimage=document.getElementById("random-image");
var playerscore=document.getElementById("playerscore");
var computerscore=document.getElementById("compscore");
const result = document.querySelector(".result");
const final = document.getElementsByClassName("gameover");



function run(){
    window.location.href="gamepage.html";
}


rockbtn.addEventListener('click', (e)=>{
    
value = Math.floor(Math.random()*3)
    execute(value)
    displayimage(e.target.id)
    repeat(e.target.id,value)
})

paperbtn.addEventListener('click',(e)=>{
    
value = Math.floor(Math.random()*3)
    execute(value)
    displayimage(e.target.id)
    repeat(e.target.id,value)
})

scissorsbtn.addEventListener('click',(e)=>{
    value = Math.floor(Math.random()*3)
    execute(value)
    displayimage(e.target.id)
    repeat(e.target.id,value)
})

// rockbtn.addEventListener('click', (e)=>{
//     execute(value)
//     console.log(value)
// })

// paperbtn.addEventListener('click',(e)=>{
//     execute(value)
//     console.log(value)
// })

// scissorsbtn.addEventListener('click',(e)=>{
//     execute(value)
//     console.log(value)
// })



function displayimage(ind){
    if(ind==="rock"){
        youimage.innerHTML=`<img src="./assets/rock-hand.png" width="350px"></img>`
    }
    else if(ind==="paper"){
        youimage.innerHTML=`<img src="./assets/paper-hand.png" width="350px"></img>`
    }
    else if(ind==="scissors"){
        youimage.innerHTML=`<img src="./assets/scissors-hand.png" width="350px"></img>`
    }
}



function execute(value){
    if (value==0 ){
      compimage.innerHTML = `<img src="./assets/rock-hand.png"></img>`
    }
    else if(value==1){
        compimage.innerHTML = `<img src="./assets/paper-hand.png"></img>`
    }
    else if(value==2){
        compimage.innerHTML = `<img src="./assets/scissors-hand.png"></img>`
    }
}


let score1 =0
let  score2=0
function repeat(ind,value){
    if (ind=="rock" && value==2 || ind=="paper" &&value==0 || ind=="scissors" &&value==1 ){
        score1++
        // console.log(score1)
        playerscore.innerText = score1
    }else if ( ind=="rock" && value==1 ||  ind=="paper" &&value==2|| ind=="scissors" &&value==0){
        score2++
        // console.log(score2)
        computerscore.innerText = score2
    }
    else if (score1 === 5 || score2=== 5){
        end();
    }
}



function end(){
    console.log(1)
    final[0].style.visibility="visible"
    if (score1>score2){
        result.textContent= "YOU WON" 
    }else if (score2>score1){
        result.textContent = "YOU LOST"
    }else{
        result.textContent= "DRAW"
    }
}







