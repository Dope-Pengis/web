<template>
  <!--<button v-if="primary && (!secondary || !tertriary)">
    <slot />
  </button>
  <button v-else-if="secondary">
    <slot />
  </button>
  <button v-else-if="tertriary">
    <slot />
  </button>-->
  <button
    v-if="!to"
    class="px-6 py-3 text-white font-Inter font-medium text-lg rounded-xl duration-300 hover:transform hover:scale-105"
    :class="{
      'bg-darkpengiblue': primary,
      'hover:bg-blue-800': primary,
      'bg-ebtn': secondary,
      'hover:bg-eyellow': secondary,
      'bg-[#004FE0]': custom,
    }"
  >
    <div class="flex flex-row items-center justify-center gap-x-2">
      <slot />
    </div>
  </button>
  <NuxtLink
    v-else
    class="px-6 py-3 text-white font-Inter font-medium text-lg rounded-xl duration-300 hover:transform hover:scale-105"
    :class="{
      'bg-darkpengiblue': primary,
      'hover:bg-blue-800': primary,
      'bg-ebtn': secondary,
      'hover:bg-eyellow': secondary,
      'bg-[#004FE0]': custom,
    }"
    :to="to"
  >
    <div class="flex flex-row items-center justify-center gap-x-2">
      <slot />
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  primary: {
    type: Boolean,
    default: true,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  tertriary: {
    type: Boolean,
    default: false,
  },
  custom: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: null,
  },
});
</script>
