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
    class="bg-blue-700 px-6 py-3 text-white font-Inter font-medium text-lg rounded-xl hover:bg-blue-800 duration-300"
  >
    <slot />
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
