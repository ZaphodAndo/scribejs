const generate = (sentence) => {
  const item = sentence.match(/\?(.*?)\?/gm);
  console.log(item);
};

export default generate;
