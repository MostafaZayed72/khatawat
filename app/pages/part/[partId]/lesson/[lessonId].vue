<template>
  <div class="min-h-screen w-screen bg-white p-2 font-sans flex flex-col" dir="rtl">
    
    <div v-if="lesson" class="flex flex-col relative z-10 pb-10">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-2 shrink-0 relative">
        <!-- Top Right Label -->
        <div v-if="lesson.subtitle" class="mb-2 md:mb-0 border border-red-200 bg-red-50 text-gray-800 px-3 py-1 rounded-lg shadow-sm">
          <span class="font-bold text-xs md:text-sm">{{ lesson.subtitle }}</span>
        </div>
        
        <!-- Title (Centered & Dropdown) -->
        <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 z-50">
           <div class="relative">
             <button 
               @click="showDropdown = !showDropdown"
               class="bg-gradient-to-b from-red-600 to-red-500 text-white px-8 py-1 rounded-full shadow-lg border-2 border-yellow-200 flex items-center gap-2 hover:scale-105 transition-transform"
             >
               <h1 class="text-xl md:text-2xl font-bold">{{ lesson.title }}</h1>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{ 'rotate-180': showDropdown }" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
               </svg>
             </button>

            <!-- Dropdown Menu -->
            <div v-if="showDropdown" class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 max-h-80 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
              <div v-for="l in partLessons" :key="l.id">
                <NuxtLink 
                  :to="`/part/${partId}/lesson/${l.id}`" 
                  class="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-center transition-colors"
                  :class="{ 'bg-red-50 text-red-600 font-bold': l.id === lesson.id }"
                  @click="showDropdown = false"
                >
                  {{ l.title }}
                </NuxtLink>
              </div>
            </div>
           </div>
        </div>
      </div>

      <!-- Audio Player & Navigation Section -->
      <div v-if="lesson.audioUrl" class="flex items-start justify-center gap-2 md:gap-4 mb-2 mt-2 shrink-0 w-full px-2">
        
        <!-- Prev Button (Right in RTL) -->
        <NuxtLink 
          v-if="prevLessonId"
          :to="`/part/${partId}/lesson/${prevLessonId}`"
          class="mt-2 p-3 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
          title="الدرس السابق"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
        <div v-else class="w-12"></div> <!-- Spacer -->

        <!-- Audio Controls Container -->
        <div class="flex flex-col items-center w-full max-w-lg">
          <!-- Main Play Button -->
          <button 
            @click="toggleAudio"
            class="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white py-2 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-b-4 border-yellow-700 mb-2"
          >
            <span class="text-2xl font-black tracking-wide">{{ isPlaying ? 'إيقاف مؤقت' : 'تشغيل الصوت' }}</span>
            <div class="bg-white/20 p-2 rounded-full">
               <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </button>

          <!-- Advanced Controls Row -->
          <div class="w-full bg-gray-100 rounded-xl p-2 flex flex-col gap-2 shadow-inner border border-gray-200">
            
            <!-- Progress Bar & Time -->
            <div class="flex items-center gap-2 w-full">
              <span class="text-xs font-mono text-gray-600 w-10 text-center">{{ formatTime(currentTime) }}</span>
              <input 
                type="range" 
                min="0" 
                :max="duration" 
                step="0.1" 
                v-model="currentTime" 
                @input="seekAudio"
                class="flex-grow h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              >
              <span class="text-xs font-mono text-gray-600 w-10 text-center">{{ formatTime(duration) }}</span>
            </div>

            <!-- Secondary Controls (Restart, Speed) -->
            <div class="flex justify-between items-center w-full px-2">
              
              <!-- Restart Button -->
              <button 
                @click="restartAudio"
                class="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors text-sm font-bold"
                title="إعادة من البداية"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                </svg>
                <span>إعادة</span>
              </button>

              <!-- Speed Control -->
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-bold">السرعة:</span>
                <div class="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button 
                    v-for="rate in [0.5, 1, 1.5, 2]" 
                    :key="rate"
                    @click="setSpeed(rate)"
                    class="px-2 py-1 text-xs font-bold transition-colors"
                    :class="playbackRate === rate ? 'bg-yellow-100 text-yellow-700' : 'text-gray-600 hover:bg-gray-50'"
                  >
                    {{ rate }}x
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Next Button (Left in RTL) -->
        <NuxtLink 
          v-if="nextLessonId"
          :to="`/part/${partId}/lesson/${nextLessonId}`"
          class="mt-2 p-3 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
          title="الدرس التالي"
        >
         
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
        <div v-else class="w-12"></div> <!-- Spacer -->

      </div>

      <!-- Numbers Grid (Type: numbers) -->
      <div v-if="lesson.type === 'numbers' && lesson.items" class="grid grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-7xl mx-auto px-2 z-10">
        <div v-for="item in lesson.items" :key="item.id" class="flex flex-col items-center justify-center group w-full min-h-[120px]">
          
          <!-- Number Digit -->
          <div class="mb-1 relative w-full flex justify-center items-center flex-grow">
            <span 
              class="font-black cursor-pointer number-3d select-none transition-transform transform group-hover:scale-110 duration-300 block text-center leading-none"
              :class="(item.digit?.length || 0) > 6 ? 'text-lg sm:text-xl md:text-3xl lg:text-4xl whitespace-nowrap' : 'text-5xl md:text-6xl lg:text-7xl'"
              :style="{ '--gradient-from': item.colorFrom, '--gradient-to': item.colorTo, '--shadow-color': item.shadowColor }"
            >
              {{ item.digit }}
            </span>
          </div>

          <!-- Arabic Text -->
          <div class="text-center shrink-0">
            <span class="text-lg md:text-xl font-bold text-gray-800 font-arabic leading-none">{{ item.text }}</span>
          </div>

        </div>
      </div>

      <!-- Gallery Type Lesson -->
      <div v-else-if="lesson.type === 'gallery' && lesson.items" class="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-4xl mx-auto z-10 relative">
        <div v-for="(item, index) in lesson.items" :key="index" class="flex flex-col items-center group cursor-pointer">
          <div class="w-full h-64 bg-tranparent rounded-lg overflow-hidden mb-2 shadow-md transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
            <img v-if="item.image" :src="item.image" :alt="item.text" class="w-full h-full object-contain" />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          </div>
          <p class="text-xl font-semibold text-gray-700 transition-colors group-hover:text-red-600">{{ item.text }}</p>
        </div>
      </div>

      <!-- Diagram Type Lesson -->
      <div v-else-if="lesson.type === 'diagram'" class="flex flex-col md:flex-row items-start justify-center gap-8 p-4 max-w-7xl mx-auto z-10 relative w-full">
        
        <!-- List (Right side in RTL) -->
        <div class="flex flex-col gap-2 md:gap-4 shrink-0 order-2 md:order-1 w-full md:w-auto max-h-[80vh] overflow-y-auto custom-scrollbar px-2">
          <div v-for="item in lesson.items" :key="item.id" class="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform p-2 rounded-lg hover:bg-white/50">
             <!-- Number -->
             <span class="text-3xl md:text-4xl font-bold text-gray-800 font-sans min-w-[3rem]">{{ item.id }} - </span>
             <!-- Text -->
             <span class="text-2xl md:text-3xl font-bold text-gray-900 font-arabic">{{ item.text }}</span>
          </div>
        </div>

        <!-- Main Image (Left side in RTL) -->
        <div class="flex-grow max-w-2xl w-full order-1 md:order-2 sticky top-4">
           <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white flex flex-col">
              <template v-if="lesson.diagramImages">
                  <img v-for="(img, idx) in lesson.diagramImages" :key="idx" :src="img" :alt="lesson.title" class="w-full h-auto object-contain -mt-1 first:mt-0" />
              </template>
              <img v-else-if="lesson.mainImage" :src="lesson.mainImage" :alt="lesson.title" class="w-full h-auto object-contain" />
           </div>
        </div>

      </div>

      <!-- Text Type Lesson -->
      <div v-else class="prose lg:prose-xl mx-auto text-center p-4 z-10 relative">
        <p class="text-gray-600">{{ lesson.description }}</p>
      </div>

      <!-- Side Decoration (Optional) -->
      <!-- <div class="fixed top-20 right-0 h-3/4 w-2 bg-gradient-to-b from-orange-300 to-orange-500 rounded-l-lg opacity-80 hidden lg:block pointer-events-none z-0"></div> -->
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl text-red-500">الدرس غير موجود</h2>
      <NuxtLink :to="`/part/${partId}`" class="text-blue-500 hover:underline mt-4 block">العودة للقسم</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getParts } from '~/utils/lessons';

const { t } = useI18n();
const route = useRoute();
const partId = computed(() => parseInt(route.params.partId as string));
const lessonId = computed(() => parseInt(route.params.lessonId as string));

// Make lessons reactive to language changes
const parts = computed(() => getParts(t));
const part = computed(() => parts.value.find(p => p.id === partId.value));
const partLessons = computed(() => part.value?.lessons || []);
const lesson = computed(() => partLessons.value.find(l => l.id === lessonId.value));

// Navigation Logic
const prevLessonId = computed(() => {
  const index = partLessons.value.findIndex(l => l.id === lessonId.value);
  return index > 0 ? partLessons.value[index - 1].id : null;
});

const nextLessonId = computed(() => {
  const index = partLessons.value.findIndex(l => l.id === lessonId.value);
  return index < partLessons.value.length - 1 ? partLessons.value[index + 1].id : null;
});

// Dropdown State
const showDropdown = ref(false);

// Audio Logic
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const playbackRate = ref(1);
let audio: HTMLAudioElement | null = null;

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const initAudio = () => {
  if (audio) {
    audio.pause();
    audio = null;
  }
  
  if (lesson.value?.audioUrl && typeof Audio !== 'undefined') {
    audio = new Audio(lesson.value.audioUrl);
    
    audio.addEventListener('loadedmetadata', () => {
      duration.value = audio!.duration;
    });
    
    audio.addEventListener('timeupdate', () => {
      currentTime.value = audio!.currentTime;
    });
    
    audio.addEventListener('ended', () => {
      isPlaying.value = false;
      currentTime.value = 0;
    });
  }
};

// Watch for lesson changes to re-init audio
watch(lesson, () => {
  isPlaying.value = false;
  currentTime.value = 0;
  duration.value = 0;
  initAudio();
  showDropdown.value = false; // Close dropdown on nav
}, { immediate: true });

onUnmounted(() => {
  if (audio) {
    audio.pause();
    audio = null;
  }
});

const toggleAudio = () => {
  if (!audio) return;
  
  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
  } else {
    audio.play().catch(e => console.error("Audio play failed", e));
    isPlaying.value = true;
  }
};

const seekAudio = () => {
  if (audio) {
    audio.currentTime = currentTime.value;
  }
};

const restartAudio = () => {
  if (audio) {
    audio.currentTime = 0;
    currentTime.value = 0;
    if (!isPlaying.value) {
      toggleAudio();
    }
  }
};

const setSpeed = (rate: number) => {
  if (audio) {
    audio.playbackRate = rate;
    playbackRate.value = rate;
  }
};

useHead({
  title: computed(() => lesson.value?.title || 'الدرس'),
});
</script>

<style scoped>
.number-3d {
  /* استخدام خط أوضح للأرقام لتحسين وضوح الأصفار */
  font-family: 'Arial', 'Helvetica', sans-serif !important;
  background: linear-gradient(to bottom, var(--gradient-from), var(--gradient-to));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(1px 1px 0px var(--shadow-color)) 
          drop-shadow(2px 2px 0px var(--shadow-color))
          drop-shadow(3px 3px 0px var(--shadow-color))
          drop-shadow(4px 4px 2px rgba(0,0,0,0.3));
  
  /* Ensure text is visible if background-clip fails */
  @supports not (background-clip: text) {
    color: var(--gradient-from);
    background: none;
  }
}
</style>
