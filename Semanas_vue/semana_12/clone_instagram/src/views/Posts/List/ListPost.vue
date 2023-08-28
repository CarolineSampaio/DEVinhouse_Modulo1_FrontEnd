<template>
  <h1>Listagem de posts</h1>

  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>

  <button @click="loadPosts">Carregar posts</button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    loadPosts() {
      const token = localStorage.getItem('instagram_token')
      axios({
        url: 'http://localhost:3000/api/posts',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          this.posts = response.data.posts
          alert('deu certo')
        })
        .catch(() => {
          alert('deu ruim')
        })
    }
  }
}
</script>
