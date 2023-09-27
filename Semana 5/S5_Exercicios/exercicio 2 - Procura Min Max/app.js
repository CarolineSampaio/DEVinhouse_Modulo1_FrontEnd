console.log("m1-s05-e2");

const procuraMinMax = (numeros) => {
  if (!numeros?.length) {
    console.log("Não é possível encontrar");
    return;
  }

  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  console.log(`"Min: ${min} / Max: ${max}"`);
};

const numeros = [20, 10, 30];

procuraMinMax(numeros);

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);
