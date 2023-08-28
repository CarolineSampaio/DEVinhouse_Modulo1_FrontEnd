<template>
  <h1>Listagem de posts</h1>

  <!-- Exemplo lista -->
  <ul style="display: none">
    <li v-for="post in posts" :key="post.id">
      <img :src="post.url" width="100" />

      <p>{{ post.title }}</p>
      <p>{{ post.description }}</p>
    </li>
  </ul>

  <!-- Exemplo cards -->
  <v-card
    v-for="post in posts"
    :key="post.id"
    width="400"
    :title="post.title"
    :subtitle="post.description"
    class="mb-2"
    style="display: none"
  />

  <!-- Exemplo tabela -->
  <v-table>
    <thead>
      <tr>
        <th>Código</th>
        <th>URL</th>
        <th>Título</th>
        <th>Descrição</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td><img :src="post.url" width="30" /></td>
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
        <td>
          <v-btn @click="() => deletarPost(post.id)">Deletar</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      const token = localStorage.getItem('instagram_token')
      axios
        .get('http://localhost:3000/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          this.posts = response.data.posts
        })
        .catch(() => {
          console.log('Erro ao carregar posts!')
        })
    },

    deletarPost(id) {
      const token = localStorage.getItem('instagram_token')

      axios
        .delete('http://localhost:3000/api/posts/' + id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(() => {
          alert('Deletado com sucesso')
          this.loadPosts()
        })
        .catch(() => {
          alert('erro ao deletar o post ')
        })
    }
  }
}
</script>
