import fetch from "node-fetch";
import fs from "fs";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => data.map((e) => ({ name: e.name, geo: e.address.geo })))
//   .then((res) => console.log(res));

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // if (data.error) {
  //     return
  // }

  const result = data.map((e) => ({ name: e.name, geo: e.address.geo }));

  const stringResult = JSON.stringify(result);

  await fs.promises.writeFile("./file.txt", stringResult);
}

fetchUsers();
