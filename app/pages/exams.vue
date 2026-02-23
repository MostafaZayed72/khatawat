<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
    <div class="w-full max-w-4xl flex flex-col items-center gap-8 py-10">
      
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-black text-center text-red-600 drop-shadow-lg mb-8 leading-tight">
          {{ t('Level Exams') }}
        </h1>
      </div>

      <!-- Exams Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div 
          v-for="part in parts" 
          :key="part.id"
          class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-100 flex flex-col p-6 items-center text-center gap-4 hover:shadow-2xl transition-all duration-300"
        >
          <div class="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
            {{ part.id }}
          </div>
          <h2 class="text-2xl font-bold text-gray-800">{{ part.title }}</h2>
          
          <button 
            @click="openExam(part)"
            class="mt-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>{{ t('Level Exam') }}</span>
          </button>
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
      v-if="selectedExam"
      :is-open="isPdfViewerOpen"
      :pdf-url="selectedExam.examUrl || ''"
      :title="selectedExam.title + ' - ' + t('Level Exam')"
      @close="closePdfViewer"
    />
  </div>
</template>

<script setup lang="ts">
import { getParts, type Part } from '~/utils/lessons';

const { t, locale } = useI18n();

const parts = computed(() => {
  const l = locale.value;
  return getParts(t);
});

const isPdfViewerOpen = ref(false);
const selectedExam = ref<Part | null>(null);

const openExam = (part: Part) => {
  if (part.examUrl) {
    selectedExam.value = part;
    isPdfViewerOpen.value = true;
  }
};

const closePdfViewer = () => {
  isPdfViewerOpen.value = false;
};

useHead({
  title: computed(() => t('Level Exams')),
});
</script>
