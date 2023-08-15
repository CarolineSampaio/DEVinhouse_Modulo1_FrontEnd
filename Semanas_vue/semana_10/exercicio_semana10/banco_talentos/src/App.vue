<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <img width="35" src="./assets/icons/homeIcon.svg" alt="icone home" />
      </li>

      <li>
        <router-link to="/talento/novo">Talentos</router-link>
        <img width="35" src="./assets/icons/talentIcon.svg" alt="opened-folder" />
      </li>
      <li>
        <router-link to="/about">About</router-link>
        <img width="35" src="./assets/icons/sobreIcon.svg" alt="map-marker--v1" />
      </li>
    </ul>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script></script>

<style scoped>
ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 30px 0px 60px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  border: 1px solid #d5dee5;
  padding: 5px 20px;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
