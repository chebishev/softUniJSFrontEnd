function solve(string) {
  let result = /#[A-z]+/gm;
  let words = string.match(result);
  for (word of words) {
    console.log(word.slice(1));
  }
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
