<template>
  <div class="d-flex justify-space-between align-center mt-6">
    <v-card class="cardMedicamento">
      <v-card-title class="pa-0">
        <div class="d-flex justify-end pa-2" style="background-color: #dfdfdf">
          <svg
            class="heart"
            :class="{ active: favorito }"
            @click="favoritar()"
            enable-background="new 0 0 50 46"
            version="1.1"
            viewBox="0 0 50 46"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="st0"
              d="M22.8,5.8c-4.5-4.5-11.7-4.5-16.1,0L6.3,6.2c-5,5.1-5,13.4,0,18.5L25,43.6l18.7-18.9c5-5.1,5-13.4,0-18.5    l-0.4-0.4c-4.5-4.5-11.7-4.5-16.1,0L25,8L22.8,5.8z"
            />
          </svg>
        </div>
      </v-card-title>

      <div class="image">
        <img src="../assets/placeholder-image.png" alt="placeholder image" />
      </div>

      <div class="ma-0 pa-0" style="color: #155786">
        <v-card-title class="font-weight-bold">{{ nome }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 font-weight-bold">
          {{ laboratorio }}
        </v-card-subtitle>
        <v-card-title class="font-weight-bold" style="line-height: 1.5rem"
          >R$ {{ preco }}</v-card-title
        >
      </div>
    </v-card>
  </div>
</template>
s

<script>
export default {
  props: {
    id: Number,
    nome: String,
    laboratorio: String,
    preco: Number,
    favorito: Boolean,
  },
  methods: {
    favoritar() {
      this.$emit("favoritar", this.id);
    },
  },
};
</script>

<style scoped>
.cardMedicamento {
  min-width: 280px;
  height: 430px;

  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px rgba(27, 111, 170, 0.2);
  margin: 0 auto;
}

.heart {
  width: 26px;
  stroke: #1b6faa;
  stroke-width: 3;
  transition: fill 0.3s;
  fill: none;
  cursor: pointer;
}

.heart.active {
  fill: #1b6faa;
}
.image {
  width: 100%;
  height: 65%;
  display: flex;
  background-color: #ececec;
  justify-content: center;
  align-items: center;
}

img {
  width: 220px;
  opacity: 0.2;
}
</style>
