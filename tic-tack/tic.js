const board = document.querySelector('.board')
const sqaures = document.querySelectorAll('.sqaure')
const message = document.querySelector('.message')
const resart = document.querySelector('.restart')
const player = ['x', 'o']

let currentPlayer = player[0]

const winningPlayer = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
for(let i = 0; i<sqaures.length; i++){
sqaures[i].addEventListener('click',()=>{
  if(sqaures[i].textContent !== ''|| chaickwinner(currentPlayer)){
    return;
  }
  
    sqaures[i].innerHTML = currentPlayer
    if(chaickwinner(currentPlayer)){
      message.textContent = `game over ${currentPlayer} won resart the game`
      return
    }
    if(tie()){
      message.textContent = `game over  resart the game`
      return
    }
  
  currentPlayer = currentPlayer===player[0]?player[1]:player[0]
  if(currentPlayer===player[0]){
    message.innerHTML=`x's turn`
  }else{
  message.innerHTML=`o's turn`
  }
})
}
function chaickwinner(currentPlayer){
  for(let i = 0; i<winningPlayer.length; i++){
    const [a,b,c] = winningPlayer[i]
     if (sqaures[a].innerHTML === currentPlayer &&
      sqaures[b].innerHTML === currentPlayer &&
      sqaures[c].innerHTML === currentPlayer ){
        return true
      }
       
      
  }
  return false
}
function tie(){
  for(let i = 0 ; i<sqaures.length; i++){
    sqaures[i].innerHTML === '';
    return false
  }
  return true
}
function resartBtn(){
  for(let i = 0 ; i<sqaures.length; i++){
    if(sqaures[i].innerHTML = ''){
      
    }
    message.innerHTML = `x'turn`;
    currentPlayer = player[0];
  }
}

 
resart.addEventListener('click',()=>{
  console.log('aded')
  resartBtn()
})