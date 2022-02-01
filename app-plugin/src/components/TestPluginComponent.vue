<script setup lang="ts">
const clickMe = () => {
  console.log('Clicked the plugin component!')
}
</script>

<template>
  <div class="title" @click="clickMe">This is the plugin component</div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
