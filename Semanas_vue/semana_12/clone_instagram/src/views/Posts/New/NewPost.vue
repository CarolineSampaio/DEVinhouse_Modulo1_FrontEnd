<template>
  <v-form @submit.prevent="handleSubmit">
    <span class="textError">{{ this.errors.title }} </span>
    <v-text-field label="Título" variant="outlined" v-model="title" />

    <span class="textError">{{ this.errors.description }} </span>
    <v-textarea label="Descrição" variant="outlined" v-model="description" />

    <span class="textError">{{ this.errors.url }} </span>
    <v-text-field label="URL" variant="outlined" v-model="url" />

    <v-btn type="submit" color="blue">Cadastrar</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'
import * as yup from 'yup'
import { captureErrorYup } from '../../../utils/captureErrorYup.js'

export default {
  data() {
    return {
      title: '',
      description: '',
      url: '',
      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      try {
        const schema = yup.object().shape({
          title: yup.string().required('Título é obrigatório'),
          url: yup.string().required('URL é obrigatório'),
          description: yup
            .string()
            .required('Descrição é obrigatório')
            .min(20, 'A descrição é pequena demais')
            .max(200, 'A descrição ultrapassou o limite')
        })
        schema.validateSync(
          {
            title: this.title,
            description: this.description,
            url: this.url
          },
          { abortEarly: false }
        )

        const token = localStorage.getItem('instagram_token')

        axios
          .post(
            'http://localhost:3000/api/posts',
            {
              title: this.title,
              description: this.description,
              url: this.url
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(() => {
            alert('Post cadastrado com sucesso!')
            this.title = ''
            this.url = ''
            this.description = ''
          })
          .catch(() => {
            alert('Erro ao cadastrar post!')
          })
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.errors = captureErrorYup(error)
        }
      }
    }
  }
}
</script>
<style scoped>
span {
  margin: 0;
  padding: 0;
}
.textError {
  color: red;
}
</style>
