GuideStone Division Calculator

Overview

This is a small web application that takes two numbers, divides the first by the second, and displays the result.
The project was built using HTML, CSS, and JavaScript only and does not require a server or any external setup. The HTML file can be opened directly in a browser.

The goal of the project is to demonstrate input handling, validation, and user interface interaction in a simple calculator format.


Features

Two number input fields

Calculate button to perform division

Input validation with clear error messages

Keyboard support (Enter to calculate, Escape to reset)

Result formatting to avoid long decimals

Calculation history list

Remove individual history items

“Clear All” history button

Responsive and centered layout

Tooltip with usage instructions


How to Run

Download or extract the project folder.

Open index.html in any modern web browser.


How to Use

Enter a number in Number 1.

Enter a number in Number 2.

Click Calculate or press Enter.

The result will appear below the inputs.

Each calculation is added to the history list.

Use Remove to delete a single entry or Clear All to clear the entire history.

Double-click anywhere or press Escape to reset the inputs.


Validation Rules

Both inputs must be filled.

Division by zero is not allowed.

Error messages are shown if inputs are invalid.

File Structure
/project-folder
  ├── index.html   → main layout and structure
  ├── styles.css   → styling and layout
  ├── index.js     → logic, validation, and history handling
  └── README.md    → project overview and instructions
  
Notes
- History is stored only while the page is open and resets when the page is refreshed.
- No external libraries are used besides Font Awesome for the tooltip icon.
