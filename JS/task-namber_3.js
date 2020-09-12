// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
    
    let longestWord = string.split(' ');
    
        console.table(longestWord);

   for(const value of longestWord) {
    console.log(value);

    if (value.length  > longestWord.length) {
        // longestWord = value; 
      
    }
    
    // return value
    
  }
  
};

// let longestWord = value[0];

// .length


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'