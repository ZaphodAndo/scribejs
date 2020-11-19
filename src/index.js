class Scribe {
  _datasets;

  /**
   * Initialise Scribe.
   * @param {{}} datasets - An object that contains arrays which are datasets.
   */
  constructor(datasets) {
    this._datasets = datasets;
  }

  /**
   * Takes a dataset and returns a value from the dataset.
   * @param {Array<string>} dataset - The selected dataset.
   * @return {string} The selected dataset value.
   */
  _randomiser(dataset) {
    const numOfValues = dataset.length;
    const selectedValue = Math.floor(Math.random() * Math.floor(numOfValues));
    const result = dataset[selectedValue];

    return result;
  }

  /**
   * Takes a dataset and returns a value from the dataset.
   * @param {string} selectedDataset - The selected dataset.
   * @param {string} word - The current word from a sentence.
   * @return {string} The selected dataset value.
   */
  _findDataset(selectedDataset, word) {
    for (const [key, value] of Object.entries(this._datasets)) {
      if (selectedDataset === key) {
        word = this._randomiser(value);
        return word;
      }
    }
  }

  /**
   * Takes a sentence containing dataset references and randomises the parts specified.
   * @param {string} sentence - The string that contains dataset references
   * @return {string} The new randomised sentence with the dataset references replaced with randomised values from that dataset.
   */
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
