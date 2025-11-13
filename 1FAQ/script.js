const data = [
  {
    id: 1,
    question: "can i create an accordion component with differ",
    answer: "yes of course, it is very to create an accordion account",
  },
  {
    id: 2,
    question: "can i create an accordion component with differ",
    answer: "yes of course, it is very to create an accordion account",
  },
  {
    id: 3,
    question: "can i create an accordion component with differ",
    answer: "yes of course, it is very to create an accordion account",
  },
  {
    id: 4,
    question: "can i create an accordion component with differ",
    answer: "yes of course, it is very to create an accordion account",
  },
];

//    id:5,
//    question:"can i create an accordion component with differ",
//    answer:"yes of course, it is very to create an accordion account"
//  },]

let createaccount = "";

data.forEach((dataItem) => {
  createaccount += `
       <div class="accordion_item">
       <div class="accordion_title">
   <h3>${dataItem.question}</h3>
   <i class="fa-regular fa-arrow-up"></i>
   </div>
   <div class="accordion_content">
   <p>${dataItem.answer}</p>
   </div>
   </div>
   `;
});
document.querySelector(".js-accordion").innerHTML = createaccount;

const getFaqItem = document
  .querySelectorAll(".accordion_title")
  .forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      } else {
        let getAlreadyAddedActiveClass = document.querySelectorAll(".active");
        getAlreadyAddedActiveClass.forEach((currentActiveClass) => {
          currentActiveClass.classList.remove("active");
        });
        element.classList.add("active");
      }
    });
  });
