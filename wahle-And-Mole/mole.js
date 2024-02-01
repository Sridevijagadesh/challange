const sqaure = document.querySelectorAll('.saqure')
const score = document.querySelector('.score')
const timer = document.querySelector('.timer')
const mole = document.querySelector('.mole')


let result = 0
let postion;
let currentTimer = 10

function saqurerandom(){

  sqaure.forEach((element)=>{
    element.classList.remove('mole')
  })

  let randonMove = sqaure[Math.floor(Math.random() *9)]
  // console.log(randonMove)
   randonMove.classList.add('mole')
   postion = randonMove.id



   sqaure.forEach((element)=>{
element.addEventListener('click',()=>{
 if(sqaure.id === postion){
  result++
  postion=null
 }
 score.innerHTML=result
})
   })
}

function moleMove(){
  let timerId = null
  timerId = setInterval(saqurerandom,1000)
}
moleMove();

function timeMove(){
  currentTimer--
 timer.innerHTML = currentTimer
 if(currentTimer === 0){
 clearTimeout(timeId)
 }
}
let timeId = setInterval(timeMove ,1000)
