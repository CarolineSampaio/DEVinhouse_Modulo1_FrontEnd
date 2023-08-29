<template>
  <PagMenu />
  <router-view></router-view>
</template>

<script>
import PagMenu from './components/PagMenu.vue'

export default {
  components: {
    PagMenu
  }
}
</script>
