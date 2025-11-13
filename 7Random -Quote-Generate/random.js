const quote = document.querySelector('.Quote-wrapper');


const refreshBtn = document.querySelector('.refresh')

  function randomQuote(){
  fetch('https://api.quotable.io/quotes/random')
  .then((response)=> response.json())
  .then((results)=> displayResult(results[0]))
  .catch((e)=> console.log(e))
  

  }

  function displayResult(getElement){
    console.log(getElement)
    quote.innerHTML = `
    <div class= "quote-item">
    <p>${getElement.author}<p>
    <p>${getElement.content}<p>
    <p>${getElement.dateAdded}<p>
    <p>${getElement.tags}<p>
    </div>
    `
  }
 randomQuote();


 refreshBtn.addEventListener('click', ()=>{
  randomQuote();
 })