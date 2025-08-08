const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfZeAzEcLaZjrJvJ0mBtdPTQ8U_lzAaWEIo3BbEMPCqUWHf5dQf5ftW4xZG2iBAgz1azS9rhdSRd_m/pubhtml";

// Fetch and parse CSV data from Google Sheets
async function fetchShayariData() {
  try {
    const response = await fetch(SHEET_CSV_URL);
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error loading Shayari data:", error);
    return [];
  }
}

// Simple CSV parser
function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");
  const data = lines.slice(1).map(line => {
    const values = line.split(",");
    const entry = {};
    headers.forEach((header, i) => {
      entry[header.trim()] = values[i].trim();
    });
    return entry;
  });
  return data;
}

// Use data to display Shayari by language and category
async function loadShayariFromSheet(language, category, containerId) {
  const container = document.getElementById(containerId);
  const allData = await fetchShayariData();

  const filtered = allData.filter(
    item => item.Language === language && item.Category === category
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No Shayari found.</p>";
    return;
  }

  container.innerHTML = "";
  filtered.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.Content;
    container.appendChild(p);
  });
}
