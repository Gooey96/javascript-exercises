const palindromes = function (words) {
    let newWords = words.toLowerCase().split("!, ").reverse().join("! ");
    //let newWords2 = newWords[-1].toUpperCase().join("! ");
    if(newWords === words) return true;
    //if(newWords2 === words) return true; Not finished yet
};

// Do not edit below this line
module.exports = palindromes;
