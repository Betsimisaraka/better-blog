console.log('it works');

const postList = document.querySelector('#post-list');
const blogList = document.querySelector(".card");
const submitButton = document.querySelector(".btn-primary");
const titleInput = document.querySelector("#postTitle");
const contentTextarea = document.querySelector("#postContent");
const imgInput = document.querySelector("#postImg");
const authorInput = document.querySelector("#new-post-author");
const formReset = document.querySelector("#post-form");

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
    newPostHeading.textContent = titleInput.value  +  authorInput.value;

    const newPostContent = document.createElement('p');
    newPostContent.classList.add("card-text");
    newPostContent.textContent = contentTextarea.value;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "btn-light", "btn-delete");
    deleteButton.textContent = "Delete entry";

    newPost.appendChild(newPostImg);
    newPost.appendChild(maindiv);
    maindiv.appendChild(newPostHeading);
    maindiv.appendChild(newPostContent);
    maindiv.appendChild(deleteButton);

    console.log(newPost);

    blogList.insertAdjacentElement("beforebegin", newPost);

    formReset.reset();
});


