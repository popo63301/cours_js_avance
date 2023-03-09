const populations = [
  {
    id: 0,
    name: "Alan",
    jobs: ["dev junior", "dev fullstack"],
    password: "tyeedsa00",
  },
  { id: 1, name: "Albert", jobs: ["doctor"], password: "tyeidii00" },
  {
    id: 2,
    name: "Jhon",
    jobs: ["mathematician", "doctor"],
    password: "xyuuuoi00",
  },
  { id: 3, name: "Brice", jobs: ["dev fullstack"], password: "xytoiab00" },
  { id: 4, name: "Alexendra", jobs: ["dentist"], password: "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl", jobs: ["lead dev", "dev fullstack"] },
  { id: 7, name: "Dallas", jobs: ["dev fullstack"] },
  { id: 8, name: "Dennis", jobs: ["integrator", "dev fullstack"] },
  { id: 9, name: "Edgar", jobs: ["mathematician"] },
  { id: 10, name: "Erika", jobs: ["computer scientist", "mathematician"] },
  { id: 11, name: "Isaac", jobs: ["doctor"], password: "Axgkj22Kl" },
  { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// const countDoctors = populations.reduce((acc, e) => {
//   console.log("e", e);
//   console.log("jobs", e.jobs);
//   console.log("--------");
//   if (e.jobs && e.jobs.includes("doctor")) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);

const countDoctors = populations.reduce((acc, e) => {
  if (e.jobs && e.jobs.includes("doctor")) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

const countDoctors1 = populations.reduce(
  (acc, e) => (e.jobs && e.jobs.includes("doctor") ? acc + 1 : acc),
  0
);

// console.log("resultat final", countDoctors1);

// question 2

// const fullStackNames = populations.reduce((acc, e) => {
//   if (e.jobs && e.jobs.includes("dev fullstack")) {
//     return [...acc, e.name];
//   } else {
//     return acc;
//   }
// }, []);

// const fullStackNames = populations.reduce(
//   (acc, e) =>
//     e.jobs && e.jobs.includes("dev fullstack") ? [...acc, e.name] : acc,

//   []
// );

const fullStackNames = populations
  .filter((e) => e.jobs && e.jobs.includes("dev fullstack"))
  .map((e) => e.name);

// console.log("fullStackNames", fullStackNames);

// question 3

const jobLess = populations.filter((e) => !e.jobs).map((e) => e.name);

// console.log("jobLess", jobLess);

// lara
// l = 1, a = 2, r = 1

/* pour une personne
{
    l: 1,
    a: 2,
    r: 1
}
*/

/* 
[
    {name, password, occurences},
    {name, password, occurences},
    {name, password, occurences},
    {name, password, occurences},
]
*/

/* 

- filtrer les sans mot de passe
- compter les occurrences

pseudo-code

countOccurences(password) {
    - découper password en liste de lettre ["x", "y", "u", "u" ...]
    - initialiser objet vide, result = {}
    - pour chaque lettre
        - si lettre est dans result, rajouter +1 // si clé est contenu dans objet
        - sinon, ajouter la clé avec 1
    - retourner résultat
}
*/

function countOccurences(password) {
  const letters = password.split("");
  let result = letters.reduce((acc, e) => {
    if (acc.hasOwnProperty(e)) {
      return { ...acc, [e]: acc[e] + 1 };
    } else {
      return { ...acc, [e]: 1 };
    }
  }, {});

  return result;
}

console.log("ici", countOccurences("xyuuuoi00"));
