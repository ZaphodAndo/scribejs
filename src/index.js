class Scribe {
  _datasets;

  constructor(datasets) {
    this._datasets = datasets;
  }

  _randomiser(dataset) {
    const numOfValues = dataset.length;
    const selectedValue = Math.floor(Math.random() * Math.floor(numOfValues));
    const result = dataset[selectedValue];

    return result;
  }

  _findDataset(selectedDataset, word) {
    for (const [key, value] of Object.entries(this._datasets)) {
      if (selectedDataset === key) {
        word = this._randomiser(value);
        return word;
      }
    }
  }

  generator(sentence) {
    const words = sentence.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (word.match(/\|(.*?)\|/gm)) {
        let selectedDataset = word.replace(/\|/g, "");

        const wordArray = selectedDataset.split(/\s*\b\s*/);

        if (wordArray.length > 1) {
          selectedDataset = wordArray[0];
          word = this._findDataset(selectedDataset, word);
          word = word + wordArray[1];
        } else {
          word = this._findDataset(selectedDataset, word);
        }
      }

      result = result + " " + word;
    }

    return result;
  }
}

export default Scribe;
