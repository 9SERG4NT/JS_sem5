// timer.js — contains countdown and session highlight logic

// Import the new formatting function from helper.js
import { formatTime } from './helper.js';

// Function to start a countdown timer
export function startCountdown(duration, display) {
  let time = duration; // time in seconds

  const timer = setInterval(() => {
    // Use the helper function to format the time
    display.textContent = `Next session starts in ${formatTime(time)}`;

    // --- TASK 2: Change color when time < 1 minute ---
    if (time < 60) {
      display.classList.add('warning'); // Add warning class
    } else {
      display.classList.remove('warning'); // Remove warning class
    }
    // --- End of Task 2 ---

    time--; // decrease the timer each second

    // Stop timer when it reaches 0
    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
      display.classList.remove('warning'); // Clean up class
    }
  }, 1000); // executes every 1000 milliseconds (1 second)
}

// Function to highlight the currently active session (no changes)
export function highlightActiveSession() {
  const sessions = document.querySelectorAll('.session');
  const now = new Date();
  const currentHour = now.getHours();

  sessions.forEach(session => {
    const hour = parseInt(session.dataset.time.split(':')[0]);
    if (hour === currentHour) {
      session.classList.add('active');
    } else {
      session.classList.remove('active');
    }
  });
}