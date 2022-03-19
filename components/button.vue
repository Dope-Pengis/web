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
    class="px-6 py-3 text-white font-Inter font-medium text-lg rounded-xl duration-300"
    :class="{
      'bg-darkpengiblue': primary,
      'hover:bg-blue-800': primary,
      'bg-ebtn': secondary,
      'hover:bg-eyellow': secondary,
    }"
  >
    <div class="flex flex-row items-center justify-center gap-x-2">
      <slot />
    </div>
  </button>
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
});

const tailwindStyle = computed<Record<string, boolean>>(() => {});
</script>
