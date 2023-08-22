<template>
  <main>
    <h2>Formulário de cadastro de medicamentos</h2>
    <form class="formCadastro" @submit.prevent="cadastrarMedicamento">
      <div class="conteinerInput">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Informe o nome do medicamento"
          v-model="nome"
        />
      </div>
      <div class="conteinerInput">
        <label for="laboratorio">Laboratório</label>
        <input
          type="text"
          id="laboratorio"
          placeholder="Informe o nome do laboratório"
          v-model="laboratorio"
        />
      </div>
      <div class="conteinerInput">
        <label for="preco">Preço</label>
        <input
          type="number"
          step="0.01"
          id="preco"
          placeholder="Informe o preço"
          v-model="preco"
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "FormularioNovoMedicamento",
  data() {
    return {
      id: 0,
      nome: "",
      laboratorio: "",
      preco: 0,
      favorito: false,
    };
  },
  methods: {
    cadastrarMedicamento() {
      this.$emit("cadastrar", {
        nome: this.nome,
        laboratorio: this.laboratorio,
        preco: this.preco,
        favorito: this.favorito,
      });
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

main {
  width: 100%;

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(27, 111, 170, 0.2);
}

h2 {
  margin: 20px 10% 30px;
  color: #155786;
}

.formCadastro {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
}

.conteinerInput {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #155786;
}

input {
  width: 80%;
  height: 35px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f3f3f3;
  outline: none;
}

button {
  width: 15%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #3e88bd;

  color: white;
  font-size: 16px;
  font-weight: 700;
}

button:hover {
  background-color: #1b6faa;
  cursor: pointer;
}
</style>
