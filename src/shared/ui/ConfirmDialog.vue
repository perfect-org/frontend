<template>
  <v-dialog v-model="dialog" max-width="400" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :props="activatorProps" />
    </template>
    <v-card :prepend-icon="icon" :text="text" :title="title">
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="dialog = false"> Отмена </v-btn>
        <v-btn color="red-darken-1" @click="handleConfirm"> Подтвердить </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps<{
  icon: string
  title: string
  text: string
  onConfirm: () => void
}>()

const { onConfirm } = props

const handleConfirm = () => {
  onConfirm()
  dialog.value = false
}

const dialog = ref(false)
</script>
