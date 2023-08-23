<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Conteúdo principal</h1>
  <p>Este é o conteúdo principal da página.</p>

  <p>Nome: <span id="nome"></span></p>
  <p>Username: <span id="username"></span></p>
  <p>Qtd de seguidores: <span id="qtdSeguidores"></span></p>
  <p>Qtd de publicações: <span id="qtdPublicacoes"></span></p>

  <v-form class="d-flex" ref="form" @submit.prevent="handleSubmit">
    <v-text-field
      class="w-25 me-5"
      label="Nome"
      variant="outlined"
      :rules="[(v) => !!v || 'Nome é obrigatório!']"
      v-model="post.usuario"
      required
    ></v-text-field>

    <v-text-field
      class="w-50"
      label="Imagem"
      variant="outlined"
      :rules="[(v) => !!v || 'Imagem é obrigatória!']"
      v-model="post.imagem"
      required
    ></v-text-field>

    <v-btn variant="tonal" class="mx-5" color="green" type="submit">Cadastrar</v-btn>
    <v-btn variant="tonal" color="orange" type="reset">Limpar</v-btn>
  </v-form>

  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ text }}

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false"> Fechar </v-btn>
    </template>
  </v-snackbar>

  <div class="d-flex flex-wrap">
    <v-card
      v-for="(item, index) in postsList"
      :key="index"
      variant="tonal"
      class="w-25 ma-5"
      :title="item.usuario"
    >
      <v-card-text>
        <img width="250" :src="item.imagem" alt="Imagem de um gato" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // nomes: [
      //   'https://http.cat/images/202.jpg',
      //   'https://http.cat/images/301.jpg',
      //   'https://http.cat/images/404.jpg',
      //   'https://http.cat/images/408.jpg',
      //   'https://http.cat/images/417.jpg',
      //   'https://http.cat/images/500.jpg'
      // ]
      snackbar: false,
      timeout: 2000,
      text: '',
      postsList: [],
      post: {
        usuario: '',
        imagem: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.postsList.push({ ...this.post })
        this.text = 'Usuário cadastrado com sucesso!'
        this.snackbar = true
        this.$refs.form.reset()
      }
    }
  }
}
</script>
