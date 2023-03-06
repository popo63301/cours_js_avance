const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

const newPopulations = populations
  .map((e) => {
    let count = e.name
      .split("")
      .map((l) => l.toLowerCase())
      .reduce((acc, curr) => {
        if (curr == "l" || curr == "a") {
          return acc + 1;
        }
        return acc;
      }, 0);

    return { ...e, count: count };
  })
  .sort((p1, p2) => p1.count - p2.count);

console.log(newPopulations);
