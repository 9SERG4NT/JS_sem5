// main.js

// Import functions from timer.js and ui.js modules
import { startCountdown, highlightActiveSession } from './timer.js';
// Import the new function from ui.js
import { handleViewportChange, addDynamicSessions, initAddSessionButton } from './ui.js';

// Select the countdown display element from the DOM
const countdownDisplay = document.getElementById('countdown');

// Start countdown (e.g., 2 minutes = 120 seconds for testing)
startCountdown(120, countdownDisplay);

// Highlight the active session every minute automatically
setInterval(highlightActiveSession, 60000);
highlightActiveSession(); // run once immediately on load

// Handle screen resizing for responsive behavior
window.addEventListener('resize', handleViewportChange);
handleViewportChange(); // run on page load as well

// Enable event delegation on session elements
addDynamicSessions();

// --- TASK 1: Initialize the 'Add Session' button ---
initAddSessionButton();
// --- End of Task 1 ---