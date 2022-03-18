<template>
  <div class="w-full bg-ebtn">
    <DopeContainer class="flex-col divide-y divide-slate-600 pt-0">
      <div class="grid grid-cols-4 py-24">
        <img class="h-24" src="~~/assets/img/dope-pengis-g.png" />
        <div class="flex flex-col">
          <h4
            class="text-egfont font-semibold font-Inter text-lg tracking-widest"
          >
            Explore
          </h4>
          <div class="flex flex-col gap-y-2 mt-5">
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              App
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Storyline
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Whitepaper
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Rarity Tool
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <h4
            class="text-egfont font-semibold font-Inter text-lg tracking-widest"
          >
            Market Places
          </h4>
          <div class="flex flex-col gap-y-2 mt-5">
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Magic Eden
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              SolSea
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Solanart
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <h4
            class="text-egfont font-semibold font-Inter text-lg tracking-widest"
          >
            Social Links
          </h4>
          <div class="flex flex-col gap-y-2 mt-5">
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Twitter
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Instagram
            </NuxtLink>
            <NuxtLink class="text-gray-600 font-medium font-Inter">
              Discord
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between py-12">
        <h4 class="text-efont font-Inter">
          Powered by
          <img src="~~/assets/img/solana.svg" class="h-5" />
        </h4>
        <div><span class="text-efont font-Inter">@DopePengis</span></div>
      </div>
    </DopeContainer>
  </div>
</template>

<script lang="ts" setup>
import DopeContainer from "~~/components/layout/container.vue";
</script>
