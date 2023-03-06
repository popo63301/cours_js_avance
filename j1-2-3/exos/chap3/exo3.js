const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];

const res = students.forEach(({ name, family: { sister } }) => {
  console.log(`Name: ${name} / Sister: ${sister}`);

  return 2;
});

// console.log(res);
// students.map(({ name, family: { sister } }) =>
//   console.log(`Name: ${name} / Sister: ${sister}`)
// );
