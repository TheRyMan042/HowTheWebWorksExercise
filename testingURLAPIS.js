//Ryan Hutchings
//Unit 18.1 - How The Web Works Exercise
//Examples from Mozilla on URLS

console.log('Website: http://www.example.com/dogs');

//makes a new URL
//new URL(url you want) or new URL(url, base); base - a default for using a relative path (usually undefined)

//Example:
let baseUrl = "https://developer.mozilla.org";

let A = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'
// (/) is added after the main hostname

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'
// saved to main URL

// Another example
const url = new URL("../cats", "http://www.example.com/dogs");
console.log('Hostname:', url.hostname); // "www.example.com"
console.log('Pathname:', url.pathname); // "/cats"


//Ex:
//canParse checks if your URL is valid
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL"); //Invalid URL
}

//hash adds onto the path of the URL with a pound sign and the rest of the string
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"

//URL has encryption rules 
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"

//to get the params(queries) currently onscreen
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
//gets the URL onscreen 
console.log(parsedUrl.searchParams.get("id")); // "123"
//searches URL for a unique identifier

