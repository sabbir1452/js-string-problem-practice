const lyrics =
  "Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada";
const searchString = " pAkhi";
// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics.includes("Pakhi");
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// ---------------------------
// indexOf

console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("Tumi"));

if (lyrics.indexOf("sadada") !== -1) {
  console.log("exists inside the string");
} else {
  console.log("cannot find it");
}
