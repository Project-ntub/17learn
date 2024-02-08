vasily.oninput = showValue;

function showValue() {
    result.value = this.value;
}

countries.onchange = showCapital;

function showCapital() {
    capital.value = countries.value;
}

check.onclick = togglePassword;

function togglePassword() {
    if (check.checked) pass.type = "text";
    else pass.type = "password";
}

function checkPalindrome(inputText) {
    let cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let length = cleanedText.length;
    let halfLength  = Math.floor(length / 2);
    let resultElement = document.getElementById("result");
    let i;
    for (i = 0; i < halfLength; i++) {
        if (cleanedText[i] !== cleanedText[length - 1 - i]) {
            resultElement.textContent = "Nope! Not a palindrome";
            return;
        }
        resultElement.textContent = "Yes! It's a palindrome";
    }
}

