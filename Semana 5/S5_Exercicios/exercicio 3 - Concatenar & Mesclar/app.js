console.log("m1-s05-e3");

const concatVetores = (arrayA, arrayB) => [...arrayA, ...arrayB];

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const novoArray = concatVetores(arrayA, arrayB);

console.log(novoArray);

const mesclaObjetos = (objUm, objDois) => ({ ...objUm, ...objDois });

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(objUm, objDois);

console.log(novoObjeto);
