<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Iceland&display=swap");

:root {
  font-size: 20px;
}

#app {
  font-family: "Iceland", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}

a {
  margin: 2px;
  color: aquamarine;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
