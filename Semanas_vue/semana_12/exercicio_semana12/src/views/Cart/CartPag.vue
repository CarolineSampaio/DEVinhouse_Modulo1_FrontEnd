<template>
  <div class="main">
    <v-table class="table">
      <thead class="thead">
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">Produto</th>
          <th class="text-center">Quantidade</th>
          <th class="text-center">Subtotal</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
          <td class="text-center"><img :src="item.imagem" width="30" /></td>
          <td class="text-center">{{ item.nome }}</td>
          <td class="text-center">
            <input
              type="number"
              class="input"
              min="1"
              step="1"
              v-model="item.quantidade"
              @change="
                () =>
                  this.$store.dispatch('adicionarProduto', {
                    product: item,
                    quantidade: item.quantidade
                  })
              "
            />
          </td>
          <td class="text-center">
            {{
              new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                item.quantidade * item.preco
              )
            }}
          </td>
          <td>
            <v-btn
              variant="text"
              @click="() => this.$store.dispatch('removerProduto', { product: item })"
            >
              <v-icon color="yellow-darken-3" size="large">mdi-delete-forever</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="total" style="color: #0392b6">
      <h3>
        Total:
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            this.$store.state.total
          )
        }}
      </h3>
      <v-btn variant="outlined" style="background-color: #0392b6; color: #fff"
        >Finalizar Compra</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(27, 111, 170, 0.2);
  padding: 20px;
  margin: 5% 15%;
}

.input {
  width: 150px;
  height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 30px;
}
</style>
