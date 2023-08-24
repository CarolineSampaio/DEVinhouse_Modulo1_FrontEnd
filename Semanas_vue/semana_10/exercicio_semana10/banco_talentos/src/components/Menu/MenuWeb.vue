<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <ul>
      <router-link to="/" exact-active-class="active">
        <li class="itemMenu">
          <h3>Home</h3>
          <img class="icon" height="40" src="../../assets/icons/homeIcon.svg" alt="icone home" />
        </li>
      </router-link>

      <router-link to="/talento/novo" exact-active-class="active">
        <li class="itemMenu">
          <h3>Talentos</h3>
          <img
            class="icon"
            height="40"
            src="../../assets/icons/talentIcon.svg"
            alt="icone talentos"
          />
        </li>
      </router-link>

      <router-link to="/sobre" exact-active-class="active">
        <li class="itemMenu">
          <h3>Sobre</h3>
          <img class="icon" height="40" src="../../assets/icons/sobreIcon.svg" alt="icone sobre" />
        </li>
      </router-link>
    </ul>
  </header>
</template>

<style scoped>
.icon {
  /* O filter foi utilizado para possibilitar a manipulação cromática do svg, uma vez que ao importar através da tag imagem, não é possível.
As propriedades abaixo foram geradas a partir da cor escolhida, através de um site conversor.
Site referência: https://cssfilterconverter.com/ */

  filter: brightness(0) saturate(100%) invert(32%) sepia(17%) saturate(2360%) hue-rotate(133deg)
    brightness(102%) contrast(92%);
}

.active {
  filter: brightness(0) saturate(100%) invert(77%) sepia(44%) saturate(473%) hue-rotate(4deg)
    brightness(96%) contrast(95%);
}

ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 30px 0px 60px;
}

.itemMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;

  border: 2px solid #d5dee5;
  padding: 5px 10px;
}

a {
  text-decoration: none;
  color: #2b2b2b;
}

h3 {
  font-weight: 500;
}
</style>
