// Sorts an array of objects ordered by properties and orders

const orderBy = (arr, prop, order = new Array(prop.length).fill("asc")) => {
  return [...arr].sort((a, b) => {
    return prop.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          order[i] === "desc" ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0);
  });
};
const users = [
  { name: "John", age: 40 },
  { name: "Yash", age: 23 },
  { name: "John", age: 45 },
  { name: "Vaishnavi", age: 25 },
];

console.log(orderBy(users, ["name", "age"], ["asc", "desc"]));
console.log(orderBy(users, ["name", "age"]));
