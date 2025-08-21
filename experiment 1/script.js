let balance = 1000;

function deposit() {
  let amount = parseFloat(document.getElementById("amount").value);
  let message = document.getElementById("message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "⚠️ Please enter a valid deposit amount.";
    message.style.color = "#e74c3c";
    return;
  }

  balance += amount;
  document.getElementById("balance").textContent = balance.toFixed(2);
  message.textContent = `✅ Successfully deposited ₹${amount}`;
  message.style.color = "#27ae60";
  document.getElementById("amount").value = "";
}

function withdraw() {
  let amount = parseFloat(document.getElementById("amount").value);
  let message = document.getElementById("message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "⚠️ Please enter a valid withdrawal amount.";
    message.style.color = "#e74c3c";
    return;
  }

  if (amount > balance) {
    message.textContent = "❌ Insufficient balance!";
    message.style.color = "#e74c3c";
    return;
  }

  balance -= amount;
  document.getElementById("balance").textContent = balance.toFixed(2);
  message.textContent = `💸 Successfully withdrew ₹${amount}`;
  message.style.color = "#f39c12";
  document.getElementById("amount").value = "";
}
