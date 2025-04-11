const input = document.getElementById("blank");
const button = document.querySelector(".btn");
const winnerDiv = document.querySelector(".win");
const lossDiv = document.querySelector(".loss");
const message = document.getElementById("message");

// List of winning numbers
const winningNumbers = [10, 20, 25, 30, 45];
let attempts = 10;

// Hide win/loss messages at start
winnerDiv.style.display = "none";
lossDiv.style.display = "none";

button.addEventListener("click", function () {
    const userInput = input.value.trim();

    // Check if input is empty or not a number
    if (userInput === "" || isNaN(userInput)) {
        message.textContent = "❌ Please enter a valid number!";
        message.style.color = "red";
        return;
    }

    const guess = Number(userInput);
    attempts--;

    if (winningNumbers.includes(guess)) {
        winnerDiv.style.display = "block";
        lossDiv.style.display = "none";
        message.textContent = `🎉 You Win! ${guess} is a lucky number.`;
        message.style.color = "green";
        button.disabled = true;
    } else if (attempts === 0) {
        lossDiv.style.display = "block";
        winnerDiv.style.display = "none";
        message.textContent = `😢 Game Over! Lucky numbers were ${winningNumbers.join(", ")}`;
        message.style.color = "red";
        button.disabled = true;
    } else {
        message.textContent = `❌ ${guess} is not lucky. Attempts left: ${attempts}`;
        message.style.color = "blue";
    }

    input.value = "";
});

