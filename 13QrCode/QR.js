const container = document.querySelector('.qr-container')
const button =  document.querySelector('.generate')
const message = document.querySelector('.eroor-message')
const inputButton = document.querySelector('.Qr-text')

button.addEventListener('click', ()=>{
  validateInput()
})

function validateInput(){
 
  if(inputButton.value.length > 0){
    generateQrCode()
  }else{
    message.innerHTML = 'Enter text and Use url to generate Qr Code'
  }
  inputButton.value='';
}


function generateQrCode(){
  container.innerHTML= '';
  new QRCode(container,{
    text:  inputButton.value,
    height:400,
    width:400,
    colorLight:'#fff',
    colorDark: '#000'
  })
}

