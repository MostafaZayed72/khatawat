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
      <YouTubePlayer videoId="PkamS1m5nB4" />
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

      <!-- Exams Section -->
      <div class="w-full flex flex-col md:flex-row gap-6 items-center justify-center mt-12 mb-8 px-4">
        <NuxtLink 
          to="/exams"
          class="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 border-2 border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{{ t('Diagnosis and Tests') }}</span>
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