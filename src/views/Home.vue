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
            <router-link to="/game">Enter Game</router-link>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Armory</a>
          </li>
          <li>
            <a href="#">Settings</a>
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
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

ul > li {
  list-style-type: none;
  cursor: pointer;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
}

div.background {
  height: 100vh;
  width: 100vw;
}

div.grad {
  height: 100vh;
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
