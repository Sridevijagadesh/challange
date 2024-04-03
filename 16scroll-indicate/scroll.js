const postContainer = document.querySelector('.posts-container')
const progress = document.querySelector('.progress-bar')




async function featchingPostData(){
const response = await fetch('https://dummyjson.com/posts',{
  method:'GET'
})
const result = await response.json()
if(result && result.posts){
  displayResult(result.posts)
}
console.log(result)
}
function displayResult(getElement){

getElement.forEach(element => {
  const postItemWrapper = document.createElement('div')
  postItemWrapper.classList.add('post-itrm-wrapper')

  const postTitle = document.createElement('label')
  postTitle.textContent = element.title

  const postBody = document.createElement('p')
  postBody.textContent = element.body

  const postsTags = document.createElement('div');
  postsTags.textContent = element.tags
  postsTags.classList.add('post-tag')
  postItemWrapper.appendChild(postTitle)
  postItemWrapper.appendChild(postBody)
  postItemWrapper.appendChild(postsTags)

  postContainer.appendChild(postItemWrapper)
});

}
featchingPostData()

window.onscroll = function(){
  handlescroll()
}
function handlescroll(){
  const getscrollFromTop = document.body.scrollTop || 
  document.documentElement.scrollTop
  console.log(getscrollFromTop)
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  console.log(height)
  const pecentage = (getscrollFromTop / height) *100 

  progress.style.width = `${pecentage}%`
}