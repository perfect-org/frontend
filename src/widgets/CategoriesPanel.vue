<template>
  <v-chip-group>
    <v-chip v-for="category in categories" color="success">{{ category.name }}</v-chip>
  </v-chip-group>
</template>

<script setup lang="ts">
import { useCategories } from '@/entities/category/model/useCategories'

const { categories } = useCategories()
</script>

<style lang="scss"></style>
