<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Analysis from './components/Analysis.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <Analysis />
    </template>
  </Layout>
</template>
