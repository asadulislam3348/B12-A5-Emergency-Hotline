// ---------------- Navbar Elements ----------------
const heartCountEl = document.getElementById("nav-love"); // ❤️ Count
const coinCountEl = document.querySelector(".coin"); // 💰 Coin
const copyCountEl = document.querySelector(".copy-btn"); // 📋 Copy Count

let coins = 100;
let heartCount = 0;
let copyCount = 0;

// ---------------- Heart Buttons ----------------
const loveBtns = document.querySelectorAll(".love");
loveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.innerText = heartCount;
  });
});

// ---------------- Copy Buttons ----------------
const copyBtns = document.querySelectorAll(".copy");
copyBtns.forEach((btn) => {
  btn.closest("button").addEventListener("click", () => {
    const card = btn.closest(".card");
    const number = card.querySelector("p.font-bold").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number);

    // Update counter
    copyCount++;
    copyCountEl.innerText = copyCount + " Copy";

    alert("Copied: " + number);
  });
});

// ---------------- Call Buttons ----------------
const callBtns = document.querySelectorAll(".fa-phone");
const historySection = document.querySelector(
  ".history"
);

callBtns.forEach((btn) => {
  btn.closest("button").addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    const card = btn.closest(".card");
    const serviceName = card.querySelector("h1").innerText;
    const number = card.querySelector("p.font-bold").innerText;

    // Alert user
    alert(`Calling ${serviceName} at ${number}`);

    // Reduce coins
    coins -= 20;
    coinCountEl.innerText = coins;

    // Add to history with current time
    const currentTime = new Date().toLocaleTimeString();
    const newEntry = document.createElement("p");
    newEntry.innerText = `${serviceName} - ${number} at ${currentTime}`;
    historySection.appendChild(newEntry);
  });
});

// -------Clear History --------- 
const clearBtn = historySection.querySelector("button");
clearBtn.addEventListener("click", () => {
  // শুধুমাত্র header রেখে বাকি clear হবে
  historySection.innerHTML = `
        <div class="flex justify-between">
            <h1><i class="fa-solid fa-clock"></i> Call History</h1>
            <button class="text-white border-1 border-[#d4d6d5] border-solid rounded-2xl bg-[#00a63e] w-18 h-8 px-0.5">Clear</button>
        </div>
   `;
});
