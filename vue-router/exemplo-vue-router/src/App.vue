<template>
  <div id="app">
    <comp-cabecalho />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'usuario' }">Usuário</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
    <comp-rodape />
  </div>
</template>

<script>
import CompCabecalho from "@/components/templates/CompCabecalho";
import CompRodape from "@/components/templates/CompRodape";

export default {
  components: { CompCabecalho, CompRodape },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
