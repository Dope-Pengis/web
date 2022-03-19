<template>
  <NuxtLayout name="default">
    <!-- landing -->
    <div class="w-full bg-diamonds bg-cdiamonds">
      <DopeContainer class="pt-8 flex-col">
        <DopeNavigation />
        <!--<div class="flex flex-row items-center h-auto mt-56 mb-72">-->
        <DopeLanding />
      </DopeContainer>
      <span class="w-full h-96">
        <img
          class="w-full h-96 shadow-water-fog"
          src="~~/assets/img/water.png"
          alt="Water"
        />
      </span>
    </div>
    <!--<div class="w-full bg-gradient-to-b from-blue-700 via-blue-500 to-gray-100">-->
    <div class="w-full bg-gradient-to-b from-darkpengiblue to-gray-100">
      <DopeContainer class="flex-col">
        <DopeVision />
      </DopeContainer>
    </div>
    <div class="w-full bg-southpole bg-center bg-cover bg-no-repeat bg-fixed">
      <div class="backdrop-blur-lg w-full bg-black bg-opacity-40">
        <DopeContainer class="flex-col" id="roadmap">
          <DopeRoadmap />
        </DopeContainer>
      </div>
    </div>
    <div class="w-full bg-gray-50">
      <DopeContainer class="flex-col" id="tokenomics">
        <DopeTokenomics />
      </DopeContainer>
    </div>
    <div class="w-full">
      <DopeContainer class="flex-col" id="team">
        <DopeTeam />
      </DopeContainer>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import DopeNavigation from "~/components/navigation.vue";

import DopeContainer from "~~/components/layout/container.vue";
import DopeLanding from "~~/components/layout/landing.vue";
import DopeVision from "~~/components/layout/vision.vue";
import DopeRoadmap from "~~/components/layout/roadmap.vue";
import DopeTokenomics from "~~/components/layout/tokenomics.vue";
import DopeTeam from "~~/components/layout/team.vue";
</script>

<style>
html {
  /* TODO: move scroll behaviour etc to app root (scroll bar has to be in app root to work) */
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
