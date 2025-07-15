<template>
  <v-img
    v-if="image_url && !hasImageError"
    :src="image_url"
    cover
    width="100%"
    height="220"
    class="product-image"
    @error="hasImageError = true"
  >
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
    </template>
  </v-img>
  <div v-else class="fallback-image d-flex align-center justify-center">
    <span>Нет фото</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'

const props = defineProps<{
  image_url: string
}>()
const hasImageError = ref(false)

watch(
  () => props.image_url,
  () => {
    hasImageError.value = false
  },
)
</script>

<style scoped lang="scss">
.fallback-image {
  width: 100%;
  height: 220px;
  background: #e0e0e0;
  color: #888;
  font-size: 1.1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.product-image {
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
