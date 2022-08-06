// -------------Problem 1:--------------
function addToZero(arr){
    let result = false;

    for(let i = 0; i < arr.length; i++){
        for(let x = 0; x < arr.length; x++){
            if(i !== x){
                if (arr[i] + arr[x] === 0){
                    result = true;
                }
            }
        }
    }
    return result
}

//console.log(addToZero([1,2,3,-2]))
// Time complexity: O(n^2)
// Space complexity: O(1)


// ------------Problem 2:-----------------
function hasUniqueChars(str){
    let uniqueChars = new Set([])
    for(let i = 0; i < str.length; i++){
        uniqueChars.add(str[i])
    }
    return uniqueChars.size === str.length
}

// console.log(hasUniqueChars('Moonday'))
// Time complexity: O(n)
// Space complexity: O(n)


// ------------Problem 3:----------------
function isPangram(str){
    let caseStr = str.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < alphabet.length; i++){
        if(caseStr.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
// Time complexity: O(n^2)
// Space complexity: O(1)


// --------------Problem 4:-------------------
function findLongestWord(arr){
    let word = '';

    for(let i = 0; i < arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i]
        }
    }

    return word.length
}

// console.log(findLongestWord(['hi', 'hello' ]))
// Time complexity: O(n)
// Space complexity: O(n)