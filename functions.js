function letterFinder(word, match){
    var n= word.length;
    for(var i=0;i<n;i++){
        if(word[i]==match){
            console.log("Found the", match, "at", i);
        }
        else{
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test", 't');