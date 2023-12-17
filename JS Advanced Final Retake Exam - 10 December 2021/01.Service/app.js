window.addEventListener('load', solve);

function solve() {

    const sendFormBtn = document.querySelector('button[type="submit"]');
    sendFormBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const receivedOrders = document.getElementById("received-orders");
        const completedOrders = document.getElementById("completed-orders");

        const typeProduct = document.getElementById("type-product");
        const description = document.getElementById("description");
        const clientName = document.getElementById("client-name");
        const clientPhone = document.getElementById("client-phone");

        const typeValue = typeProduct.value;
        const descriptionValue = description.value;
        const clientNameValue = clientName.value;
        const clientPhoneValue = clientPhone.value;

        if (!typeValue || !descriptionValue || !clientNameValue || !clientPhoneValue) {
            return
        };

        const divContainer = document.createElement("div");
        divContainer.classList.add("container");

        const typeHeader = document.createElement("h2");
        typeHeader.textContent = `Product type for repair: ${typeValue}`;

        const clientInfoHeader = document.createElement("h3");
        clientInfoHeader.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        const descriptionHeader = document.createElement("h4");
        descriptionHeader.textContent = `Description of the problem: ${descriptionValue}`;

        const startRepairBtn = document.createElement("button");
        startRepairBtn.classList.add("start-btn");
        startRepairBtn.textContent = "Start repair";

        const finishRepairBtn = document.createElement("button");
        finishRepairBtn.classList.add("finish-btn");
        finishRepairBtn.textContent = "Finish repair";
        finishRepairBtn.setAttribute("disabled", true)

        receivedOrders.appendChild(divContainer);
        divContainer.appendChild(typeHeader);
        divContainer.appendChild(clientInfoHeader);
        divContainer.appendChild(descriptionHeader);
        divContainer.appendChild(startRepairBtn);
        divContainer.appendChild(finishRepairBtn);

        typeProduct.value = "";
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";

        startRepairBtn.addEventListener("click", (e) => {
            finishRepairBtn.removeAttribute("disabled");
            startRepairBtn.setAttribute("disabled", true);
        });

        finishRepairBtn.addEventListener("click", (e) => {
            completedOrders.appendChild(divContainer);

            const clearBtn = document.querySelector(".clear-btn");
            clearBtn.addEventListener("click", (e) => {
                completedOrders.innerHTML = ""
            })

            startRepairBtn.remove();
            finishRepairBtn.remove();
        })
    })
}