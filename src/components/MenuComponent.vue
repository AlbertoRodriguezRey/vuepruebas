<template>
  <ul id="menu">
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/prueba">Inicio</router-link>
    </li>
    <li>
      <router-link to="/cine">Cine</router-link>
    </li>
    <li>
      <router-link to="/musica">Musica</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
  margin: 10px;
}
</style>