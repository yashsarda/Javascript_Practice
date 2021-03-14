// Group the elements of the array into two arrays, depending on the function provided

const partition = (arr, fn) => {
  return arr.reduce(
    (acc, value) => {
      acc[fn(value) ? 0 : 1].push(value);
      return acc;
    },
    [[], []]
  );
};
const users = [
  { user: "yash", age: 23, active: true },
  { user: "vaishnavi", age: 25, active: false },
];

const groups = partition(users, (o) => o.active);
console.log(groups);
