<template>
  <v-navigation-drawer v-model="drawerProxy">
    <v-list>
      <v-list-item :subtitle="currentUser.email" :title="currentUser.name"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" class="drawer-list" nav>
      <v-list-item
        prepend-icon="mdi-account"
        title="Профиль"
        value="profile"
        class="compact-icon"
        color="success"
        @click="drawerProxy = false"
        :to="{ path: 'profile' }"
        exact
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-list-box-outline"
        title="Каталог товаров"
        value="catalog"
        class="compact-icon"
        color="success"
        @click="drawerProxy = false"
        :to="{ path: '/catalog' }"
        exact
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-cart"
        title="Корзина"
        value="cart"
        class="compact-icon"
        color="success"
        @click="drawerProxy = false"
        :to="{ path: '/cart' }"
        exact
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-text-box-check"
        title="Заказы"
        value="orders"
        class="compact-icon"
        color="success"
        @click="drawerProxy = false"
        :to="{ path: '/orders' }"
        exact
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-shield-account"
        title="Администрирование"
        value="admin"
        class="compact-icon"
        color="success"
        @click="drawerProxy = false"
        :to="{ path: '/admin' }"
        exact
      ></v-list-item>
    </v-list>

    <template #append>
      <v-divider></v-divider>
      <v-list-item @click="logout" class="logout-btn px-5 py-4">
        <span class="text-red">Выход из системы</span>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useLogout } from '@/features/auth/logout/model/useLogout'
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { computed } from 'vue'

const props = defineProps<{ drawer: boolean }>()
const emit = defineEmits(['update:drawer'])
const currentUser = cookiesApi.getUser()
const { logout } = useLogout()

const drawerProxy = computed({
  get: () => props.drawer,
  set: (val) => emit('update:drawer', val),
})
</script>

<style lang="scss">
.drawer-list {
  .v-list--nav {
    padding: 0 !important;
  }
}
.logout-btn {
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: rgb(255, 211, 211);
    span {
      color: white;
    }
  }
}
.compact-icon .v-list-item__prepend .v-list-item__spacer {
  width: 16px !important;
  color: rgb(76, 175, 80);
}
.text-red {
  color: #f44336;
  font-weight: 500;
}
</style>
