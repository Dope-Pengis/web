<template>
  <h2 class="text-xl font-Inter font-semibold text-center text-ebtn">$PENGI</h2>
  <h1 class="text-4xl font-Inter font-bold text-center text-egfont">
    Tokenomics
  </h1>
  <div class="flex flex-row gap-x-48 relative my-36">
    <div class="flex flex-col">
      <div class="flex justify-center items-center mb-10 h-12">
        <transition name="fade" mode="out-in">
          <h3
            class="font-Inter text-xl font-semibold text-egfont text-center"
            v-if="!chartInfo"
          >
            $Pengi Fund
            <br />
            Allocation
          </h3>
          <div v-else class="flex flex-row items-center gap-x-2">
            <div
              :style="`background-color: ${chartInfo.color}`"
              class="h-8 w-12 block rounded-md"
            ></div>
            <span class="font-Inter text-xl font-semibold text-egfont"
              >{{ chartInfo.label }}: {{ chartInfo.data }}%</span
            >
          </div>
        </transition>
      </div>
      <UseElementVisibility
        offset="middle"
        v-slot="{ isVisible }"
        @visible="viewChartIn"
      >
        <div
          class="bg-gray-100 rounded-full shadow-neumorphic-circle p-10 flex justify-center items-center duration-1000"
          :class="{
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
          }"
        >
          <canvas ref="chartTarget" class="h-96 w-96"></canvas>
          <div
            class="absolute bg-gray-100 rounded-full shadow-neumorphic-circle-inset h-64 aspect-square flex items-center justify-center"
          >
            <div
              class="bg-gray-100 rounded-full shadow-neumorphic-circle h-40 aspect-square flex items-center justify-center"
            >
              <img
                src="~~/assets/img/solana-logo.svg"
                class="h-20 aspect-square"
              />
            </div>
          </div>
        </div>
      </UseElementVisibility>
    </div>
    <div>
      <article class="font-Inter font-medium text-egfont text-xl">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
        <br />
        <p>
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata
        </p>
        <br />
        <p>
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
        </p>
        <br />
        <p>
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </p>
      </article>
      <div class="flex flex-row gap-x-5 mt-5">
        <DopeButton to="https://whitepaper.dopepengis.com">
          Whitepaper
          <Icon>
            <DirectLink />
          </Icon>
        </DopeButton>
        <!--<DopeButton secondary>
                Trade on Raydium

                <Icon>
                  <DirectLink />
                </Icon>
              </DopeButton>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DirectLink } from "@vicons/carbon";
import { Icon } from "@vicons/utils";
import { Chart, DoughnutController, ArcElement } from "chart.js";

import DopeButton from "~~/components/button.vue";
import UseElementVisibility from "~~/components/util/useElementVisibility";

Chart.register(ArcElement);
Chart.register(DoughnutController);
const chartTarget = ref<HTMLCanvasElement>();
const chartInfo = ref(null);
let tokenomicsChart: Chart;

const sleep = (time: number) => new Promise((r) => setTimeout(r, time));

const viewChartIn = async (visible: boolean) => {
  if (!tokenomicsChart) return;

  if (!visible) {
    tokenomicsChart.data.datasets = [];
    tokenomicsChart.update();
    return;
  }

  await sleep(400);
  tokenomicsChart.data.datasets.push({
    label: "My First Dataset",
    data: [300, 50, 100],
    backgroundColor: [
      "rgb(133, 105, 241)",
      "rgb(164, 101, 241)",
      "rgb(101, 143, 241)",
    ],
    hoverOffset: 4,
  });
  tokenomicsChart.update();
};

onMounted(() => {
  const target = chartTarget.value;
  if (!target) return;

  try {
    tokenomicsChart = new Chart(target, {
      type: "doughnut",
      data: {
        labels: ["JavaScript", "Python", "Ruby"],
        datasets: [],
      },
      options: {
        animation: {
          duration: 3000,
        },
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        cutout: "70%",
        layout: {
          padding: 10,
        },
        responsive: true,
        onHover(event, els, chart) {
          if (els.length === 0) {
            chartInfo.value = null;
            return;
          }
          const dataIndex = els[0].index;
          const data = chart.config.data.datasets[0].data[dataIndex];
          const color =
            chart.config.data.datasets[0].backgroundColor[dataIndex];
          const label = chart.config.data.labels[dataIndex];
          chartInfo.value = {
            label,
            color,
            data,
          };
        },
      },
    });
  } catch (e) {
    console.error(e);
  }
});
</script>
