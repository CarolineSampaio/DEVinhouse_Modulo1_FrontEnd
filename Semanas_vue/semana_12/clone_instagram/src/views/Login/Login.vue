<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="handleLogin" class="formLogin">
    <img src="../../assets/logo.png" alt="Logo" />
    <input
      :class="errorInputEmail ? 'inputError' : ''"
      type="text"
      v-model="email"
      placeholder="Digite seu email"
    />
    <input
      :class="errorInputPassword ? 'inputError' : ''"
      type="password"
      v-model="password"
      placeholder="Digite sua senha"
    />

    <button type="submit">Logar</button>

    <p><router-link to="/cadastro">Cadastre-se</router-link></p>

    <div class="errorBox">
      <ul>
        <li v-if="errorInputEmail">{{ errorInputEmail }}</li>
        <li v-if="errorInputPassword">{{ errorInputPassword }}</li>
      </ul>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',

      errorInputEmail: '',
      errorInputPassword: ''
    }
  },
  methods: {
    handleLogin() {
      this.errorInputEmail = ''
      this.errorInputPassword = ''

      if (this.email === '') this.errorInputEmail = 'Digite um email válido!'

      if (this.password === '') this.errorInputPassword = 'Digite uma senha válida!'

      if (!this.errorInputEmail && !this.errorInputPassword) {
        axios
          .post('http://localhost:3000/api/login', {
            email: this.email,
            password: this.password
          })
          .then((response) => {
            localStorage.setItem('instagram_token', response.data.token)
            localStorage.setItem('instagram_name', response.data.name)

            console.log('logado com sucesso')
            this.$router.push('/home')
          })
          .catch(() => {
            alert('Falha ao realizar login!')
          })
      }
    },
    outroMetodo() {}
  }
}
</script>

<style scoped>
.errorBox {
  background: tomato;
  width: 80%;
  color: #fff;
}

li {
  list-style: none;
}

.formLogin {
  margin: 40px auto;
  width: 40%;

  border: 1px solid #dddddd;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
}

.inputArea {
  width: 80%;

  display: flex;
  flex-direction: column;
}

.inputArea input {
  width: 100%;
}

input {
  height: 40px;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  outline: none;
  background-color: rgb(250, 250, 250);
}

button {
  width: 80%;
  height: 40px;
  background-color: #4cb5f9;

  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
}

button:hover {
  background-color: #1877f2;
}

.inputError {
  border-color: red;
}

.textError {
  color: red;
  margin: 4px;
}

img {
  width: 180px;
  margin: 40px 0px 20px 0px;
}
</style>
