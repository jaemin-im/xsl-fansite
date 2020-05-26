<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-text-field type="number" v-model="myScrollBpm" label="본인의 스크롤 속도" outlined />
      </v-col>
    </v-row>
    <v-row class="mt-n8">
      <v-col>
        <v-text-field type="number" v-model="songBpm" label="곡의 BPM" outlined />
      </v-col>
    </v-row>
    <v-row class="mt-n12">
      <v-col class="d-flex justify-center">
        <v-switch v-model="isPremium" inset :label="`프리미엄 모드 여부: ${isPremium}`" />
      </v-col>
    </v-row>
    <!-- <v-row class="mt-n6">
      <v-col class="d-flex justify-center">
        <v-btn tile block outlined color="primary" @click="calculateSpeed">속도 계산</v-btn>
      </v-col>
    </v-row> -->
    <v-row class="mt-n4">
      <v-col class="d-flex justify-center mb-1">
        <v-progress-circular
          :size="200"
          :width="30"
          color="red lighten-1"
          :value="slowMul / 0.25 * 3.125"
        >
          <span class="text-center" v-show="slowMul">
            x{{ slowMul }}<br/>{{ slowBpmCal }} ({{ Math.abs(myScrollBpm) + Number(slowBpmCal) }})
          </span>
        </v-progress-circular>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-progress-circular
          :size="200"
          :width="30"
          color="blue darken-1"
          :value="fastMul / 0.25 * 3.125"
        >
          <span class="text-center" v-show="fastMul">
            x{{ fastMul }}<br/>{{ fastBpmCal }} ({{ Math.abs(myScrollBpm) + Number(fastBpmCal) }})
          </span>
        </v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'ScrollCalculateForm',
  data: () => ({
    isPremium: false,
    myScrollBpm: null,
    songBpm: null,
    fastMul: null,
    fastBpmCal: null,
    slowMul: null,
    slowBpmCal: null,
  }),
  watch: {
    isPremium() {
      this.calculateSpeed();
    },
    myScrollBpm() {
      this.calculateSpeed();
    },
    songBpm() {
      this.calculateSpeed();
    },
  },
  methods: {
    async calculateSpeed() {
      if (this.isPremium) {
        const tempSlow = Math.floor((this.myScrollBpm / this.songBpm) * 4);
        const tempFast = Math.ceil((this.myScrollBpm / this.songBpm) * 4);
        if (tempSlow <= 1) {
          this.slowMul = 0.25;
        } else if (tempSlow >= 16 && tempSlow < 32) {
          this.slowMul = Math.floor((this.myScrollBpm / this.songBpm) * 2) / 2;
        } else if (tempSlow >= 32) {
          this.slowMul = 8.0;
        } else {
          this.slowMul = Math.floor((this.myScrollBpm / this.songBpm) * 4) / 4;
        }
        if (tempFast <= 1) {
          this.fastMul = 0.25;
        } else if (tempFast >= 16 && tempFast < 32) {
          this.fastMul = Math.ceil((this.myScrollBpm / this.songBpm) * 2) / 2;
        } else if (tempFast >= 32) {
          this.fastMul = 8.0;
        } else {
          this.fastMul = Math.ceil((this.myScrollBpm / this.songBpm) * 4) / 4;
        }
      } else {
        const tempSlow = Math.floor((this.myScrollBpm / this.songBpm) * 2);
        const tempFast = Math.ceil((this.myScrollBpm / this.songBpm) * 2);
        if (tempSlow <= 2) {
          this.slowMul = 1.0;
        } else if (tempSlow >= 16) {
          this.slowMul = 8.0;
        } else {
          this.slowMul = Math.floor((this.myScrollBpm / this.songBpm) * 2) / 2;
        }
        if (tempFast <= 2) {
          this.fastMul = 1.0;
        } else if (tempFast >= 16) {
          this.fastMul = 8.0;
        } else {
          this.fastMul = Math.ceil((this.myScrollBpm / this.songBpm) * 2) / 2;
        }
      }
      this.slowBpmCal = this.slowMul * this.songBpm - this.myScrollBpm;
      this.fastBpmCal = this.fastMul * this.songBpm - this.myScrollBpm;
    },
  },
};
</script>
