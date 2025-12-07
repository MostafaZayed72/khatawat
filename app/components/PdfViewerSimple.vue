<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    @click.self="closeViewer"
  >
    <div class="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white z-20 relative">
        <h2 class="text-xl md:text-2xl font-bold">{{ title }}</h2>
        <button 
          @click="closeViewer"
          class="p-2 hover:bg-white/20 rounded-full transition-colors"
          :aria-label="t('Close')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- PDF Content -->
      <div class="flex-1 overflow-hidden bg-gray-100 relative group">
        <!-- Loading State -->
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div class="text-center">
            <div class="relative w-32 h-32 mx-auto mb-4">
              <svg class="animate-spin h-32 w-32 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p class="text-gray-600 text-lg mb-2">{{ t('Loading PDF...') }}</p>
            <p class="text-gray-500 text-sm">{{ t('Please wait...') }}</p>
          </div>
        </div>

        <!-- Google Drive Viewer (Iframe) -->
        <!-- نستخدم حاوية مع overflow hidden وقيم سالبة للـ margin لإخفاء الشريط العلوي -->
        <div class="w-full h-full overflow-hidden relative">
          <iframe
            v-if="previewUrl"
            :src="previewUrl"
            class="w-[102%] h-[120%] -mt-[55px] -ml-[1%] border-0"
            @load="onLoad"
            allow="autoplay"
          ></iframe>
          
          <!-- طبقة شفافة لمنع النقر على أي أزرار متبقية (اختياري) -->
          <!-- <div class="absolute top-0 left-0 w-full h-[60px] bg-transparent z-10"></div> -->
        </div>
      </div>

      <!-- Footer Warning -->
      <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center z-20 relative">
        <p class="text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          {{ t('This document is avialable for viewing') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  isOpen: boolean;
  pdfUrl: string;
  title: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const loading = ref(true);

// استخدام رابط Preview العادي لأنه الوحيد الذي يدعم الملفات الكبيرة
const previewUrl = computed(() => {
  if (!props.pdfUrl) return '';
  
  const fileIdMatch = props.pdfUrl.match(/\/d\/([^\/]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return props.pdfUrl;
});

const closeViewer = () => {
  emit('close');
};

const onLoad = () => {
  loading.value = false;
};

watch(() => props.pdfUrl, () => {
  loading.value = true;
});

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    loading.value = true;
    // Timeout للأمان
    setTimeout(() => {
      loading.value = false;
    }, 5000);
  }
});
</script>

<style scoped>
iframe {
  pointer-events: auto;
}
</style>
