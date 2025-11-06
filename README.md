# Semester 5 JavaScript Lab Practicals

This repository contains all the practicals performed for the Semester 5 JavaScript lab. Each folder represents a single practical, demonstrating key concepts from core JavaScript and basic DOM manipulation to modern ES6+ features like modules and asynchronous programming.

## 🚀 Technologies Used

* **HTML5**
* **CSS3 (via Tailwind CSS)**
* **JavaScript (ES6+)**
* **VS Code**
* **Live Server** (for running modules and API practicals)

## How to Run These Practicals

Most of these practicals can be run by simply opening the `.html` file in your browser.

**Important Note:** For practicals that use **ES6 Modules** (like `Practical_11`) or the **Fetch API** (like `Practical_10` and the **Final Project**), you **must** run the code using a local server due to browser security policies (CORS).

The easiest method is:
1.  Install the **"Live Server"** extension in VS Code.
2.  Right-click the `index.html` file for the practical.
3.  Select **"Open with Live Server"**.

## 📚 Practicals Overview

Here is a summary of the topics covered in each practical.

| Practical | Topic | Key Concepts Demonstrated |
| :--- | :--- | :--- |
| **Practical 1** | Introduction to JS | Variables (`var`, `let`, `const`), Data Types, `console.log()`, `alert()`, `prompt()` |
| **Practical 2** | Operators | Arithmetic, Assignment, Comparison, and Logical Operators |
| **Practical 3** | Control Flow | `if/else` statements, `switch` cases, `for` loops, `while` loops |
| **Practical 4** | Functions & Events | Function declarations, arrow functions, parameters, return values, basic DOM event handling (`onclick`) |
| **Practical 5** | DOM Manipulation | Selecting elements (`getElementById`, `querySelector`), changing content (`innerHTML`, `textContent`), modifying styles (`.style`) |
| **Practical 6** | Form Validation | Handling form submission, `event.preventDefault()`, and validating input fields (e.g., checking for empty fields, basic regex) |
| **Practical 7** | Objects & Arrays | Object literals, `this` keyword, and core Array methods (`map`, `filter`, `forEach`, `reduce`) |
| **Practical 8** | ES6+ Features | Template literals, destructuring, spread/rest operators, default parameters |
| **Practical 9** | Asynchronous JS | Understanding the event loop, Callbacks, Promises (`.then`, `.catch`), and `async/await` syntax |
| **Practical 10**| API Handling (Fetch) | Using the `fetch()` API to make network requests (GET) to a public JSON API and display the data |
| **Practical 11**| Timers & Modules | `setTimeout()`, `setInterval()`, `clearInterval()`, organizing code with ES6 `import/export`, and creating a dynamic UI |

## 🌟 Final Mini-Project: SiteStatus Monitor

As a capstone for this lab, the `index.html` file in the root directory contains a "SiteStatus" - a live website uptime monitor. This single-page application solves a real-time problem by allowing you to track the status of your most important websites from one dashboard.

### What It Does

* **Real-time Monitoring:** Allows a user to add a list of websites (e.g., "Google", "github.com") to a dashboard.
* **Live Status Checks:** Automatically pings each site every 60 seconds to determine if it is "Up" or "Down".
* **Dynamic UI:** The dashboard is fully dynamic. Sites can be added and removed, and their status updates live without a page refresh.
* **Visual Feedback:** Clearly indicates if a site is "Up" (green) or "Down" (red, with a pulsing animation).
* **Extra Features:** Includes a live-updating clock and a "Daily Motivation" quote fetched from a separate API.

### How It Integrates All 11 Practicals

This project was designed to be a comprehensive review of all 11 practicals:

* **Practical 1 (Intro to JS):** Uses `console.log()` for debugging and features a custom-built welcome modal instead of a simple `alert()`.
* **Practical 2 (Operators):** Uses logical operators (`||`, `!`) for form validation and comparison operators (`===`, `!==`) to check API responses and site IDs.
* **Practical 3 (Control Flow):** Uses `if/else` statements for form validation, a `switch` statement to assign status colors (`status-up`, `status-down`), and `if (sites.length === 0)` to display a placeholder message.
* **Practical 4 (Functions & Events):** The entire application is built with functions (`updateLiveClock`, `fetchQuote`, `renderSites`, `checkSiteStatus`, etc.). It uses `addEventListener` for form submission (`submit`) and button clicks (`click`), including **event delegation** on the site list for handling delete actions.
* **Practical 5 (DOM Manipulation):** The entire UI is rendered dynamically. `getElementById` and `querySelector` are used to select elements. `innerHTML` and `appendChild` are used to render the site list. `.style.display` is used to show/hide error messages.
* **Practical 6 (Form Validation):** The "Add New Site" form uses `event.preventDefault()` to stop the page from reloading. It performs validation by checking for empty fields and uses a simple **Regular Expression (Regex)** to validate the URL format.
* **Practical 7 (Objects & Arrays):** The core of the application is the `sites = []` array. Each site is an **object** `{ id, name, url, status }`. The `.filter()` method is used to delete sites, and `.forEach()` is used to render them.
* **Practical 8 (ES6+ Features):** Uses **Template Literals** extensively to create the HTML for site cards. **Object Destructuring** (`const { content, author } = data`) is used on the quote API response. The **Spread Operator** (`...sites`) is used to add new sites to the array.
* **Practical 9 (Asynchronous JS):** Uses `async/await` syntax for all API calls. This makes the `checkSiteStatus` and `fetchQuote` functions clean and easy to read, handling the **Promises** returned by `fetch()` implicitly.
* **Practical 10 (API Handling - Fetch):** This is the project's core. It uses `fetch()` to call **two different public APIs**: `api.quotable.io` for the daily quote and `api.downfor.everyone.or.justme.com` to check website statuses in real-time.
* **Practical 11 (Timers & Modules):**
    * **Timers:** `setInterval()` is used for two key features: updating the live clock every second and re-checking all site statuses every 60 seconds. `setTimeout()` is used to create smooth animations for the welcome modal.
    * **Modules:** While this project is in a single file for easy portability, the functions are structured in a modular way (e.g., UI functions, API functions). A comment in the code explains how these would be split into separate `ui.js` or `api.js` files using `import/export` in a larger build.

## 🧑‍💻 Author

* **GitHub:** [@9SERG4NT](https://github.com/9SERG4NT)
