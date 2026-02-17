const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const calculateButton = document.getElementById('calculateButton');
const resultOutput = document.getElementById('result');

//event listener to returnInputVisibility, clearInputs, and calculateTotal
calculateButton.addEventListener("click", calculateTotal)

document.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        calculateTotal()
    }
})
document.addEventListener("dblclick", function(){
    returnInputVisibility() 
    clearInputs()
})
document.addEventListener("keydown", function(event) {
    if (event.key == "Escape"){
        returnInputVisibility()
        clearInputs()
    }
})

function calculateTotal(){
    //inputs have to be numbers
    const num1 = inputOne.valueAsNumber
    const num2 = inputTwo.valueAsNumber

    if (!validateInput(num1, num2))
        return

    //only divide if input is valid
    const total = num1 / num2
    displayTotal(total)
}

function displayTotal(total){
    //hide the input fields after calculation
    inputOne.style.display = 'none'
    inputTwo.style.display = 'none'
    calculateButton.style.display = 'none'

    //display the result
    resultOutput.style.display = 'block'
    resultOutput.textContent = total
}

function validateInput(num1, num2){
    //if either number isn't typed-in throw an error
    if (Number.isNaN(num1) || Number.isNaN(num2)){
        return showError("Please enter both numbers."), false
    }
    
    //throw error if second number is 0
    if (num2 == 0){
        return showError("Numbers can't be divided by zero."), false
    }

    return true
}

function showError(errorMessage){
    //hide other elements
    inputOne.style.display = 'none'
    inputTwo.style.display = 'none'
    calculateButton.style.display = 'none'

    //display the result
    resultOutput.style.display = 'block'
    resultOutput.textContent = errorMessage
}

//on any dblclick/button press return inputs/calculate button
function returnInputVisibility(){
    inputOne.style.display = 'block'
    inputTwo.style.display = 'block'
    calculateButton.style.display = 'block'
    
    resultOutput.style.display = 'none'
    resultOutput.textContent = ""
    
}

function clearInputs(){
    inputOne.value = ""
    inputTwo.value = ""
}