<template>
  <form class="formLogin">
    <img src="../../assets/logo.png" alt="Logo" />
    <h3>Cadastro influenciador</h3>

    <label for="nome">Nome Completo</label>
    <input v-model="nome" type="text" id="nome" name="nome" />

    <label for="email">Email</label>
    <input v-model="email" type="text" id="email" name="email" />

    <label for="telefone">Telefone</label>
    <input v-model="telefone" type="text" id="telefone" name="telefone" />

    <label for="password">Senha</label>
    <input v-model="password" type="password" id="password" name="password" />

    <label for="confirmPassword">Confirmar Senha</label>
    <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" />

    <select id="sponsor" v-model="sponsor">
      <option value="" disabled selected>Selecione um patrocinador</option>
      <option value="Mercado Livre">Mercado Livre</option>
      <option value="Magazine Luiza">Magazine Luiza</option>
      <option value="Amazon">Amazon</option>
      <option value="Americanas">Americanas</option>
      <option value="Submarino">Submarino</option>
    </select>

    <label for="bio">Sua biografia</label>
    <textarea v-model="bio" id="bio" rows="12"></textarea>

    <label id="confirmTerms">
      <input v-model="confirmTerms" type="checkbox" id="termos" name="termos" />
      Aceitar Termos de Uso
    </label>

    <input v-model="planType" id="bronze" type="radio" value="1" />
    <label for="bronze">Bronze</label>

    <input v-model="planType" id="prata" type="radio" value="2" />
    <label for="prata">Prata</label>

    <input v-model="planType" id="premium" type="radio" value="3" />
    <label for="premium">Premium</label>

    <button type="submit">Criar conta</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      password: '',
      confirmPassword: '',
      sponsor: '',
      bio: '',
      confirmTerms: false,
      planType: '2'
    }
  }
}
</script>

<style scoped>
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
