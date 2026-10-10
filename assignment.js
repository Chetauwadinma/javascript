const btn = document.getElementById("AdviceBtn");
const adviceText = document.getElementById("AdviceText");
const card = document.getElementById("AdviceCard");

// Function to generate a random hex color code
const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

const getAdvice = async () => {
  try {
    adviceText.innerText = "Fetching wisdom...";

    // 1. Fetch random advice from Advice Slip API
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // 2. Extract advice text from the returned JSON object
    adviceText.innerText = `"${data.slip.advice}"`;

    // 3. Dynamically change the top border color of the card
    card.style.borderColor = getRandomColor();

  } catch (error) {
    console.log("Error fetching advice:", error);
    adviceText.innerText = "Failed to load advice. Try again!";
  }
};

// Event listener (triggers on click)
btn.addEventListener("click", getAdvice);

// Initial call on page load
getAdvice();