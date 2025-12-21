<template>
  
   

    <!-- زر الرجوع للأعلى -->
    <button @click="scrollToTop"
      class="z-50 left-4 fixed bottom-4 bg-gray-600 text-white p-3 w-10 h-10 cursor-pointer  rounded-full shadow-lg flex items-center justify-center hover:bg-secondary transition-all duration-300"
      >
      <Icon name="material-symbols:arrow-upward-alt-rounded" class="text-xl md:text-2xl font-bold"/>
    </button>
  
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

// دالة الرجوع للأعلى
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>