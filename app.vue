<script setup>
const categories = useCategoryStore()
await callOnce(categories.fetch)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
