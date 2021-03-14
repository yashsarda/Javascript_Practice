//Sorts an array of objects, ordered by a property, based on the array of orders provided.

const orderWith = (arr, prop, values) => {
  const orderValues = values.reduce((acc, v, index) => {
    acc[v] = index;
    return acc;
  }, {});

  return [...arr].sort((a, b) => {
    return orderValues[a[prop]] - orderValues[b[prop]];
  });
};

const users = [
  { name: "Yash", language: "Javascript" },
  { name: "Vaishnavi", language: "Javascript" },
  { name: "Kunal", language: "Python" },
  { name: "Abhinav", language: "Typescript" },
  { name: "Saurav", language: "Python" },
];

console.log(
  orderWith(users, "language", ["Typescript", "Javascript", "Python"])
);
