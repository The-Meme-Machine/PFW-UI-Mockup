<template>
  <div class="card">
    <img :src="flagUrl" alt="flag" id="flag" />
    <img :src="cardUrl" alt="card" id="icon" />
    <div id="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "unitCard",
  props: {
    unit: String,
    country: String,
    name: String,
  },
  computed: {
    flagUrl() {
      return require(`@/assets/flags/${this.country}.png`);
    },
    cardUrl() {
      return require(`@/assets/cards/${this.unit}.png`);
    },
  },
};
</script>

<style scoped>
* {
  cursor: default;
}

.card {
  border: 2px solid black;
  display: block;
  width: 150px;
  height: 100px;
  margin: 2px 0px 2px 2px;
  overflow: hidden;
  padding: 0;
  position: relative;
  transition: 0.5s all;
}

.card:hover {
  border-color: var(--secondary-color);
}

#icon {
  display: block;
  width: 100%;
  height: 75px;
  margin: 0;
}

#name {
  display: block;
  margin: 0;
  padding: 0px 0px 0px 1px;
  width: 100%;
  height: 25px;
  border-top: 2px solid black;
  background: var(--main-color);
  color: black;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
}

#flag {
  position: absolute;
  float: right;
  top: 3px;
  right: 3px;
  width: 25%;
  z-index: 2;
  /* margin: 2px; */
}
</style>