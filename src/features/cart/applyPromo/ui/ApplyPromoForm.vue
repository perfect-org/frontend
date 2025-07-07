<template class="my-2 mb-3">
  <h3>Ввод промокода</h3>
  <v-row class="d-flex mt-2 mb-4">
    <v-col cols="8">
      <v-text-field
        v-model="promocode"
        hide-details="auto"
        label="Промокод"
        cols="8"
      ></v-text-field>
    </v-col>
    <v-col cols="4">
      <v-btn
        color="success"
        class="apply-promocode-button"
        block
        size="large"
        cols="4"
        @click="handleApplyPromocode"
      >
        Применить
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { usePromocode } from '@/features/promo/model/usePromocode'
import { ref } from 'vue'

const promocode = ref('')
const { applyPromocode } = usePromocode()

const handleApplyPromocode = () => {
  applyPromocode(promocode.value)
  promocode.value = ''
}
</script>

<style lang="scss">
.apply-promocode-button {
  height: 100% !important;
}
</style>
