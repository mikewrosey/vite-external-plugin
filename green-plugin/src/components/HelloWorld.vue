<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
</template>

<style scoped>
.green {
  color: #42b983;
}
</style>
