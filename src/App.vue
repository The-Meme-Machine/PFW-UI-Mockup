<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Iceland&display=swap"); */
@font-face {
  font-family: "Bombardier";
  src: url("./assets/BOMBARD_.ttf");
}

:root {
  font-size: 20px;
  --main-color: aquamarine;
  --secondary-color: cyan;
  box-sizing: border-box;
  overflow: hidden;
}

#app {
  font-family: "Bombardier", Avenir, Helvetica, Arial, sans-serif;
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

button {
  background: none;
  border: 2px solid var(--main-color);
  font: inherit;
  cursor: pointer;
  transition: 0.25s all;
}

/* Animations */
/* slide */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-enter {
  opacity: 0;
  transform: translate(-50px);
}
.slide-leave-to {
  opacity: 0;
  transform: translate(50px);
}
</style>
