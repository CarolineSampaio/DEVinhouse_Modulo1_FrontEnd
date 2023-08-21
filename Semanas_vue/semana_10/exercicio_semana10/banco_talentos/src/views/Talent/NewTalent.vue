<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <h1 class="title">Cadastro de talento</h1>

    <form @submit.prevent="handleSubmit" class="formNew">
      <div class="formElement">
        <div>
          <label for="name">Nome completo</label>
          <input
            id="name"
            v-model="name"
            class="formInput"
            :class="{ inputError: this.errors.nome }"
          />
          <span class="textError">{{ errors.nome }}</span>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="formInput"
            :class="{ inputError: this.errors.email }"
          />
          <span class="textError">{{ errors.email }}</span>
        </div>
      </div>

      <div class="formElement">
        <div>
          <label for="birthDate">Data de nascimento</label>
          <input
            id="birthDate"
            v-model="birthDate"
            class="formInput"
            :class="{ inputError: this.errors.birthDate }"
          />
          <span class="textError">{{ errors.birthDate }}</span>
        </div>
        <div>
          <label for="phone">Whatsapp</label>
          <input
            id="phone"
            v-model="phone"
            class="formInput"
            :class="{ inputError: this.errors.phone }"
          />
          <span class="textError">{{ errors.phone }}</span>
        </div>
      </div>

      <div class="formSelect">
        <label for="area">Área de interesse</label>
        <select v-model="area" :class="{ inputError: this.errors.area }">
          <option value="" disabled selected></option>
          <option value="frontend">FrontEnd</option>
          <option value="backend">BackEnd</option>
          <option value="fullstack">FullStack</option>
        </select>
        <span class="textError">{{ errors.area }}</span>
      </div>

      <div class="formSelect">
        <label for="nivelProfissional">Nível profissional</label>
        <select v-model="nivel" :class="{ inputError: this.errors.nivel }">
          <option value="" disabled selected></option>
          <option value="junior">Junior</option>
          <option value="pleno">Pleno</option>
          <option value="senior">Senior</option>
        </select>
        <span class="textError">{{ errors.nivel }}</span>
      </div>

      <div class="formSelect">
        <p>Suas habilidades:</p>
        <div v-if="area === 'frontend'" class="inputBox">
          <label><input type="checkbox" v-model="skills" value="HTML" />HTML</label>
          <label><input type="checkbox" v-model="skills" value="CSS" />CSS</label>
          <label><input type="checkbox" v-model="skills" value="JavaScript" />JavaScript</label>
          <label><input type="checkbox" v-model="skills" value="React" />React</label>
          <label><input type="checkbox" v-model="skills" value="Vue" />Vue</label>
          <label><input type="checkbox" v-model="skills" value="Angular" />Angular</label>
        </div>

        <div v-if="area === 'backend'" class="inputBox">
          <label><input type="checkbox" v-model="skills" value="Python" />Python</label>
          <label><input type="checkbox" v-model="skills" value="PHP" />PHP</label>
          <label><input type="checkbox" v-model="skills" value="Ruby" />Ruby</label>
          <label><input type="checkbox" v-model="skills" value="Java" />Java</label>
          <label><input type="checkbox" v-model="skills" value="C#" />C#</label>
          <label><input type="checkbox" v-model="skills" value="Node" />Node</label>
        </div>

        <div v-if="area === 'fullstack' || area === ''" class="inputBox">
          <label><input type="checkbox" v-model="skills" value="HTML" />HTML</label>
          <label><input type="checkbox" v-model="skills" value="CSS" />CSS</label>
          <label><input type="checkbox" v-model="skills" value="JavaScript" />JavaScript</label>
          <label><input type="checkbox" v-model="skills" value="React" />React</label>
          <label><input type="checkbox" v-model="skills" value="Vue" />Vue</label>
          <label><input type="checkbox" v-model="skills" value="Angular" />Angular</label>
        </div>
        <span class="textError">{{ errors.skills }}</span>
      </div>

      <div>
        <textarea
          v-model="presentation"
          placeholder="Digite aqui sua carta de apresentação"
          :class="{ inputError: this.errors.presentation }"
        ></textarea>
        <span class="textError">{{ errors.presentation }}</span>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </main>
</template>

<script>
import * as yup from 'yup'

export default {
  data() {
    return {
      name: '',
      email: '',
      birthDate: '',
      phone: '',
      area: '',
      nivel: '',
      skills: [],
      presentation: '',

      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      try {
        const schema = yup.object().shape({
          nome: yup.string().required('Nome é obrigatório!'),
          email: yup.string().email('Email inválido').required('Email é obrigatório!'),
          birthDate: yup.string().required('Data de nascimento é obrigatória!'),
          phone: yup.string().required('Whatsapp é obrigatório!'),
          area: yup.string().required('Área de interesse é obrigatória!'),
          nivel: yup.string().required('Nível profissional é obrigatório!'),
          skills: yup.array().min(1, 'Selecione pelo menos uma habilidade!'),
          presentation: yup.string().required('Carta de apresentação é obrigatória!')
        })

        schema.validateSync(
          {
            nome: this.name,
            email: this.email,
            birthDate: this.birthDate,
            phone: this.phone,
            area: this.area,
            nivel: this.nivel,
            skills: this.skills,
            presentation: this.presentation
          },
          { abortEarly: false }
        )
      } catch (error) {
        const captureErrorYup = (error) =>
          error.inner.reduce((acc, currentValue) => {
            const data = { ...acc }
            data[currentValue.path] = currentValue.message
            return data
          }, {})

        this.errors = captureErrorYup(error)
      }
    },

    watch: {
      area(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.skills = []
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
  color: #2b2b2b;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
}

.formNew {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.formElement {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  gap: 20px;
}

.formElement div,
.formSelect {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}

.formSelect {
  margin-bottom: 1rem;
}

.formInput,
textarea,
select {
  height: 38px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  outline: none;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  padding-left: 8px;
}

textarea {
  height: 100px;
  resize: none;
  margin-bottom: 1rem;
  font-family:
    Helvetica Neue,
    Segoe UI,
    Roboto,
    Ubuntu,
    sans-serif;
  padding-top: 5px;
}

.inputBox {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.inputBox label {
  display: flex;
  align-items: center;
  gap: 5px;
}

input[type='checkbox'] {
  width: 15px;
  height: 15px;
}

input[type='checkbox']:checked {
  accent-color: #0a7172;
}

div button {
  margin-left: auto;
}

button {
  width: 15%;
  height: 38px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: #0a7172;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #e8c860;
}

.inputError {
  border-color: red;
}

.textError {
  color: red;
  font-size: 12px;
}
</style>
