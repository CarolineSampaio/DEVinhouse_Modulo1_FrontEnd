import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      produtosCarrinho: []
    }
  },
  mutations: {
    adicionarProdutoAoCarrinho(state, produtoRecebido) {
      const produtoNoCarrinho = state.produtosCarrinho.find(
        (produto) => produto.id === produtoRecebido.id
      )

      if (produtoNoCarrinho) {
        state.produtosCarrinho = state.produtosCarrinho.map((item) => {
          if (item.id === produtoRecebido.id) {
            item.quantidade = item.quantidade + 1
          }
          return item
        })
      } else {
        state.produtosCarrinho = [
          ...state.produtosCarrinho,
          {
            ...produtoRecebido,
            quantidade: 1
          }
        ]
      }
    }
  },
  actions: {
    adicionarProduto(context, value) {
      console.log(value.product)
      context.commit('adicionarProdutoAoCarrinho', value.product)
    }
  }
})

export default store
