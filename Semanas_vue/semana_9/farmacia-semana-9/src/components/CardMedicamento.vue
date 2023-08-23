<template>
  <div class="main">
    <section class="cardMedicamento">
      <div class="favoritar">
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
      <div class="image">
        <img src="../assets/placeholder-image.png" alt="placeholder image" />
      </div>
      <div class="informações">
        <h3>{{ nome }}</h3>
        <p>{{ laboratorio }}</p>
        <h3>R$ {{ preco }}</h3>
      </div>
    </section>
  </div>
</template>

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
.main {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 50px;
  justify-content: space-evenly;
  align-items: center;
}
.cardMedicamento {
  width: 30vh;
  height: 45vh;

  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px rgba(27, 111, 170, 0.2);
}

.favoritar {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #dfdfdf;
  padding-right: 10px;
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
  opacity: 0.4;
}

.informações {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #155786;
  padding: 10px 20px;
}
</style>
