const findingVowels = function (givenWord){
    let count = 0;
    for(i=0; i<givenWord.length; i++){

        if (
            givenWord[i] == 'A' || 
            givenWord[i] == 'E' || 
            givenWord[i] == 'I' || 
            givenWord[i] == 'O' || 
            givenWord[i] == 'U' || 
            givenWord[i] == 'a' || 
            givenWord[i] == 'e' || 
            givenWord[i] == 'i' || 
            givenWord[i] == 'o' || 
            givenWord[i] == 'u'
          ) 
          count++;
          
}
return count}


console.log(findingVowels("rafi"))