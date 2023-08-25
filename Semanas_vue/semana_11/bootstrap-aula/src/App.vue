<template>
  <!-- class="container-fluid" = margin menor-->
  <div class="container">
    <h1>Bootstrap</h1>
    <!-- <button class="my-5 btn btn-outline-success">Cadastrar</button> -->

    <!-- <div class="row">
      <div class="card col-lg-4 col-md-6 col-12">
        <div class="card-header">
          <div class="card-title">
            Título do card
          </div>
        </div>
        <div class="card-body">
          <h5>Card exemplo</h5>
        </div>
      </div>
      <div class="card col-lg-4 col-md-6 col-12">
        <div class="card-header">
          <div class="card-title">
            Título do card
          </div>
        </div>
        <div class="card-body">
          <h5>Card exemplo</h5>
        </div>
      </div>
      <div class="card col-lg-4 col-md-6 col-12">
        <div class="card-header">
          <div class="card-title">
            Título do card
          </div>
        </div>
        <div class="card-body">
          <h5>Card exemplo</h5>
        </div>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="input-group">
        <label for="nome" class="input-group-text">Nome</label>
        <input
          type="text"
          placeholder="nome"
          class="form-control form-control-sm"
        />
      </div>

      <label for="nome" class="form-label">Nome</label>
      <input
        type="text"
        placeholder="nome"
        class="form-control form-control-sm"
      />
    </div> -->

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div
          v-for="(imagem, index) in imagens"
          class="carousel-item"
          :class="index == imagemIndex ? 'active' : ''"
        >
          <img :src="imagem" class="d-block w-100" alt="imagem" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" @click="imagemAnterior">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden" @click="proximaImagem">Next</span>
      </button>
    </div>

    <div class="row align-items-center">
      <div class="input-group col">
        <label for="nome" class="input-group-text">Nome</label>
        <input
          type="text"
          placeholder="nome"
          class="form-control form-control-sm"
          v-model="curso.nome"
        />
      </div>
      <div class="input-group col">
        <label for="duracao" class="input-group-text">Duração</label>
        <input
          type="text"
          placeholder="duracao"
          class="form-control form-control-sm"
          v-model="curso.duracao"
        />
      </div>
      <div class="input-group col">
        <label for="vagas" class="input-group-text">Vagas</label>
        <input
          type="text"
          placeholder="vagas"
          class="form-control form-control-sm"
          v-model="curso.vagas"
        />
      </div>
      <div class="col-1">
        <button class="btn btn-primary" @click="adicionarCurso">
          Cadastrar
        </button>
      </div>
    </div>

    <div class="d-flex">
      <div class="card" v-for="curso in cursoList">
        <div class="card-header">
          <div class="card-title">{{ curso.nome }}</div>
        </div>
        <div class="card-body">
          <span>Vagas: {{ curso.vagas }}</span>
          <span class="ms-5">Duração: {{ curso.duracao }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagens: [
        "https://picsum.photos/id/870/900/300",
        "https://picsum.photos/id/871/900/300",
        "https://picsum.photos/id/872/900/300",
        "https://picsum.photos/id/873/900/300",
        "https://picsum.photos/id/874/900/300",
        "https://picsum.photos/id/875/900/300",
        "https://picsum.photos/id/876/900/300",
      ],
      imagemIndex: 0,

      cursoList: [],

      curso: {
        nome: "",
        duracao: "",
        vagas: "",
      },
    };
  },
  methods: {
    imagemAnterior() {
      if (this.imagemIndex == 0) {
        this.imagemIndex = 6;
      }
      this.imagemIndex -= 1;
    },
    proximaImagem() {
      if (this.imagemIndex == 6) {
        this.imagemIndex = 0;
      }
      this.imagemIndex += 1;
    },

    adicionarCurso() {
      this.cursoList.push({
        nome: this.curso.nome,
        duracao: this.curso.duracao,
        vagas: this.curso.vagas,
      });
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>
