<template>
  <div class="base-sider-container">
    <div class="h-[64px] leading-[64px] text-white text-xl text-center">实用工具</div>
    <Menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      :items="menuList"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const selectedKeys = ref('');
  const menuList = getMenu();

  function getMenu() {
    const routes = router.getRoutes();
    return routes
      .filter((x) => x.meta.title)
      .map((x) => {
        return {
          key: x.path,
          label: x.meta.title,
          title: x.meta.title,
        };
      });
  }

  function handleClick(e: any) {
    router.push({
      path: e.key,
    });
    console.log(e);
  }
</script>

<style scoped></style>
