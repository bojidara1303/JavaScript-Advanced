window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const totalPrice = document.querySelector(".total-price");
        const furnitureList = document.getElementById("furniture-list")

        const model = document.getElementById("model");
        const year = document.getElementById("year");
        const description = document.getElementById("description");
        const price = document.getElementById("price");

        const modelValue = model.value;
        const yearValue = year.value;
        const descriptionValue = description.value;
        const priceValue = price.value;

        if (!modelValue || !yearValue || !descriptionValue || !priceValue || priceValue < 0 || yearValue < 0) {
            return
        };

        const infoTr = document.createElement("tr");
        infoTr.classList.add("info");

        const modelTd = document.createElement("td");
        modelTd.textContent = modelValue;

        const priceTd = document.createElement("td");
        priceTd.textContent = Number(priceValue).toFixed(2);

        const buttonTd = document.createElement("td");

        const moreBtn = document.createElement("button");
        moreBtn.classList.add("moreBtn");
        moreBtn.textContent = "More Info";

        const buyBtn = document.createElement("button");
        buyBtn.classList.add("buyBtn");
        buyBtn.textContent = "Buy it";

        const hideTr = document.createElement("tr");
        hideTr.classList.add("hide");
        

        const yearTd = document.createElement("td");
        yearTd.textContent = `Year: ${yearValue}`;

        const descriptionTd = document.createElement("td");
        descriptionTd.colSpan = 3;
        descriptionTd.textContent = `Description: ${descriptionValue}`;

        furnitureList.appendChild(infoTr)
        infoTr.appendChild(modelTd)
        infoTr.appendChild(priceTd)
        infoTr.appendChild(buttonTd)
        buttonTd.appendChild(moreBtn)
        buttonTd.appendChild(buyBtn)
        furnitureList.appendChild(hideTr)
        hideTr.appendChild(yearTd)
        hideTr.appendChild(descriptionTd)


        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";

        moreBtn.addEventListener("click", (e) => {
            // hideTr.style("display", "contents")
            if (moreBtn.textContent == 'More Info') {
                moreBtn.textContent = 'Less Info';
                hideTr.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                hideTr.style.display = 'none';
            }

        })

        buyBtn.addEventListener("click", (e) => {
            infoTr.remove();

            let currentTotal = Number(totalPrice.textContent);
            totalPrice.textContent = (currentTotal + Number(priceValue)).toFixed(2);
        });
    })

}