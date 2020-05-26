<template>
  <v-row class="text-center">
    <v-col>
      <v-text-field type="number" v-model="ddrCode" label="DDR Code 입력 (예: 51551868)" outlined />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SkillAttackSearch',
  data: () => ({
    ddrCode: null,
  }),
  // https://qog6l34nui.execute-api.ap-northeast-2.amazonaws.com/production/api/ddr_code/51551868
};
</script>
