<template>
  <div class="flex flex-row items-center h-auto mt-32 mb-32">
    <div class="w-6 flex flex-col pt-24">
      <p class="transform -rotate-90 font-medium text-efont">@DopePengis</p>
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
        <DopeButton
          custom
          to="https://discord.dopepengis.com"
          class="animate-float"
        >
          Join Discord
          <Icon>
            <DirectLink />
          </Icon>
        </DopeButton>
        <DopeButton
          secondary
          to="https://whitepaper.dopepengis.com"
          class="animate-[floating_ease-out_18s_infinite_alternate]"
        >
          Whitepaper
          <Icon>
            <DirectLink />
          </Icon>
        </DopeButton>
      </div>
    </div>
    <div class="relative w-full top-28 h-96 flex justify-center">
      <div class="absolute">
        <img
          class="h-32 w-32 animate-[floating_21s_ease_infinite_reverse] absolute bottom-2"
          src="~~/assets/img/ice01.png"
        />
        <div
          class="h-24 w-24 bg-white animate-[floating_19s_ease_infinite_alternate] absolute bottom-32 left-20"
        ></div>
        <img
          src="~~/assets/img/pengi-full.png"
          class="max-w-lg animate-[floating_14s_ease_infinite_alternate]"
        />
        <div
          class="h-24 w-24 bg-white animate-[floating_15s_ease_infinite] absolute bottom-24 right-0"
        ></div>
        <div
          class="h-24 w-24 bg-white animate-[floating_21s_ease_infinite_reverse] absolute -bottom-10 right-28"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  LogoDiscord,
  LogoTwitter,
  LogoInstagram,
  DirectLink,
} from "@vicons/carbon";
import { Icon } from "@vicons/utils";

import DopeButton from "../button.vue";
</script>
