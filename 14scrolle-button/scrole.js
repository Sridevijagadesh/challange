const container = document.querySelector('.container')
const loader = document.querySelector('.loader')
const scrollToBottom = document.querySelector('.scroll-to-bottom')
const scrollToTop = document.querySelector('.scroll-to-top')

function showLoader(){
loader.classList.add('show-losder')
container.classList.add('hide-list')
}
function removeLoader(){
  loader.classList.remove('show-losder')
  container.classList.remove('hide-list')
  
}

async function featchingData(){
    showLoader();

    const response = await fetch('https://dummyjson.com/users?limit=100',{
      method:'GET'
    })
    const result = await response.json('')
    if(result && result.users ) displayResult(result.users)
    console.log(result)
    
    
    removeLoader();
  }
 function displayResult(getUserItem){
  let result = ``
  getUserItem.forEach(element => {
    result+=
    `<li>
    <p>${element.firstName}</p>
    </li>`
    
  });
  container.innerHTML = result
}
featchingData()

scrollToTop.addEventListener('click',()=>{
  scrollTo({
    top:0,
    behavior:'smooth'
  })
})

scrollToBottom .addEventListener('click',()=>{
  window.scrollTo({

   top: document.body.scrollHeight,
   behavior: "smooth"
  })
 
})

  


