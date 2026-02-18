const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const calculateButton = document.getElementById("calculateButton");
const resultOutput = document.getElementById("result");
const errorOutput = document.getElementById("error");

//history features
const historyList = document.getElementById("historyList");
const clearButton = document.getElementById("clearButton");
const emptyHistory = document.getElementById("emptyHistory");

let history = [];

//event listener to resetResult, clearInputs, and calculateTotal
calculateButton.addEventListener("click", calculateTotal);

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		calculateTotal();
	}
});
document.addEventListener("dblclick", function () {
	resetResult();
	clearInputs();
	clearError();
});
document.addEventListener("keydown", function (event) {
	if (event.key == "Escape") {
		resetResult();
		clearInputs();
		clearError();
	}
});

//clear all history, results, or errors
clearButton.addEventListener("click", function () {
	history = [];
	renderHistory();
	resetResult();
	clearInputs();
	clearError();
});

//main functionality

function calculateTotal() {
	clearError();

	const num1 = inputOne.valueAsNumber;
	const num2 = inputTwo.valueAsNumber;

	//validation before math
	if (!validateInput(num1, num2)) return;

	const total = num1 / num2;
	const cleanedTotal = cleanTotal(total);

	displayTotal(cleanedTotal);
	addToHistory(num1, num2, cleanedTotal);
}

function cleanTotal(num) {
	const rounded = num.toFixed(8); //limit decimals to 8

	const cleaned = Number(rounded); //remove trailing zeros

	return cleaned;
}

function validateInput(num1, num2) {
	//if either number isn't typed-in throw an error
	if (Number.isNaN(num1) && Number.isNaN(num2)) {
		return (showError("Please enter both numbers."), false);
	} else if (Number.isNaN(num2)) {
		return (showError("Please enter second number."), false);
	} else if (Number.isNaN(num1)) {
		return (showError("Please enter first number."), false);
	}

	//throw error if second number is 0
	else if (num2 === 0) {
		return (showError("Numbers can't be divided by zero."), false);
	}

	return true;
}

function clearError() {
	// remove the error to begin
	errorOutput.textContent = "";
}

//display the error
function showError(errorMessage) {
	resultOutput.style.display = "none";
	errorOutput.textContent = errorMessage;
}

function displayTotal(total) {
	//display the result
	resultOutput.style.display = "block";
	resultOutput.textContent = total;
}

//reset results field
function resetResult() {
	resultOutput.style.display = "none";
	resultOutput.textContent = "";
}

function clearInputs() {
	inputOne.value = "";
	inputTwo.value = "";
}

function addToHistory(num1, num2, result) {
	const item = {
		id: Date.now(),
		num1,
		num2,
		result,
	};

	//append to beginning or array so newest shows first
	history.unshift(item);
	renderHistory();
}

function renderHistory() {
	const hasHistory = history.length > 0;

	//show/hide "No history" message
	emptyHistory.style.display = hasHistory ? "none" : "block";

	//show clear button vibility
	clearButton.disabled = !hasHistory;

	//clear old rows before re-building
	historyList.innerHTML = "";

	for (const item of history) {
		const row = document.createElement("li");
		row.className = "historyItem";

		// create text
		const text = document.createElement("span");
		text.textContent = `${item.num1} ÷ ${item.num2} = ${item.result}`;

		// create remove button
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.className = "removeBtn";

		// when you clicked delete that item and refresh list
		removeBtn.addEventListener("click", function () {
			history = history.filter((h) => h.id !== item.id);
			renderHistory();
		});

		row.appendChild(text);
		row.appendChild(removeBtn);
		historyList.appendChild(row);
	}
}

renderHistory();
