window.addEventListener('load', solve);

function solve() {
    const addEventBtn = document.getElementById("add-btn")
    addEventBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const timeEl = document.getElementById("time")
        const dateEl = document.getElementById("date")
        const placeEl = document.getElementById("place")
        const eventEl = document.getElementById("event-name")
        const emailEl = document.getElementById("email")

        const time = timeEl.value;
        const date = dateEl.value;
        const place = placeEl.value;
        const event = eventEl.value;
        const email = emailEl.value;

        if (time == "" || date == "" || place == "" || event == "" || email == "") {
            return
        }

        addEventBtn.setAttribute("disabled", true)

        const lastCheck = document.getElementById("check-list");

        const eventLiEl = document.createElement("li");
        eventLiEl.classList.add("event-content");

        const eventArticle = document.createElement("article");
        const timeAndDateParagraph = document.createElement("p");
        timeAndDateParagraph.textContent = `Begins: ${date} at: ${time}`;

        const placeParagraph = document.createElement("p");
        placeParagraph.textContent = `In: ${place}`;

        const eventParagraph = document.createElement("p");
        eventParagraph.textContent = `Event: ${event}`;

        const emailParagraph = document.createElement("p");
        emailParagraph.textContent = `Contact: ${email}`;

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit"
        editBtn.addEventListener("click", (e) => {
            timeEl.value = time;
            dateEl.value = date;
            placeEl.value = place;
            eventEl.value = event;
            emailEl.value = email;

            eventLiEl.remove();
            addEventBtn.removeAttribute("disabled")
        })

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue"
        continueBtn.addEventListener("click", (e) => {
            const upcomingList = document.getElementById("upcoming-list")
            upcomingList.appendChild(eventLiEl);

            const moveBtn = document.createElement("button");
            moveBtn.classList.add("finished-btn");
            moveBtn.textContent = "Move to Finished"
            moveBtn.addEventListener("click", (e) => {
                const finishedList = document.getElementById("finished-list");
                finishedList.appendChild(eventLiEl);

                const clearBtn = document.getElementById("clear");
                clearBtn.addEventListener("click", (e) => {
                    finishedList.remove()
                })

                moveBtn.remove();
            })

            upcomingList.appendChild(moveBtn);

            addEventBtn.removeAttribute("disabled")
            editBtn.remove();
            continueBtn.remove();
        })

        lastCheck.appendChild(eventLiEl);
        eventLiEl.appendChild(eventArticle);

        eventArticle.appendChild(timeAndDateParagraph);
        eventArticle.appendChild(placeParagraph);
        eventArticle.appendChild(eventParagraph);
        eventArticle.appendChild(emailParagraph);

        eventLiEl.appendChild(editBtn);
        eventLiEl.appendChild(continueBtn);

        timeEl.value = "";
        dateEl.value = "";
        placeEl.value = "";
        eventEl.value = "";
        emailEl.value = "";


    })

}




