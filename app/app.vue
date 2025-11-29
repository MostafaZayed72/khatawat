<script setup lang="ts">
import { useLocaleHead } from '#i18n';
import { ref } from 'vue';

const { t } = useI18n();

useHead(useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
}));

const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const isPartActive = (id: number) => {
  return route.path.startsWith(`/part/${id}/`) || route.path === `/part/${id}`;
};
</script>

<template>
  <div class="relative min-h-screen flex flex-col font-sans">
    
    <DynamicHeroBackground />

    <!-- Header -->
    <header class="w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 shadow-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-32">
          
          <!-- Logo (Right) -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center gap-2 group">
                 <img src="/logo.png" alt="Logo" class="h-48 w-48 object-contain transform group-hover:scale-105 transition-transform duration-300" />
            </NuxtLink>
          </div>

          <!-- Navigation (Left) - Desktop -->
          <nav class="hidden md:flex items-center space-x-8 space-x-reverse">
            <NuxtLink 
              v-for="i in 4" 
              :key="i"
              :to="`/part/${i}`"
              class="px-4 py-2 rounded-full text-lg font-bold transition-all"
              :class="isPartActive(i) ? 'text-red-600 bg-red-50 shadow-sm' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'"
            >
              {{ t('Level') }} {{ i }}
            </NuxtLink>
            <LanguageSwitcher />
          </nav>

          <!-- Mobile Menu Button -->
          <div class="flex items-center md:hidden">
             <button @click="toggleMobileMenu" class="text-gray-600 hover:text-red-600 p-2 focus:outline-none">
               <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>

        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-32 z-40">
        <div class="px-4 pt-2 pb-4 space-y-2 flex flex-col">
           <NuxtLink 
              v-for="i in 4" 
              :key="i"
              :to="`/part/${i}`"
              class="block px-4 py-3 rounded-xl text-lg font-bold transition-colors text-center"
              :class="isPartActive(i) ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'"
              @click="isMobileMenuOpen = false"
            >
              {{ t('Level') }} {{ i }}
            </NuxtLink>
            <div class="flex justify-center pt-2">
              <LanguageSwitcher />
            </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center w-full">
       <NuxtPage class="w-full" />
    </main>
    
  </div>
</template>



<style>
body {
  overflow-x: hidden;
  width: 100%;
}

/* إذا كنت تستخدم ملف CSS خارجي، تأكد من وجود هذه القواعد فيه */
html {
  overflow-x: hidden;
  width: 100%;
}
</style>