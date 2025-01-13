function findingVowels(givenWord){
    for(i=0; i<givenWord.length; i++){

        if (givenWord[i] == 'A' || 'E' || 'I' || 'O' || 'U' || 'a' || 'e' || 'i' || 'o'|| 'u'){
            console.log("it has a vowel");
        }
        else{
            console.log("it doesn't have a vowel");
        }
    }
}

// console.log(findingVowels("rafi"))
findingVowels("rafi")