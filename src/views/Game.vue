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
      <div id="points" @mouseleave="closeSpawn">
        <button @mouseenter="spawn.openTabs=true" :class="[spawn.openTabs ? 'active' : '']">
          <span class="left">+1</span> 1983
        </button>
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
                :unit="unit.card"
                :data="unit"
                :key="index"
                @hoverOn="hoverOnCard"
                @hoverOff="hoverOffCard"
              ></card>
            </div>
            <div class="unitTab" id="sup" v-if="spawn.openSup">
              <card
                v-for="(unit, index) in deck.sup"
                :name="unit.name"
                :country="unit.country"
                :unit="unit.card"
                :data="unit"
                :key="index"
                @hoverOn="hoverOnCard"
                @hoverOff="hoverOffCard"
              ></card>
            </div>
          </div>
          <div
            class="unitBuy"
            v-if="availability"
            @mouseenter="eventBuffer = 'EnterBuy'"
            @mouseleave="eventBuffer = 'LeaveBuy'"
          >
            <detail></detail>
            <div id="availability">
              <button v-for="(unit, index) in availability" :key="index" :class="'veterancy'">
                <span class="left">{{unit.rank}}</span>
                {{unit.num}}
              </button>
            </div>
          </div>
        </div>
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
import detail from "@/components/unitDetail.vue";
import deck from "@/assets/deck.js";

export default {
  name: "Ingame",
  components: {
    card,
    detail,
  },
  data() {
    return {
      eventBuffer: new String(),
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
      availability: null,
    };
  },
  computed: {
    deck() {
      return deck;
    },
  },
  methods: {
    back() {
      this.$router.push({ path: "/" });
    },
    closeSpawn() {
      for (let tab in this.spawn) {
        this.spawn[tab] = false;
      }
      this.availability = null;
    },
    hoverOnCard(data) {
      this.eventBuffer = "Enter Card";
      // pass availability data
      this.availability = data.veterancy;
      setTimeout(() => {
        this.availability = data.veterancy;
      }, 10);
      // pass unit details
    },
    hoverOffCard(data) {
      this.eventBuffer = "Leave Card";
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
      // console.log(newEvent, oldEvent);
      if (
        newEvent.split(" ")[0] === "Enter" &&
        newEvent.split(" ")[1] !== "Card" &&
        newEvent.split(" ")[1] !== oldEvent.split(" ")[1]
      ) {
        for (let tab in this.spawn) {
          if (tab === `open${newEvent.split(" ")[1]}`) {
            this.spawn[tab] = true;
          } else if (tab !== "openTabs") {
            this.spawn[tab] = false;
          }
        }
        this.availability = null;
      } else if (
        (newEvent !== "EnterBuy" &&
          oldEvent === "Leave Card" &&
          newEvent.split(" ")[1] !== oldEvent.split(" ")[1]) ||
        (newEvent.split(" ")[0] === "Enter" && oldEvent === "LeaveBuy")
      ) {
        this.availability = null;
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

button.veterancy {
  margin-left: 0;
  margin-right: 4px;
  margin-top: 4px;
}

#game {
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/minimap.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

#availability {
  /* float: left; */
  top: 0;
  left: 104px;
  display: flex;
  flex-flow: row nowrap;
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

.unitBuy {
  background: rgba(0, 215, 215, 0.5);
}

.left {
  float: left;
}
</style>