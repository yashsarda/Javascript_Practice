// Replaces the name of multiple object keys with the values provided

const renameKeys = (replacement, original) => {
  return Object.keys(original).reduce(
    (acc, value) => ({
      // This is merging two objects.
      ...acc,
      // Here we use the computed property syntax
      ...{ [replacement[value] || value]: original[value] },
    }),
    {}
  );
};

const obj = {
  name: "Bobo",
  job: "Front-end master",
  shoeSize: "hundred",
};

const answer = renameKeys({ name: "firstName", job: "passion" }, obj);

console.log(answer);
