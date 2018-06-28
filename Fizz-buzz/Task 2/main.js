function checkSyntax(string) {
    const brackets = '<>[]{}()',
        bracketArray = [];
    let bracketPosition;
    
    for (let i = 0; i < string.length; i++) {
        bracketPosition = brackets.indexOf(string[i]);
        
        if (bracketPosition % 2 === 0) {
            bracketArray.push(brackets[bracketPosition + 1]);
            
        } else {
            if (brackets[bracketPosition] ===
                bracketArray[bracketArray.length - 1]) {
                bracketArray.pop();
            } else {
                bracketArray.push(brackets[bracketPosition]);
            }
        }
    }
    
    if (bracketArray.length === 0) {
        return 0;
    } else {
        return 1;
    }
}

console.log(checkSyntax('---(++++)----'));
console.log(checkSyntax(''));
console.log(checkSyntax('before ( middle []) after '));
console.log(checkSyntax(') ('));
console.log(checkSyntax('} {'));
console.log(checkSyntax('<(   >)'));
console.log(checkSyntax('(  [  <>  ()  ]  <>  )'));
console.log(checkSyntax('   (      [)'));