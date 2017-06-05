// Take the contents of the sonnet div and place it in a variable.
let sonnet = document.getElementById('sonnet').innerHTML;
let sonnetText = sonnet.innerHTML;
console.log("the string in the sonnet div is ", sonnetText);

// Find and output the starting position of the word "orphans".
const orphansLocation = sonnetText.indexOf('orphans');
console.log("the starting position of the word 'orphans' is ", orphansLocation);

// Output the number of characters in the sonnet.
const sonnetLength = sonnetText.length;
console.log("the number of characters in the sonnet is ", sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide".
let sonnetUpdate = sonnetText.replace('winter', 'yuletide');
console.log("replacing winter with yuletide", sonnetUpdate);

// Replace all occurances of the string "the" with "a large".
sonnetUpdate = sonnetUpdate.replace(/ the /g, ' a large ');
console.log("also replacing, the with large", sonnetUpdate);

// Set the content of the sonnet div with the new string.
sonnet.innerHTML = sonnetUpdate