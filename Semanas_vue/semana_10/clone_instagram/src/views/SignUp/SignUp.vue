<template>
  <form @submit.prevent="handleCreateAccount" class="formLogin">
    <img src="../../assets/logo.png" alt="Logo" />
    <h3>Cadastro Influenciador</h3>

    <div>
      <label for="nome">Nome Completo</label>
      <input v-model="nome" type="text" id="nome" name="nome" class="formInput" />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="email" type="text" id="email" name="email" class="formInput" />
    </div>

    <div>
      <label for="telefone">Telefone</label>
      <input v-model="telefone" type="text" id="telefone" name="telefone" class="formInput" />
    </div>

    <div>
      <label for="password">Senha</label>
      <input v-model="password" type="password" id="password" name="password" class="formInput" />
    </div>

    <div>
      <label for="confirmPassword">Confirmar Senha</label>
      <input
        v-model="confirmPassword"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        class="formInput"
      />
    </div>

    <div>
      <label for="sponsor">Patrocinador</label>
      <select id="sponsor" v-model="sponsor">
        <option value="" disabled selected>Selecione um patrocinador</option>
        <option value="Mercado Livre">Mercado Livre</option>
        <option value="Magazine Luiza">Magazine Luiza</option>
        <option value="Amazon">Amazon</option>
        <option value="Americanas">Americanas</option>
        <option value="Submarino">Submarino</option>
      </select>
    </div>

    <div>
      <label for="bio">Sua biografia</label>
      <textarea class="textArea" v-model="bio" id="bio" rows="12"></textarea>
    </div>

    <div>
      <p>Selecione uma categoria:</p>
      <div>
        <input v-model="planType" id="bronze" type="radio" value="1" />
        <label for="bronze">Bronze</label>
      </div>
      <div>
        <input v-model="planType" id="prata" type="radio" value="2" />
        <label for="prata">Prata</label>
      </div>
      <div>
        <input v-model="planType" id="premium" type="radio" value="3" />
        <label for="premium">Premium</label>
      </div>
    </div>

    <label id="confirmTerms">
      <input v-model="confirmTerms" type="checkbox" id="termos" name="termos" />
      Aceitar Termos de Uso
    </label>

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
  },
  methods: {
    handleCreateAccount() {
      alert('Conta criada com sucesso!')
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
  gap: 12px;
  align-items: center;
  padding: 10px;
}

.formLogin > div {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.formLogin > div > div {
  display: flex;
  align-items: center;
  gap: 5px;
}

.formInput,
.textArea,
select {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  outline: none;
  background-color: rgb(250, 250, 250);
}

.textArea {
  height: 150px;
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
