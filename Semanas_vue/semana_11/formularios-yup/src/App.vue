<template>
  <h1>Formulário de cadastro de cliente</h1>
  <form @submit.prevent="handleSubmit">
    <label for="nome">Nome</label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Digite seu nome"
      v-model="nome"
    />
    {{ this.erros.nome }}

    <label for="idade">Idade</label>
    <input
      type="number"
      id="idade"
      name="idade"
      placeholder="Digite sua idade"
      v-model="idade"
    />
    {{ this.erros.idade }}

    <label for="email">E-mail</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Digite seu e-mail"
      v-model="email"
    />
    {{ this.erros.email }}

    <button type="submit">Cadastrar usuário</button>
  </form>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "./utils/captureErrorYup";

export default {
  data() {
    return {
      nome: "",
      idade: 0,
      email: "",

      erros: {},
    };
  },
  methods: {
    handleSubmit() {
      try {
        const usuarioSchema = yup.object().shape({
          nome: yup
            .string()
            .required()
            .min(3, "Por favor, digite um nome com no mínimo 3 caracteres!"),
          idade: yup
            .number()
            .required()
            .test(
              "idade",
              "Por favor, digite sua idade!",
              (value) => value !== 0
            ),
          email: yup
            .string()
            .email()
            .required("Por favor, digite um e-mail válido!"),
        });

        usuarioSchema.validateSync(
          {
            nome: this.nome,
            idade: this.idade,
            email: this.email,
          },
          { abortEarly: false }
        );

        alert("Formulário enviado");
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.erros = captureErrorYup(error);
          alert("erro");
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
}

form input {
  width: 100%;
  height: 30px;
}

button {
  margin: 0 auto;
  width: 40%;
  height: 30px;
}
h1 {
  text-align: center;
}
</style>
