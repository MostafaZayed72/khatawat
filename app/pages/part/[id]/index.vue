<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-4 font-sans" dir="rtl">
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
          <span>فيديو تعريفي (قريباً)</span>
        </div>
      </div>

      <!-- Start Button -->
      <NuxtLink 
        :to="`/part/${part.id}/lesson/1`"
        class="bg-gradient-to-r from-red-600 to-red-500 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
      >
        <span>ابدأ الدروس</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>

      <!-- Back Home -->
      <NuxtLink to="/" class="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span>العودة للرئيسية</span>
      </NuxtLink>

    </div>
    
    <div v-else class="flex flex-col items-center justify-center min-h-[50vh]">
      <h2 class="text-2xl text-red-500 font-bold mb-4">القسم غير موجود</h2>
      <NuxtLink to="/" class="text-blue-500 hover:underline">العودة للرئيسية</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getParts } from '~/utils/lessons';

const route = useRoute();
const { t } = useI18n();

const partId = computed(() => parseInt(route.params.id as string));
const parts = computed(() => getParts(t));
const part = computed(() => parts.value.find(p => p.id === partId.value));

useHead({
  title: computed(() => part.value?.title || 'القسم'),
});
</script>
