let originalWord = "madam"
let data = originalWord.split("")
let reversedWord = ""

for (let i = data.length -1; i >= 0; i--) {
    reversedWord+= data[i]  
}
console.log("Reversed Word Is: " +reversedWord)

if (originalWord  === reversedWord ) {
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")   
}

let actualWord = "level"
let chars = actualWord.split("")
let revWord = ""

for (let i = chars.length -1; i >= 0; i--) {
    revWord+= chars[i]  
}
console.log("Reversed Word Is: " +revWord)

if (actualWord  === revWord ) {
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")   
}

let origWord = "hello"
let value = origWord.split("")
let invertedWord = ""

for (let i = value.length -1; i >= 0; i--) {
    invertedWord+= value[i]  
}
console.log("Reversed Word Is: " +invertedWord)

if (origWord  === invertedWord ) {
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")   
}





