// Function to check if the input is a palindrome
function checkPalindrome() {
    // Get the input string from the input field
    let input = document.getElementById('inputString').value;
    
    // Remove spaces and convert to lowercase
    let cleanedInput = input.replace(/\s/g, '').toLowerCase();
    
    // Reverse the cleaned input
    let reversedInput = cleanedInput.split('').reverse().join('');
    
    // Check if the cleaned input is equal to its reverse
    let isPalindrome = cleanedInput === reversedInput;
    
    // Get the result element
    let resultElement = document.getElementById('result');
    
    // Display the result
    if (isPalindrome) {
        resultElement.textContent = `"${input}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${input}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
    
    // Show the palindrome image
    document.getElementById('palindromeImage').style.display = 'block';
    
    // Ask if the user wants to enter another word
    setTimeout(() => {
        if (confirm('Do you want to check another word?')) {
            clearInput();
        } else {
            alert('Thank you for using the Palindrome Checker!');
        }
    }, 500);
}

// Function to clear the input field and result
function clearInput() {
    document.getElementById('inputString').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('palindromeImage').style.display = 'none';
}