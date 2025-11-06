// helper.js — New module for utility functions

/**
 * Formats a total number of seconds into a MM:SS string.
 * @param {number} totalSeconds - The total seconds to format.
 * @returns {string} A string in "MM:SS" format.
 */
export function formatTime(totalSeconds) {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Add leading zero to seconds if less than 10
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${formattedSeconds}`;
}

/**
 * A simple logger utility (part of Task 3)
 * @param {string} message - The message to log.
 */
export function logEvent(message) {
  console.log(`[LOG] ${new Date().toLocaleTimeString()}: ${message}`);
}