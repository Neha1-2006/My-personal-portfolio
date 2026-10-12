
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', () => {
    console.log(`Navigating to ${link.textContent.trim()}`);
  });
});

console.log("Yashaswini A's portfolio is ready!");