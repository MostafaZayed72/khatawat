<template>
  <div class="h-screen w-screen bg-white p-2 font-sans overflow-hidden flex flex-col" dir="rtl">
    <DynamicHeroBackground />
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-2 shrink-0 relative z-10">
      <!-- Top Right Label -->
      <div class="border border-red-200 bg-red-50 text-gray-800 px-3 py-1 rounded-lg shadow-sm">
        <span class="font-bold text-xs md:text-sm">المجموعة الأولى</span>
      </div>
      
      <!-- Title (Centered) -->
      <div class="absolute left-1/2 transform -translate-x-1/2 top-0">
         <div class="bg-gradient-to-b from-red-600 to-red-500 text-white px-8 py-1 rounded-full shadow-lg border-2 border-yellow-200">
          <h1 class="text-xl md:text-2xl font-bold">الأرقــام</h1>
        </div>
      </div>
    </div>

    <!-- Audio Player Control Panel -->
    <div class="flex flex-col items-center mb-4 mt-2 shrink-0 w-full px-4 z-10">
      
      <!-- Main Play Button -->
      <button 
        @click="toggleAudio"
        class="w-full max-w-lg flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white py-2 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-b-4 border-yellow-700 mb-3"
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
      <div class="w-full max-w-lg bg-gray-100 rounded-xl p-2 flex flex-col gap-2 shadow-inner border border-gray-200">
        
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

    <!-- Numbers Grid -->
    <div class="flex-grow grid grid-cols-3 md:grid-cols-5 gap-2   w-full max-w-7xl mx-auto px-2 z-10">
      <div v-for="item in numbers" :key="item.id" class="flex flex-col items-center justify-center group w-full h-full min-h-[80px]">
        
        <!-- Number Digit -->
        <div class="mb-1 relative w-full flex justify-center items-center flex-grow">
          <span 
            class="font-black cursor-pointer number-3d select-none transition-transform transform group-hover:scale-110 duration-300 block text-center leading-none"
            :class="item.digit.length > 6 ? 'text-lg sm:text-xl md:text-3xl lg:text-4xl whitespace-nowrap' : 'text-5xl md:text-6xl lg:text-7xl'"
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

    <!-- Side Decoration (Optional) -->
    <div class="fixed top-20 right-0 h-3/4 w-2 bg-gradient-to-b from-orange-300 to-orange-500 rounded-l-lg opacity-80 hidden lg:block pointer-events-none z-0"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const playbackRate = ref(1);
let audio = null;

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

onMounted(() => {
  if (typeof Audio !== 'undefined') {
    audio = new Audio('/numbers.wav');
    
    audio.addEventListener('loadedmetadata', () => {
      duration.value = audio.duration;
    });
    
    audio.addEventListener('timeupdate', () => {
      currentTime.value = audio.currentTime;
    });
    
    audio.addEventListener('ended', () => {
      isPlaying.value = false;
      currentTime.value = 0;
    });
  }
});

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

const setSpeed = (rate) => {
  if (audio) {
    audio.playbackRate = rate;
    playbackRate.value = rate;
  }
};

const numbers = [
  { id: 1, digit: '1', text: 'وَاحِد', colorFrom: '#FF9800', colorTo: '#FFC107', shadowColor: '#E65100' },
  { id: 2, digit: '2', text: 'اثْنَان', colorFrom: '#03A9F4', colorTo: '#00BCD4', shadowColor: '#01579B' },
  { id: 3, digit: '3', text: 'ثَلَاثَة', colorFrom: '#9C27B0', colorTo: '#E040FB', shadowColor: '#4A148C' },
  { id: 4, digit: '4', text: 'أَرْبَعَة', colorFrom: '#4CAF50', colorTo: '#8BC34A', shadowColor: '#1B5E20' },
  { id: 5, digit: '5', text: 'خَمْسَة', colorFrom: '#2196F3', colorTo: '#64B5F6', shadowColor: '#0D47A1' },
  { id: 6, digit: '6', text: 'سِتَّة', colorFrom: '#E91E63', colorTo: '#F48FB1', shadowColor: '#880E4F' },
  { id: 7, digit: '7', text: 'سَبْعَة', colorFrom: '#F44336', colorTo: '#EF5350', shadowColor: '#B71C1C' },
  { id: 8, digit: '8', text: 'ثَمَانِيَة', colorFrom: '#FF5722', colorTo: '#FF7043', shadowColor: '#BF360C' },
  { id: 9, digit: '9', text: 'تِسْعَة', colorFrom: '#795548', colorTo: '#8D6E63', shadowColor: '#3E2723' },
  { id: 10, digit: '10', text: 'عَشَرَة', colorFrom: '#607D8B', colorTo: '#78909C', shadowColor: '#263238' },
  { id: 100, digit: '100', text: 'مِئَة', colorFrom: '#009688', colorTo: '#26A69A', shadowColor: '#004D40' },
  { id: 1000, digit: '1000', text: 'أَلْف', colorFrom: '#3F51B5', colorTo: '#5C6BC0', shadowColor: '#1A237E' },
  { id: 1000000, digit: '1,000,000', text: 'مِلْيُون', colorFrom: '#673AB7', colorTo: '#7E57C2', shadowColor: '#311B92' },
  { id: 1000000000, digit: '1,000,000,000', text: 'مِلْيَار', colorFrom: '#9C27B0', colorTo: '#AB47BC', shadowColor: '#4A148C' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

.font-arabic {
  font-family: 'Amiri', serif;
}

.number-3d {
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