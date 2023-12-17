window.addEventListener("load", solve)

function solve() {

    const publishBtn = document.getElementById("publish");
    publishBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const tableBody = document.getElementById("table-body");
        const carsList = document.getElementById("cars-list");
        const totalProfit = document.getElementById("profit")

        const makeEl = document.getElementById("make")
        const modelEl = document.getElementById("model");
        const yearEl = document.getElementById("year");
        const fuelEl = document.getElementById("year");
        const originalCostEl = document.getElementById("original-cost");
        const sellingPriceEl = document.getElementById("selling-price");

        const make = makeEl.value;
        const model = modelEl.value;
        const year = yearEl.value;
        const fuel = fuelEl.value;
        const originalCost = originalCostEl.value;
        const sellingPrice = sellingPriceEl.value;

        if (make == "" || model == "" || year == "" || fuel == "" || originalCost == "" || sellingPrice == "" || (originalCost > sellingPrice)) {
            return
        }

        const tableRow = document.createElement("tr");
        tableRow.classList.add("row");

        const makeTd = document.createElement("td");
        makeTd.textContent = `${make}`;

        const modelTd = document.createElement("td");
        modelTd.textContent = `${model}`;

        const yearTd = document.createElement("td");
        yearTd.textContent = `${year}`;

        const fuelTd = document.createElement("td");
        fuelTd.textContent = `${fuel}`;

        const originalCostTd = document.createElement("td");
        originalCostTd.textContent = `${originalCost}`;

        const sellingPriceTd = document.createElement("td");
        sellingPriceTd.textContent = `${sellingPrice}`;

        const buttonsTd = document.createElement("td")

        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn")
        editBtn.classList.add("edit")
        // editBtn.classList.add("action-btn", "edit")
        editBtn.textContent = "Edit";

        const sellBtn = document.createElement("button");
        sellBtn.classList.add("action-btn");
        sellBtn.classList.add("sell")
        sellBtn.textContent = "Sell"


        tableBody.appendChild(tableRow);
        tableRow.appendChild(makeTd)
        tableRow.appendChild(modelTd)
        tableRow.appendChild(yearTd)
        tableRow.appendChild(fuelTd)
        tableRow.appendChild(originalCostTd)
        tableRow.appendChild(sellingPriceTd)
        tableRow.appendChild(buttonsTd)
        buttonsTd.appendChild(editBtn)
        buttonsTd.appendChild(sellBtn)


        makeEl.value = "";
        modelEl.value = "";
        yearEl.value = "";
        fuelEl.value = "";
        originalCostEl.value = "";
        sellingPriceEl.value = "";

        editBtn.addEventListener("click", editCar);
        function editCar(e) {
            makeEl.value = make;
            modelEl.value = model;
            yearEl.value = year;
            fuelEl.value = fuel;
            originalCostEl.value = originalCost;
            sellingPriceEl.value = sellingPrice;

            tableRow.remove()
        }

        sellBtn.addEventListener("click", sellCar);

        const priceDifferene = Number(sellingPrice - originalCost);

        const carLiEl = document.createElement("li")
        carLiEl.classList.add("each-list")

        const makeModelSpan = document.createElement("span")
        makeModelSpan.textContent = `${make} ${model}`;

        const yearSpan = document.createElement("span");
        yearSpan.textContent = `${year}`;

        const differenceSpan = document.createElement("span");
        differenceSpan.textContent = `${priceDifferene}`;

        function sellCar(e) {
            carsList.appendChild(carLiEl)
            carLiEl.appendChild(makeModelSpan)
            carLiEl.appendChild(yearSpan)
            carLiEl.appendChild(differenceSpan)

            tableRow.remove();
            totalProfit.textContent = (Number(totalProfit.textContent)+(sellingPrice - originalCost)).toFixed(2);
            
            editBtn.remove();
            sellBtn.remove()
        }

    })

}