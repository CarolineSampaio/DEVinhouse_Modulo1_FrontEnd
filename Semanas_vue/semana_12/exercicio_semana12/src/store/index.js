import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      produtosCarrinho: [],
      total: 0
    }
  },
  mutations: {
    adicionarProdutoAoCarrinho(state, value) {
      const produtoRecebido = value.product
      const produtoQuantidade = value.quantidade
      const produtoNoCarrinho = state.produtosCarrinho.find(
        (produto) => produto.id === produtoRecebido.id
      )

      if (produtoNoCarrinho) {
        state.produtosCarrinho = state.produtosCarrinho.map((item) => {
          if (item.id === produtoRecebido.id) {
            item.quantidade = produtoQuantidade ? produtoQuantidade : item.quantidade + 1
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
    },
    calculaTotal(state) {
      state.total = state.produtosCarrinho.reduce((acc, item) => {
        return acc + item.preco * item.quantidade
      }, 0)
    },
    removerProdutoDoCarrinho(state, value) {
      state.produtosCarrinho = state.produtosCarrinho.filter((item) => item.id !== value.product.id)
    }
  },
  actions: {
    adicionarProduto(context, value) {
      console.log('adicionarProduto', value)
      context.commit('adicionarProdutoAoCarrinho', value)
      context.commit('calculaTotal')
    },
    removerProduto(context, value) {
      console.log('removerProduto', value)
      context.commit('removerProdutoDoCarrinho', value)
      context.commit('calculaTotal')
    }
  }
})

export default store
