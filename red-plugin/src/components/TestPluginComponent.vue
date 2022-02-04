<script setup lang="ts">
import { FeatherInput } from '@featherds/input'
import { FeatherButton } from '@featherds/button'
const clickMe = () => {
  console.log('Clicked the red plugin component!')
}
</script>

<template>
  <FeatherButton primary type="submit">Submit Primary Button</FeatherButton>
  <FeatherInput label="Test input" />
  <div class="title" @click="clickMe">This is the red plugin. Click to see a console log.</div>
</template>

<style scoped lang="scss">
.title {
  color: var(--feather-error);
}
</style>
