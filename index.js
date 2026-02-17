function validateInput(num1, num2){
    //input validation for all 

    // if (num2 == 0){
    //     return console.error("Can't do that");
    // }
}

function calculateTotal(){
    //inputs have to be numbers
    const inputOne = document.getElementById('inputOne').valueAsNumber
    const inputTwo = document.getElementById('inputTwo').valueAsNumber

    // validateInput(inputOne, inputTwo)


    //division
    const total = inputOne / inputTwo
    console.log(total)

    //display total
    displayTotal(total)
}

function displayTotal(total){
    const inputOne = document.getElementById('inputOne')
    const inputTwo = document.getElementById('inputTwo')
    const calculateButton = document.getElementById('calculateButton')
    const resultOutput = document.getElementById('result')

    //hide the input fields after calculation
    inputOne.style.display = 'none'
    inputTwo.style.display = 'none'
    calculateButton.style.display = 'none'

    //display the result
    resultOutput.style.display = 'block'
    resultOutput.textContent = total
}

//on any click/button change return inputs/calculate button
function returnInputVisibility(){
}

//event listener to run calculateTotal
const calculateButton = document.getElementById('calculateButton')
calculateButton.addEventListener("click", calculateTotal)