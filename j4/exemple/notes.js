// function add(number) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(number), 2000)
//   );
// }

// async function process() {
//   try {
//     let sum = 0;
//     const res1 = await add(1); // attendre la résolution de la promesse
//     sum += res1;
//     console.log("etape 1");
//     const res2 = await add(3);
//     sum += res2;
//     console.log("etape 2");
//     const res3 = await add(5);
//     sum += res3;
//     console.log("etape 3");

//     console.log(sum);
//     // si vous lancez une exception à partir de la promesse
//     // dans le cas où celle-ci est échoue
//     // vous capturez l'exception dans le bloc suivant
//   } catch (err) {
//     console.error(err);
//   }
// }

// process();

//--------------------------------------------------------------------

// const wait = () =>
//   setTimeout(() => console.log("***on a bien attendu 2sec"), 2000);

// console.log("hello 1");
// wait();
// console.log("hello 2");
// wait();
// console.log("hello 3");

// const wait = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log("***on a bien attendu 2sec");
//       resolve();
//     }, 2000)
//   );

// async function exec() {
//   console.log("hello 1");
//   await wait();
//   console.log("hello 2");
//   await wait();
//   console.log("hello 3");
// }

// exec();

// const fetch = require("node-fetch");

// import fetch from "node-fetch";
// import fs from "fs";

// console.log(fetch);

// console.log(fs);

//------------------------

fs.writeFile("./monfichier.txt", "contenu du fichier", (err) => {
  console.log("une fois fini, on est là");
});

await fs.writeFile("./monfichier.txt", "contenu du fichier");
