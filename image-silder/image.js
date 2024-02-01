 const silder = document.querySelector('.silder')
const dotsContainer = document.querySelector('.dot-container')


 async function getingImage(){
  try{
   const getElement = await fetch('https://picsum.photos/v2/list?page=1&limit=5' , {
     method: 'GET'
   })
   const result = await getElement.json();
  
   displayResult(result)

   console.log(result);
  } catch(error){
    console.log(error);
  }

   
  //  displayResult(result)
  }

 function displayResult(getImagesList){
   silder.innerHTML = getImagesList.map(items=>
    `<div class="silde">
    <img src = "${items.download_url}">
    </div>`
    
   ).join('');
   dotsContainer.innerHTML = getImagesList.map((items , index)=>
   `
 <span class="dot ${index ===0 ? 'active': ''} " data-silde=${index}></span>
   `).join('')
 }
 getingImage();





setTimeout(()=>{
  const silde = document.querySelectorAll('.silde')
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  
  let curretSilder = 0
  
function activeDot(silde){
  document.querySelectorAll('.dot').forEach(dotItem=>{dotItem.classList.remove('active')})
  document.querySelector(`.dot[data-silde = "${silde}"]`).classList.add('active')
 }
 function changeCurrentSilder(curretSilder){
  silde.forEach((sildeItem , index)=>{
    sildeItem.style.transform = `translateX(${100* (index -curretSilder)}%)`
  })

 }
 changeCurrentSilder(curretSilder)
 
 next.addEventListener('click', ()=>{
   curretSilder++
   if(silde.length-1 < curretSilder){
     curretSilder = 0
   }
   activeDot(curretSilder)
   changeCurrentSilder(curretSilder)


 })
 prev.addEventListener('click', ()=>{
   curretSilder--
   if(0 >curretSilder){
     curretSilder = silde.length-1;
   }
   changeCurrentSilder(curretSilder)
   activeDot(curretSilder)

 })
 dotsContainer.addEventListener('click', (event)=>{
  if(event.target.classList.contains('dot')){
    const curretSilder = event.target.dataset.silde
    changeCurrentSilder(curretSilder)
    activeDot(curretSilder)
  }
   
 })
},1000)


