
//== Test Case ==
const question = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'] //  [ ["kita", "atik", "tika"], ["aku", "kua"], ["makan"], ["kia"] ]


// == Answer ==
function findingAnagram(words) {
  let result = []
  let template = []
  let wordTemp = ""
  let wordComparison = ""
  for (let i = 0; i < words.length; i++) {
    wordTemp = sortingWord(words[i])
    for (let j = 0; j < words.length; j++) {
      wordComparison = sortingWord(words[j])
      if (wordTemp === wordComparison) {
        template.push(words[j])
      }
    }
    result.push(template)
    words = filteringWord(words, template)
    i = 0
    template = []
  }
  return result
}

function sortingWord(word) {
  const alphabethLibrary = "abcdefghijklmnopqrstuvwxyz"
  let result = ""
  for (let i = 0; i < alphabethLibrary.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (alphabethLibrary[i] == word[j]) {
        result += word[j]
      }
    }
  }
  return result;
}

function filteringWord(words, array) {
  for (let i = 0; i < array.length; i++) {
    let index = words.indexOf(array[i])
    if (index > -1) {
      words.splice(index, 1)
    }
  }
  return words
}

console.log(findingAnagram(question))