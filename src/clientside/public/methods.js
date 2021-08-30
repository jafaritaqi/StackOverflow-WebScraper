function wordCount(sentence) {
    let arrayWords = sentence.replace(/[^a-zA-Z ]/g, "").toUpperCase().split(' ');
    let newArray = [];
    for (let i = 0; i < arrayWords.length; i++) {
        let word = arrayWords[i];
        let count = 0;
        if (word.length > 2) {
            for (let j = 0; j < arrayWords.length; j++) {
                const element = arrayWords[j];
                if (word === element) {
                    count++;
                    if (count > 1) {
                        arrayWords.splice(j, 1);
                    }
                }
            }
            newArray.push({ word: word, count: count })
        }


    }
    return newArray;
}


exports.wordCount = wordCount;