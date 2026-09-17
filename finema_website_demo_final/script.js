const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("interestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const message = document.getElementById("formMessage");

  message.textContent = `Thank you${name ? ", " + name : ""}. This is a front-end demonstration; no application was sent.`;
  event.target.reset();
});


// Replace this placeholder with Finema's verified WhatsApp number,
// including the country code and excluding the + sign and spaces.
// Example format: 2567XXXXXXXX
const whatsappNumber = "256759282045";
const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (whatsappNumber === "REPLACE_WITH_OFFICIAL_NUMBER") {
    alert("Please add Finema's verified WhatsApp number in script.js before publishing.");
    return;
  }

  const message = encodeURIComponent(
    "Hello Finema Real Estates Group Ltd, I would like to learn more about your services."
  );

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});
