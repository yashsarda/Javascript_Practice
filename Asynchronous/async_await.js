const getFruit = async (name) => {
  const fruits = {
    pineapple: "Sweet",
    lemon: "Sour",
    apple: "Tasteless",
  };

  // This is an asynchrnous function since we declared the function
  // with the async keyword.
  // The return value will be a promise that is resolved to this particular value
  // Promise.resolve(fruits[name]) will be original return value but that is
  // hidden from us by the async keyword
  return fruits[name];
};

getFruit("pineapple").then(console.log);

// We can only use the await keyword inside an async function
// So we declare an IIFE
(async () => {
  const answer = await getFruit("apple");

  console.log(answer);
})();

const makeSmoothie1 = () => {
  let a;

  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("apple");
    })
    .then((v) => a + " " + v);
};

makeSmoothie1().then(console.log);

const makeSmoothie2 = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("apple");

  return [a, b];
};

makeSmoothie2().then(console.log);
