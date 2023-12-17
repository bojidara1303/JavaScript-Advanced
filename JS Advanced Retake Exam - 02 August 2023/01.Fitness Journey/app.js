window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nameEl = document.getElementById("name");
        const emailEl = document.getElementById("email");
        const numEl = document.getElementById("contact-number");
        const classTypeEl = document.getElementById("class-type");
        const classTimeEl = document.getElementById("class-time");

        const name = nameEl.value;
        const email = emailEl.value;
        const num = numEl.value;
        const classType = classTypeEl.value;
        const classTime = classTimeEl.value;

        if (name == "" || email == "" || num == "" || classType == "" || classTime == "") {
            return
        }

        nextBtn.setAttribute("disabled", true);

        const classInfo = document.querySelector(".class-info");

        const classLiElement = document.createElement("li");
        const classArticle = document.createElement("article");

        const namePar = document.createElement("p");
        namePar.textContent = `${name}`;

        const emailPar = document.createElement("p");
        emailPar.textContent = `${email}`;

        const numPar = document.createElement("p");
        numPar.textContent = `${num}`;

        const classTypePar = document.createElement("p");
        classTypePar.textContent = `${classType}`;

        const classTimePar = document.createElement("p");
        classTimePar.textContent = `${classTime}`;

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";

        classInfo.appendChild(classLiElement);
        classLiElement.appendChild(classArticle);
        classArticle.appendChild(namePar)
        classArticle.appendChild(emailPar)
        classArticle.appendChild(numPar)
        classArticle.appendChild(classTypePar)
        classArticle.appendChild(classTimePar)
        classLiElement.appendChild(editBtn)
        classLiElement.appendChild(continueBtn)

        nameEl.value = "";
        emailEl.value = "";
        numEl.value = "";
        classTypeEl.value = "";
        classTimeEl.value = "";

        editBtn.addEventListener("click", edit)
        function edit(e) {
            nameEl.value = name;
            emailEl.value = email;
            numEl.value = num;
            classTypeEl.value = classType;
            classTimeEl.value = classTime;

            classLiElement.remove();
            nextBtn.removeAttribute("disabled")
        }

        continueBtn.addEventListener("click", confirmClass);

        function confirmClass(e) {
            const confirmClassList = document.querySelector(".confirm-class");
            confirmClassList.appendChild(classLiElement);

            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", cancelBtnHandler);

            const confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";
            confirmBtn.addEventListener("click", confirmBtnHandler);


            editBtn.remove();
            continueBtn.remove();

            classLiElement.appendChild(cancelBtn)
            classLiElement.appendChild(confirmBtn)
        }

        function confirmBtnHandler(e) {
            const liEl = document.getElementById("main");
            liEl.remove();

            const bodyEl = document.getElementById("body");
            const h1El = document.createElement("h1");
            h1El.innerHTML = `<h1 id="thank-you">Thank you for scheduling your appointment, we look forward to seeing you!</h1>`;
            bodyEl.appendChild(h1El)
        }

        function cancelBtnHandler(e) {
            classLiElement.remove();
            nextBtn.removeAttribute("disabled");
        }

    })


}




