<script setup lang="ts">
// @ts-ignore
import * as Vue from 'vue/dist/vue.esm-bundler'
import { defineAsyncComponent } from 'vue'
import externalComponent from './utils/externalComponent'

(window as any).Vue = Vue

const AppPlugin = defineAsyncComponent(() => externalComponent('http://localhost:5000/app-plugin.es.js'))
</script>

<template>
  This is the main app
  <AppPlugin />
</template>
