<template>
  <div class="w-full flex flex-row justify-between items-center">
    <img class="h-24" src="~~/assets/img/dope-pengis-next-gen.png" />
    <div class="flex flex-row items-center gap-x-12">
      <a class="text-efont font-medium text-lg font-Inter" href="#roadmap">
        Roadmap
      </a>
      <a class="text-efont font-medium text-lg font-Inter" href="#about">
        About
      </a>
      <a class="text-efont font-medium text-lg font-Inter" href="#tokenomics">
        Tokenomics
      </a>
      <NuxtLink
        class="text-efont font-medium text-lg font-Inter"
        to="https://whitepaper.dopepengis.com"
      >
        Whitepaper
      </NuxtLink>
      <NuxtLink
        class="bg-ebtn px-6 py-2 text-efont font-medium rounded-md"
        to="https://app.dopepengis.com"
      >
        Launch App
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
