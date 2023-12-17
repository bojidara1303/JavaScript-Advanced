window.addEventListener('load', solution);

function solution() {

  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const employeeEl = document.getElementById("employee");
    const categoryEl = document.getElementById("category");
    const urgencyEl = document.getElementById("urgency");
    const teamEl = document.getElementById("team");
    const descriptionEl = document.getElementById("description");

    const employee = employeeEl.value;
    const category = categoryEl.value;
    const urgency = urgencyEl.value;
    const team = teamEl.value;
    const description = descriptionEl.value;

    if (!employee || !category || !urgency || !team || !description) {
      return
    }

    addBtn.setAttribute("disabled", true)

    const previewList = document.querySelector(".preview-list");

    const liEl = document.createElement("li");
    liEl.classList.add("problem-content");

    const articleEl = document.createElement("article");

    const employeeParagraph = document.createElement("p");
    employeeParagraph.textContent = `From ${employee}`;

    const categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = `Category: ${category}`;

    const urgencyParagraph = document.createElement("p");
    urgencyParagraph.textContent = `Urgency: ${urgency}`;

    const teamParagraph = document.createElement("p");
    teamParagraph.textContent = `Assigned to: ${team}`;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = `Description: ${description}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => {
      employeeEl.value = employee;
      categoryEl.value = category;
      urgencyEl.value = urgency;
      teamEl.value = team;
      descriptionEl.value = description;

      liEl.remove();
      addBtn.removeAttribute("disabled")
    })

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", moveToPending)


    previewList.appendChild(liEl);
    liEl.appendChild(articleEl);

    articleEl.appendChild(employeeParagraph)
    articleEl.appendChild(categoryParagraph)
    articleEl.appendChild(urgencyParagraph)
    articleEl.appendChild(teamParagraph)
    articleEl.appendChild(descriptionParagraph)
    liEl.appendChild(editBtn)
    liEl.appendChild(continueBtn)


    employeeEl.value = "";
    categoryEl.value = "";
    urgencyEl.value = "";
    teamEl.value = "";
    descriptionEl.value = "";

    const resolveBtn = document.createElement("button");
    const resolvedList = document.getElementsByClassName("resolved-list")[0];
    const clearBtn = document.createElement("button");

    function moveToPending(e) {
      const pendingList = document.getElementsByClassName("pending-list")[0];
      pendingList.appendChild(liEl);

      resolveBtn.classList.add("resolve-btn");
      resolveBtn.textContent = "Resolved";
      resolveBtn.addEventListener("click", moveToResolved)

      continueBtn.remove()
      editBtn.remove()

      liEl.appendChild(resolveBtn)
    }

    function moveToResolved(e) {
      resolvedList.appendChild(liEl);

      clearBtn.classList.add("clear-btn");
      clearBtn.textContent = "Clear";
      clearBtn.addEventListener("click", clearHandler)

      liEl.removeChild(resolveBtn)
      liEl.appendChild(clearBtn)
    }

    function clearHandler(e) {
      resolvedList.innerHTML = "";
      clearBtn.remove()
    }

  })

}




