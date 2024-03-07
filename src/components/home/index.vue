<template>
  <div class="app-container h-full flex justify-center items-center">
    <div class="h-[70%] w-[60%] bg-[rgba(33,6,134,0.35)] rounded-[16px]">
      <div class="h-[40%] flex justify-center items-center">
        <img :src="headerImg" class="rounded-[50%] h-[120px] w-[120px]" />
      </div>
      <div class="h-[60%]">
        <div v-for="(item, index) in btnList" :key="index" @click="goTo(item.path)">{{
          item.name
        }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import headerImg from '/@/assets/images/header.jpg';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const btnList = ref([{ name: '工具', path: '/tools/git' }]);

  function goTo(path: string) {
    router.push(path);
  }
</script>

<style lang="less" scoped>
  .app-container {
    background-image: url('src/assets/images/background.jpg');
    background-size: 100% 100%;
  }
</style>
