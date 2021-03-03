# Scribe 📝

Scribe is a package that allows you to create randomly generated sentences by providing datasets of values and
specifying which parts of a sentence you wish to randomise.

## Syntax

### Defining datasets

All of your datasets should be arrays and the values that they contain should be strings.\
These datasets should then all be placed within an object that can then be passed to ScribeJS to be used.

Example:

```json
{
  "animals": ["cat", "dog", "cow", "pig", "monkey"],
  "names": ["Sylvan", "Kieran", "Tej", "Jon", "AJ"],
  "places": ["London", "Birmingham", "Telford", "Liverpool"],
  "objects": ["cup", "pen", "keyboard", "glass"]
}
```

### Defining datasets in sentences

To specify what words in a sentence you wish to randomise and which dataset they should use you simply write the name of
your dataset like this: `|animals|` and embed it into the sentence where ever you want it to generate a word from that
dataset.

Example in sentence: `Hello my name is |names|`

## API

`generator(sentence: string): string`

- Takes in a sentence that contains dataset references
- Returns the sentence with the dataset references replaced with randomised values from that dataset.

## Example

The example below shows how you might implement ScribeJS:

```javascript
// Import the package into our JS file.
import Scribe from "scribe";

// Define an array with datasets that we want to use.
const datasets = {
  animal: ["cat", "dog", "cow", "pig", "monkey"],
  person: ["Sylvan", "Kieran", "Tej", "Jon", "AJ"]
};

// Initalise Scribe and pass in the datasets.
const scribe = new Scribe(datasets);

// Call the generator function and pass in the sentence we want to randomise.
const result = scribe.generator("|person| went to the park. At the park they saw a |animal|!");
```

Potential outcomes for the example above include:

```
Sylvan went to the park. At the park he saw a cat!
Kieran went to the park. At the park he saw a dog!
AJ went to the park. At the park he saw a cow!
Sylvan went to the park. At the park he saw a monkey!
ect...
```
