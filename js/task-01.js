// task 1

const categories = document.querySelectorAll("#categories .item");
console.log("Number of categoies:", categories.length);

// task 2

let counter = 0;

categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}\nElements: ${elementsCount}`);
});
