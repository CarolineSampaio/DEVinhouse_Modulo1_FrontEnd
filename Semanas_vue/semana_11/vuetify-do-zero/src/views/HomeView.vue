<script setup></script>

<template>
  <main>
    <h1>Home</h1>
    <v-btn> Button </v-btn>
    <v-btn variant="outlined"> Button </v-btn>
    <v-btn variant="tonal"> Button </v-btn>
    <v-btn variant="text"> Button </v-btn>
    <br />

    <v-btn color="blue" append-icon="mdi-check-bold"> Button </v-btn>
    <v-btn prepend-icon="mdi-check-bold"> Button </v-btn>
    <v-btn color="green" prepend-icon="mdi-check-bold"> Button </v-btn>
    <v-btn icon="mdi-check-bold"></v-btn>

    <v-card
      title="Título do meu Card"
      subtitle="Subtítulo do meu Card"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptatem quod
        exercitationem voluptas quas doloribus quidem. Quisquam voluptatum,
        quibusdam, quia, quos voluptates voluptatem quod exercitationem voluptas
        quas doloribus quidem."
      variant="tonal"
    ></v-card>
  </main>
</template>

<style>
main {
  margin-left: 50px;
}
button {
  margin: 10px;
}
</style>
