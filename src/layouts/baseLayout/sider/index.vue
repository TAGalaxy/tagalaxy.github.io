<template>
  <div class="base-sider-container">
    <div class="h-[64px] leading-[64px] text-white text-xl text-center">实用工具</div>
    <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <MenuItem v-for="(item, index) in menuList" :key="index">
        <span>{{ item.name }}</span>
      </MenuItem>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu, MenuItem } from 'ant-design-vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const selectedKeys = ref('');
  const menuList = getMenu();

  function getMenu() {
    const routes = router.getRoutes();
    return routes.filter((x) => x.meta.title);
  }
</script>

<style scoped></style>
