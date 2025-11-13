const categories = ['All' , 'men' , 'women' , 'kids']

const content = [
  {
    id: 'men',
    label: 'men shirt 1'
  },
  {
    id: 'men',
    label: 'men shirt 2'
  },
  {
    id: 'men',
    label: 'men shirt 3'
  },
  {
    id: 'men',
    label: 'men shirt 4'
  },
  {
    id:'women',
    label: 'WOMEN dress1'
  },
  {
    id:'women',
    label: 'WOMEN dress5'
  },
  {
    id:'women',
    label: 'WOMEN dress2'
  },
  {
    id:'women',
    label: 'WOMEN dress3'
  },
  {
    id:'women',
    label: 'WOMEN dress4'
  },
  {
    id:'kids',
    label: 'kids dress1'
  },
  {
    id:'kids',
    label: 'kids dress2'
  },
  {
    id:'kids',
    label: 'kids dress3'
  }, {
    id:'kids',
    label: 'kids dress4'
  },
];



const filter = document.querySelector('.Filter-buttons-wrapper')
const contentButton = document.querySelector('.content')

function createCategories(){
categories.forEach(categories=>{
  const buttonsElement = document.createElement('button')
  buttonsElement.innerHTML = categories
  buttonsElement.classList.add('filter')
  buttonsElement.setAttribute('data-filter' , categories)

  filter.appendChild(buttonsElement)
})
}
function createContent(){
  content.forEach(contentItem=>{
    const divElement = document.createElement('div')
    divElement.classList.add('card' , contentItem.id)
    divElement.innerHTML=contentItem.label
  

    contentButton.appendChild(divElement)
  })
}
createCategories()
createContent()

const AllfilterButton = document.querySelectorAll('.filter')
const cards = document.querySelectorAll('.card')


function filterCard(currentButton , cards){
cards.forEach(item=>{
  const isShowFilter = currentButton.toLowerCase()==='all';
  const isItemFilter = !item.classList.contains(currentButton)
  console.log(isItemFilter)
  // console.log(isShowFilter)

  if(isItemFilter && !isShowFilter){
    item.classList.add('hide')
  }else{
    item.classList.remove('hide')
  }
})
}

AllfilterButton.forEach(button=>{
   button.addEventListener('click',()=>{
    const currentButton = button.dataset.filter
    console.log(currentButton)
    filterCard(currentButton, cards)
   })
})

