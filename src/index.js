// Fix issue with grammar messing up the parsing.

class Scribe {
  _datasets;

  constructor(datasets) {
    this._datasets = datasets;
  }

  randomiser(dataset) {
    const numOfValues = dataset.length;
    const selectedValue = Math.floor(Math.random() * Math.floor(numOfValues));
    const result = dataset[selectedValue];

    return result;
  }

  generator(sentence) {
    const words = sentence.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (word.match(/\|(.*?)\|/gm)) {
        const selectedDataset = word.replace(/\|/g, "");

        for (const [key, value] of Object.entries(this._datasets)) {
          if (selectedDataset === key) {
            word = this.randomiser(value);
          }
        }
      }

      result = result + " " + word;
    }

    return result;
  }
}

export default Scribe;
