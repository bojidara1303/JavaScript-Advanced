window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.getElementById("form-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const age = document.getElementById("age");
    const gender = document.getElementById("genderSelect");
    const dishDescription = document.getElementById("task");

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const ageValue = age.value;
    const genderValue = gender.value;
    const dishDescriptionValue = dishDescription.value;

    if (firstNameValue == "" || lastNameValue == "" || ageValue == "" || genderValue == "" || dishDescriptionValue == "") {
      return
    }

    submitBtn.setAttribute("disabled", true);

    const inProgress = document.getElementById("in-progress");
    const finishedDishes = document.getElementById("finished")
    const clearBtn = document.getElementById("clear-btn");

    let counter = document.getElementById("progress-count");
    counter.textContent = 0;
    counter.textContent = Number(counter.textContent + 1)

    const dishLiEl = document.createElement("li");
    dishLiEl.classList.add("each-line");

    const dishArticleEl = document.createElement("article");

    const nameHeading = document.createElement("h4");
    nameHeading.textContent = `${firstNameValue} ${lastNameValue}`;

    const ageGenderPar = document.createElement("p");
    ageGenderPar.textContent = `${genderValue}, ${ageValue}`;

    const descriptionPar = document.createElement("p");
    descriptionPar.textContent = `Dish description: ${dishDescriptionValue}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit"

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";

    inProgress.appendChild(dishLiEl);
    dishLiEl.appendChild(dishArticleEl)
    dishArticleEl.appendChild(nameHeading)
    dishArticleEl.appendChild(ageGenderPar)
    dishArticleEl.appendChild(descriptionPar)
    dishLiEl.appendChild(editBtn)
    dishLiEl.appendChild(completeBtn)

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    gender.value = "";
    dishDescription.value = "";

    editBtn.addEventListener("click", editDish);
    function editDish(e) {
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      gender.value = genderValue;
      dishDescription.value = dishDescriptionValue;

      counter.textContent = Number(counter.textContent - 1)


      dishLiEl.remove();
      submitBtn.removeAttribute("disabled");
    }

    completeBtn.addEventListener("click", completeDish)
    function completeDish(e) {
      finishedDishes.appendChild(dishLiEl);
      counter.textContent = Number(counter.textContent - 1)

      editBtn.remove();
      completeBtn.remove();
    }

    clearBtn.addEventListener("click", clearDishes)
    function clearDishes(e) {
      finishedDishes.innerHTML = ""
    }

  })
}
