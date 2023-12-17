window.addEventListener('load', solve);

function solve() {

    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const reviewList = document.getElementById("review-list");
        const publishList = document.getElementById("published-list")

        const title = document.getElementById("post-title");
        const category = document.getElementById("post-category");
        const content = document.getElementById("post-content");

        const titleValue = title.value;
        const categoryValue = category.value;
        const contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return
        }

        // publishBtn.setAttribute("disabled", true);

        const liEl = document.createElement("li");
        liEl.classList.add("rpost");

        const postArticle = document.createElement("article");

        const headerEl = document.createElement("h4")
        headerEl.textContent = `${titleValue}`;

        const categoryPar = document.createElement("p");
        categoryPar.textContent = `Category: ${categoryValue}`;

        const contentPar = document.createElement("p");
        contentPar.textContent = `Content: ${contentValue}`;

        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn", "edit");
        editBtn.textContent = "Edit";

        const approveBtn = document.createElement("button");
        approveBtn.classList.add("action-btn", "approve");
        approveBtn.textContent = "Approve";

        reviewList.appendChild(liEl)
        liEl.appendChild(postArticle)
        postArticle.appendChild(headerEl)
        postArticle.appendChild(categoryPar)
        postArticle.appendChild(contentPar)
        liEl.appendChild(editBtn)
        liEl.appendChild(approveBtn)

        title.value = "";
        category.value = "";
        content.value = "";

        editBtn.addEventListener("click", (e) => {
            title.value = titleValue;
            category.value = categoryValue;
            content.value = contentValue;

            liEl.remove()
        })

        approveBtn.addEventListener("click", (e) => {
            publishList.appendChild(liEl);

            const clearBtn = document.getElementById("clear-btn");
            clearBtn.addEventListener("click", (e) => {
                publishList.innerHTML = ""
            })

            editBtn.remove();
            approveBtn.remove();
        })
    })

}