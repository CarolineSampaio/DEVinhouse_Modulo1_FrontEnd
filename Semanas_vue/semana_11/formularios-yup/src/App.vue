<!-- Exemplo formulário usando vee-validate  -->
<template>
  <h1>Formulário de cadastro de cliente</h1>
  <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
    <label for="nome">Nome</label>
    <Field
      type="text"
      id="nome"
      name="nome"
      placeholder="Digite seu nome"
      v-model="nome"
    />
    {{ errors.nome }}

    <label for="idade">Idade</label>
    <Field
      type="number"
      id="idade"
      name="idade"
      placeholder="Digite sua idade"
      v-model="idade"
    />
    {{ errors.idade }}

    <label for="email">E-mail</label>
    <Field
      type="email"
      id="email"
      name="email"
      placeholder="Digite seu e-mail"
      v-model="email"
    />
    {{ errors.email }}

    <button type="submit">Cadastrar usuário</button>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";

export default {
  components: {
    Form,
    Field,
  },

  data() {
    return {
      nome: "",
      idade: 0,
      email: "",

      schema: yup.object().shape({
        nome: yup
          .string()
          .required("Por favor, digite seu nome!")
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
      }),
    };
  },
  methods: {
    handleSubmit() {
      alert("Usuário cadastrado com sucesso!");
      console.log(this.nome);
      console.log(this.idade);
      console.log(this.email);
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
