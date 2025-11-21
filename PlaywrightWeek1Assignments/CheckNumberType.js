let num = 7;
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
        } else if (num < 0) {
            return "Negative"
    } else {
        return "Neutral"
    }
}

console.log(checkNumber(num))