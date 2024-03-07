<template>
  <Layout class="h-full">
    <Sider><SiderView /></Sider>
    <Layout>
      <Header>header</Header>
      <Content>
        <RouterView />
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
  import { Layout } from 'ant-design-vue';
  import { RouterView } from 'vue-router';
  import SiderView from './sider/index.vue';

  const Header = Layout.Header;
  const Sider = Layout.Sider;
  const Content = Layout.Content;
</script>
