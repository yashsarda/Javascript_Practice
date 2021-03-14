const invertKeyValueArray = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const arr = obj[key];
    const value = arr.reduce((inner_acc, inner_key) => {
      inner_acc[inner_key] = key;
      return inner_acc;
    }, {});
    Object.assign(acc, value);
    return acc;
  }, {});
};

const obj = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  STOP: ["UAA", "UAG", "UGA"],
};

console.log(invertKeyValueArray(obj));
