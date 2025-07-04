<template>
  <v-chip color="primary">{{ props.name }}</v-chip>
</template>

<script lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  name: string
}>()
</script>

<style lang="scss"></style>
