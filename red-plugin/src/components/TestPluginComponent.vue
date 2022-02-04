<script setup lang="ts">
const clickMe = () => {
  console.log('Clicked the red plugin component!')
}
</script>

<template>
  <div class="title" @click="clickMe">This is the red plugin. Click to see a console log.</div>
</template>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
