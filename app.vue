
<script setup lang="ts">
import { Loading } from '@/components/ui/loading/Loading.vue'
const isLoading = ref(false)

onBeforeRouteLeave(() => {
  isLoading.value = true
})

onBeforeRouteEnter(() => {
  isLoading.value = false
})
</script>

<template>
  <Loading :show="isLoading" />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<style >
.flip-card__bottom{
  border-top: none !important;
}</style>