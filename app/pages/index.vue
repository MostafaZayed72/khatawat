<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans relative">
    <!-- Background is handled by app.vue -->
    
    <div class="w-full max-w-7xl z-10 flex flex-col gap-8 py-10">
      <h1 class="text-5xl md:text-6xl font-black text-center text-red-600 drop-shadow-lg mb-8">{{ t('Choose Level') }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <NuxtLink 
          v-for="part in parts" 
          :key="part.id"
          :to="`/part/${part.id}`"
          class="relative w-full h-64 md:h-80 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border-4 border-white/50 flex items-center justify-between px-6 md:px-12"
        >
          <!-- Content -->
          <div class="flex flex-col gap-2 z-10 max-w-2xl">
            <div class="flex items-center gap-4 mb-2">
               <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                {{ part.id }}
              </div>
              <h2 class="text-3xl md:text-5xl font-black text-gray-800 group-hover:text-red-600 transition-colors">{{ part.title }}</h2>
            </div>
            <p class="text-xl md:text-2xl text-gray-600 font-medium">{{ part.description }}</p>
          </div>

          <!-- Image -->
          <div class="absolute left-0 top-0 h-full w-1/2 md:w-1/3 opacity-20 md:opacity-100 md:relative md:w-auto md:h-full flex items-center justify-center pointer-events-none">
             <img 
               v-if="part.image" 
               :src="part.image" 
               :alt="part.title" 
               class="h-full w-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl"
             />
          </div>
          
          <!-- Decoration -->
          <div class="absolute inset-0 bg-gradient-to-l from-white/0 via-white/0 to-white/80 md:hidden pointer-events-none"></div>
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