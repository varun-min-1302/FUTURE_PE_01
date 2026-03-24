// MAIN FUNCTIONALITY LOGIC FOR GLOWUP SALON WEBSITE

// 1. Tone-based content system
const content = {
  premium: {
    hero: "Experience Luxury Beauty at GlowUp Salon",
    cta: "Book Your Exclusive Session"
  },
  friendly: {
    hero: "Look Beautiful Every Day with GlowUp",
    cta: "Book Your Appointment Now"
  },
  luxury: {
    hero: "Indulge in Elite Beauty Experiences",
    cta: "Reserve Your Luxury Experience"
  }
};

// 2. Tone Switcher
function changeTone(tone) {
  document.getElementById("heroText").innerText = content[tone].hero;
  document.getElementById("ctaBtn").innerText = content[tone].cta;
}

// 3. Booking Form Validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  document.getElementById("successMsg").innerText = "Booking Confirmed!";
  return false;
}

// 4. Service Selection
function updateService(service) {
  document.getElementById("serviceText").innerText =
    "You selected: " + service;
}