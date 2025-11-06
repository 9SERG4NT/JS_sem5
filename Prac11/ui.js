// ui.js — handles dynamic UI and responsive design behavior

// Import the logger from the helper module
import { logEvent } from './helper.js';

// Function to change layout based on screen size
export function handleViewportChange() {
  // Original background color logic
  if (window.innerWidth < 600) {
    document.body.style.background = '#f0f8ff';
  } else {
    document.body.style.background = 'white';
  }

  // --- TASK 4: Add responsiveness for font size ---
  if (window.innerWidth < 500) {
    document.body.style.fontSize = '14px'; // Smaller font for small screens
  } else {
    document.body.style.fontSize = '16px'; // Default font size
  }
  // --- End of Task 4 ---
}

// Function to add dynamic behavior (event delegation)
export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  
  sessionsDiv.addEventListener('click', (e) => {
    // Check if clicked element has class "session"
    if (e.target.classList.contains('session')) {
      // --- THIS LINE IS NOW FIXED ---
      alert("You selected: " + e.target.textContent);
      logEvent(`Session clicked: ${e.target.textContent}`);
    }
  });
}

// --- TASK 1: Function to add a new session dynamically ---
export function initAddSessionButton() {
  const btn = document.getElementById('addSessionBtn');
  const sessionsContainer = document.getElementById('sessions');

  btn.addEventListener('click', () => {
    // Use prompt for simple user input
    const time = prompt("Enter session time (HH:MM, e.g., 14:00):");
    const name = prompt("Enter session name (e.g., Python Basics):");

    // Basic validation
    if (time && name && time.includes(':')) {
      const newSession = document.createElement('div');
      newSession.classList.add('session');
      newSession.dataset.time = time; // e.g., "14:00"
      
      // Format the text content
      const hour = time.split(':')[0];
      const displayHour = parseInt(hour) % 12 || 12; // Convert 24h to 12h
      const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM';
      newSession.textContent = `${name} - ${displayHour}:00 ${ampm}`;

      sessionsContainer.appendChild(newSession);
      logEvent(`New session added: ${name}`);
    } else {
      alert("Invalid input. Please try again.");
    }
  });
}
// --- End of Task 1 ---