window.addEventListener('load', solve);

function solve() {

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const reservationInfo = document.querySelector(".info-list");
        const confirmList = document.querySelector(".confirm-list");
        const verificationEl = document.getElementById("verification")

        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const dateIn = document.getElementById("date-in");
        const dateOut = document.getElementById("date-out");
        const peopleCount = document.getElementById("people-count");

        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const dateInValue = dateIn.value;
        const dateOutValue = dateOut.value;
        const peopleCountValue = peopleCount.value;

        if (!firstNameValue || !lastNameValue || !dateInValue || !dateOutValue || !peopleCountValue || dateInValue > dateOutValue) {
            return
        };

        nextBtn.setAttribute("disabled", true);

        const liEl = document.createElement("li");
        liEl.classList.add("reservation-content");

        const reservationArticle = document.createElement("article");

        const nameHeading = document.createElement("h3");
        nameHeading.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

        const fromDatePar = document.createElement("p");
        fromDatePar.textContent = `From date: ${dateInValue}`;

        const toDatePar = document.createElement("p");
        toDatePar.textContent = `To date: ${dateOutValue}`;

        const peopleCountPar = document.createElement("p");
        peopleCountPar.textContent = `For ${peopleCountValue} people`;

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";

        reservationInfo.appendChild(liEl);
        liEl.appendChild(reservationArticle);
        reservationArticle.appendChild(nameHeading);
        reservationArticle.appendChild(fromDatePar);
        reservationArticle.appendChild(toDatePar);
        reservationArticle.appendChild(peopleCountPar);
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);

        firstName.value = "";
        lastName.value = "";
        dateIn.value = "";
        dateOut.value = "";
        peopleCount.value = "";

        editBtn.addEventListener("click", (e) => {
            e.preventDefault();
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            dateIn.value = dateInValue;
            dateOut.value = dateOutValue;
            peopleCount.value = peopleCountValue;

            nextBtn.removeAttribute("disabled");
            liEl.remove()
        });

        continueBtn.addEventListener("click", (e) => {
            confirmList.appendChild(liEl);

            const confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";
            confirmBtn.addEventListener("click", (e) => {
                verificationEl.classList.add("reservation-confirmed");
                verificationEl.textContent = "Confirmed.";

                nextBtn.removeAttribute("disabled");
                liEl.remove()
            });

            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", (e) => {
                verificationEl.classList.add("reservation-cancelled");
                verificationEl.textContent = "Cancelled.";

                nextBtn.removeAttribute("disabled");
                liEl.remove()
            });

            editBtn.remove();
            continueBtn.remove();

            liEl.appendChild(confirmBtn)
            liEl.appendChild(cancelBtn)
        });


    });

}





