<template>
  <header>
    <slot name="header">
      <h1>Carro Ferrari</h1>
    </slot>
  </header>
  <slot name="imagem">
    <img
      :width="200"
      src="https://silodrome.com/wp-content/uploads/2022/05/Nigel-Mansell-Ferrari-640-F1-Car.jpg"
      alt="carro ferrari"
    />
  </slot>
  <slot></slot>

  <footer>
    <slot name="footer">
      <h6>Carro F1 640 - 1989</h6>
    </slot>
  </footer>
</template>

<script></script>

<style scoped></style>
