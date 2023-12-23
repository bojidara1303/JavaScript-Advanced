window.addEventListener('load', solution);

function solution() {
    const submitBtn = document.getElementById("submitBTN");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const infoPreviewList = document.getElementById("infoPreview");
        const editBtn = document.getElementById("editBTN");
        const continueBtn = document.getElementById("continueBTN");

        const fullName = document.getElementById("fname");
        const email = document.getElementById("email");
        const phoneNum = document.getElementById("phone");
        const address = document.getElementById("address");
        const postalCode = document.getElementById("code");

        const fullNameValue = fullName.value;
        const emailValue = email.value;
        const phoneNumValue = phoneNum.value;
        const addressValue = address.value;
        const postalCodeValue = postalCode.value;

        if (!fullNameValue || !emailValue || !phoneNumValue || !addressValue || !postalCodeValue) {
            return
        };

        submitBtn.setAttribute("disabled", true);
        editBtn.removeAttribute("disabled");
        continueBtn.removeAttribute("disabled");

        const nameLi = document.createElement("li");
        nameLi.textContent = `Full Name: ${fullNameValue}`;

        const emailLi = document.createElement("li");
        emailLi.textContent = `Email: ${emailValue}`;

        const phoneLi = document.createElement("li");
        phoneLi.textContent = `Phone Number: ${phoneNumValue}`;

        const addressLi = document.createElement("li");
        addressLi.textContent = `Address: ${addressValue}`;

        const postCodeLi = document.createElement("li");
        postCodeLi.textContent = `Postal Code: ${postalCodeValue}`;

        infoPreviewList.appendChild(nameLi);
        infoPreviewList.appendChild(emailLi);
        infoPreviewList.appendChild(phoneLi);
        infoPreviewList.appendChild(addressLi);
        infoPreviewList.appendChild(postCodeLi);

        const divEl = document.querySelector("#block");

        editBtn.addEventListener("click", (e) => {
            infoPreviewList.removeChild(nameLi);
            infoPreviewList.removeChild(emailLi);
            infoPreviewList.removeChild(phoneLi);
            infoPreviewList.removeChild(addressLi);
            infoPreviewList.removeChild(postCodeLi);
          
            editBtn.setAttribute("disabled", true);
            continueBtn.setAttribute("disabled", true);
            submitBtn.removeAttribute("disabled");

            fullName.value = fullNameValue;
            email.value = emailValue;
            phoneNum.value = phoneNumValue;
            address.value = addressValue;
            postalCode.value = postalCodeValue;
        });

        continueBtn.addEventListener("click", (e) => {
            divEl.innerHTML = "";

            const headingEl = document.createElement("h3");
            headingEl.textContent = "Thank you for your reservation!";
            divEl.appendChild(headingEl)
        })

        fullName.value = "";
        email.value = "";
        phoneNum.value = "";
        address.value = "";
        postalCode.value = "";
    })

}