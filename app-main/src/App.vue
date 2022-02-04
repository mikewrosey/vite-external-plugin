<script setup lang="ts">
// @ts-ignore
import * as Vue from 'vue/dist/vue.esm-bundler'
import PluginContainer from './PluginContainer.vue'
import addStylesheet from './utils/externalStyles'
(window as any).Vue = Vue

// list of external js files
const externalScripts = [
  'http://localhost:5001/RedPlugin.es.js',
  'http://localhost:5000/GreenPlugin.es.js'
]

// list of externam css assets
const externalStylesheets = [
  'http://localhost:5001/style.css',
  'http://localhost:5000/style.css'
]

for (const stylesheet of externalStylesheets) {
  addStylesheet(stylesheet)
}
</script>

<template>
  This is the main app
  <div v-for="script of externalScripts" :key="script">
    <PluginContainer :script="script" />
  </div>
</template>
