<template>
  <div id="game" @keydown.esc="openMenu = !openMenu" focus>
    <div id="menu" v-if="openMenu">
      <div id="menu-container">
        Menu
        <hr />
        <button @click="back">Return</button>
        <hr />Player List, Scores, and Pings
      </div>
    </div>
    <div id="top-left">
      <!-- @mouseleave="closeSpawn" -->
      <div id="points">
        <button @mouseenter="spawn.openTabs=true" :class="[spawn.openTabs ? 'active' : '']">
          <span class="left">+1</span> 1983
        </button>
        <!-- v-if="availability" -->
        <button v-for="(unit, index) in availability" :key="index">
          <span class="left">{{unit.rank}}</span>
          {{unit.num}}
        </button>
      </div>
      <div id="separator">
        <div id="categories" v-if="spawn.openTabs">
          <button
            @mouseenter="spawn.openLog = true; eventBuffer = 'Enter Log';"
            @mouseleave="eventBuffer = 'Leave Log'"
            :class="[spawn.openLog ? 'active' : '']"
          >LOG</button>
          <button
            @mouseenter="spawn.openInf=true; eventBuffer = 'Enter Inf';"
            @mouseleave="eventBuffer = 'Leave Inf'"
            :class="[spawn.openInf ? 'active' : '']"
          >INF</button>
          <button
            @mouseenter="spawn.openSup=true; eventBuffer = 'Enter Sup';"
            @mouseleave="eventBuffer = 'Leave Sup'"
            :class="[spawn.openSup ? 'active' : '']"
          >SUP</button>
          <button
            @mouseenter="spawn.openTnk=true; eventBuffer = 'Enter Tnk';"
            @mouseleave="eventBuffer = 'Leave Tnk'"
            :class="[spawn.openTnk ? 'active' : '']"
          >TNK</button>
          <button
            @mouseenter="spawn.openRec=true; eventBuffer = 'Enter Rec';"
            @mouseleave="eventBuffer = 'Leave Rec'"
            :class="[spawn.openRec ? 'active' : '']"
          >REC</button>
          <button
            @mouseenter="spawn.openVhc=true; eventBuffer = 'Enter Vhc';"
            @mouseleave="eventBuffer = 'Leave Vhc'"
            :class="[spawn.openVhc ? 'active' : '']"
          >VHC</button>
          <button
            @mouseenter="spawn.openHel=true; eventBuffer = 'Enter Hel';"
            @mouseleave="eventBuffer = 'Leave Hel'"
            :class="[spawn.openHel ? 'active' : '']"
          >HEL</button>
          <button
            @mouseenter="spawn.openAir=true; eventBuffer = 'Enter Air';"
            @mouseleave="eventBuffer = 'Leave Air'"
            :class="[spawn.openAir ? 'active' : '']"
          >AIR</button>
        </div>
        <div>
          <div class="unitTab" id="inf" v-if="spawn.openInf">
            <card
              v-for="(unit, index) in deck.inf"
              :name="unit.name"
              :country="unit.country"
              :unit="unit.unit"
              :key="index"
              @mouseenter="availability = unit.veterancy; console.log(unit.veterancy);"
              @mouseleave="availability = null"
            ></card>
          </div>
          <div class="unitTab" id="sup" v-if="spawn.openSup"></div>
        </div>
        <div class="unitDetails"></div>
      </div>
    </div>
    <div id="top-right">
      <img src="../assets/minimap.jpg" alt="Minimap" title="Minimap" id="minimap" />
    </div>
    <div id="bottom-left">
      <div></div>
    </div>
  </div>
</template>

<script>
/* global tab */
import card from "@/components/unitCard.vue";

export default {
  name: "Ingame",
  components: {
    card,
  },
  data() {
    return {
      eventBuffer: null,
      openMenu: false,
      spawn: {
        openTabs: false,
        openLog: false,
        openInf: false,
        openSup: false,
        openTnk: false,
        openRec: false,
        openVhc: false,
        openHel: false,
        openAir: false,
      },
      deck: {
        log: new Array(),
        inf: [
          {
            name: "RGSN '90",
            country: "norway",
            unit: "FSK",
            veterancy: [
              { rank: "Elite", num: 7 },
              { rank: "Veteran", num: 9 },
            ],
          },
        ],
        sup: new Array(),
        tnk: new Array(),
        rec: new Array(),
        vhc: new Array(),
        hel: new Array(),
        air: new Array(),
      },
      availability: null,
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/" });
    },
    closeSpawn() {
      for (let tab in this.spawn) {
        this.spawn[tab] = false;
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.openMenu = !this.openMenu;
      }
    });
  },
  watch: {
    eventBuffer: function (newEvent, oldEvent) {
      if (
        newEvent.split(" ")[0] === "Enter" &&
        // oldEvent.split(" ")[0] === "Leave" &&
        newEvent.split(" ")[1] !== oldEvent.split(" ")[1]
      ) {
        this.spawn[`open${newEvent.split(" ")[1]}`] = true;
        this.spawn[`open${oldEvent.split(" ")[1]}`] = false;
      }
    },
  },
};
</script>

<style scoped>
button {
  cursor: default;
  margin: 2px;
  width: 100px;
  height: 40px;
  background: rgba(0, 215, 215, 0.7);
}

button.active {
  background: rgba(0, 215, 215, 1);
  /* border-color: var(--secondary-color); */
  border-color: black;
}

#game {
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/minimap.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

#menu {
  z-index: 5;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 3;
}

#menu-container {
  height: 50vh;
  width: 50vw;
  background: var(--secondary-color);
  border: 2px solid black;
  padding: 3px;
  z-index: inherit;
}

#top-left {
  position: absolute;
  top: 0;
  left: 0;
}

#separator {
  display: flex;
  flex-flow: row nowrap;
}

#separator > * {
}

#top-right {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;
}

#bottom-left {
  position: absolute;
}

#points > button {
  text-align: right;
}

#categories {
  display: flex;
  flex-flow: column nowrap;
}

#minimap {
  max-width: 300px;
  max-height: 300px;
  border: 2px solid var(--main-color);
}

.unitTab {
  float: right;
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--main-color) rgba(0, 0, 0, 0);
}

.unitTab::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border: 3px solid transparent;
  border-radius: 8px;
  background-clip: padding-box;
}

.unitTab::-webkit-scrollbar {
  width: 10px;
}

.left {
  float: left;
}
</style>