<template>
  <div class="unitDetail">
    <table>
      <thead>
        <tr>
          <th colspan="6" class="title">
            {{data.cost}}pts
            <span class="left">{{data.name}}</span>
          </th>
        </tr>
        <tr>
          <th>Weapon</th>
          <th>Range</th>
          <th>Accuracy</th>
          <th>Damage</th>
          <th>Ammo</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(weapon, index) in data.stats.weapons" :key="index">
          <td class="stack weapon">
            <div>{{weapon.name}}</div>
            <div>{{weapon.caliber}}</div>
          </td>
          <td class="stack">
            <div v-for="(range, type) in weapon.range" :key="type" class="cap">
              <span v-if="range">
                <span class="left">{{type}}</span>
                {{range}}
              </span>
            </div>
          </td>
          <td class="stack">
            <div>
              <span class="left">Static</span>
              {{weapon.accuracy}}%
            </div>
            <div v-if="weapon.stab">
              <span class="left">Stab</span>
              {{weapon.stab}}%
            </div>
          </td>
          <td class="stack">
            <div v-if="weapon.ap">
              <span class="left">AP</span>
              {{weapon.ap}}
            </div>
            <div v-if="weapon.he">
              <span class="left">HE</span>
              {{weapon.he}}
            </div>
          </td>
          <td class="stack">
            <div>
              <span class="left">Rnds</span>
              {{weapon.ammo}}
            </div>
            <div>
              <span class="left">RoF</span>
              {{weapon.rof}}
            </div>
            <div>
              <span class="left">Sup</span>
              {{weapon.suppression}}
            </div>
          </td>
          <td class="stack weapon">
            <div v-for="(tag, index) in weapon.tags" :key="index">{{tag}}</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <img src alt="[3D view]" id="3D view" />
          </td>
          <td colspan="2">
            <div>
              <div class="small-title">Armor</div>
              <div v-for="(armor, area) in data.stats.armor" :key="area">
                <span class="left cap">{{area}}</span>
                {{armor}}
              </div>
            </div>
          </td>
          <td colspan="3">
            <div class="misc">
              <div>
                <span class="left">Speed</span>
                {{data.stats.speed}}kph
              </div>
              <div>
                <span class="left">Training</span>
                {{data.stats.training}}
              </div>
              <div>
                <span class="left">Optics</span>
                {{data.stats.optics}}
              </div>
              <div>
                <span class="left">Amphib</span>
                {{data.stats.amphib}}kph
              </div>
              <div>
                <span class="left">Size</span>
                {{data.stats.size}}
              </div>
              <div>
                <span class="left">Stealth</span>
                {{data.stats.stealth}}
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "unitDetail",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.unitDetail {
  width: 550px;
  background: var(--main-color);
  border: 2px solid black;
  padding: 3px;
}

table {
  width: 100%;
  border-collapse: collapse;
  /* border-spacing: 0; */
}

tfoot {
  /* display: flex; */
  border: 2px solid black;
}

tfoot > img {
  min-width: 300px;
  border-right: 0px;
}

tr {
  margin: 0;
  padding: 0;
}

th {
  border-left: 2px solid black;
  border-right: 2px solid black;
}

td {
  text-align: right;
  border: 2px solid black;
  margin: 0;
  padding: 1px 3px 1px 3px;
  /* border-radius: 5px; */
}

td:not(.weapon) > div:not(.cap):not(:first-child),
div.misc > div:not(:first-child) {
  border-top: 2px solid black;
}

td.weapon {
  text-align: center;
}

td.stack {
  /* display: flex; */
  /* flex-flow: column wrap; */
}

.title {
  text-align: right;
  padding: 1px 5px 1px 5px;
  border-bottom: 2px solid black;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.small-title {
  border-bottom: 2px solid black;
  text-align: center;
  font-weight: bold;
}

.left {
  float: left;
}

.cap {
  text-transform: capitalize;
}
</style>