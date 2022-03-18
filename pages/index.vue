<template>
  <NuxtLayout name="default">
    <!-- landing -->
    <div class="w-full hero-glam">
      <DopeContainer class="pt-8 flex-col">
        <Navigation />
        <!--<div class="flex flex-row items-center h-auto mt-56 mb-72">-->
        <div class="flex flex-row items-center h-auto mt-56 mb-32">
          <div class="w-6 flex flex-col pt-24">
            <p class="transform -rotate-90 font-medium text-efont">
              @DopePengis
            </p>
            <div class="h-14 w-0.5 bg-efont mx-auto my-2"></div>
            <NuxtLink href="https://twitter.com/DopePengis">
              <Icon color="#fff" size="22">
                <LogoTwitter />
              </Icon>
            </NuxtLink>
            <NuxtLink href="https://instagram.com/DopePengis">
              <Icon color="#fff" size="22">
                <LogoInstagram />
              </Icon>
            </NuxtLink>
            <NuxtLink href="https://discord.dopepengis.com">
              <Icon color="#fff" size="22">
                <LogoDiscord />
              </Icon>
            </NuxtLink>
          </div>
          <div class="ml-32">
            <h1 class="text-7xl text-efont font-bold font-Inter">Dope.</h1>
            <h1 class="text-7xl text-ebtn font-bold font-Inter">Abondened.</h1>
            <h1 class="text-7xl text-efont font-bold font-Inter">Pengis.</h1>
            <h2 class="text-xl text-efont font-semibold font-Inter mt-10">
              On their mission to arrive safely in their new world, <br />
              with all 1111!
            </h2>
            <div class="flex flex-row gap-x-5 mt-10">
              <DopeButton primary>Join Discord</DopeButton>
              <DopeButton secondary>Whitepaper</DopeButton>
            </div>
          </div>
        </div>
      </DopeContainer>
      <span class="w-full h-96">
        <img class="w-full h-96 shadow-water-fog" src="~~/assets/img/water.png" alt="Water" />
      </span>
    </div>
    <!--<div class="w-full bg-gradient-to-b from-blue-700 via-blue-500 to-gray-100">-->
    <div class="w-full bg-gradient-to-b from-darkpengiblue to-gray-100">
      <DopeContainer class="flex-col">
        <!-- space filler-->
        <div class="h-screen"></div>
      </DopeContainer>
    </div>
    <div class="w-full bg-gray-100">
      <DopeContainer class="flex-col">
        <h2 class="text-xl font-Inter font-semibold text-center text-ebtn">
          $PENGI
        </h2>
        <h1
          id="tokenomics"
          class="text-4xl font-Inter font-bold text-center text-egfont"
        >
          Tokenomics
        </h1>
        <div class="flex flex-row gap-x-48">
          <UseElementVisibility v-slot="{ isVisible }">
            <div
              class="bg-gray-100 rounded-full shadow-neumorphic-circle p-10 flex justify-center items-center duration-700 my-52"
              :class="{
                'opacity-0': !isVisible,
                'opacity-100': isVisible,
              }"
            >
              <canvas ref="chartTarget" class="h-96 w-96"></canvas>
            </div>
          </UseElementVisibility>
          <div>
            <h2 class="text-egfont font-Inter text-4xl font-medium">
              Allocation
            </h2>
            <article></article>
          </div>
        </div>
      </DopeContainer>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import "~~/assets/fonts/inter.css";

import { UseElementVisibility } from "@vueuse/components";
import { LogoDiscord, LogoTwitter, LogoInstagram } from "@vicons/carbon";
import { Icon } from "@vicons/utils";
import { Chart, DoughnutController, ArcElement } from "chart.js";

import DopeContainer from "~~/components/layout/container.vue";
import DopeButton from "~~/components/button.vue";

Chart.register(ArcElement);
Chart.register(DoughnutController);
const chartTarget = ref<HTMLCanvasElement>();

onMounted(() => {
  const target = chartTarget.value;
  if (!target) return;

  try {
    const tokenomicsChart = new Chart(target, {
      type: "doughnut",
      data: {
        labels: ["JavaScript", "Python", "Ruby"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(133, 105, 241)",
              "rgb(164, 101, 241)",
              "rgb(101, 143, 241)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        cutout: "70%",
        layout: {
          padding: 10,
        },
        responsive: true,
      },
    });
  } catch (e) {
    console.error(e);
  }
});
</script>

<style>
html {
  /* TODO: move scroll behaviour etc to app root (scroll bar has to be in app root to work) */
  scroll-behavior: smooth;
}

.hero-glam {
  background-color: #3b6eff;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%2322fabe' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
