const productContainer = document.querySelector('.product-container');
const loadMoreBtn = document.querySelector('.load-more-btn')


curretload = 0
async function featchingTheProduct(getCurrentStep){
 try{
 const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
  getCurrentStep ===0 ? 0 : getCurrentStep*10
 }`,{
  method:'GET'
 })
 const result = await response.json();
 if(result && result.products){
  displayResult(result.products)
 }
 }catch(e){
  console.log('error')
 }
}
function displayResult(productsList){
 console.log(productsList)

 productsList.forEach(product => {
   const productWrapped = document.createElement('div');
   const productTitle = document.createElement('p');
   const productThumbnail = document.createElement("img");
   const productDescription = document.createElement('p');
   const productPrice = document.createElement('p')

   productTitle.innerHTML = product.title;
   productThumbnail.src = product.thumbnail;
   productDescription.innerHTML = product.description
   productPrice.innerHTML = product.price
   
   productWrapped.classList.add('product-wrapped');
   productTitle.classList.add('product-title');
   productThumbnail.classList.add('product-img');
   productDescription.classList.add('product-desc');
   productPrice.classList.add('product-price');
   
 
  productWrapped.appendChild(productThumbnail)
  productWrapped.appendChild(productTitle)
  productWrapped.appendChild(productPrice)
  productWrapped.appendChild(productDescription)


  productContainer.appendChild(productWrapped)
 });

 
    if (productContainer.children.length === 30){
      loadMoreBtn.setAttribute('disabled' , 'true')
    }

 console.log(productContainer.children.length)
}
featchingTheProduct(curretload)

loadMoreBtn.addEventListener('click',()=>{
  featchingTheProduct((curretload +=1))
 
})