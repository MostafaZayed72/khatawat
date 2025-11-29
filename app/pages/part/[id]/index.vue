<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
    <div v-if="part" class="w-full max-w-4xl flex flex-col items-center gap-8 py-10">
      
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ part.title }}</h1>
        <p class="text-xl text-gray-600">{{ part.description }}</p>
      </div>

      <!-- Video Placeholder -->
      <div class="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group">
        <iframe 
          v-if="part.videoUrl"
          class="w-full h-full"
          :src="part.videoUrl" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <div v-else class="flex items-center justify-center h-full text-gray-400">
          <span>{{ t('Video Coming Soon') }}</span>
        </div>
      </div>

      <!-- Start Button -->
      <NuxtLink 
        :to="`/part/${part.id}/lesson/1`"
        class="bg-gradient-to-r from-red-600 to-red-500 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
      >
        <span>{{ t('Start Lessons') }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>

      <!-- Back Home -->
      <NuxtLink to="/" class="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        <span>{{ t('Back to Home') }}</span>
      </NuxtLink>

    </div>
    
    <div v-else class="flex flex-col items-center justify-center min-h-[50vh]">
      <h2 class="text-2xl text-red-500 font-bold mb-4">{{ t('Part Not Found') }}</h2>
      <NuxtLink to="/" class="text-blue-500 hover:underline">{{ t('Back to Home') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getParts } from '~/utils/lessons';

const route = useRoute();
const { t, locale } = useI18n();

const partId = computed(() => parseInt(route.params.id as string));
const parts = computed(() => {
  const l = locale.value;
  return getParts(t);
});
const part = computed(() => parts.value.find(p => p.id === partId.value));

useHead({
  title: computed(() => part.value?.title || 'القسم'),
});
</script>
