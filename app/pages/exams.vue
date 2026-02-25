<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
    <div class="w-full max-w-4xl flex flex-col items-center gap-8 py-10">
      
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-black text-center text-red-600 drop-shadow-lg mb-8 leading-tight">
          {{ t('Diagnosis and Tests') }}
        </h1>
      </div>

      <!-- Comprehensive Exam Section -->
      <div class="w-full mb-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-100 pb-2">{{ t('Comprehensive Exam') }}</h2>
        <div class="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-xl p-8 border-4 border-red-100 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-2xl">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-black text-gray-900">{{ t('Comprehensive Exam') }}</h3>
              <p class="text-gray-500 font-medium">{{ t('Level Exam Note') }}</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button 
              @click="openPdfViewer(COMPREHENSIVE_EXAM_URL, t('Comprehensive Exam'))"
              class="bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{{ t('View Exam') }}</span>
            </button>
            <a 
              :href="COMPREHENSIVE_EXAM_URL" 
              target="_blank"
              class="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{{ t('Download Exam') }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Level Exams Grid -->
      <div class="w-full">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-2">{{ t('Level Exams') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div 
            v-for="part in parts" 
            :key="part.id"
            class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-100 flex flex-col p-6 items-center text-center gap-4 hover:shadow-2xl transition-all duration-300"
          >
            <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              {{ part.id }}
            </div>
            <h3 class="text-2xl font-bold text-gray-800">{{ t('Level Exam') }} {{ part.id }}</h3>
            <p class="text-gray-500 text-sm font-medium">{{ part.title }}</p>
            
            <div class="flex flex-col w-full gap-3 mt-auto pt-4 border-t border-gray-50">
              <button 
                @click="openPdfViewer(part.examUrl || '', t('Browse Level Exam Label', { level: t('Level ' + part.id + ' Name') }))"
                class="w-full bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis text-sm md:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="truncate">{{ t('Browse Level Exam Label', { level: t('Level ' + part.id + ' Name') }) }}</span>
              </button>
              <a 
                :href="part.examUrl" 
                target="_blank"
                class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis text-sm md:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span class="truncate">{{ t('Download Level Exam Label', { level: t('Level ' + part.id + ' Name') }) }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Back Home -->
      <NuxtLink to="/" class="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        <span>{{ t('Back to Home') }}</span>
      </NuxtLink>

    </div>

    <!-- PDF Viewer Component -->
    <PdfViewerSimple 
      :is-open="isPdfViewerOpen"
      :pdf-url="currentPdfUrl"
      :title="currentPdfTitle"
      @close="closePdfViewer"
    />
  </div>
</template>

<script setup lang="ts">
import { getParts, COMPREHENSIVE_EXAM_URL } from '~/utils/lessons';

const { t, locale } = useI18n();

const parts = computed(() => {
  const l = locale.value;
  return getParts(t);
});

const isPdfViewerOpen = ref(false);
const currentPdfUrl = ref('');
const currentPdfTitle = ref('');

const openPdfViewer = (url: string, title: string) => {
  if (url) {
    currentPdfUrl.value = url;
    currentPdfTitle.value = title;
    isPdfViewerOpen.value = true;
  }
};

const closePdfViewer = () => {
  isPdfViewerOpen.value = false;
};

useHead({
  title: computed(() => t('Diagnosis and Tests')),
});
</script>
