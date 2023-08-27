<template>
  <form @submit.prevent="handleCreateAccount" class="formLogin">
    <img src="../../assets/logo.png" alt="Logo" />
    <h3>Cadastro Influenciador</h3>

    <div>
      <label for="nome">Nome Completo</label>
      <input
        v-model="nome"
        type="text"
        id="nome"
        name="nome"
        class="formInput"
        :class="{ inputError: this.errors.nome }"
      />
      <span class="textError">{{ errors.nome }}</span>
    </div>

    <div>
      <label for="email">Email</label>
      <input
        v-model="email"
        type="text"
        id="email"
        name="email"
        class="formInput"
        :class="{ inputError: this.errors.email }"
      />
      <span class="textError">{{ errors.email }}</span>
    </div>

    <div>
      <label for="telefone">Telefone</label>
      <input
        v-model="telefone"
        type="text"
        id="telefone"
        name="telefone"
        class="formInput"
        :class="{ inputError: this.errors.telefone }"
      />
      <span class="textError">{{ errors.telefone }}</span>
    </div>

    <div>
      <label for="password">Senha</label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        class="formInput"
        :class="{ inputError: this.errors.password }"
      />
      <span class="textError">{{ errors.password }}</span>
    </div>

    <div>
      <label for="verifyPassword">Confirmar Senha</label>
      <input
        v-model="verifyPassword"
        type="password"
        id="verifyPassword"
        name="verifyPassword"
        class="formInput"
        :class="{ inputError: this.errors.verifyPassword }"
      />
      <span class="textError">{{ errors.verifyPassword }}</span>
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

    <div>
      <label id="confirmTerms">
        <input
          v-model="confirmTerms"
          type="checkbox"
          id="termos"
          name="termos"
          :class="{ inputError: this.errors.confirmTerms }"
        />
        Aceitar Termos de Uso
      </label>
      <span class="textError">{{ errors.confirmTerms }}</span>
    </div>

    <button type="submit">Criar conta</button>
  </form>
</template>

<script>
import * as yup from 'yup'
import { captureErrorYup } from '../../utils/captureErrorYup'
import axios from 'axios'

export default {
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      password: '',
      verifyPassword: '',
      sponsor: '',
      bio: '',
      confirmTerms: false,
      planType: '2',

      errors: {}
    }
  },
  methods: {
    handleCreateAccount() {
      try {
        const schema = yup.object().shape({
          nome: yup.string().required('Nome é obrigatório'),
          email: yup.string().email('Email inválido').required('Email é obrigatório'),
          telefone: yup.string().required('Telefone é obrigatório'),
          password: yup
            .string()
            .min(8, 'A senha deve ser maior')
            .max(20, 'Deve ter entre 8-20 letras')
            .required('A senha é obrigatória'),
          verifyPassword: yup
            .string()
            .required('A confirmação é necessária')
            .oneOf([yup.ref('password')], 'As senhas devem coincidir'),
          confirmTerms: yup.boolean().isTrue('O termo de uso deve ser aceito')
        })

        schema.validateSync(
          {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            password: this.password,
            verifyPassword: this.verifyPassword,
            confirmTerms: this.confirmTerms
          },
          { abortEarly: false }
        )

        axios
          .post('http://localhost:3000/api/register', {
            name: this.nome,
            email: this.email,
            contact: this.telefone,
            password: this.password,
            sponsor: this.sponsor,
            bio: this.bio,
            confirmTerms: this.confirmTerms,
            planType: this.planType
          })
          .then(() => {
            alert('Cadastrado com sucesso')

            this.$router.push('/')
          })
          .catch((error) => {
            console.log(error)
            if (error.response?.data?.message) {
              alert(error.response.data.message)
            } else {
              alert('Houve uma falha ao tentar cadastrar')
            }
          })
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          console.log(error)
          this.errors = captureErrorYup(error)
        }
      }
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
  margin-top: 4px;
  font-size: 12px;
}

img {
  width: 180px;
  margin: 40px 0px 20px 0px;
}
</style>
