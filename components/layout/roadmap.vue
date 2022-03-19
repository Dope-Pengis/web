<template>
  <h2 class="text-xl font-Inter font-semibold text-center text-ebtn mt-24">
    THE PLAN
  </h2>
  <h1 class="text-4xl font-Inter font-bold text-center text-efont mb-32">Roadmap</h1>
  <div class="flex flex-col gap-y-80 mb-32">
    <div class="flex flex-row mx-auto gap-x-20 mt-8">
      <DopeItem>
        <div class="h-32 w-64"></div>
      </DopeItem>
      <img
        class="h-24 rounded-2xl shadow-xl"
        src="~~/assets/img/pengi01.png"
      />
    </div>
    <div class="flex flex-row mx-auto gap-x-20">
      <img
        class="h-24 rounded-2xl shadow-xl"
        src="~~/assets/img/pengi01.png"
      />
      <DopeItem>
        <div class="h-32 w-64"></div>
      </DopeItem>
    </div>
    <div class="flex flex-row mx-auto gap-x-20">
      <DopeItem>
        <div class="h-32 w-64"></div>
      </DopeItem>
      <img
        class="h-24 rounded-2xl shadow-xl"
        src="~~/assets/img/pengi01.png"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DopeItem from "../roadmap/item.vue";
</script>
