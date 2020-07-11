console.log('it works');

const postList = document.querySelector('#post-list');
const blogList = document.querySelector(".card");
const submitButton = document.querySelector(".btn-primary");
const titleInput = document.querySelector("#postTitle");
const contentTextarea = document.querySelector("#postContent");
const divTextarea = document.querySelector("#error-message")
const imgInput = document.querySelector("#postImg");
const authorInput = document.querySelector("#new-post-author");
const formReset = document.querySelector("#post-form");
const hideButton = document.querySelector("#show-form");
const formCard = document.querySelector("#form-card");
const deleteButton = document.querySelector(".btn-delete");

submitButton.addEventListener("click", ($event) => {
    $event.preventDefault();
    const newPost = document.createElement('div');
    newPost.classList.add('card');

    const newPostImg = document.createElement('img');
    newPostImg.classList.add("card-img-top");
    newPostImg.setAttribute("src", imgInput.value);
    newPostImg.setAttribute("alt", "nice image");

    const maindiv = document.createElement("div");
    maindiv.classList.add("card-body");

    const newPostHeading = document.createElement('h5');
    newPostHeading.classList.add('card-title');
    newPostHeading.textContent = titleInput.value  +  authorInput.value ;

    const newPostContent = document.createElement('p');
    newPostContent.classList.add("card-text");
    newPostContent.textContent = contentTextarea.value;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "btn-light", "btn-delete");
    deleteButton.textContent = "Delete entry";

    const divFooter = document.createElement("div");
    divFooter.classList.add("card-footer", "text-muted");
    const today = new Date();
    const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    divFooter.textContent = date; 

    newPost.appendChild(newPostImg);
    newPost.appendChild(maindiv);
    maindiv.appendChild(newPostHeading);
    maindiv.appendChild(newPostContent);
    maindiv.appendChild(deleteButton);
    newPost.appendChild(divFooter);

    blogList.insertAdjacentElement("beforebegin", newPost);

    formReset.reset();
});

function hideForm() {
    if (formCard.style.display === 'block') {
        formCard.style.display = 'none';
        hideButton.textContent = 'Add a post';
    } else {
       formCard.style.display = 'block';
       hideButton.textContent = 'Hide form';
    }
}

hideButton.addEventListener('click', hideForm);

contentTextarea.addEventListener('input', (event) => {
    // if length <= 6 && >= 12 
    if (event.target.value.length < 20) {
      // add class
      contentTextarea.classList.add("is-invalid");
      divTextarea.style.display = "block";
    } else {
      // remove class
      contentTextarea.classList.remove("is-invalid");
      divTextarea.style.display = "none";
    }
  });

deleteButton.addEventListener("click", ($event) => {
    $event.currentTarget.preventElement.remove();
});