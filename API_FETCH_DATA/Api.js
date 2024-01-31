const  postListContainer = document.querySelector('.posts-list-container')



function fetchusingXHR(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = ()=>{
    if(xhr.status === 200){
      displayResult(xhr.response)
    }
    else{
      console.log('some error occured')
    }
  }
  function displayResult(posts){
    postListContainer.innerHTML = posts.map(postItem=>`
    <div class = 'post-item'>
     <h3>${postItem.title}</h3>
     <p>${postItem.body}</p>
    </div>
    `).join(' ')

  }
  
}
fetchusingXHR();



