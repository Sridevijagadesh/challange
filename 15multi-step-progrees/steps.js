const progess = document.querySelector('.progress')
const iconWrapper = document.querySelectorAll('.icon-wrapper')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


let currentStep = 1;

nextBtn.addEventListener('click',()=>{
  console.log('added')
  if(currentStep < iconWrapper.length){
    currentStep++
  }
  hadleclickevent()
})
prevBtn.addEventListener('click',()=>{

  if(currentStep > 1){
    currentStep--
  }
  hadleclickevent()
})

function hadleclickevent(){
  iconWrapper.forEach((item , index)=>{
    if(index < currentStep){
      item.classList.add("active")
    }
    else{
      item.classList.remove("active")
    }
  })
  progess.style.width = ((currentStep-1)/ (iconWrapper.length-1)*100 +"%")

  if(currentStep ===1){
    prevBtn.disabled = true
  }
  else if(currentStep === iconWrapper.length){
    nextBtn.disabled = true
  }else{
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
  console.log(currentStep)
  console.log(iconWrapper.length)
}
