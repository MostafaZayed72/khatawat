<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans relative">
    <!-- Background is handled by app.vue -->
    
    <div class="w-full max-w-7xl z-10 flex flex-col gap-8 py-10">
      <h1 class="text-4xl md:text-5xl font-black text-center text-red-600 drop-shadow-lg mb-8 leading-tight">
        {{ t('Khatwat Program for Teaching Arabic to Non-Native Speakers') }}
      </h1>
      
            <!-- About Project Video Section -->
<div class="w-full mt-12 flex flex-col items-center">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
    {{ t('About the Program') }}
  </h2>

 <div class="w-full max-w-4xl mx-auto">
    <div class="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <YouTubePlayer videoId="SLBDpvUAsQw" />
    </div>
  </div>
</div>




      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <NuxtLink 
          v-for="part in parts" 
          :key="part.id"
          :to="`/part/${part.id}`"
          class="relative w-full h-64 md:h-80 bg-transparent backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border-4 border-white/50 flex items-center justify-between px-6 md:px-12"
        >
          <!-- Content -->
          <div class="flex flex-col items-center justify-center gap-2 md:gap-4 z-10 flex-grow">
             <div class="w-12 h-12 md:w-20 md:h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-xl md:text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform">
              {{ part.id }}
            </div>
            <h2 class="text-xl md:text-5xl font-black text-gray-800 group-hover:text-red-600 transition-colors text-center ">{{ part.title }}</h2>
          </div>

          <!-- Image -->
          <div class="relative h-full w-1/2 md:w-1/3 flex items-center justify-center pointer-events-none opacity-100 bg-transparent">
             <img 
               v-if="part.image" 
               :src="part.image" 
               :alt="part.title" 
               class="h-full w-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl"
             />
          </div>
          
          <!-- Decoration removed to prevent fading on mobile -->
        </NuxtLink>
      </div>



</div>
  </div>
</template>

<script setup lang="ts">
import { getParts } from '~/utils/lessons';

const { t, locale } = useI18n();
const parts = computed(() => {
  // Dependency on locale to force update
  const l = locale.value; 
  return getParts(t);
});

useHead({
  title: computed(() => t('Home')),
});
</script>