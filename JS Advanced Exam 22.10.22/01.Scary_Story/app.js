window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const mainSection = document.getElementById("main");

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const age = document.getElementById("age");
    const storyTitle = document.getElementById("story-title");
    const genre = document.getElementById("genre");
    const story = document.getElementById("story");

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const ageValue = age.value;
    const storyTitleValue = storyTitle.value;
    const genreValue = genre.value;
    const storyValue = story.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !genreValue || !storyValue) {
      return
    }

    publishBtn.setAttribute("disabled", true);
    const previewList = document.getElementById("preview-list");

    const storyInfoLi = document.createElement("li")
    storyInfoLi.classList.add("story-info");

    const storyArticle = document.createElement("article");

    const nameHeading = document.createElement("h4");
    nameHeading.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

    const agePar = document.createElement("p");
    agePar.textContent = `Age: ${ageValue}`;

    const titlePar = document.createElement("p");
    titlePar.textContent = `Title: ${storyTitleValue}`;

    const genrePar = document.createElement("p");
    genrePar.textContent = `Genre: ${genreValue}`;

    const storyPar = document.createElement("p");
    storyPar.textContent = `${storyValue}`;

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";

    previewList.appendChild(storyInfoLi);
    storyInfoLi.appendChild(storyArticle);
    storyArticle.appendChild(nameHeading)
    storyArticle.appendChild(agePar)
    storyArticle.appendChild(titlePar)
    storyArticle.appendChild(genrePar)
    storyArticle.appendChild(storyPar)
    storyInfoLi.appendChild(saveBtn);
    storyInfoLi.appendChild(editBtn);
    storyInfoLi.appendChild(deleteBtn);

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "";
    story.value = "";

    editBtn.addEventListener("click", editStory);
    function editStory(e) {
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      genre.value = genreValue;
      story.value = storyValue;

      storyInfoLi.remove();
      publishBtn.removeAttribute("disabled")
    }

    deleteBtn.addEventListener("click", deleteStory)
    function deleteStory(e) {
      publishBtn.removeAttribute("disabled")
      storyInfoLi.remove();
    }

    saveBtn.addEventListener("click", saveStory);
    function saveStory(e) {
      mainSection.innerHTML = "";

      const headerEl = document.createElement("h1");
      headerEl.textContent = "Your scary story is saved!"
      mainSection.appendChild(headerEl)
    }
  })


}
