const randomiser = (dataset) => {
  const numOfValues = dataset.length;
  const selectedValue = Math.floor(Math.random() * Math.floor(numOfValues));
  const result = dataset[selectedValue];

  return result;
};

// Needs to be able to work out which dataset to get to pass into randomiser
const generate = (sentence) => {
  const words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.match(/\?(.*?)\?/gm)) {
      word = randomiser();
    }
    result = result + " " + word;
  }

  return result;
};

export { generate, randomiser };
