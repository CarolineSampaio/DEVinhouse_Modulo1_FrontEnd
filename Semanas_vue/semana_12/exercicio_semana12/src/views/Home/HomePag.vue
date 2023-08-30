<template>
  <h1 class="py-4 mt-10" style="color: #0392b6">FUNKO POP</h1>
  <div class="container">
    <v-card class="align-center pa-2 cardFunko" v-for="product in products" :key="product.id">
      <v-img
        :src="product.imagem"
        class="pa-1 imagemFunko"
        gradient="to bottom, rgba(0,0,0,.06), rgba(0,0,0,.05)"
        cover
      >
      </v-img>
      <div style="color: #0392b6">
        <v-card-title class="font-weight-bold pl-1">{{ product.nome }}</v-card-title>

        <v-card-text class="text-h5 tefont-weight-bold pb-2 pl-1">
          10x de
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              product.parcela
            )
          }}
        </v-card-text>

        <v-card-subtitle class="text-subtitle-1 font-weight-bold pl-2">
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              product.preco
            )
          }}
        </v-card-subtitle>
      </div>

      <v-card-actions>
        <v-btn
          class="mt-1 font-weight-bold"
          variant="flat"
          color="yellow-darken-3 text-white"
          @click="() => this.$store.dispatch('adicionarProduto', { product })"
        >
          Comprar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      produtosCarrinho: []
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios
        .get('http://localhost:3000/produtos')
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          alert('Erro ao carregar produtos')
        })
    },
    adicionarProduto(produto) {
      this.produtosCarrinho.push(produto)
      alert('Produto adicionado ao carrinho!')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 50px;
}

h1 {
  padding-left: 15vh;
}
.cardFunko {
  min-width: 30vh;
  height: 500px;

  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px rgba(1, 103, 138, 0.2);
}
.imagemFunko {
  width: 100%;
  height: 65%;
}
</style>
