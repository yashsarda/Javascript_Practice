// Generates anobject from the given query string or URL

const queryStringToObject = (url) => {
  return [...new URLSearchParams(url.split("?")[1])].reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {}
  );
};

console.log(queryStringToObject("http://example.com?page=1&count=10"));
