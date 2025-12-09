<template>
  <div class="min-h-screen w-screen bg-white p-2 font-sans flex flex-col" dir="rtl">
    
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
        <div class="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-red-500 mb-4"></div>
        <p class="text-xl font-bold text-gray-600 animate-pulse">جاري التحميل...</p>
    </div>

    <div v-if="lesson" v-show="!isLoading" class="flex flex-col relative z-10 pb-10">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-2 shrink-0 relative">
        <!-- Top Right Label -->
        <div v-if="lesson.subtitle && partId !== 2" class="mb-2 md:mb-0 border border-red-200 bg-red-50 text-gray-800 px-3 py-1 rounded-lg shadow-sm">
          <span class="font-bold text-xs md:text-sm">{{ lesson.subtitle }}</span>
        </div>
        
        <!-- Title & Navigation -->
        <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 z-50 flex items-center gap-4">
           
           <!-- Next Button -->
           <NuxtLink 
             v-if="nextLessonId"
             :to="`/part/${partId}/lesson/${nextLessonId}`"
             class="p-2 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
             :title="t('Next Lesson')"
           >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
             </svg>
           </NuxtLink>

           <div class="relative">
             <button 
               type="button"
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

           <!-- Prev Button -->
           <NuxtLink 
             v-if="prevLessonId"
             :to="`/part/${partId}/lesson/${prevLessonId}`"
             class="p-2 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
             :title="t('Previous Lesson')"
           >
            

              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
           </NuxtLink>

        </div>
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
      <div v-else-if="lesson.type === 'gallery' && lesson.items" 
           class="grid gap-6 p-4 max-w-4xl mx-auto z-10 relative"
           :class="lesson.id === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'">
        <div v-for="(item, index) in lesson.items" :key="index" class="flex flex-col items-center group cursor-pointer">
          <div class="w-full h-64 bg-tranparent rounded-lg overflow-hidden mb-2 shadow-md transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
            <img v-if="item.image" :src="item.image" :alt="item.text" class="w-full h-full object-contain" @load="handleImageLoad" />
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
                  <img v-for="(img, idx) in lesson.diagramImages" :key="idx" :src="img" :alt="lesson.title" class="w-full h-auto object-contain -mt-1 first:mt-0" @load="handleImageLoad" />
              </template>
              <img v-else-if="lesson.mainImage" :src="lesson.mainImage" :alt="lesson.title" class="w-full h-auto object-contain" @load="handleImageLoad" />
           </div>
        </div>

      </div>



      <!-- Hijri Type Lesson -->
      <div v-else-if="lesson.type === 'hijri'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-6xl mx-auto z-10 relative">
        <div v-for="(item, index) in lesson.items" :key="index" class="flex flex-col items-center justify-center p-4">
          
          <!-- Diamond Shape Container -->
          <div class="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-xl transform rotate-45 flex items-center justify-center border-2 border-white group hover:scale-110 transition-transform duration-300 cursor-pointer">
            
            <!-- Green Tag -->
            <div class="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md z-10"></div>
            
            <!-- Text Container (Counter Rotated) -->
            <div class="transform -rotate-45 flex items-center justify-center w-full h-full">
              <span class="text-xl md:text-2xl font-bold text-gray-800 text-center leading-tight drop-shadow-sm">{{ item.text }}</span>
            </div>

            <!-- Glossy Effect -->
            <div class="absolute top-0 left-0 w-full h-1/2 bg-white opacity-20 rounded-t-2xl pointer-events-none"></div>
          </div>

        </div>
      </div>

      <!-- Week Days Type Lesson -->
      <div v-else-if="lesson.type === 'weekDays'" class="flex flex-col md:flex-row items-center justify-center gap-8 p-4 max-w-6xl mx-auto z-10 relative w-full">
        
        <!-- Pie Chart -->
        <div class="relative w-full max-w-md aspect-square">
           <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
             <path 
               v-for="(item, index) in lesson.items" 
               :key="item.id"
               :d="getPiePath(index, lesson.items.length)"
               :fill="item.colorFrom"
               class="stroke-white stroke-[0.5] hover:opacity-90 transition-opacity cursor-pointer"
             />
             <!-- Text on Pie Slices -->
             <text 
                v-for="(item, index) in lesson.items" 
                :key="'text-' + item.id"
                :x="getTextPos(index, lesson.items.length).x"
                :y="getTextPos(index, lesson.items.length).y"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="white"
                font-size="4"
                font-weight="bold"
                class="pointer-events-none transform rotate-90 origin-center"
                :transform="`rotate(${getTextRotation(index, lesson.items.length)}, ${getTextPos(index, lesson.items.length).x}, ${getTextPos(index, lesson.items.length).y})`"
             >

             </text>
             <!-- Center Circle -->
             <circle cx="50" cy="50" r="10" fill="white" />
           </svg>
        </div>

        <!-- Legend -->
        <div class="flex flex-col gap-4 w-full md:w-auto">
           <div v-for="item in lesson.items" :key="item.id" class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-md shadow-sm" :style="{ backgroundColor: item.colorFrom }"></div>
              <span class="text-xl md:text-2xl font-bold text-gray-800">{{ item.text }}</span>
           </div>
        </div>

      </div>

      <!-- Drops Type Lesson -->
      <div v-else-if="lesson.type === 'drops'" class="flex flex-wrap items-center justify-center gap-8 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <div v-for="item in lesson.items" :key="item.id" class="relative w-40 h-56 md:w-56 md:h-80 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300">
            <!-- Drop Shape SVG -->
            <svg viewBox="0 0 100 140" class="absolute inset-0 w-full h-full drop-shadow-xl">
               <defs>
                  <linearGradient :id="'dropGradient-' + item.id" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
                     <stop offset="100%" style="stop-color:#0284c7;stop-opacity:1" />
                  </linearGradient>
               </defs>
               <!-- Main Drop Body -->
               <path d="M 50 5 Q 95 60 95 85 A 45 45 0 1 1 5 85 Q 5 60 50 5 Z" :fill="'url(#dropGradient-' + item.id + ')'" stroke="white" stroke-width="2" />
               <!-- Inner Decorative Border -->
               <path d="M 50 12 Q 88 62 88 85 A 38 38 0 1 1 12 85 Q 12 62 50 12 Z" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2 2" opacity="0.7" />
               <!-- Shine Effect -->
               <path d="M 30 30 Q 40 40 30 50" fill="none" stroke="white" stroke-width="3" opacity="0.4" stroke-linecap="round" />
            </svg>
            
            <!-- Text Content -->
            <span class="relative z-10 text-2xl md:text-4xl font-bold text-white drop-shadow-md mt-10">{{ item.text }}</span>
         </div>
      </div>

      <!-- Text Grid Type Lesson (Custom CSS Shapes) -->
      <div v-else-if="lesson.type === 'textGrid'" class="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <div v-for="item in lesson.items" :key="item.id" 
              class="flex items-center justify-center p-4 min-h-[100px] rounded-2xl border-2 border-[#8bc34a] bg-[#dcedc8] shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer group">
            <span class="text-xl md:text-3xl font-bold text-gray-800 font-arabic text-center group-hover:text-black">{{ item.text }}</span>
         </div>
      </div>

      <!-- Opposites Type Lesson (Diamond Split) -->
      <div v-else-if="lesson.type === 'opposites'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <div v-for="item in lesson.items" :key="item.id" class="flex flex-col items-center justify-center p-4">
            <!-- Diamond Container -->
            <div class="relative w-32 h-32 md:w-40 md:h-40 transform rotate-45 overflow-hidden shadow-xl border-2 border-yellow-400 group hover:scale-110 transition-transform duration-300">
               <!-- Top Half (Pink) -->
               <div class="absolute top-0 left-0 w-full h-full bg-[#f8bbd0] origin-bottom-right transition-colors"></div>
               <!-- Bottom Half (Yellow) - using gradient to split -->
               <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent from-50% to-[#fff9c4] to-50%"></div>
               
               <!-- Content Container (Counter Rotated) -->
               <div class="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center w-full h-full">
                  <!-- Top Text -->
                  <span class="text-lg md:text-xl font-bold text-[#b71c1c] mb-1">{{ item.text }}</span>
                  <!-- Divider Line -->
                  <div class="w-3/4 h-0.5 bg-yellow-500/50 my-0.5"></div>
                  <!-- Bottom Text -->
                  <span class="text-lg md:text-xl font-bold text-black mt-1">{{ item.text2 }}</span>
               </div>
            </div>
         </div>
      </div>

      <!-- Conversation Type Lesson -->
      <div v-else-if="lesson.type === 'conversation'" class="flex flex-col items-center justify-center p-4 max-w-4xl mx-auto z-10 relative w-full">
         <!-- Cloud Container -->
         <div class="relative w-full max-w-2xl bg-[#f5f5f5] rounded-[3rem] shadow-2xl border-4 border-gray-200 p-8 md:p-12 overflow-hidden">
            
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-10 pointer-events-none" 
                 style="background-image: linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px); background-size: 20px 20px;">
            </div>

            <!-- Leaves Decoration (CSS Shapes) -->
            <div class="absolute -left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
               <div class="w-16 h-8 bg-[#8bc34a] rounded-full transform -rotate-45 shadow-md"></div>
               <div class="w-20 h-10 bg-[#7cb342] rounded-full transform -rotate-12 shadow-md ml-4"></div>
               <div class="w-16 h-8 bg-[#689f38] rounded-full transform rotate-12 shadow-md"></div>
            </div>
            <div class="absolute -right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 pointer-events-none items-end">
               <div class="w-16 h-8 bg-[#8bc34a] rounded-full transform rotate-45 shadow-md"></div>
               <div class="w-20 h-10 bg-[#7cb342] rounded-full transform rotate-12 shadow-md mr-4"></div>
               <div class="w-16 h-8 bg-[#689f38] rounded-full transform -rotate-12 shadow-md"></div>
            </div>

            <!-- Dialogue Content -->
            <div class="relative z-10 flex flex-col gap-6 w-full">
               <div v-for="item in lesson.items" :key="item.id" class="flex items-start gap-2 text-xl md:text-3xl font-bold font-arabic leading-relaxed">
                  <!-- Speaker Name -->
                  <span :style="{ color: item.speakerColor || '#000' }" class="shrink-0">{{ item.speaker }} :</span>
                  <!-- Text -->
                  <span class="text-gray-800">{{ item.text }}</span>
               </div>
            </div>

         </div>
      </div>
      <!-- Short Vowels Type Lesson -->
      <!-- Cubes Type Lesson (3D Letter Cubes) -->
      <div v-else-if="lesson.type === 'cubes'" class="flex flex-col items-center justify-center gap-8 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <!-- Badge with number -->
         <div class="relative w-32 h-32 flex items-center justify-center">
            <!-- Blue circle background -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl"></div>
            <!-- White inner circle -->
            <div class="absolute inset-4 bg-white rounded-full shadow-inner"></div>
            <!-- Number -->
            <span class="relative z-10 text-6xl font-black text-blue-700 font-sans">{{ lesson.groupNumber }}</span>
         </div>

         <!-- Title -->
         <h2 class="text-5xl font-black text-blue-700 font-arabic">{{ lesson.title }}</h2>

         <!-- Cubes Grid -->
         <div class="flex flex-wrap justify-center gap-12 w-full">
            <div v-for="item in lesson.items" :key="item.id" class="flex flex-col items-center justify-center group cursor-pointer">
               <!-- 3D Cube Container -->
               <div class="relative w-40 h-40 md:w-48 md:h-48 perspective-1000 hover:scale-110 transition-transform duration-300">
                  <!-- Cube wrapper with 3D transform -->
                  <div class="cube-3d w-full h-full relative preserve-3d">
                     <!-- Front face -->
                     <div 
                        class="cube-face cube-front absolute inset-0 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white"
                        :style="{ backgroundColor: item.colorFrom }"
                     >
                        <span class="text-8xl font-black text-white drop-shadow-2xl font-arabic">{{ item.text }}</span>
                     </div>
                     
                     <!-- Top face (lighter) -->
                     <div 
                        class="cube-face cube-top absolute inset-0 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white opacity-80"
                        :style="{ backgroundColor: item.colorTo }"
                     >
                     </div>
                     
                     <!-- Right face (darker) -->
                     <div 
                        class="cube-face cube-right absolute inset-0 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white opacity-60"
                        :style="{ backgroundColor: item.shadowColor }"
                     >
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Short Vowels Type Lesson -->
      <div v-else-if="lesson.type === 'shortVowels'" class="flex flex-col items-center justify-center gap-4 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <div class="w-full flex justify-start max-w-4xl px-4">
             <div class="bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded-lg px-6 py-1 shadow-sm">
                 <span class="text-xl font-bold text-gray-800 font-arabic">{{ t('I watch') }}</span>
             </div>
         </div>
         <div class="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
             <div v-for="item in lesson.items" :key="item.id" class="flex flex-col w-full max-w-md bg-white border-[3px] border-[#ffcc80] shadow-xl">
                <div class="bg-[#ffcc80] p-2 text-center border-b-[3px] border-[#ffcc80]">
                   <h2 class="text-4xl font-black text-[#1565c0] font-arabic tracking-wide">{{ item.text }}</h2>
                </div>
                <div class="bg-[#fff9c4] h-24 flex justify-center items-center border-b-[3px] border-[#ffcc80]">
                   <!-- Fatha for lesson 1 -->
                   <div v-if="lesson.id === 1" class="w-20 h-3 bg-[#d50000] rounded-full transform -rotate-[25deg]"></div>
                   <!-- Kasra for lesson 2 -->
                   <div v-else-if="lesson.id === 2" class="w-20 h-3 bg-[#d50000] rounded-full transform -rotate-[25deg]"></div>
                   <!-- Damma for lesson 3 (small waw) -->
                   <div v-else-if="lesson.id === 3" class="text-[220px] mt-32 font-black text-[#d50000] leading-none font-arabic">ُ</div>
                </div>
                <div class="relative w-full h-72">
                   <img :src="item.image" :alt="item.text" class="w-full h-full object-cover" />
                </div>
                <div class="bg-[#c8e6c9] p-3 text-center border-t-[3px] border-[#ffcc80]">
                   <h3 class="text-4xl font-black text-black font-arabic tracking-wide">{{ item.text2 }}</h3>
                </div>
             </div>
             <div class="flex flex-col items-center justify-center pt-10">
                 <div class="relative">
                     <template v-if="lesson.id === 1">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">أ</span>
                     </template>
                     <template v-else-if="lesson.id === 2">
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">إ</span>
                        <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                     </template>
                     <template v-else-if="lesson.id === 3">
                        <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                           <span class="text-[120px] font-black text-[#d50000] leading-none font-arabic">ُ</span>
                        </div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">أ</span>
                     </template>
                 </div>
             </div>
         </div>
      </div>

      <!-- Letter Examples Lesson Type -->
      <div v-else-if="lesson.type === 'letterExamples'" class="flex flex-col w-full max-w-6xl mx-auto mt-16 gap-12 px-4">
          
          <!-- Top Letter Circle (Example: Alif/Baa) -->
          <div class="flex justify-center mb-4">
              <div class="w-32 h-32 rounded-full bg-pink-100 border-4 border-white shadow-xl flex items-center justify-center relative">
                  <!-- Decorative shadow/glow -->
                  <div class="absolute inset-0 rounded-full bg-pink-200 blur-lg -z-10 opacity-50"></div>
                  <span 
                      class="text-7xl font-bold text-red-600 font-amiri leading-none"
                      :class="['ج', 'ح', 'خ'].includes(lesson.items?.[0]?.highlight || '') ? 'pb-16' : 'pb-2'"
                  >
                      {{ lesson.items?.[0]?.highlight }}
                  </span>
              </div>
          </div>

              <!-- Section 1: Watch, Listen, Read -->
          <div class="flex flex-col gap-8">
              <!-- Label: I Watch -->
              <div class="flex justify-start px-4">
                  <div class="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-l-full px-8 py-3 shadow-sm flex items-center gap-4">
                       <span class="text-3xl font-bold text-gray-700">{{ t('I Watch') }}</span>
                       <PlayAudioButton v-if="lesson.watchAudio" :audioUrl="lesson.watchAudio" />
                  </div>
              </div>
              
              <!-- Images Row -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <div v-for="item in lesson.items" :key="'img-' + item.id" class="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300 bg-white">
                      <img :src="item.image" :alt="item.text" class="w-full h-full object-contain">
                  </div>
              </div>

              <!-- Label: I Listen -->
              <div class="flex justify-start px-4 mt-4">
                  <div class="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-l-full px-8 py-3 shadow-sm flex items-center gap-4">
                       <span class="text-3xl font-bold text-gray-700">{{ t('I Listen') }}</span>
                       <PlayAudioButton v-if="lesson.listenAudio" :audioUrl="lesson.listenAudio" />
                  </div>
              </div>

              <!-- Words Row -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                   <div v-for="item in lesson.items" :key="'word-' + item.id" class="relative group">
                       <!-- Spotlight Effect -->
                       <div class="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-full h-48 bg-gradient-to-b from-yellow-100/80 via-yellow-50/30 to-transparent clip-path-spotlight z-0 pointer-events-none"></div>

                       <div class="bg-white border-2 border-[#42a5f5] rounded-xl h-40 flex flex-col items-center justify-center shadow-lg relative overflow-hidden z-10 p-2">
                           <!-- Image Mode -->
                           <template v-if="item.listenImage">
                               <div class="relative w-full flex-grow flex items-center justify-center overflow-hidden">
                                   <img :src="item.listenImage" class="max-w-full max-h-full object-contain" />
                               </div>
                               <span v-if="locale === 'en'" class="text-lg font-bold text-gray-800 mt-1 shrink-0 font-sans">{{ item.text }}</span>
                           </template>
                           
                           <!-- Text Mode -->
                           <template v-else>
                                <div class="w-full h-full flex items-center justify-center relative">
                                    <!-- Line -->
                                    <div class="absolute bottom-[3.5rem] left-6 right-6 h-0.5 bg-gray-800 z-0"></div> 
                                    
                                    <span class="relative z-10 text-6xl md:text-8xl font-bold text-black font-amiri tracking-wide -mt-4 leading-normal">
                                    <!-- Render word with highlight -->
                                    <template v-for="(char, index) in item.text.split('')" :key="index">
                                        <span :class="{'text-red-600': char === item.highlight || (item.highlight === 'أ' && ['أ', 'إ', 'آ'].includes(char))}">{{ char }}</span>
                                    </template>
                                    </span>
                                </div>
                           </template>
                       </div>
                   </div>
              </div>

               <!-- Label: I Read -->
               <div class="flex justify-start px-4 mt-4">
                  <div class="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-l-full px-8 py-3 shadow-sm flex items-center gap-4">
                       <span class="text-3xl font-bold text-gray-700">{{ t('I Read') }}</span>
                       <PlayAudioButton v-if="lesson.readAudio" :audioUrl="lesson.readAudio" />
                  </div>
              </div>

              <!-- Letters Row -->
              <div class="grid grid-cols-3 gap-4 md:gap-8 relative mt-16">
                   <div v-for="item in lesson.items" :key="'letter-' + item.id" class="flex flex-col items-center relative h-32 justify-end">
                       <!-- Image Mode -->
                       <div v-if="item.readImage" class="w-full h-full flex items-end justify-center">
                            <img :src="item.readImage" class="max-w-full max-h-full object-contain" />
                       </div>

                       <!-- Text Mode -->
                       <template v-else>
                           <!-- Dotted Line -->
                           <div class="absolute bottom-6 w-full border-b-2 border-dotted border-gray-400"></div>

                           <!-- Letter -->
                           <span class="relative z-10 text-7xl md:text-9xl font-bold text-red-600 font-amiri leading-none mb-2 md:mb-4">{{ item.letter }}</span>
                       </template>
                   </div>
              </div>
          </div>

          <!-- Section 2: Distinguish (Omayyez) -->
          <div v-if="lesson.distinguish" class="mt-12 flex flex-col gap-8 bg-yellow-50/50 p-6 rounded-3xl border border-yellow-100">
               <!-- Header -->
               <div class="flex justify-start mb-8">
                   <div class="bg-white border border-red-200 rounded-2xl px-8 py-3 shadow-sm flex items-center gap-4">
                       <h3 class="text-3xl font-bold text-gray-800">{{ t('I Distinguish') }}</h3>
                       <PlayAudioButton v-if="lesson.distinguishAudio" :audioUrl="lesson.distinguishAudio" />
                   </div>
               </div>

               <!-- Grid -->
               <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div v-for="d in lesson.distinguish" :key="d.id" class="flex flex-col items-center relative">
                       <!-- Green Badge/Ribbon -->
                       <div class="relative z-10 w-20 h-24 mb-4 flex items-start justify-center pt-2">
                           <div class="absolute inset-0 bg-green-600 shadow-lg rounded-t-lg" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);"></div>
                           <div class="absolute inset-0 flex items-center justify-center -mt-2">
                               <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-green-700 border-dashed z-20">
                                    <span class="text-3xl font-bold text-red-600 font-amiri">{{ d.badge }}</span>
                               </div>
                               <!-- Star shape behind circle (simplified as scaling/rotation or just let the badge hold it) -->
                           </div>
                       </div>
                       
                       <!-- Hanging Boxes -->
                       <div class="flex justify-center gap-4 w-full pt-4">
                           <!-- Long Vowel Box -->
                           <div class="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-if="d.id===1">
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.long }}</span>
                           </div>
                           <div class="flex-1 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-else-if="d.id===2">
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.long }}</span>
                           </div>
                           <div class="flex-1 bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-else>
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.long }}</span>
                           </div>


                            <!-- Short Vowel Box -->
                           <div class="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-if="d.id===1">
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.short }}</span>
                           </div>
                           <div class="flex-1 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-else-if="d.id===2">
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.short }}</span>
                           </div>
                           <div class="flex-1 bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 shadow-lg border-2 border-white flex flex-col items-center justify-center h-20 transform hover:scale-105 transition-transform" v-else>
                               <span class="text-4xl font-bold text-white font-amiri">{{ d.short }}</span>
                           </div>
                       </div>
                   </div>
               </div>

               <!-- Bottom Summary Letters -->
               <div class="flex justify-around mt-8 border-t border-yellow-200 pt-8">
                    <div v-for="d in lesson.distinguish" :key="'summary-' + d.id" class="text-center">
                        <span class="text-5xl font-bold text-red-600 font-amiri">{{ d.short }}</span>
                    </div>
               </div>
          </div>

          <!-- Section 3: I Write -->
          <div v-if="lesson.writingPractice" class="mt-8 flex flex-col gap-6">
               <div class="flex justify-start px-4">
                  <div class="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-l-full px-8 py-3 shadow-sm flex items-center gap-4">
                       <span class="text-3xl font-bold text-gray-700">{{ t('I Write') }}</span>
                       <PlayAudioButton v-if="lesson.writeAudio" :audioUrl="lesson.writeAudio" />
                  </div>
              </div>

              <div class="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-6 flex flex-col gap-8">
                  <!-- Single Image Mode -->
                  <div v-if="lesson.writingImage" class="w-full">
                      <img :src="lesson.writingImage" class="w-full h-auto object-contain rounded-xl" />
                  </div>

                  <!-- Standard Practice Mode -->
                  <template v-else>
                      <div v-for="practice in lesson.writingPractice" :key="practice.id" class="flex flex-col gap-4">
                           <!-- Writing Row -->
                           <div class="flex items-end justify-around h-32 border-b border-gray-100 relative">
                               <!-- Image Mode (Per Item) -->
                               <template v-if="practice.image">
                                   <div class="w-full h-full flex items-center justify-center">
                                        <img :src="practice.image" class="max-h-full object-contain" />
                                   </div>
                               </template>
    
                               <!-- Text Mode -->
                               <template v-else>
                                   <!-- Line Guide -->
                                   <div class="absolute bottom-6 left-0 right-0 border-b-2 border-dashed border-gray-300"></div>
    
                                   <!-- Letters -->
                                   <div class="flex flex-col items-center z-10 w-1/3">
                                       <span 
                                        :class="[
                                            'text-6xl md:text-8xl font-amiri leading-none mb-5 md:mb-4',
                                            practice.type === 'dotted' ? 'text-gray-300' : 'text-black'
                                        ]"
                                       >
                                       {{ practice.text }}
                                       </span>
                                   </div>
                                   
                                     <!-- Separator -->
                                   <div class="w-1 h-12 bg-gray-200 rounded-full mb-8"></div>
    
                                   <div class="flex flex-col items-center z-10 w-1/3">
                                       <span 
                                        :class="[
                                            'text-6xl md:text-8xl font-amiri leading-none mb-5 md:mb-4',
                                            practice.type === 'dotted' ? 'text-gray-300' : 'text-black'
                                        ]"
                                       >
                                       {{ practice.sub }}
                                       </span>
                                   </div>
    
                                     <!-- Separator -->
                                   <div class="w-1 h-12 bg-gray-200 rounded-full mb-8"></div>
    
                                   <div class="flex flex-col items-center z-10 w-1/3">
                                       <span 
                                        :class="[
                                            'text-6xl md:text-8xl font-amiri leading-none mb-5 md:mb-4',
                                            practice.type === 'dotted' ? 'text-gray-300' : 'text-black'
                                        ]"
                                       >
                                       {{ practice.text2 }}
                                       </span>
                                   </div>
                               </template>
                           </div>
                      </div>
                  </template>
              </div>
          </div>

          <!-- Section 4: Exercises -->
          <div v-if="lesson.exercises" class="mt-8 flex flex-col gap-12">
               
               <div v-for="exercise in lesson.exercises" :key="exercise.id" class="flex flex-col gap-6">
                   
                   <!-- Exercise: Circle Words -->
                   <template v-if="exercise.type === 'circle'">
                       <div class="flex flex-col gap-4">
                            <!-- Instruction & Button -->
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 flex-1">
                                    <div class="bg-blue-100 p-2 rounded-lg shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div> 
                                    <div class="flex items-center gap-4 w-full">
                                        <h3 class="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">{{ exercise.title }}</h3>
                                        <PlayAudioButton v-if="lesson.circleAudio" :audioUrl="lesson.circleAudio" />
                                    </div>
                                </div>
                                
                                <button 
                                    @click="toggleAnswer(exercise.id)"
                                    class="px-6 py-3 rounded-xl font-bold shadow-md transition-colors flex items-center gap-2 whitespace-nowrap"
                                    :class="showAnswers[exercise.id] ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-green-500 text-white hover:bg-green-600'"
                                >
                                    <svg v-if="!showAnswers[exercise.id]" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                    </svg>
                                    {{ showAnswers[exercise.id] ? t('Hide Answer') : t('Show Answer') }}
                                </button>
                            </div>

                            <!-- Word Grid -->
                            <div class="grid grid-cols-3 gap-6 md:gap-8">
                                <div v-for="(word, wIdx) in exercise.words" :key="wIdx" class="bg-pink-50 rounded-xl p-4 flex items-center justify-center h-24 shadow-sm border border-pink-100 relative group cursor-pointer hover:bg-pink-100 transition-colors">
                                    <span 
                                        class="text-3xl md:text-5xl font-bold text-black font-amiri"
                                        v-html="getHighlightedWord(t(typeof word === 'string' ? word : word.text), exercise.letter, showAnswers[exercise.id])"
                                    ></span>
                                    <!-- Decorative corner accent -->
                                    <div class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-pink-200 rounded-tr-xl"></div>
                                    <div class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-200 rounded-bl-xl"></div>
                                </div>
                            </div>
                       </div>
                   </template>

                    <!-- Exercise: Think -->
                   <template v-else-if="exercise.type === 'think'">
                       <div class="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 mt-8">
                             <!-- Question & Badge -->
                             <div class="flex-1 flex flex-col gap-4">
                                 <div class="flex items-center gap-3">
                                      <div class="bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md transform -rotate-2 text-2xl">
                                          {{ t('Think') }}
                                      </div>
                                      <PlayAudioButton v-if="lesson.thinkAudio" :audioUrl="lesson.thinkAudio" />
                                 </div>
                                 <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed font-arabic">
                                     {{ exercise.title }}
                                 </p>
                             </div>

                             <!-- Image & Answer -->
                             <div class="flex-1 flex flex-col items-center">
                                 <div class="relative w-64 h-48 rounded-2xl overflow-hidden border-4 border-green-500 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
                                     <img :src="exercise.image" class="w-full h-full object-contain">
                                 </div>
                                 <div class="mt-4 w-48 h-24 relative flex justify-center items-end">
                                      <span class="relative z-10 text-6xl font-bold text-red-600 font-amiri leading-none mb-2 md:mb-4">{{ exercise.answer }}</span>
                                 </div>
                             </div>
                       </div>
                   </template>

               </div>

          </div>
      </div>

      <!-- Read and Write Review Lesson Type -->
      <div v-else-if="lesson.type === 'readWriteReview'" class="flex flex-col w-full max-w-5xl mx-auto mt-8 gap-8 px-4">
           
           <div class="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col gap-12">
               
               <div v-for="item in lesson.items" :key="'review-' + item.id" class="flex flex-col gap-6">
                   <!-- Read Row -->
                   <div class="flex items-center gap-4">
                       <!-- Label -->
                       <div class="shrink-0 w-24">
                           <span class="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold block text-center border border-red-200 shadow-sm">{{ t('Read') }}</span>
                       </div>
                       
                       <!-- Words -->
                       <div class="flex-1 flex justify-around items-center bg-orange-50/50 rounded-2xl p-4 border border-orange-100">
                           <template v-if="item.words">
                               <template v-for="(word, wIdx) in item.words" :key="wIdx">
                                   <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ word }}</span>
                                   <div v-if="wIdx < item.words.length - 1" class="w-px h-12 bg-orange-200"></div>
                               </template>
                           </template>
                           <template v-else>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.text }}</span>
                               <div class="w-px h-12 bg-orange-200"></div>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.text2 }}</span>
                               <div class="w-px h-12 bg-orange-200"></div>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.highlight }}</span>
                           </template>
                       </div>
                   </div>

                   <!-- Write Row -->
                   <div class="flex items-center gap-4">
                       <!-- Label -->
                        <div class="shrink-0 w-24">
                           <span class="bg-green-100 text-green-600 px-4 py-2 rounded-xl font-bold block text-center border border-green-200 shadow-sm">{{ t('Write') }}</span>
                       </div>

                       <!-- Writing Space -->
                       <div class="flex-1 h-20 border-b-2 border-dashed border-gray-300 relative">
                            <!-- Writing Guidelines -->
                            <div class="absolute inset-x-0 top-1/2 border-t border-dotted border-gray-200"></div>
                       </div>
                   </div>

                   <!-- Separator -->
                   <div v-if="lesson.items && item.id !== lesson.items.length" class="border-b border-gray-100 my-2"></div>
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
      <h2 class="text-2xl text-red-500">{{ t('Lesson Not Found') }}</h2>
      <NuxtLink :to="`/part/${partId}`" class="text-blue-500 hover:underline mt-4 block">{{ t('Back to Part') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getParts } from '~/utils/lessons';

// Custom Audio Player Component (Inline)
const PlayAudioButton = defineComponent({
  props: {
    audioUrl: String,
    title: String 
  },
  setup(props) {
    const isPlaying = ref(false);
    let audio: HTMLAudioElement | null = null;

    const toggleAudio = () => {
      if (!props.audioUrl) return;
      
      if (audio) {
        if (isPlaying.value) {
            audio.pause();
            isPlaying.value = false;
        } else {
            audio.play();
            isPlaying.value = true;
        }
      } else {
         audio = new Audio(props.audioUrl);
         audio.onended = () => { isPlaying.value = false; };
         audio.play();
         isPlaying.value = true;
      }
    };

    onUnmounted(() => {
        if (audio) audio.pause();
    });

    return () => h('button', {
        class: 'p-2 rounded-full shadow-md transition-colors ' + (isPlaying.value ? 'bg-yellow-100 text-yellow-600' : 'bg-white text-gray-500 hover:bg-gray-50'),
        onClick: toggleAudio,
        title: props.title || 'Play Audio'
    }, [
        h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'h-6 w-6', viewBox: '0 0 20 20', fill: 'currentColor' }, [
            isPlaying.value 
                ? h('path', { 'fill-rule': 'evenodd', d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z', 'clip-rule': 'evenodd' })
                : h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z', 'clip-rule': 'evenodd' })
        ])
    ]);
  }
});

const { t, locale } = useI18n();
const route = useRoute();
const partId = computed(() => parseInt(route.params.partId as string));
const lessonId = computed(() => parseInt(route.params.lessonId as string));

// Make lessons reactive to language changes
const parts = computed(() => {
  const l = locale.value;
  return getParts(t);
});
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
  return index < partLessons.value.length - 1 ? partLessons.value[index + 1]?.id : null;
});

// Dropdown State
const showDropdown = ref(false);

// Exercise Answer State
const showAnswers = ref<Record<number, boolean>>({});

const toggleAnswer = (exerciseId: number) => {
    showAnswers.value[exerciseId] = !showAnswers.value[exerciseId];
};

    const getHighlightedWord = (word: string, letter: string | undefined, show: boolean) => {
    if (!show || !letter) return word;
    
    // Normalize Alif for matching: If searching for 'أ', match any 'ا', 'أ', 'إ', 'آ'
    let regexSource = letter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (['أ', 'إ', 'آ', 'ا'].includes(letter)) {
       regexSource = '[أإآا]'; 
    }

    const regex = new RegExp(`(${regexSource}[\\u064B-\\u065F]*)`, 'g');
    
    // Use relative positioning for the text and absolute for the circle to preserve ligatures
    return word.replace(regex, '<span style="position: relative; display: inline;">$1<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 140%; height: 140%; border: 3px solid #ef4444; border-radius: 50%; pointer-events: none;"></span></span>');
};




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

// Pie Chart Helpers
const getPiePath = (index: number, total: number) => {
  const startAngle = (index * 360) / total;
  const endAngle = ((index + 1) * 360) / total;
  
  // Convert to radians
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  
  const x1 = 50 + 50 * Math.cos(startRad);
  const y1 = 50 + 50 * Math.sin(startRad);
  const x2 = 50 + 50 * Math.cos(endRad);
  const y2 = 50 + 50 * Math.sin(endRad);
  
  return `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
};

const getTextPos = (index: number, total: number) => {
  const angle = (index * 360) / total + (360 / total) / 2;
  const rad = (angle * Math.PI) / 180;
  const radius = 35; // Distance from center
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad)
  };
};

const getTextRotation = (index: number, total: number) => {
    const angle = (index * 360) / total + (360 / total) / 2;
    return angle + 90; // Rotate text to align with slice radius, +90 because base rotation is -90
};

useHead({
  title: computed(() => lesson.value?.title || 'الدرس'),
});

// Loading State
const isLoading = ref(true);
const imagesLoadedCount = ref(0);
const totalImagesToLoad = ref(0);

const handleImageLoad = () => {
  imagesLoadedCount.value++;
  if (imagesLoadedCount.value >= totalImagesToLoad.value) {
    isLoading.value = false;
  }
};

watch(lesson, (newLesson, oldLesson) => {
  // If the lesson ID is the same, it's likely a language switch or similar update
  // that doesn't require reloading images.
  if (newLesson && oldLesson && newLesson.id === oldLesson.id) {
    return;
  }

  isLoading.value = true;
  imagesLoadedCount.value = 0;
  totalImagesToLoad.value = 0;

  if (!newLesson) {
      isLoading.value = false;
      return;
  }

  if (newLesson.type === 'gallery' && newLesson.items) {
     totalImagesToLoad.value = newLesson.items.filter(i => i.image).length;
  } else if (newLesson.type === 'diagram') {
     if (newLesson.diagramImages) {
        totalImagesToLoad.value = newLesson.diagramImages.length;
     } else if (newLesson.mainImage) {
        totalImagesToLoad.value = 1;
     }
  }

  // If no images to load (or other types), stop loading immediately
  if (totalImagesToLoad.value === 0) {
    isLoading.value = false;
  }
}, { immediate: true });
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

/* 3D Cube Styles */
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.cube-3d {
  transform: rotateX(-15deg) rotateY(20deg);
  transition: transform 0.3s ease;
}

.cube-3d:hover {
  transform: rotateX(-10deg) rotateY(25deg) scale(1.05);
}

.cube-face {
  backface-visibility: hidden;
}

.cube-front {
  transform: translateZ(0px);
}

.cube-top {
  transform: rotateX(90deg) translateZ(80px);
  transform-origin: top;
}

.cube-right {
  transform: rotateY(90deg) translateZ(80px);
  transform-origin: right;
}

.circle-highlight {
    border: 2px solid #ef4444; 
    border-radius: 50%; 
    padding: 0px 4px; 
    color: #ef4444;
}
</style>
