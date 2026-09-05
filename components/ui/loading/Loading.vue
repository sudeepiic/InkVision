<script setup lang="ts">
const props = defineProps<{
  show?: boolean
}>()
</script>

<template>
  <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div v-if="show" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div class="flex h-screen w-full items-center justify-center">
        <div class="relative">
          <div class="h-32 w-32 animate-spin">
            <div class="absolute h-full w-full rounded-full border-8 border-t-primary"></div>
            <div class="absolute h-full w-full animate-ping rounded-full border-8 border-primary opacity-20"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-4xl font-bold text-primary animate-pulse">IV</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>