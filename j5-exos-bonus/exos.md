# Bonus

Implémenter ces fonctions en JS.
Il faut que les appels de fonctions en exemple puissent fonctionner.

all = vérifie si tout les éléments respectent la condition passée en argument
`all([2,4,6], (e) => e % 2 === 0) -> true`
`all([2,3,4], (e) => e % 2 === 0) -> false`

withIndex = ajoute l'index au côté de chaque élément
`withIndex(["a", "b", "c"]) -> [[0, "a"], [1, "b"], [2, "c"]]`

chunkEvery (avec un reduce seulement) = découpe la liste en liste de sous-liste avec la même longueur qu'on a passé en argument
`chunkEvery([1, 2, 3, 4, 5, 6], 2) -> [[1, 2], [3, 4], [5, 6]]`
