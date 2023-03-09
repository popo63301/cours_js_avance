const tab = [1, 2, 3];

// à chaque élément, je veux appliquer la même transformation
// mapper = correspondre
// map = appliquer la même transformation à chaque élément

const transfo1 = tab.map((e) => e * 2); //one-liner

const transfo = tab.map((e) => {
  //   console.log("e", e);
  return e * 2;
});

//-----------
// ajouter 5 à chaque élément de [1,2,3]

//--------------------------

const tab2 = [4, 7, 11];

// reduce =
// 1) parcour un tableau
// 2) accumule les valeurs progressivement
// 3) retourne 1 et 1 seule donnée

const valueInit = 0; // valeur initial pour l'accumulateur

const sum = tab2.reduce((accumulator, currentValue) => {
  // console.log("acc", accumulator);
  // console.log("curr", currentValue);
  // console.log("sum des 2", accumulator + currentValue);
  // console.log("----------------------");
  return accumulator + currentValue;
}, 0);

// console.log(sum);

//--------------------------

const tabLettres = ["s", "a", "L", "u", "T"];

const mot = tabLettres.reduce((acc, e) => {
  if (e === e.toUpperCase()) {
    return acc;
  } else {
    return acc + e;
  }
}, "");

//--------------------------

//copie d'objet + ajout de clé

// const obj = { name: "sofiane", age: 26 };
// const newObj = { ...obj, city: "Toulouse" }; // créer une copie + ajouter un nouvel élément

// console.log(newObj);

//--------------------------

const names = ["sofiane", "jules", "toto"];

const countLettersName = names.reduce((acc, e) => {
  // console.log("acc", acc);
  // console.log("e", e);
  // console.log("res", { ...acc, [e]: e.length });
  // console.log("----------------");
  return { ...acc, [e]: e.length };
}, {});

// console.log(countLettersName);

//--------------------------

const tabExo = [9, 3, 4];

// retourner somme de chaque élément multiplié par 2.

// résultat souhaité donc = 32

// 2 méthodes:
// * 1 reduce
// * 1 map + 1 reduce
