// Convert an array of objects to a CSV string that contains only the columns specified

const jsonToCSV = (json, columns, delimiter = ",") => {
  const firstRow = columns.join(delimiter);
  const keyValuePairs = [...json];

  return [
    firstRow,
    keyValuePairs.map((obj) => {
      return columns.reduce(
        (acc, value) =>
          `${acc}${!acc.length ? "" : delimiter}${
            !obj[value] ? "" : obj[value]
          }`,
        ""
      );
    }),
  ].join("\n");
};

const csv = jsonToCSV(
  [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 8 }, { b: 10 }],
  ["a", "b"]
);

console.log(csv);
