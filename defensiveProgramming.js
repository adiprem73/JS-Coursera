


function letterFinder(word, match){
    var condition1 = typeof word == "string" && word.length >= 2;

    var condition2 = typeof match == "string" && match.length == 1;

    if (condition1 && condition2) {
      for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
          //if the current character at position i in the word is equal to the match
          console.log("Found the", match, "at", i);
        } else {
          console.log("---No match found at", i);
        }
      }
    } else {
      console.log("Please pass correct arguments to the function.");
    }
}


letterFinder(2,34);

letterFinder("cat", "c");


var result = null;
console.log(result);

var str = "Hello";
str.match("jello");

Number(5).toPrecision(300);

try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    }