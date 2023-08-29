import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      produtosCarrinho: []
    }
  }
})

export default store
