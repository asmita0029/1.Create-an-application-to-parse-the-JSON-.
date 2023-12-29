const apiEndpoint = "https://s3.amazonaws.com/open-to-cors/assignment.json";

const table = document.createElement("table");

fetch(apiEndpoint)
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;

    let table = `<table><tr><th>Subcategory</th><th>Title</th><th>Price</th><th>Popularity</th></tr>`;

    Object.keys(products).forEach((productId) => {
      const product = products[productId];

      const subcategory = product.subcategory;
      const title = product.title;
      const price = product.price;
      const popularity = product.popularity;

      table += `<tr><td>${subcategory}</td><td>${title}</td><td>${price}</td><td>${popularity}</td></tr>`;

      console.log(
        `Product ID: ${productId}, Subcategory: ${subcategory}, Title: ${title}, Price: ${price}, Popularity: ${popularity}`
      );
    });
    table += "</table>";
    document.getElementById("data-table").innerHTML = table;
  })
  .catch((error) => console.error("Error fetching data:", error));

