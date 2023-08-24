<template>
  <MenuWeb />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import MenuWeb from './components/Menu/MenuWeb.vue'

export default {
  components: {
    MenuWeb
  }
}
</script>
