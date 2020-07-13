console.log('it works');
//To day now
const postList = document.querySelector('#post-list');
const hideButton = document.querySelector("#show-form");
const formCard = document.querySelector("#form-card");
const formElement = document.querySelector("#post-form");
const textareaErrorMassage = document.querySelector("#error-message");
const deleteButton = document.querySelector(".btn-delete");

const toggleForm = () => {
  if (formCard.classList.contains('hidden')){
     formCard.classList.remove('hidden');
     hideButton.textContent = "Hide form";
   } else {
     formCard.classList.add("hidden");
     hideButton.textContent = "Add a post";
   }
 }

const createElement = (form) => {

  const imgSrc = form.postImg.value;
  const postTitle = form.postTitle.value;
  const postContent = form.postContent.value;
  const postAuthor = form.postAuthor.value;
  const today = new Date();

  return `
    <div class="card">
      <img class="card-img-top" src="${imgSrc}" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">${postTitle} <small>by ${postAuthor}</small> </h5>
        <p class="card-text">${postContent}</p>
        <button type="button" class="btn btn-sm btn-light btn-delete">Delete Entry</button>
      </div>
      <div class="card-footer text-muted">
        ${today.toLocaleDateString()}
      </div>
    </div>
  `;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const postContent = form.postContent;
  const numberOfWords = postContent.value.split(' ').length;

  if (numberOfWords < 20) {
    postContent.classList.add("is-invalid");
    textareaErrorMassage.classList.remove("hidden");
  } else {
    const newPost = createElement(form);
    postList.insertAdjacentHTML("afterbegin", newPost);

    postContent.classList.remove("is-invalid");
    textareaErrorMassage.classList.add("hidden");
  }
  form.reset();
};

formElement.addEventListener("submit", handleSubmit);

const deletePost = (e) => {
  if (e.target.classList.contains('btn-delete')) {
    const deleteBtn = e.target;
    deleteBtn.closest('.card').remove();
  }
}

//Event delegation
document.addEventListener("click", deletePost);

hideButton.addEventListener('click', toggleForm);
