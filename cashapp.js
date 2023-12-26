const modal = document.getElementById('payment-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.close');
const paymentForm = document.getElementById('payment-form');
const paymentInfoDiv = document.getElementById('payment-info');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const bankDetails = document.getElementById('bank-details').value;
    const generatingButton = document.getElementById('Generate');

    generatingButton.textContent = 'Generating...';

    // Simulate generation of Cash App information (in a real app, this is where you would generate the information)
    setTimeout(() => {
        const cashAppInfo = `Amount: $${amount}<br>Bank Details: ${bankDetails}<br>Cash App: $MideWaveCashApp`;
        paymentInfoDiv.innerHTML = cashAppInfo;
        paymentInfoDiv.style.display = 'block';
        paymentInfoDiv.style.backgroundColor = '#f9f9f9';
        paymentInfoDiv.style.padding = '20px';
        paymentInfoDiv.style.borderRadius = '10px';
        paymentInfoDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        paymentInfoDiv.style.marginTop = '20px';
        paymentInfoDiv.style.textAlign = 'center';

        // Optionally, you can hide the form after generating the information
        paymentForm.style.display = 'none';
    }, 2000);
});

let balance = 1000; // Initial user balance

function buySellGiftCard() {
    let cardType = prompt("Enter 'buy' for buying gift card or 'sell' for selling gift card:");
    let amount = parseFloat(prompt("Enter the amount:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return;
    }

    if (cardType === "buy") {
        // Logic for buying gift card
        // Assume the cost of a gift card is 50% of the face value
        let cost = amount * 0.5;
        if (balance >= cost) {
            balance -= cost;
            alert(`Successfully bought gift card worth $${amount}. Remaining balance: $${balance}`);
        } else {
            alert("Insufficient balance to buy this gift card.");
        }
    } else if (cardType === "sell") {
        // Logic for selling gift card
        // Assume the user sells the gift card at face value
        let sellValue = amount;
        balance += sellValue;
        alert(`Successfully sold gift card worth $${amount}. Updated balance: $${balance}`);
    } else {
        alert("Invalid option. Please enter 'buy' or 'sell'.");
    }
}


function buySellGiftCard() {
    // Logic for buying/selling gift cards
    
    console.log("Buying/Selling Gift Card");
}

function tradeCrypto() {
    // Logic for trading crypto to fiat
    console.log("Trading Crypto to Fiat");
}

function claimTokenizedRewards() {
    // Logic for claiming tokenized rewards
    console.log("Claiming Tokenized Rewards");
}

function buyDataAirtime() {
    // Logic for buying data/airtime
    console.log("Buying Data/Airtime");
}

