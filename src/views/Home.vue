<template>
  <div class="background">
    <video src="../assets/WRD-Montage-24.mp4" autoplay muted loop></video>
    <div class="grad">
      <div class="home">
        <div>
          <img src="../assets/red_logo.png" alt="PFW Logo" id="logo" />
        </div>
        <h1>Project Field Warning</h1>
        <h2>Open-source RTT</h2>
        <ul>
          <li>
            <button @click="games">Enter Game</button>
          </li>
          <li>
            <button>Profile</button>
          </li>
          <li>
            <button>Armory</button>
          </li>
          <li>
            <button>Settings</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    games() {
      this.$router.push({
        path: "/game",
      });
    },
  },
  mounted() {
    window.removeEventListener("keydown");
  },
};
</script>

<style scoped>
button {
  width: 200px;
  height: 80px;
  margin: 0.5em;
  /* padding: 1em 2em; */
  color: white;
  box-shadow: 5px 5px 0 0 var(--main-color), inset 5px 5px 0 0 var(--main-color);
}

button:hover,
button:focus {
  box-shadow: 0 0 0 0 var(--secondary-color),
    inset 200px 80px 0 0 var(--secondary-color);
  border-color: var(--secondary-color);
  color: black;
}

ul {
  margin: 0;
  padding: 0;
}

ul > li {
  list-style-type: none;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
  /* Too performance hungry */
  /* filter: hue-rotate(30deg); */
}

div.background {
  height: 100vh;
  width: 100vw;
}

div.grad {
  height: 200vh;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0)
  );
}

div.home {
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  place-content: center;
}

div.home > * {
  flex: 1;
}

#logo {
  position: relative;
  height: 100px;
  width: 100px;
}
</style>
