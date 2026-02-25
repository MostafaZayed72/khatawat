<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
    <div v-if="part" class="w-full max-w-4xl flex flex-col items-center gap-8 py-10">
      
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {{ t('Khatwat Program for Teaching Arabic to Non-Native Speakers') }} 
          <span class="block mt-2 text-red-600">({{ t('Level') }} {{ part.id }})</span>
        </h1>
        <!-- Description removed -->
      </div>

      <!-- Video Section (Restored) -->
      <div class="w-full mt-12 flex flex-col items-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          {{ t('About the Level') }}
        </h2>

        <div class="w-full max-w-4xl mx-auto">
          <div class="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <YouTubePlayer v-if="part.videoUrl" :videoId="part.videoUrl" />
          </div>
        </div>
      </div>

      <!-- Level Image -->
      <div class="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
        <img 
          v-if="part.image" 
          :src="part.image" 
          :alt="part.title" 
          class="w-full h-auto object-contain"
        />
      </div>

      <!-- Start Button -->
      <NuxtLink 
        :to="`/part/${part.id}/lesson/1`"
        class="bg-gradient-to-r from-red-600 to-red-500 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mt-4"
      >
        <span>{{ t('Start Lessons') }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>

      <!-- PDF Buttons -->
      <div class="flex flex-col gap-4 items-center mt-8 w-full max-w-2xl mx-auto px-2">
        <div v-if="part.pdfUrl" class="w-full">
          <button 
            @click="openPdfViewer(part.pdfUrl, t('Level Book', { number: part.id }))"
            class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg md:text-2xl font-bold py-4 px-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span class="truncate">{{ t('Level Book', { number: part.id }) }}</span>
          </button>
        </div>

        <div v-if="part.examUrl" class="w-full flex flex-col gap-4">
          <button 
            @click="openPdfViewer(part.examUrl, t('Browse Level Exam Label', { level: t('Level ' + part.id + ' Name') }))"
            class="w-full bg-white text-blue-600 border-2 md:border-4 border-blue-600 text-lg md:text-2xl font-bold py-4 px-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="truncate">{{ t('Browse Level Exam Label', { level: t('Level ' + part.id + ' Name') }) }}</span>
          </button>
          
          <a 
            :href="part.examUrl" 
            target="_blank"
            class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg md:text-2xl font-bold py-4 px-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span class="truncate">{{ t('Download Level Exam Label', { level: t('Level ' + part.id + ' Name') }) }}</span>
          </a>
        </div>
      </div>
      <p class="mt-2 text-gray-500 text-sm font-medium">({{ t('Book Note') }})</p>

      <!-- Back Home -->
      <NuxtLink to="/" class="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 mt-2">
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

    <!-- PDF Viewer Component -->
    <PdfViewerSimple 
      v-if="currentPdfUrl"
      :is-open="isPdfViewerOpen"
      :pdf-url="currentPdfUrl"
      :title="currentPdfTitle"
      @close="closePdfViewer"
    />
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

// PDF Viewer state
const isPdfViewerOpen = ref(false);
const currentPdfUrl = ref('');
const currentPdfTitle = ref('');

const openPdfViewer = (url: string, title: string) => {
  currentPdfUrl.value = url;
  currentPdfTitle.value = title;
  isPdfViewerOpen.value = true;
};

const closePdfViewer = () => {
  isPdfViewerOpen.value = false;
};

useHead({
  title: computed(() => part.value?.title || 'القسم'),
});
</script>
