<template>
  <div>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          type="number"
          v-model="ddrCode"
          label="검색할 DDR-CODE 입력 (예: 51551868)"
          outlined
        />
      </v-col>
    </v-row>
    <v-row class="mt-n8">
      <v-col class="d-flex justify-center">
        <v-btn block tile outlined light color="primary" @click="searchSkillAttack">
          스킬어택 검색
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <p v-if="this.ddrSkillPoint">해당 DDR-CODE의 스킬어택 정보:</p>
        <p class="display-1 font-weight-light" v-if="this.ddrNick">{{ this.ddrNick }}</p>
        <p class="display-3 font-weight-light" v-if="this.ddrSkillPoint">
          {{ this.ddrSkillPoint }}
        </p>
        <p class="display-1 font-weight-light" v-if="this.saRank">{{ this.saRank }}</p>
        <p class="title font-weight-light" v-if="this.saUpdatedAt">
          최신 갱신일: {{ this.saUpdatedAt }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SkillAttackSearch',
  data: () => ({
    ddrCode: null,
    ddrNick: null,
    ddrSkillPoint: null,
    saRank: null,
    saUpdatedAt: null,
    rankColor: null,
    rankColors: [
      // 'gray', // 0~
      'red', 'deep-orange', 'orange', 'amber', // 500~, 600~, 700~, 800~
      'lime', 'light-green', 'green', 'cyan', // 900~, 1000~, 1100~, 1200~
      'light-blue', 'blue', 'indigo', // 1300~, 1400~, 1500~
      'purple', // 1600~
    ],
    rankTitles: [
      // 'Newbie',
      'Beginner', 'Basics', 'Mover', 'Stepper',
      'Fighter', 'Dancer', 'Climber', 'Booster',
      'Outstander', 'Superior', 'Challenger',
      'TOP RANKER',
    ],
  }),
  methods: {
    async searchSkillAttack() {
      await axios
        .get(
          `https://qog6l34nui.execute-api.ap-northeast-2.amazonaws.com/production/api/ddr_skill/${this.ddrCode}`,
        )
        .then((response) => {
          if (response) {
            this.ddrNick = response.data.ddr_nick;
            this.ddrSkillPoint = response.data.skill_point;
            this.saUpdatedAt = response.data.update_date;
            const tempRank = parseInt(Number(this.ddrSkillPoint) / 100 - 5, 10);
            console.log(tempRank);
            try {
              this.rankColor = `${this.rankColors[tempRank]}--text`;
              this.saRank = this.rankTitles[tempRank];
            } catch (e) {
              if (tempRank < 0) {
                this.rankColor = 'gray';
                this.saRank = 'Newbie';
              } else if (tempRank > 16) {
                this.rankColor = 'gray';
                this.saRank = 'Cheater';
              } else {
                throw e;
              }
            }
            // switch (true) {
            //   case (tempRank)
            // }
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert('오류 발생:', err);
        });
    },
  },
  // https://qog6l34nui.execute-api.ap-northeast-2.amazonaws.com/production/api/ddr_code/51551868
};
</script>

<style lang="scss" scoped>
.row {
  .display-1 {
    font-size: 2.125rem;
  }
}
</style>
