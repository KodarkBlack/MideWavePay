function animateValue(obj, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
        if(!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if(progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    // We put this in a requestAnimationFrame to make sure that the value is updated before tween
    // starts its animation. Otherwise it would jump from the final value to the initial one.
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("secure-value");
animateValue(obj, 0, 100, 2000);

function animateValue(obk, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
        if(!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obk.innerHTML = Math.floor(progress * (end - start) + start) + "%" ;
        if(progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    // We put this in a requestAnimationFrame to make sure that the value is updated before tween
    // starts its animation. Otherwise it would jump from the final value to the initial one.
    window.requestAnimationFrame(step);
}

const obk = document.getElementById("experience-value");
animateValue(obk, 0, 100, 2000);


// Setting Function

document.addEventListener("DOMContentLoaded", function() {
    const bankNameInput = document.getElementById("bank-name");
    const accountNumberInput = document.getElementById("account-number");
    const accountNameInput = document.getElementById("account-name");
    const saveButton = document.getElementById("save-button");
    const savedBankDetailsDiv = document.getElementById("saved-bank-details");
    // const savedBankName = document.getElementById("saved-bank-name");
    // const savedAccountNumber = document.getElementById("saved-account-number");
    // const savedAccountName = document.getElementById("saved-account-name");

    saveButton.addEventListener("click", function() {
        const bankName = bankNameInput.value;
        const accountNumber = accountNumberInput.value;
        const accountName = accountNameInput.value;

        if (bankName && accountNumber && accountName) {
            // Save bank details to localStorage
            localStorage.setItem("bankName", bankName);
            localStorage.setItem("accountNumber", accountNumber);
            localStorage.setItem("accountName", accountName);

            // Display saved bank details
            displaySavedBankDetails();
        } else {
            alert("Please enter both bank name and account number.");
        }
    });

    const displaySavedBankDetails = () => {
        const savedBankName = localStorage.getItem("bankName");
        const savedAccountNumber = localStorage.getItem("accountNumber");
        const savedAccountName = localStorage.getItem("accountName");

        // Display saved bank details in the element
        savedBankDetailsDiv.textContent = `Bank Name: ${savedBankName}, Account Number: ${savedAccountNumber}, Account Name: ${savedAccountName}`;
        // savedBankName.textContent = `Bank Name: ${savedBankName}`
        // savedAccountNumber.textContent = `Account Number: ${savedAccountNumber}`
        // savedAccountName.textContent = ` Account Name: ${savedAccountName}`
        
    }

    // Display saved bank details when the page loads
    displaySavedBankDetails();
});



