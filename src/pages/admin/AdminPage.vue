<template>
  <h1 class="mb-5">Панель администрирования</h1>
  <v-container fluid class="pa-0">
    <SectionPanel :title="`Товары`"></SectionPanel>
    <SectionPanel :title="`Категории товаров`"></SectionPanel>
    <SectionPanel :title="`Тэги товаров`"></SectionPanel>
    <SectionPanel :title="`Цели и аллергии`"></SectionPanel>
    <SectionPanel :title="`Промокоды`"></SectionPanel>
  </v-container>
</template>

<script setup lang="ts">
import SectionPanel from '@/shared/ui/SectionPanel.vue'
</script>
