document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("Parent clicked");
  e.stopPropagation();
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked");
});
