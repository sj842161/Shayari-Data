// Local Shayari Data
const shayariData = [
  { language: "Hindi", category: "Suvichar", content: "सफलता का कोई शॉर्टकट नहीं होता।" },
  { language: "Hindi", category: "Love", content: "तेरा नाम लूं जुबां से, यही बात अब आदत बन गई है।" },
  { language: "Marathi", category: "Suvichar", content: "प्रयत्न ही यशाची गुरुकिल्ली आहे." },
  { language: "Marathi", category: "Love", content: "प्रेम म्हणजे दोन जीवांचं एक नातं." },
  { language: "English", category: "Motivational", content: "Push yourself, because no one else is going to do it for you." },
  { language: "English", category: "Love", content: "Love is not what you say. Love is what you do." }
];

// Load Shayari by language & category
function loadShayari(language, category, containerId) {
  const container = document.getElementById(containerId);
  const filtered = shayariData.filter(
    item => item.language === language && item.category === category
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No Shayari found.</p>";
    return;
  }

  container.innerHTML = "";
  filtered.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.content;
    container.appendChild(p);
  });
}
