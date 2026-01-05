<template>
  <div class="min-h-screen w-screen bg-white p-2 font-sans flex flex-col" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
        <div class="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-red-500 mb-4"></div>
        <p class="text-xl font-bold text-gray-600 animate-pulse">جاري التحميل...</p>
    </div>

    <div v-if="lesson" v-show="!isLoading" class="flex flex-col relative z-10 pb-10">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-center items-center mb-8 shrink-0 relative w-full min-h-[60px]">
        <!-- Top Right Label -->
        <div v-if="lesson.subtitle && partId !== 2" class="mb-4 md:mb-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 border border-red-200 bg-red-50 text-gray-800 px-3 py-1 rounded-lg shadow-sm z-20">
          <span class="font-bold text-xs md:text-sm">{{ lesson.subtitle }}</span>
        </div>
        
        <!-- Title & Navigation -->
        <div class="relative z-50 flex items-center gap-4 mx-auto">
           
           <!-- Previous Button (Right side in RTL) -->
           <NuxtLink 
             v-if="prevLessonId"
             :to="`/part/${partId}/lesson/${prevLessonId}`"
             class="p-2 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
             :title="t('Previous Lesson')"
           >
            

              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
             </svg>
           </NuxtLink>

           <div class="relative">
             <button 
               type="button"
               @click="showDropdown = !showDropdown"
               class="bg-gradient-to-b from-red-600 to-red-500 text-white px-8 py-1 rounded-full shadow-lg border-2 border-yellow-200 flex items-center gap-2 hover:scale-105 transition-transform"
             >
               <h1 class="text-xl md:text-2xl font-bold px-2 py-1 max-w-[80vw] md:max-w-max text-center">{{ lesson.title }}</h1>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{ 'rotate-180': showDropdown }" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
               </svg>
             </button>

            <!-- Dropdown Menu -->
            <div v-if="showDropdown" class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-80 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
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

           <!-- Audio Button (New) -->
           <PlayAudioButton 
             v-if="lesson.audioUrl" 
             :audioUrl="lesson.audioUrl" 
             class="mx-2 shrink-0" 
           />

           <!-- Next Button (Left side in RTL) -->
           <NuxtLink 
             v-if="nextLessonId"
             :to="`/part/${partId}/lesson/${nextLessonId}`"
             class="p-2 bg-white border border-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
             :title="t('Next Lesson')"
           >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
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
      <div v-else-if="lesson.type === 'gallery' && lesson.items" class="flex flex-col items-center gap-6 max-w-4xl mx-auto z-10 relative mt-12 w-full">
        <PlayAudioButton v-if="lesson.audioUrl" :audioUrl="lesson.audioUrl" />
        <div class="grid gap-6 p-4 w-full"
           :class="lesson.id === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'">
            <div v-for="(item, index) in lesson.items" :key="index" class="flex flex-col items-center group cursor-pointer">
            <div class="w-full h-64 bg-tranparent rounded-lg overflow-hidden mb-2 shadow-md transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                <img v-if="item.image" :src="item.image" :alt="item.text" class="w-full h-full object-contain" @load="handleImageLoad" @error="handleImageLoad" />
                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
                </div>
            </div>
            <p class="text-xl font-bold text-gray-700 transition-colors group-hover:text-red-600 font-amiri text-3xl" v-html="item.text"></p>
            </div>
        </div>


      </div>

      <!-- Unit Intro Type -->
      <div v-else-if="lesson.type === 'unitIntro'" class="flex items-center justify-center w-full min-h-[85vh] p-4 z-10 bg-white">
          <div class="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3] bg-white flex flex-col items-center justify-start pt-32 md:pt-40 shadow-2xl rounded-sm border border-gray-100 overflow-hidden">
              
              <!-- Left Sidebar Decoration (Blue Gradient) -->
              <div class="absolute left-4 top-4 bottom-4 w-12 md:w-16 rounded-full overflow-hidden flex flex-col gap-2">
                  <div class="h-full w-full bg-gradient-to-b from-[#4a90e2] via-[#5ca0f2] to-[#4a90e2] opacity-80 relative overflow-hidden">
                       <!-- Waves Pattern Overlay -->
                       <div class="absolute inset-0 opacity-30" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px);"></div>
                  </div>
              </div>

               <!-- Right Bottom Flourish Decoration -->
              <div class="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none opacity-20">
                   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-blue-400">
                        <path d="M42.7,-62.9C50.9,-52.8,49.3,-34.4,50.1,-19.1C50.9,-3.8,54.1,8.3,50,18.3C45.9,28.3,34.4,36.1,22.7,45.4C11,54.7,-1,65.5,-12.3,64.8C-23.6,64.1,-34.1,51.9,-43.4,40.1C-52.7,28.3,-60.8,16.9,-63.3,3.7C-65.8,-9.5,-62.7,-24.5,-53.9,-35.1C-45.1,-45.7,-30.5,-51.9,-16.9,-58C-3.2,-64.1,9.4,-70.1,22.3,-69.3C35.2,-68.5,48.3,-60.9,42.7,-62.9Z" transform="translate(100 100)" />
                   </svg>
              </div>


              <!-- Title: Unit One -->
              <h1 class="text-6xl md:text-8xl font-black text-[#2c3e50] font-amiri mb-12 relative z-10" style="color: #1a237e; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
                  {{ lesson.title }}
              </h1>

              <!-- Subtitle: Words with Three Letters -->
              <h2 class="text-4xl md:text-6xl font-black font-amiri text-center leading-relaxed px-8 relative z-10 drop-shadow-sm" 
                  style="color: #d32f2f; -webkit-text-stroke: 1px rgba(211, 47, 47, 0.1);">
                  {{ lesson.subtitle }}
              </h2>



          </div>
      </div>



      <!-- I Read and Write Type logic -->
      <div v-else-if="lesson.type === 'readWriteRows'" class="w-full max-w-6xl mx-auto p-4 z-10">
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
              <!-- Header Removed as requested -->


              <!-- Grid -->
              <div class="grid gap-x-8 gap-y-12 dir-rtl"
                   :class="[
                      lesson.gridCols === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : (lesson.gridCols === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4')
                   ]">
                  <div v-for="item in lesson.items" :key="item.id" class="flex flex-col items-center group">
                      <!-- Reading Bubble -->
                      <div class="w-full bg-gradient-to-b from-[#008CBA] to-[#007095] text-white rounded-full py-4 px-2 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 mb-6 flex items-center justify-center border-2 border-[#005f7f]">
                          <span class="text-3xl md:text-5xl font-bold font-amiri leading-normal pt-2">{{ item.text }}</span>
                      </div>

                      <!-- Writing Line Removed as requested -->
                      <!-- <div class="relative w-full h-24 flex items-end justify-center">
                          <div class="absolute bottom-4 left-0 right-0 h-0.5 bg-gray-400 w-full"></div>
                          
                          <span class="text-5xl md:text-6xl font-black font-amiri text-gray-300 tracking-wide relative z-10 bottom-0 select-none pointer-events-none" 
                                style="-webkit-text-stroke: 1px #9ca3af;">
                              {{ item.text }}
                          </span>
                      </div> -->
                  </div>
              </div>
          </div>
      </div>



      <!-- Boxed Write Rows (New Blue Style) -->
      <div v-else-if="lesson.type === 'boxedWriteRows'" class="w-full max-w-4xl mx-auto p-4 z-10">
          <div class="flex flex-col gap-12 w-full">
               <div v-for="item in lesson.items" :key="item.id" class="flex flex-col items-center w-full">
                   
                   <!-- The Blue Box -->
                   <div class="relative w-full md:w-3/4 max-w-2xl">
                       <!-- Stylish Border Container -->
                       <div class="bg-white border-[3px] border-[#64B5F6] rounded-[2rem] shadow-[0_4px_10px_rgba(33,150,243,0.15)] px-8 py-6 relative z-10 flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">
                           <!-- Inner subtle border (optional for depth) -->
                           <div class="absolute inset-1 border border-blue-50 rounded-[1.8rem] pointer-events-none"></div>
                           
                           <h2 class="text-3xl md:text-5xl font-bold font-amiri text-gray-800 leading-normal text-center" style="line-height: 1.6;">
                               {{ item.text }}
                           </h2>
                       </div>
                       
                       <!-- Decorative side accents (pseudo-elements mimic) -->
                       <div class="absolute top-1/2 -left-2 w-4 h-8 bg-[#64B5F6] rounded-l-full -translate-y-1/2 opacity-60"></div>
                       <div class="absolute top-1/2 -right-2 w-4 h-8 bg-[#64B5F6] rounded-r-full -translate-y-1/2 opacity-60"></div>
                   </div>

                   <!-- Writing Line below -->
                   <div class="w-full md:w-3/4 max-w-2xl mt-8 pt-8 relative">
                       <div class="h-0.5 bg-gray-400 w-full rounded-full opacity-70"></div>
                   </div>

               </div>
          </div>
      </div>

      <!-- Assemble then Write Type logic -->
      <div v-else-if="lesson.type === 'assembleWrite'" class="w-full max-w-5xl mx-auto p-4 z-10">
           <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-12 border border-white flex flex-col gap-12">
               
               <!-- Description -->
               <div v-if="lesson.description" class="text-center mb-4">
                   <p class="text-xl md:text-2xl text-gray-600 font-amiri leading-relaxed">{{ lesson.description }}</p>
               </div>

               <!-- Item Loop -->
               <div v-for="item in lesson.items" :key="item.id" class="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b border-gray-100 last:border-0" dir="rtl">
                   
                   <!-- Right Side: Letters Circles (First in DOM because RTL) -->
                   <div class="flex gap-4 md:gap-6">
                        <div v-for="(letter, idx) in item.letters" :key="idx" 
                             class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                             <span class="text-3xl md:text-4xl font-bold text-blue-800 font-amiri mb-2">{{ letter }}</span>
                        </div>
                   </div>

                   <!-- Center: Arrow Icon -->
                   <!-- Removed rotation so it points left by default (M10.5 19.5 L3 12...) -->
                   <div class="text-red-500 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                   </div>

                   <!-- Left Side: Writing Box -->
                   <div class="relative w-full md:w-80 h-24 md:h-28 rounded-xl border-4 border-gray-200 bg-gray-50 flex items-end justify-center pb-2 shadow-inner">
                        <!-- Dashed Baseline -->
                        <div class="absolute bottom-6 left-4 right-4 h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400 w-auto"></div>
                        
                        <!-- Tracing Text (Only for first item) -->
                        <span v-if="item.id === 1" 
                              class="text-6xl md:text-7xl font-black font-amiri text-gray-300/60 tracking-wider select-none"
                              style="-webkit-text-stroke: 1px #9ca3af;">
                              {{ item.word }}
                        </span>
                   </div>

               </div>

           </div>
      </div>

      <!-- Arrange then Write Type logic -->
      <div v-else-if="lesson.type === 'arrangeWrite'" class="w-full max-w-5xl mx-auto p-4 z-10">
           <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-12 border border-white flex flex-col gap-12">
               
               <!-- Description -->
               <div v-if="lesson.description" class="text-center mb-4">
                   <p class="text-xl md:text-2xl text-gray-600 font-amiri leading-relaxed">{{ lesson.description }}</p>
               </div>

               <!-- Item Loop -->
               <div v-for="item in lesson.items" :key="item.id" class="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b border-gray-100 last:border-0" dir="rtl">
                   
                   <!-- Right Side: Letters Squares (First in DOM because RTL) -->
                   <div class="flex gap-4 md:gap-6">
                        <div v-for="(letter, idx) in item.letters" :key="idx" 
                             class="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-[0_4px_0_0_rgba(209,213,219,1)] flex items-center justify-center transform hover:translate-y-1 hover:shadow-none transition-all duration-200">
                             <span class="text-3xl md:text-4xl font-bold text-gray-700 font-amiri mb-1">{{ letter }}</span>
                        </div>
                   </div>

                   <!-- Center: Arrow Icon (Green) -->
                   <div class="text-green-500 opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                   </div>

                   <!-- Left Side: Writing Box -->
                   <div class="relative w-full md:w-80 h-24 md:h-28 rounded-xl border-4 border-gray-200 bg-gray-50 flex items-end justify-center pb-2 shadow-inner">
                        <!-- Dashed Baseline -->
                        <div class="absolute bottom-6 left-4 right-4 h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400 w-auto"></div>
                        
                        <!-- Tracing Text (Only for first item) -->
                        <span v-if="item.id === 1" 
                              class="text-6xl md:text-7xl font-black font-amiri text-gray-300/60 tracking-wider select-none"
                              style="-webkit-text-stroke: 1px #9ca3af;">
                              {{ item.word }}
                        </span>
                   </div>

               </div>

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
                  <img v-for="(img, idx) in lesson.diagramImages" :key="idx" :src="img" :alt="lesson.title" class="w-full h-auto object-contain -mt-1 first:mt-0" @load="handleImageLoad" @error="handleImageLoad" />
              </template>
              <img v-else-if="lesson.mainImage" :src="lesson.mainImage" :alt="lesson.title" class="w-full h-auto object-contain" @load="handleImageLoad" @error="handleImageLoad" />
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

       <!-- Read Grid Type Lesson (3 Columns) -->
      <div v-else-if="lesson.type === 'readGrid'" class="w-full max-w-5xl mx-auto p-4 z-10 relative mt-16">
          <div class="grid grid-cols-3 gap-4 md:gap-8" dir="rtl">
              <div v-for="item in lesson.items" :key="item.id" 
                   class="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-sm flex items-center justify-center py-4 md:py-6 relative overflow-hidden group hover:shadow-md hover:scale-105 transition-all duration-300">
                  
                  <!-- Decorative Left Bar -->
                   <div class="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-[#90caf9] group-hover:bg-[#42a5f5] transition-colors"></div>

                  <span class="text-3xl md:text-5xl font-black text-gray-800 font-amiri z-10 leading-normal">{{ item.text }}</span>
              </div>
          </div>
      </div>

      <!-- Oval Grid Type Lesson (Pink Ovals) -->
      <div v-else-if="lesson.type === 'ovalGrid'" class="w-full max-w-6xl mx-auto p-4 z-10 relative mt-16">
          
          <!-- Lesson Description (Centered Subtitle) -->
          <div v-if="lesson.description" class="flex justify-center mb-12">
              <div class="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 px-6 py-3 rounded-full shadow-sm text-center">
                  <h3 class="text-lg md:text-xl font-bold text-purple-900 font-amiri leading-relaxed">{{ lesson.description }}</h3>
              </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" dir="rtl">
              <div v-for="item in lesson.items" :key="item.id" 
                   :class="[
                     'border-2 rounded-full shadow-sm flex items-center justify-center py-6 md:py-8 group hover:shadow-md hover:scale-105 transition-all duration-300',
                     lesson.colorTheme === 'green' ? 'bg-[#dcedc8] border-[#c5e1a5]' : 
                     lesson.colorTheme === 'orange' ? 'bg-[#ffe0b2] border-[#ffcc80]' :
                     'bg-pink-100 border-pink-200'
                   ]">
                  <span class="text-3xl md:text-5xl font-black text-gray-800 font-amiri leading-normal" v-html="item.text"></span>
              </div>
          </div>
      </div>

      <!-- Tanween Table Type Lesson (3 Columns with headers) -->
      <div v-else-if="lesson.type === 'tanweenTable'" class="w-full max-w-6xl mx-auto p-8 z-10 relative mt-8">
          <div class="flex flex-col md:flex-row gap-8 justify-center min-h-[600px]" dir="rtl">
              <div v-for="(col, index) in lesson.columns" :key="col.id" 
                   class="flex-1 flex flex-col relative"
                   :class="{'border-l-2 border-dashed border-gray-300 pl-8': index !== lesson.columns.length - 1}">
                   
                   <!-- Header -->
                   <div class="flex items-center justify-center gap-4 mb-8">
                       <h3 class="text-4xl md:text-5xl font-black font-amiri mb-2" 
                           :class="[
                               col.color === 'red' ? 'text-red-600' : 
                               col.color === 'green' ? 'text-green-600' : 
                               'text-blue-600'
                           ]">
                           {{ col.header }}
                       </h3>
                       <PlayAudioButton v-if="col.audioUrl" :audioUrl="col.audioUrl" />
                   </div>

                   <!-- Items List -->
                   <div class="flex flex-col gap-6 items-center w-full">
                       <div v-for="item in col.items" :key="item.id" class="text-center w-full">
                           <span class="text-4xl md:text-6xl font-bold font-amiri" v-html="item.text"></span>
                       </div>
                   </div>

              </div>
          </div>
      </div>

      <!-- Dictation Type Lesson (Two Columns of Input Fields) -->
      <div v-else-if="lesson.type === 'dictation'" class="w-full max-w-4xl mx-auto p-4 z-10">
          <div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-white">
              
              <!-- Description/Instructions -->
              <div v-if="lesson.subtitle" class="text-center mb-8">
                  <h3 class="text-xl md:text-2xl font-bold text-red-600 font-amiri leading-relaxed" dir="rtl">
                      <span class="inline-block ml-2 text-2xl">🛑</span>
                      {{ lesson.subtitle }}
                  </h3>
              </div>

              <!-- Input Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6" dir="rtl">
                  <div v-for="item in lesson.items" :key="item.id" class="flex items-center justify-center">
                      <div class="w-full relative group">
                          <input type="text" 
                                 class="w-full text-center text-3xl font-amiri py-4 px-4 border-b-2 border-cyan-400 focus:border-cyan-600 focus:outline-none bg-transparent transition-colors placeholder-gray-300"
                          />
                          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-100 -z-10"></div>
                      </div>
                  </div>
              </div>
         </div>
      </div>

      <!-- Sentence Arrange Type Lesson -->
      <div v-else-if="lesson.type === 'sentenceArrange'" class="w-full max-w-5xl mx-auto p-4 z-10">
          <!-- Main Card -->
          <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 flex flex-col gap-12 relative overflow-hidden">
               
               <!-- Decoration: Top Right Curve -->
               <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-bl-full -z-10 opacity-60"></div>

               <!-- Title -->
               <div class="flex flex-col items-center gap-4 mb-4 mt-2">
                   <h3 class="text-xl md:text-2xl text-gray-700 font-amiri font-bold text-center leading-relaxed">
                       أُرَتِّبُ الْكَلِمَاتِ التَّالِيَةَ وَأُكَوِّنُ جُمْلَةً مُفِيدَةً :
                   </h3>
               </div>

               <!-- Items Loop -->
               <div class="flex flex-col gap-16" dir="rtl">
                   <div v-for="(item, index) in lesson.items" :key="item.id" class="flex flex-col gap-6 relative">
                       
                       <!-- Number Badge (Absolute Right) -->
                       <div class="absolute -right-4 -top-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-md z-20">
                           <span class="text-2xl font-bold text-white font-sans">{{ index + 1 }}</span>
                       </div>

                       <!-- Blue Frame Container for Words -->
                       <div class="relative w-full bg-white border-4 border-cyan-400 rounded-2xl p-6 md:p-8 shadow-inner flex flex-wrap items-center justify-center gap-4 min-h-[100px]">
                           <!-- Decorative side accents on frame -->
                           <div class="absolute inset-y-4 right-0 w-2 bg-cyan-200 rounded-l-full"></div>
                           <div class="absolute inset-y-4 left-0 w-2 bg-cyan-200 rounded-r-full"></div>

                           <!-- Words List -->
                           <div class="flex flex-wrap justify-center gap-2 items-center">
                               <template v-for="(word, wIndex) in item.words" :key="wIndex">
                                   <span class="text-3xl md:text-5xl font-bold text-black font-amiri">{{ word }}</span>
                                   <!-- Comma separator (except last) -->
                                   <span v-if="wIndex < (item.words?.length || 0) - 1" class="text-3xl md:text-5xl font-bold text-cyan-600 font-amiri ml-2">،</span>
                               </template>
                           </div>
                       </div>

                       <!-- Writing Line -->
                       <div class="relative w-full h-16 md:h-20 mt-4">
                           <!-- Line -->
                           <div class="absolute bottom-4 left-0 right-0 border-b-2 border-gray-400 w-full"></div>
                       </div>

                   </div>
               </div>

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
      <div v-else-if="lesson.type === 'cubes'" class="mt-16 flex flex-col items-center justify-center gap-8 p-4 max-w-6xl mx-auto z-10 relative w-full">
         <div class="flex items-center gap-6">
             <!-- Badge with number -->
             <div class="relative w-32 h-32 flex items-center justify-center">
                <!-- Blue circle background -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl"></div>
                <!-- White inner circle -->
                <div class="absolute inset-4 bg-white rounded-full shadow-inner"></div>
                <!-- Number -->
                <span class="relative z-10 text-6xl font-black text-blue-700 font-sans">{{ lesson.groupNumber }}</span>
             </div>
             <PlayAudioButton v-if="lesson.audioUrl" :audioUrl="lesson.audioUrl" />
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
             <div class="bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded-lg px-6 py-1 shadow-sm flex items-center gap-4">
                 <span class="text-xl font-bold text-gray-800 font-arabic">{{ t('I watch') }}</span>
                 <PlayAudioButton v-if="lesson.audioUrl" :audioUrl="lesson.audioUrl" />
             </div>
         </div>
         <div class="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
             <div v-for="item in lesson.items" :key="item.id" class="flex flex-col w-full max-w-md bg-white border-[3px] border-[#ffcc80] shadow-xl">
                <div class="bg-[#ffcc80] p-2 text-center border-b-[3px] border-[#ffcc80]">
                   <h2 class="text-4xl font-black text-[#1565c0] font-arabic tracking-wide">{{ item.text }}</h2>
                </div>
                <div class="bg-[#fff9c4] h-24 flex justify-center items-center border-b-[3px] border-[#ffcc80] relative">
                   <!-- Fatha for lesson 1 & 18 & 21 -->
                   <div v-if="lesson.id === 1 || lesson.id === 18 || lesson.id === 21" class="w-20 h-3 bg-[#d50000] rounded-full transform -rotate-[25deg]"></div>
                   <!-- Kasra for lesson 2 & 19 & 22 -->
                   <div v-else-if="lesson.id === 2 || lesson.id === 19 || lesson.id === 22" class="w-20 h-3 bg-[#d50000] rounded-full transform -rotate-[25deg]"></div>
                   <!-- Damma for lesson 3 & 20 & 23 (small waw) -->
                   <div v-else-if="lesson.id === 3 || lesson.id === 20 || lesson.id === 23" class="text-[200px] font-black text-[#d50000] leading-none font-arabic absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">ُ</div>
                </div>
                <div class="relative w-full h-72">
                   <img :src="item.image" :alt="item.text" class="w-full h-full object-cover" @load="handleImageLoad" @error="handleImageLoad" />
                </div>
                <div class="bg-[#c8e6c9] p-3 text-center border-t-[3px] border-[#ffcc80]">
                   <h3 class="text-4xl font-black text-black font-arabic tracking-wide">{{ item.text2 }}</h3>
                </div>
             </div>
             <div class="flex flex-col items-center justify-center pt-10 mt-10">
                 <div class="relative">
                     <template v-if="lesson.id === 1">
                        <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
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

                     <!-- Baa Logic -->
                     <template v-else-if="lesson.id === 18">
                        <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ب</span>
                     </template>
                     <template v-else-if="lesson.id === 19">
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ب</span>
                        <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                     </template>
                     <template v-else-if="lesson.id === 20">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                           <span class="text-[120px] font-black text-[#d50000] leading-none font-arabic">ُ</span>
                        </div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ب</span>
                     </template>

                     <!-- Taa Logic -->
                     <template v-else-if="lesson.id === 21">
                        <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ت</span>
                     </template>
                     <template v-else-if="lesson.id === 22">
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ت</span>
                        <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#d50000] rounded-full -rotate-[25deg] shadow-sm z-10"></div>
                     </template>
                     <template v-else-if="lesson.id === 23">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                           <span class="text-[120px] font-black text-[#d50000] leading-none font-arabic">ُ</span>
                        </div>
                        <span class="text-[250px] font-black text-[#212121] leading-none font-arabic mt-4 block">ت</span>
                     </template>
                 </div>
             </div>
         </div>
      </div>

      <!-- Letter Examples Lesson Type -->
      <div v-else-if="lesson.type === 'letterExamples'" dir="rtl" class="flex flex-col w-full max-w-6xl mx-auto mt-16 gap-12 px-4">
          
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
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8" dir="rtl">
                  <div v-for="item in lesson.items" :key="'img-' + item.id" class="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300 bg-gray-100 relative group">
                      <!-- Blurred Background Layer -->
                      <div class="absolute inset-0 w-full h-full">
                          <img :src="item.image" class="w-full h-full object-cover blur-md opacity-60 scale-110" />
                      </div>
                      <!-- Main Image Layer -->
                      <img :src="item.image" :alt="item.text" class="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" @load="handleImageLoad" @error="handleImageLoad">
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
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8" dir="rtl">
                   <div v-for="item in lesson.items" :key="'word-' + item.id" class="relative group">
                       <!-- Spotlight Effect -->
                       <div class="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-full h-48 bg-gradient-to-b from-yellow-100/80 via-yellow-50/30 to-transparent clip-path-spotlight z-0 pointer-events-none"></div>

                       <div class="bg-white border-2 border-[#42a5f5] rounded-xl h-40 flex flex-col items-center justify-center shadow-lg relative overflow-hidden z-10 p-2">
                           <!-- Image Mode -->
                           <template v-if="item.listenImage">
                               <div class="relative w-full flex-grow flex items-center justify-center overflow-hidden">
                                   <img :src="item.listenImage" class="max-w-full max-h-full object-contain" @load="handleImageLoad" @error="handleImageLoad" />
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
              <div class="grid grid-cols-3 gap-4 md:gap-8 relative mt-16" dir="rtl">
                   <div v-for="item in lesson.items" :key="'letter-' + item.id" class="flex flex-col items-center relative h-32 justify-end">
                       <!-- Image Mode -->
                        <div v-if="item.readImage" class="w-full h-full flex items-end justify-center">
                             <img :src="item.readImage" class="max-w-full max-h-full object-contain" @load="handleImageLoad" @error="handleImageLoad" />
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
                       <div class="flex justify-center flex-row-reverse gap-4 w-full pt-4">
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


           <!-- New Section: I Remember -->
           <!-- New Section: I Remember -->
           <div v-if="lesson.remember" class="flex flex-col gap-8 bg-amber-50 p-6 rounded-3xl border border-amber-100 mt-16 max-w-6xl mx-auto w-full">
                <!-- Header -->
                <div class="flex justify-start px-4">
                    <div class="bg-white border border-amber-200 rounded-2xl px-8 py-3 shadow-sm flex items-center gap-4">
                        <h3 class="text-4xl font-black text-amber-600 font-arabic">{{ t('I remember') }}</h3>
                        <PlayAudioButton v-if="lesson.rememberAudio" :audioUrl="lesson.rememberAudio" />
                    </div>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-8 mt-4">
                    <div v-for="(chunk, cIdx) in chunkedRemember" :key="cIdx" class="flex flex-nowrap items-baseline justify-center gap-1 md:gap-2 p-2 bg-white/50 rounded-xl border border-amber-100/50 shadow-sm">
                        <div v-for="(char, idx) in chunk" :key="idx" class="text-4xl md:text-6xl font-bold text-gray-800 font-amiri leading-normal flex items-center">
                            <span class="text-red-600">{{ char }}</span>
                            <span v-if="idx < chunk.length - 1" class="text-gray-400 mx-1 md:mx-2">-</span>
                        </div>
                    </div>
                </div>
           </div>

           <!-- New Section: I Assemble -->
           <div v-if="lesson.assemble" class="flex flex-col items-center justify-center p-4 md:p-8 mt-16 max-w-6xl mx-auto w-full">
                <div class="mb-12 px-12 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl border border-gray-300 shadow-sm self-start flex items-center gap-4">
                     <h3 class="text-3xl md:text-4xl font-black text-gray-800 font-arabic">{{ t('I assemble') }}</h3>
                     <PlayAudioButton v-if="lesson.assembleAudio" :audioUrl="lesson.assembleAudio" />
                </div>
                
                <div class="flex flex-col gap-6 w-full max-w-5xl">
                    <div v-for="item in lesson.assemble" :key="item.id" class="flex flex-row items-center justify-between gap-4 md:gap-8 w-full">
                         <!-- Letters Part (Right side in RTL) -->
                         <div class="flex flex-row flex-nowrap items-center justify-center gap-1 md:gap-4">
                             <div v-for="(letter, lIdx) in item.letters" :key="lIdx" class="w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 bg-green-100 border-b-2 md:border-b-4 border-green-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                 <span class="text-2xl sm:text-3xl md:text-5xl font-bold text-black font-amiri">{{ letter }}</span>
                             </div>
                         </div>

                         <!-- Connector/Arrow -->
                         <div class="flex-grow h-1 bg-gradient-to-l from-yellow-200 to-transparent mx-4 relative hidden md:block">
                              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[20px] border-r-yellow-200 border-b-[10px] border-b-transparent"></div>
                         </div>

                         <!-- Result Word (Left side in RTL) -->
                         <div class="w-32 h-16 md:w-48 md:h-24 bg-red-100 border-r-4 border-red-600 rounded-xl flex items-center justify-center shadow-md">
                              <span class="text-3xl md:text-5xl font-bold text-black font-amiri">{{ item.word }}</span>
                         </div>
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
                      <img :src="lesson.writingImage" class="w-full h-auto object-contain rounded-xl" @load="handleImageLoad" @error="handleImageLoad" />
                  </div>

                  <!-- Multiple Images Mode -->
                  <div v-else-if="lesson.writingImages" class="w-full flex flex-col gap-8">
                      <img v-for="(img, idx) in lesson.writingImages" :key="idx" :src="img" class="w-full h-auto object-contain rounded-xl" @load="handleImageLoad" @error="handleImageLoad" />
                  </div>

                  <!-- Standard Practice Mode -->
                  <template v-else>
                      <div v-for="practice in lesson.writingPractice" :key="practice.id" class="flex flex-col gap-4">
                           <!-- Writing Row -->
                           <div class="flex items-end justify-around h-32 border-b border-gray-100 relative">
                               <!-- Image Mode (Per Item) -->
                               <template v-if="practice.image">
                                   <div class="w-full h-full flex items-center justify-center">
                                        <img :src="practice.image" class="max-h-full object-contain" @load="handleImageLoad" @error="handleImageLoad" />
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
                       <div class="text-3xl md:text-5xl flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 mt-8">
                             <!-- Question & Badge -->
                             <div class="flex-1 flex flex-col gap-4">
                                 <div class="text-2xl md:text-3xl flex items-center gap-3">
                                      <div class="text-2xl md:text-3xl bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md transform -rotate-2 text-2xl">
                                          {{ t('Think') }}
                                      </div>
                                      <PlayAudioButton v-if="lesson.thinkAudio" :audioUrl="lesson.thinkAudio" />
                                 </div>
                                 <p class="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed font-arabic">
                                     {{ exercise.title }}
                                 </p>
                             </div>

                             <!-- Image & Answer -->
                             <div class="flex-1 flex flex-col items-center">
                                 <div class="relative w-64 h-48 rounded-2xl overflow-hidden border-4 border-green-500 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
                                     <img :src="exercise.image" class="w-full h-full object-contain" @load="handleImageLoad" @error="handleImageLoad">
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

      <!-- Content With Exercises Lesson Type (Lesson 15 & 16 & 17) -->
      <div v-else-if="lesson.type === 'contentWithExercises'" class="flex flex-col w-full max-w-6xl mx-auto mt-8 gap-8 px-4">
           
           <!-- Story Mode (Interleaved Text & Images) -->
           <div v-if="lesson.story" class="flex flex-col gap-12 bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border-4 border-gray-100 relative overflow-hidden">
                <div class="absolute -right-10 top-0 w-32 h-64 bg-green-50 rounded-full opacity-40 -z-10 rotate-12"></div>
                 <div class="flex items-center gap-4 justify-between" v-if="lesson.readAudio">
                     <PlayAudioButton :audioUrl="lesson.readAudio" />
                </div>
                
                <div v-for="(item, idx) in lesson.story" :key="idx" class="flex flex-col md:flex-row gap-8 items-center justify-between border-b last:border-0 border-gray-100 pb-8 last:pb-0">
                    <div class="w-full md:w-3/5 text-center md:text-start order-2 md:order-1">
                         <p class="text-3xl md:text-5xl font-bold font-amiri text-gray-800 leading-relaxed md:leading-[1.8]">
                             {{ t(item.text) }}
                         </p>
                    </div>
                    <div class="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
                         <div class="w-full max-w-[400px] border-4 border-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                             <img :src="item.image" class="w-full h-auto object-contain" @load="handleImageLoad" @error="handleImageLoad" />
                         </div>
                    </div>
                </div>
           </div>

           <!-- Reading Section -->
           <div v-else-if="lesson.readingText" class="flex flex-col gap-6 bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border-4 border-gray-100 relative overflow-hidden">
                <div class="absolute -right-10 top-0 w-32 h-64 bg-green-50 rounded-full opacity-40 -z-10 rotate-12"></div>
                <div class="flex items-center gap-4 justify-between" v-if="lesson.readAudio">
                     <PlayAudioButton :audioUrl="lesson.readAudio" />
                </div>
                <div class="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div class="flex flex-col gap-4 text-center md:text-start w-full md:w-3/5 order-2 md:order-1">
                        <p v-for="(line, idx) in lesson.readingText" :key="idx" class="text-3xl md:text-5xl font-bold font-amiri text-gray-800 leading-relaxed md:leading-[1.8]">
                            {{ t(line) }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-6 items-center justify-center w-full md:w-2/5 order-1 md:order-2">
                        <div v-if="lesson.readImage" class="w-full max-w-[400px] border-4 border-white shadow-2xl rounded-3xl overflow-hidden transform md:-rotate-2">
                            <img :src="lesson.readImage" class="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
           </div>

           <!-- Grammar Rules Section -->
           <div v-if="false" style="display: none;" class="flex flex-col gap-8 bg-pink-50/30 p-8 md:p-12 rounded-[3.5rem] shadow-sm border-2 border-pink-100/50">
                <!-- Optional Grammar Section Title -->
                <div v-if="lesson.grammarTitle" class="flex justify-center mb-4">
                     <div class="bg-orange-500 text-white px-10 py-2 rounded-full shadow-lg border-2 border-orange-200">
                          <h2 class="text-2xl md:text-3xl font-bold font-amiri">{{ t(lesson.grammarTitle) }}</h2>
                     </div>
                </div>

                <!-- Special Header for Madd rules (Main Rule) -->
                <div v-if="lesson.id === 17" class="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg border-2 border-pink-200 mb-2 text-center">
                     <h2 class="text-2xl md:text-3xl font-bold font-amiri leading-relaxed">
                          {{ lesson.grammarRules[0] }}
                     </h2>
                </div>
                
                <div class="flex flex-col md:flex-row gap-8 items-start">
                     <div class="flex flex-col gap-6 w-full" :class="{'md:w-1/2': lesson.id === 16 || lesson.grammarImage}">
                          <div v-for="(rule, index) in (lesson.id === 17 ? lesson.grammarRules.slice(1) : lesson.grammarRules)" :key="index" class="flex gap-4 items-center group">
                               <div class="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                                    {{ index + 1 }}
                               </div>
                               <p class="text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-normal">
                                    {{ rule }}
                               </p>
                          </div>
                          <div v-if="lesson.grammarImage" class="mt-4 p-4 bg-white/60 rounded-2xl border-2 border-dashed border-blue-200 flex justify-center shadow-inner">
                               <img :src="lesson.grammarImage" class="max-w-full h-auto" />
                          </div>
                     </div>
                     <div v-if="lesson.id === 16" class="w-full md:w-1/2 flex flex-col gap-4 items-center">
                          <div class="grid grid-cols-5 gap-3">
                               <div v-for="char in ['أ', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'م', 'ه', 'و', 'ي']" :key="char" 
                                    class="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white shadow-sm hover:scale-110 transition-transform">
                                    <span class="text-2xl md:text-3xl font-bold text-gray-800 font-amiri">{{ char }}</span>
                               </div>
                          </div>
                     </div>
                </div>
           </div>

           <!-- Madd Diagram Section -->
           <div v-if="lesson.maddDiagram" class="flex flex-col gap-10 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border-4 border-gray-100 items-center">
                <div class="flex flex-wrap justify-center gap-16 md:gap-24">
                     <div v-for="(item, idx) in lesson.maddDiagram.items" :key="idx" class="flex flex-col items-center gap-6 group">
                          <div class="bg-blue-50 px-10 py-4 rounded-2xl shadow-md border-2 border-blue-200 group-hover:bg-blue-100 transition-colors">
                               <span class="text-4xl md:text-5xl font-bold font-amiri text-gray-800">{{ item.word }}</span>
                          </div>
                          <div class="flex gap-16 relative">
                               <div class="absolute inset-0 flex justify-center -top-8 pointer-events-none">
                                    <svg width="140" height="60" viewBox="0 0 140 60" class="overflow-visible">
                                         <line x1="45" y1="0" x2="30" y2="40" stroke="#9ca3af" stroke-width="2" />
                                         <line x1="95" y1="0" x2="110" y2="40" stroke="#9ca3af" stroke-width="2" />
                                    </svg>
                               </div>
                               <div class="flex flex-col items-center gap-2 mt-4 relative z-10">
                                    <div class="w-16 h-16 rounded-xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center shadow-sm">
                                         <span class="text-3xl font-bold text-blue-800 font-amiri">{{ item.mamdooh.text }}</span>
                                    </div>
                                    <div class="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap">{{ item.mamdooh.label }}</div>
                               </div>
                               <div class="flex flex-col items-center gap-2 mt-4 relative z-10">
                                    <div class="w-16 h-16 rounded-xl bg-red-100 border-2 border-red-400 flex items-center justify-center shadow-sm">
                                         <span class="text-3xl font-bold text-red-800 font-amiri">{{ item.madd.text }}</span>
                                    </div>
                                    <div class="bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap text-center">{{ item.madd.label }}</div>
                               </div>
                          </div>
                     </div>
                </div>
           </div>

           <!-- Grammar Rules Section (Moved Up) -->
           <div v-if="lesson.grammarRules && lesson.id !== 20" class="flex flex-col gap-8 bg-pink-50/30 p-8 md:p-12 rounded-[3.5rem] shadow-sm border-2 border-pink-100/50">
                <!-- Optional Grammar Section Title -->
                <div v-if="lesson.grammarTitle" class="flex justify-center mb-4">
                     <div class="bg-orange-500 text-white px-10 py-2 rounded-full shadow-lg border-2 border-orange-200">
                          <h2 class="text-2xl md:text-3xl font-bold font-amiri">{{ t(lesson.grammarTitle) }}</h2>
                     </div>
                </div>

                <!-- Special Header for Madd rules (Main Rule) -->
                <div v-if="lesson.id === 17" class="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg border-2 border-pink-200 mb-2 text-center">
                     <h2 class="text-2xl md:text-3xl font-bold font-amiri leading-relaxed">
                          {{ lesson.grammarRules[0] }}
                     </h2>
                </div>
                
                <div class="flex flex-col md:flex-row gap-8 items-start">
                     <div class="flex flex-col gap-6 w-full" :class="{'md:w-1/2': lesson.id === 16 || lesson.grammarImage}">
                          <div v-for="(rule, index) in (lesson.id === 17 ? lesson.grammarRules.slice(1) : lesson.grammarRules)" :key="index" class="flex gap-4 items-center group">
                               <div class="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                                    {{ index + 1 }}
                               </div>
                               <p class="text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-normal">
                                    {{ rule }}
                               </p>
                          </div>
                          <div v-if="lesson.grammarImage" class="mt-4 p-4 bg-white/60 rounded-2xl border-2 border-dashed border-blue-200 flex justify-center shadow-inner">
                               <img :src="lesson.grammarImage" class="max-w-full h-auto" />
                          </div>
                     </div>
                     <div v-if="lesson.id === 16" class="w-full md:w-1/2 flex flex-col gap-4 items-center">
                          <div class="grid grid-cols-5 gap-3">
                               <div v-for="char in ['أ', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'م', 'ه', 'و', 'ي']" :key="char" 
                                    class="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white shadow-sm hover:scale-110 transition-transform">
                                    <span class="text-2xl md:text-3xl font-bold text-gray-800 font-amiri">{{ char }}</span>
                               </div>
                          </div>
                     </div>
                </div>
           </div>

           <!-- Tables Section -->
           <div v-if="lesson.tableData && lesson.id !== 25" class="flex flex-col gap-6" :class="lesson.id === 20 ? 'bg-white' : 'bg-blue-50/50 p-6 md:p-10 rounded-[3rem] shadow-lg border-4 border-blue-100'">
                <!-- Lesson 20 Specific Title Style -->
                <div v-if="lesson.id === 20" class="flex flex-col gap-6 mb-8 text-right">
                     <h2 class="text-3xl md:text-4xl font-bold font-amiri text-red-600 mb-4">{{ t('Question Formation Title') }}</h2>
                     <ul class="list-disc list-inside text-xl md:text-2xl font-amiri text-gray-800 leading-loose">
                         <li v-for="(rule, idx) in lesson.grammarRules" :key="idx" class="mb-2">
                             {{ rule }}
                         </li>
                     </ul>
                </div>

                <div class="text-center mb-6" v-else>
                    
                     <p v-if="lesson.tableData.description" class="text-2xl font-bold text-gray-800 font-amiri mt-6 px-4 leading-relaxed max-w-4xl mx-auto">
                        {{ t(lesson.tableData.description) }}
                     </p>
                    <p class="mt-20 text-2xl md:text-3xl font-bold text-gray-700 font-amiri bg-white/80 py-4 px-8 rounded-full shadow-sm inline-block">
                         {{ lesson.tableData.title ? t(lesson.tableData.title) : t(lesson.tableData.headers[0] || '') }}
                     </p>
                </div>
                
                <div class="overflow-x-auto rounded-3xl border-2 border-blue-400 bg-white">
                     <table class="w-full border-collapse">
                         <thead v-if="lesson.id === 20 || lesson.id === 21 || lesson.id === 23">
                             <tr class="bg-white text-3xl font-bold font-amiri border-b-2 border-blue-400 text-red-600">
                                 <th v-for="(header, idx) in lesson.tableData.headers" :key="idx" class="p-4 border-l-2 last:border-0 border-blue-400">
                                     {{ t(header) }}
                                 </th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr v-for="(row, rIdx) in lesson.tableData.rows" :key="rIdx" 
                                 class="border-b-2 last:border-0 border-blue-400 h-16"
                                 :class="(lesson.id === 20 || lesson.id === 21 || lesson.id === 23) ? (rIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white') : 'bg-white'">
                                 <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                     class="p-4 text-center border-l-2 last:border-0 border-blue-400"
                                     :class="(lesson.id === 20 || lesson.id === 21 || lesson.id === 23) ? ((lesson.id === 20 && cIdx === 0) ? 'text-red-600' : 'text-gray-800') : 'text-blue-800'">
                                     <span class="text-2xl md:text-3xl font-bold font-amiri" v-html="t(cell)"></span>
                                 </td>
                             </tr>
                             <tr v-if="lesson.id === 16" class="bg-blue-50/30">
                                 <td colspan="2" class="p-8 text-center border-t-2 border-blue-200">
                                      <p class="text-2xl md:text-3xl font-bold font-amiri text-gray-700 leading-relaxed">
                                          {{ t('Notice that the letter Lam in these words is written and pronounced, and its movement is always Sukun.') }}
                                      </p>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
           </div>

           <!-- Table 3 (Pronunciation Guide / Classification) -->
           <div v-if="lesson.tableData3" class="flex flex-col gap-6 bg-orange-50/30 p-6 md:p-10 rounded-[3rem] shadow-lg border-4 border-orange-100">
                <div class="text-center mb-2" v-if="lesson.tableData3.title">
                     <p class="text-2xl md:text-3xl font-bold text-red-600 font-amiri bg-white/80 py-4 px-8 rounded-full shadow-sm inline-block">
                        {{ t(lesson.tableData3.title) }}
                     </p>
                </div>

                <div class="text-center mb-6" v-if="lesson.tableData3.description">
                     <p class="text-xl md:text-2xl font-bold text-gray-700 font-amiri leading-loose bg-white p-6 rounded-3xl border-2 border-orange-200 shadow-sm">
                        {{ t(lesson.tableData3.description) }}
                     </p>
                </div>
                
                <div class="text-center mb-6" v-else-if="lesson.tableData3.headers && lesson.tableData3.headers[0]">
                     <p class="text-2xl md:text-3xl font-bold text-gray-700 font-amiri bg-white/80 py-4 px-8 rounded-full shadow-sm inline-block">
                        {{ t(lesson.tableData3.headers[0]) }}
                     </p>
                </div>
                
                <div class="overflow-hidden rounded-3xl border-2 border-orange-200 bg-white">
                     <table class="w-full border-collapse">
                          <thead v-if="lesson.tableData3.headers && lesson.tableData3.headers.some(h => h && h !== lesson.tableData3?.headers[0])">
                               <tr class="bg-gray-50 text-gray-800 text-2xl font-bold font-amiri border-b-2 border-orange-200">
                                    <th v-for="(header, idx) in lesson.tableData3.headers" :key="idx" 
                                        class="p-4 border-l last:border-0 border-orange-200"
                                        :class="{'text-red-600': idx === 0, 'text-green-600': idx === 1, 'text-blue-600': idx === 2}">
                                         {{ t(header) }}
                                    </th>
                               </tr>
                          </thead>
                         <tbody>
                             <tr v-for="(row, rIdx) in lesson.tableData3.rows" :key="rIdx" class="border-b last:border-0 border-orange-100 hover:bg-orange-50/10 transition-colors h-16">
                                 <td v-for="(cell, cIdx) in row" :key="cIdx" class="p-2 md:p-4 text-center border-l last:border-0 border-orange-100 relative">
                                     <span v-if="cell" class="text-3xl md:text-5xl font-bold font-amiri text-gray-800" v-html="cell"></span>
                                     <input v-else type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none absolute inset-0" />
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
           </div>






           <!-- Table 6 (Extraction List - Lesson 12) -->
           <div v-if="lesson.tableData6" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12 mt-8">
                <div class="text-center mb-4">
                     <p class="text-2xl md:text-3xl font-bold text-red-600 font-amiri bg-yellow-50 py-4 px-8 rounded-full shadow-sm inline-block border-2 border-yellow-200">
                        {{ t(lesson.tableData6.title) }}
                     </p>
                </div>
                
                <div class="bg-white rounded-[2rem] shadow-lg border-2 border-blue-200 overflow-hidden">
                     <div class="bg-blue-50 p-4 text-center border-b-2 border-blue-200">
                         <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600">{{ t(lesson.tableData6.headers[0]) }}</h3>
                     </div>
                     <div class="divide-y divide-blue-100">
                         <div v-for="(row, idx) in lesson.tableData6.rows" :key="idx" 
                              class="p-4 text-center hover:bg-blue-50/30 transition-colors">
                              <span class="text-xl md:text-3xl font-bold font-amiri text-blue-900 leading-relaxed">
                                  {{ t(row[0]) }}
                              </span>
                         </div>
                     </div>
                </div>
           </div>

           <!-- Parts of Speech Tree Diagram -->
           <div v-if="lesson.partsOfSpeech" class="flex flex-col items-center gap-8 mt-12 mb-12">
                <div class="bg-green-100 border-4 border-green-500 rounded-2xl px-12 py-4 shadow-lg">
                     <h3 class="text-3xl md:text-5xl font-bold font-amiri text-green-700">{{ t(lesson.partsOfSpeech.title) }}</h3>
                </div>
                
                <!-- Arrows SVG -->
                <div class="w-full max-w-2xl h-16 relative hidden md:block">
                     <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
                          <path d="M200 0 L200 20 L50 40" fill="none" stroke="#374151" stroke-width="3" />
                          <path d="M200 0 L200 40" fill="none" stroke="#374151" stroke-width="3" />
                          <path d="M200 0 L200 20 L350 40" fill="none" stroke="#374151" stroke-width="3" />
                          <!-- Arrow heads -->
                          <path d="M45 35 L50 45 L55 35" fill="#374151" />
                          <path d="M195 35 L200 45 L205 35" fill="#374151" />
                          <path d="M345 35 L350 45 L355 35" fill="#374151" />
                     </svg>
                </div>

                <div class="flex gap-4 md:gap-16 items-start justify-center flex-wrap">
                     <div class="bg-orange-100 border-4 border-orange-400 rounded-2xl px-8 py-4 shadow-md w-32 md:w-40 text-center">
                          <span class="text-2xl md:text-4xl font-bold font-amiri text-orange-700">{{ t(lesson.partsOfSpeech.branches[0]) }}</span>
                     </div>
                     <div class="bg-red-100 border-4 border-red-400 rounded-2xl px-8 py-4 shadow-md w-32 md:w-40 text-center">
                          <span class="text-2xl md:text-4xl font-bold font-amiri text-red-700">{{ t(lesson.partsOfSpeech.branches[1]) }}</span>
                     </div>
                     <div class="bg-blue-100 border-4 border-blue-400 rounded-2xl px-8 py-4 shadow-md w-32 md:w-40 text-center">
                          <span class="text-2xl md:text-4xl font-bold font-amiri text-blue-700">{{ t(lesson.partsOfSpeech.branches[2]) }}</span>
                     </div>
                </div>
           </div>

           <!-- Noun Definition Section -->
           <div v-if="lesson.nounDefinition" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div class="text-center">
                     <span class="bg-blue-100 text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-full text-2xl md:text-3xl font-bold font-amiri inline-block shadow-sm">
                          {{ t(lesson.nounDefinition.title) }}
                     </span>
                </div>
                <div class="bg-white p-6 rounded-2xl border-r-4 border-blue-500 shadow-sm flex gap-4 items-start">
                     <div class="w-2 h-2 rounded-full bg-red-500 mt-4 shrink-0"></div>
                     <p class="text-2xl md:text-4xl font-bold font-amiri text-gray-800 leading-loose">
                          {{ t(lesson.nounDefinition.text) }}
                     </p>
                </div>
           </div>

           <!-- Noun Examples Grid -->
           <div v-if="lesson.nounExamples" class="flex flex-col gap-8 w-full max-w-5xl mx-auto mb-16">
                <div class="text-center">
                     <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-3 rounded-2xl shadow-lg inline-block transform hover:scale-105 transition-transform">
                          <h3 class="text-2xl md:text-3xl font-bold font-amiri">{{ t(lesson.nounExamples.title) }}</h3>
                     </div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                     <div v-for="(item, idx) in lesson.nounExamples.items" :key="idx" 
                          class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-4 flex items-center justify-center min-h-[5rem] shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                          <span class="text-2xl md:text-3xl font-bold font-amiri text-gray-800">{{ t(item) }}</span>
                     </div>
                </div>
           </div>

           <!-- Verb Definition Section -->
           <div v-if="lesson.verbDefinition" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div class="text-center">
                     <span class="bg-red-100 text-red-800 border-2 border-red-300 px-6 py-3 rounded-full text-2xl md:text-3xl font-bold font-amiri inline-block shadow-sm">
                          {{ t(lesson.verbDefinition.title) }}
                     </span>
                </div>
                <div class="bg-white p-6 rounded-2xl border-r-4 border-red-500 shadow-sm flex gap-4 items-start">
                     <div class="w-2 h-2 rounded-full bg-red-500 mt-4 shrink-0"></div>
                     <p class="text-2xl md:text-4xl font-bold font-amiri text-gray-800 leading-loose">
                          {{ t(lesson.verbDefinition.text) }}
                     </p>
                </div>
           </div>

           <!-- Verb Definition 2 (Present) -->
           <div v-if="lesson.verbDefinition2" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div v-if="lesson.verbDefinition2.title" class="text-center">
                     <span class="bg-blue-100 text-blue-800 border-2 border-blue-300 px-6 py-3 rounded-full text-2xl md:text-3xl font-bold font-amiri inline-block shadow-sm">
                          {{ t(lesson.verbDefinition2.title) }}
                     </span>
                </div>
                <div class="bg-white p-6 rounded-2xl border-r-4 border-blue-500 shadow-sm flex gap-4 items-start">
                     <div class="w-2 h-2 rounded-full bg-blue-500 mt-4 shrink-0"></div>
                     <p class="text-2xl md:text-4xl font-bold font-amiri text-gray-800 leading-loose whitespace-pre-line">
                          {{ t(lesson.verbDefinition2.text) }}
                     </p>
                </div>
           </div>

           <!-- Verb Definition 3 (Imperative) -->
           <div v-if="lesson.verbDefinition3" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div v-if="lesson.verbDefinition3.title" class="text-center">
                     <span class="bg-green-100 text-green-800 border-2 border-green-300 px-6 py-3 rounded-full text-2xl md:text-3xl font-bold font-amiri inline-block shadow-sm whitespace-pre-line">
                          {{ t(lesson.verbDefinition3.title) }}
                     </span>
                </div>
                <div class="bg-white p-6 rounded-2xl border-r-4 border-green-500 shadow-sm flex gap-4 items-start">
                     <div class="w-2 h-2 rounded-full bg-green-500 mt-4 shrink-0"></div>
                     <p class="text-2xl md:text-4xl font-bold font-amiri text-gray-800 leading-loose">
                          {{ t(lesson.verbDefinition3.text) }}
                     </p>
                </div>
           </div>

           <!-- Verbal Sentence Parsing (Parsing of Verb + Doer) -->
           <div v-if="lesson.verbalSentenceParsing" class="flex flex-col gap-8 w-full max-w-4xl mx-auto mb-16 mt-12 bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border-2 border-red-50">
                <!-- Main Title -->
                <div class="text-center mb-4">
                     <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600 inline-block">
                         {{ t(lesson.verbalSentenceParsing.title) }}
                     </h3>
                </div>

                <!-- Points 1 & 2 -->
                <div class="flex flex-col gap-6 pr-4">
                    <div v-for="(point, idx) in lesson.verbalSentenceParsing.points" :key="idx" 
                         class="text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-relaxed">
                         <span v-html="formatVerbalParsing(t(point))"></span>
                    </div>
                </div>

                <!-- Third Component (Green Section) -->
                <div v-if="lesson.verbalSentenceParsing.thirdComponent" class="flex flex-col gap-4 mt-4">
                    <div class="pr-4">
                        <h4 class="text-xl md:text-2xl font-bold font-amiri text-green-600">
                            {{ t(lesson.verbalSentenceParsing.thirdComponent.title) }}
                        </h4>
                    </div>
                    <div class="text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-relaxed pr-8">
                        <span v-html="formatVerbalParsing(t(lesson.verbalSentenceParsing.thirdComponent.content))"></span>
                    </div>
                </div>

                <!-- Parsing Model Section -->
                <div class="flex flex-col gap-6 mt-8">
                    <div class="text-center">
                        <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600">
                            {{ t(lesson.verbalSentenceParsing.parsingTitle) }}
                        </h3>
                    </div>

                    <!-- Parsing Sentences List -->
                    <div class="flex flex-col gap-2 pr-4">
                        <div v-for="(sentence, idx) in lesson.verbalSentenceParsing.parsingSentences" :key="idx" 
                             class="text-xl md:text-2xl font-bold font-amiri text-gray-800">
                             {{ t(sentence) }}
                        </div>
                    </div>

                    <!-- Parsing Table -->
                    <div class="overflow-x-auto rounded-xl border-2 border-blue-400 bg-white shadow-md mt-4">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-orange-100 text-2xl md:text-3xl font-bold font-amiri text-red-600 border-b-2 border-blue-400">
                                    <th v-for="(header, idx) in lesson.verbalSentenceParsing.table.headers" :key="idx" 
                                        class="p-3 border-l-2 last:border-0 border-blue-400 w-1/3 text-center">
                                        {{ t(header) }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, rIdx) in lesson.verbalSentenceParsing.table.rows" :key="rIdx" 
                                    class="border-b-2 last:border-0 border-blue-300 h-14"
                                    :class="rIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'">
                                    <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                        class="p-3 text-center border-l-2 last:border-0 border-blue-300 text-xl md:text-2xl font-bold font-amiri text-gray-800">
                                        {{ t(cell) }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>


            <!-- Verbal Sentence Writing (New Section) -->
            <div v-if="lesson.verbalSentenceWriting" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12 mt-8">
                 <div class="bg-gray-50 rounded-[2rem] p-8 border-2 border-gray-200 shadow-sm">
                      <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600 mb-6 text-right">
                          {{ t(lesson.verbalSentenceWriting.title) }}
                      </h3>
                      <div class="flex flex-col gap-6">
                           <div v-for="i in lesson.verbalSentenceWriting.count" :key="i" class="flex items-end gap-4">
                                <span class="text-xl font-bold text-gray-400 font-amiri">{{ i }} -</span>
                                <div class="flex-grow border-b-2 border-dotted border-gray-400 h-8"></div>
                           </div>
                      </div>
                 </div>
            </div>

            <!-- Verbal Sentence Construction Diagram (New Section) -->
            <div v-if="lesson.verbalSentenceConstruction" class="flex flex-col gap-8 w-full max-w-4xl mx-auto mb-12">
                 <div class="text-center mb-4">
                      <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600 inline-block">
                          {{ t(lesson.verbalSentenceConstruction.title) }}
                      </h3>
                 </div>
                 
                 <div class="flex flex-col gap-12">
                      <div v-for="(model, idx) in lesson.verbalSentenceConstruction.models" :key="idx" class="flex flex-col items-center gap-4">
                           <!-- Boxes -->
                           <div class="flex gap-4 md:gap-8 justify-center flex-wrap">
                                <template v-for="(comp, cIdx) in model.components" :key="cIdx">
                                     <div class="relative group">
                                         <!-- Box -->
                                         <div class="px-6 py-3 rounded-xl border-2 shadow-md min-w-[100px] text-center"
                                              :class="[
                                                  comp.color === 'orange' ? 'bg-orange-100 border-orange-400 text-orange-700' :
                                                  comp.color === 'green' ? 'bg-green-100 border-green-500 text-green-700' :
                                                  'bg-blue-100 border-blue-400 text-blue-700'
                                              ]">
                                              <span class="text-xl md:text-2xl font-bold font-amiri">{{ comp.label }}</span>
                                         </div>
                                         <!-- Arrow -->
                                         <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                                              <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10 0V25M10 25L5 20M10 25L15 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                         </div>
                                     </div>
                                </template>
                           </div>
                           
                           <!-- Target Sentence -->
                           <div class="mt-4 pt-4">
                                <span class="text-2xl md:text-3xl font-bold font-amiri text-gray-800 border-b-2 border-gray-200 pb-2">
                                     {{ model.example }}
                                </span>
                           </div>
                      </div>
                 </div>
            </div>

            <!-- Verbal Sentence Summary Points (New Section) -->
            <div v-if="lesson.verbalSentenceSummary" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-16 px-4">
                 <div class="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-green-100">
                      <div class="flex flex-col gap-6">
                           <div v-for="(point, idx) in lesson.verbalSentenceSummary.points" :key="idx" 
                                class="text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-loose">
                                <span v-html="formatVerbalParsing(t(point))"></span>
                           </div>
                      </div>
                 </div>
            </div>

           <!-- Verb Examples Grid -->
           <div v-if="lesson.verbExamples" class="flex flex-col gap-8 w-full max-w-4xl mx-auto mb-16">
                <div class="text-center">
                     <div class="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-10 py-3 rounded-2xl shadow-lg inline-block transform hover:scale-105 transition-transform">
                          <h3 class="text-2xl md:text-3xl font-bold font-amiri">{{ t(lesson.verbExamples.title) }}</h3>
                     </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div v-for="(col, idx) in lesson.verbExamples.columns" :key="idx" class="flex flex-col gap-4">
                          <div class="bg-green-600 text-white p-3 rounded-xl text-center shadow-md">
                               <h4 class="text-xl md:text-2xl font-bold font-amiri">{{ t(col.title) }}</h4>
                          </div>
                          <div class="bg-green-50 border-2 border-green-200 p-6 rounded-xl text-center shadow-sm h-full flex items-center justify-center">
                               <span class="text-3xl md:text-4xl font-bold font-amiri text-gray-800">{{ t(col.item) }}</span>
                          </div>
                     </div>
                </div>
           </div>

           <!-- Particle Definition Section -->
           <div v-if="lesson.particleDefinition" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div class="text-center">
                     <span class="bg-orange-100 text-orange-800 border-2 border-orange-300 px-6 py-3 rounded-full text-2xl md:text-3xl font-bold font-amiri inline-block shadow-sm">
                          {{ t(lesson.particleDefinition.title) }}
                     </span>
                </div>
                <div class="bg-white p-6 rounded-2xl border-r-4 border-orange-500 shadow-sm flex gap-4 items-start">
                     <div class="w-2 h-2 rounded-full bg-red-500 mt-4 shrink-0"></div>
                     <p class="text-2xl md:text-4xl font-bold font-amiri text-gray-800 leading-loose">
                          {{ t(lesson.particleDefinition.text) }}
                     </p>
                </div>
           </div>

           <!-- Particle Examples Grid (Diamond Shape) -->
           <div v-if="lesson.particleExamples" class="flex flex-col gap-8 w-full max-w-4xl mx-auto mb-16">
                <div class="text-center">
                     <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-3 rounded-2xl shadow-lg inline-block transform hover:scale-105 transition-transform">
                          <h3 class="text-2xl md:text-3xl font-bold font-amiri">{{ t(lesson.particleExamples.title) }}</h3>
                     </div>
                </div>
                
                <div class="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
                     <div v-for="(item, idx) in lesson.particleExamples.items" :key="idx" 
                          class="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rotate-45 border-4 border-yellow-400 shadow-md flex items-center justify-center transform hover:scale-110 transition-transform hover:bg-yellow-50 hover:border-yellow-500">
                          <span class="text-2xl md:text-3xl font-bold font-amiri text-gray-800 -rotate-45">{{ t(item) }}</span>
                     </div>
                </div>
           </div>

           <!-- Nominal Sentence Intro List -->
           <div v-if="lesson.nominalSentenceIntro" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12">
                <div class="text-right mb-4">
                     <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600 border-r-4 border-red-500 pr-4">{{ t(lesson.nominalSentenceIntro.title) }}</h3>
                </div>
                <div class="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm border border-gray-200">
                     <p v-for="(sentence, idx) in lesson.nominalSentenceIntro.sentences" :key="idx" 
                        class="text-xl md:text-3xl font-bold font-amiri text-gray-800 leading-loose">
                          {{ idx + 1 }}- {{ t(sentence) }}
                     </p>
                </div>
           </div>

           <!-- Nominal Sentence Definition -->
           <div v-if="lesson.nominalSentenceDefinition" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-12 text-center">
                <div class="bg-white rounded-2xl shadow-lg border-2 border-red-100 p-8 md:p-10 relative overflow-hidden">
                     <div class="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -z-10"></div>
                     <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600 mb-6 leading-relaxed">
                          - {{ t(lesson.nominalSentenceDefinition.title) }}
                     </h3>
                     <p class="text-xl md:text-2xl font-bold font-amiri text-gray-700 leading-loose mb-8">
                          {{ t(lesson.nominalSentenceDefinition.text) }}
                     </p>
                     <div class="inline-block border-t-2 border-dashed border-red-300 pt-4">
                          <p class="text-xl md:text-2xl font-bold font-amiri text-red-500">
                               {{ t(lesson.nominalSentenceDefinition.footer) }}
                          </p>
                     </div>
                </div>
           </div>

           <!-- Nominal Sentence Diagram (Tree) -->
           <div v-if="lesson.nominalSentenceDiagram" class="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto mb-16">
                <div class="bg-gradient-to-b from-gray-100 to-white px-10 py-4 rounded-2xl shadow-md border border-gray-200">
                     <h3 class="text-2xl md:text-4xl font-bold font-amiri text-gray-800">{{ t(lesson.nominalSentenceDiagram.title) }}</h3>
                </div>

                <!-- Arrows SVG -->
                <div class="w-full max-w-3xl h-20 relative hidden md:block">
                     <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 80" preserveAspectRatio="none">
                          <!-- Center line down -->
                          <path d="M300 0 L300 20" fill="none" stroke="#6B7280" stroke-width="3" />
                          <!-- Left branch -->
                          <path d="M300 20 L150 60" fill="none" stroke="#2563EB" stroke-width="3" /> <!-- Blue to Left (Khabar) -->
                          <!-- Right branch -->
                          <path d="M300 20 L450 60" fill="none" stroke="#22C55E" stroke-width="3" /> <!-- Green to Right (Mubtada) -->
                          
                          <!-- Arrow heads -->
                          <path d="M145 55 L150 65 L155 55" fill="#2563EB" />
                          <path d="M445 55 L450 65 L455 55" fill="#22C55E" />
                     </svg>
                </div>

                <div class="flex gap-4 md:gap-12 items-start justify-center w-full">
                     <!-- Right Box (Mubtada - Green) -->
                     <div class="flex-1 max-w-sm bg-green-50 border-4 border-green-500 rounded-3xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform">
                          <h4 class="text-2xl md:text-3xl font-bold font-amiri text-green-700 mb-2">{{ t(lesson.nominalSentenceDiagram.branches[1].title) }}</h4>
                          <p class="text-lg md:text-xl font-bold font-amiri text-gray-600 leading-relaxed">{{ t(lesson.nominalSentenceDiagram.branches[1].text) }}</p>
                     </div>

                     <!-- Left Box (Khabar - Blue) -->
                     <div class="flex-1 max-w-sm bg-blue-50 border-4 border-blue-400 rounded-3xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform">
                          <h4 class="text-2xl md:text-3xl font-bold font-amiri text-blue-700 mb-2">{{ t(lesson.nominalSentenceDiagram.branches[0].title) }}</h4>
                          <p class="text-lg md:text-xl font-bold font-amiri text-gray-600 leading-relaxed">{{ t(lesson.nominalSentenceDiagram.branches[0].text) }}</p>
                     </div>
                </div>
           </div>



           <!-- Parsing Table (Lesson 25 Specific Location) -->
           <div v-if="lesson.tableData && lesson.id === 25" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-16">
                 <div class="overflow-x-auto rounded-3xl border-2 border-green-400 bg-white shadow-lg">
                      <table class="w-full border-collapse">
                          <thead>
                              <tr class="bg-gray-50 text-3xl font-bold font-amiri border-b-2 border-green-400">
                                  <th v-for="(header, idx) in lesson.tableData.headers" :key="idx" class="p-4 border-l-2 last:border-0 border-green-400 text-green-700">
                                      {{ t(header) }}
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(row, rIdx) in lesson.tableData.rows" :key="rIdx" class="border-b-2 last:border-0 border-green-200 h-16 hover:bg-green-50/20 transition-colors">
                                  <td v-for="(cell, cIdx) in row" :key="cIdx" class="p-4 text-center border-l-2 last:border-0 border-green-200">
                                      <span class="text-2xl md:text-3xl font-bold font-amiri text-gray-800" v-html="t(cell)"></span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                 </div>
           </div>



           <!-- Exercises Section (Input) -->
           <div v-if="lesson.exercises && lesson.exercises[0].type === 'input'" class="flex flex-col gap-8 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border-4 border-gray-100">
               <div class="flex items-center justify-center p-4 bg-white rounded-2xl border-2 border-gray-200 shadow-inner mb-4">
                    <p class="text-2xl md:text-3xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                         <span class="inline-block text-3xl ml-3">✍️</span>
                         {{ lesson.exercisesTitle ? t(lesson.exercisesTitle) : t('Mention words starting with sun letter and moon letter from the text') }}
                    </p>
               </div>
                <div class="grid grid-cols-2 gap-x-12 gap-y-6">
                    <template v-for="(exercise, idx) in lesson.exercises" :key="exercise.id">
                        <div v-if="exercise.type === 'input'" class="flex items-center gap-4">
                            <span class="text-xl font-bold text-gray-400 w-8">{{ idx + 1 }}</span>
                            <div class="flex-grow relative">
                                <input type="text" class="w-full p-4 bg-transparent border-b-2 border-blue-300 focus:border-blue-600 focus:outline-none text-2xl md:text-3xl font-amiri text-center text-gray-800" />
                                <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-50 -z-10"></div>
                            </div>
                        </div>
                        <div v-else-if="exercise.type === 'text'" class="col-span-2 flex justify-center p-4 bg-blue-50 rounded-xl border border-blue-100 mb-2">
                             <p class="text-2xl md:text-3xl font-bold font-amiri text-blue-800">{{ exercise.title }}</p>
                        </div>
                    </template>
                </div>
           </div>

           <!-- Training / Comparison Table -->
           <div v-if="lesson.tableData2" class="flex flex-col gap-8 mt-12">
                <!-- Training Header -->
                <div class="flex justify-center">
                     <div class="bg-gradient-to-r from-red-600 to-red-500 text-white px-16 py-3 rounded-full shadow-2xl border-2 border-yellow-200">
                          <h2 class="text-3xl md:text-4xl font-bold font-amiri">{{ t('Training') }}</h2>
                     </div>
                </div>

                <!-- Comparison Table Structure Page 30-31 -->
                <div class="bg-white rounded-[3rem] shadow-2xl border-4 border-blue-200 overflow-hidden">
                     <table class="w-full border-collapse">
                          <thead>
                               <tr class="bg-blue-600 text-white text-3xl font-bold font-amiri">
                                    <th colspan="2" class="p-4 border-l-4 border-white">{{ t('The Moon Lam') }}</th>
                                    <th colspan="2" class="p-4">{{ t('The Sun Lam') }}</th>
                               </tr>
                               <tr class="bg-blue-100 text-gray-800 text-2xl font-bold font-amiri border-b-4 border-blue-600">
                                    <th class="p-3 border-l-4 border-blue-600">{{ t('The Letter') }}</th>
                                    <th class="p-3 border-l-4 border-blue-600">{{ t('The Example') }}</th>
                                    <th class="p-3 border-l-2 border-blue-200">{{ t('The Letter') }}</th>
                                    <th class="p-3">{{ t('The Example') }}</th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr v-for="(row, idx) in [
                                   { moonL: 'أ', moonE: 'الأَبُ', sunL: 'ت', sunE: 'التَّمْرُ' },
                                   { moonL: 'ب', moonE: 'الْبِنْتُ', sunL: 'ث', sunE: 'الثَّوْبُ' },
                                   { moonL: 'ج', moonE: 'الْجَدُّ', sunL: 'د', sunE: 'الدِّينُ' },
                                   { moonL: 'ح', moonE: 'الْحَلْوَى', sunL: 'ذ', sunE: 'الذَّهَبُ' },
                                   { moonL: 'خ', moonE: 'الْخَرُوفُ', sunL: 'ر', sunE: 'الرَّأْسُ' },
                                   { moonL: 'ع', moonE: 'الْعِيدُ', sunL: 'ز', sunE: 'الزَّمَانُ' },
                                   { moonL: 'غ', moonE: 'الْغَزَالُ', sunL: 'س', sunE: 'السُّكَّرُ' },
                                   { moonL: 'ف', moonE: 'الْفِيلُ', sunL: 'ش', sunE: 'الشَّمْسُ' },
                                   { moonL: 'ق', moonE: 'الْقَمَرُ', sunL: 'ص', sunE: 'الصُّبْحُ' },
                                   { moonL: 'ك', moonE: 'الْكِتَابُ', sunL: 'ض', sunE: 'الضَّوْءُ' },
                                   { moonL: 'م', moonE: 'الْمَسْجِدُ', sunL: 'ط', sunE: 'الطَّبِيبُ' },
                                   { moonL: 'هـ', moonE: 'الْهِلَالُ', sunL: 'ظ', sunE: 'الظُّهْرُ' },
                                   { moonL: 'و', moonE: 'الْوَرْدُ', sunL: 'ل', sunE: 'اللَّوْنُ' },
                                   { moonL: 'ي', moonE: 'الْيَدُ', sunL: 'ن', sunE: 'النُّورُ' }
                               ]" :key="idx" class="text-2xl md:text-3xl font-bold font-amiri hover:bg-blue-50 transition-colors">
                                    <td class="p-3 border-l-4 border-blue-600 text-center text-blue-600">{{ row.moonL }}</td>
                                    <td class="p-3 border-l-4 border-blue-600 text-center">{{ t(row.moonE) }}</td>
                                    <td class="p-3 border-l-2 border-blue-200 text-center text-red-600">{{ row.sunL }}</td>
                                    <td class="p-3 text-center">{{ t(row.sunE) }}</td>
                               </tr>
                          </tbody>
                     </table>
                </div>

                <!-- Final Exercise Table Page 31 -->
                <div class="mt-12 flex flex-col gap-6">
                     <div class="flex items-center justify-center p-6 bg-yellow-50 rounded-3xl border-4 border-yellow-200 shadow-lg mb-4">
                        <p class="text-3xl md:text-4xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                            {{ t('Search for words like in the previous training.') }}
                        </p>
                    </div>

                    <div class="bg-white rounded-[3.5rem] shadow-2xl border-4 border-blue-400 overflow-hidden">
                         <table class="w-full border-collapse">
                              <thead>
                                   <tr class="bg-blue-400 text-white text-3xl font-bold font-amiri">
                                        <th colspan="2" class="p-4 border-l-4 border-white">{{ t('The Moon Lam') }}</th>
                                        <th colspan="2" class="p-4">{{ t('The Sun Lam') }}</th>
                                   </tr>
                                   <tr class="bg-blue-50 text-gray-800 text-2xl font-bold font-amiri border-b-4 border-blue-400">
                                        <th class="p-3 border-l-4 border-blue-400">{{ t('The Letter') }}</th>
                                        <th class="p-3 border-l-4 border-blue-400">{{ t('The Example') }}</th>
                                        <th class="p-3 border-l-2 border-blue-200">{{ t('The Letter') }}</th>
                                        <th class="p-3">{{ t('The Example') }}</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr v-for="letter in [
                                        { moon: 'أ', sun: 'ت' }, { moon: 'ب', sun: 'ث' }, { moon: 'ج', sun: 'د' }, { moon: 'ح', sun: 'ذ' },
                                        { moon: 'خ', sun: 'ر' }, { moon: 'ع', sun: 'ز' }, { moon: 'غ', sun: 'س' }, { moon: 'ف', sun: 'ش' },
                                        { moon: 'ق', sun: 'ص' }, { moon: 'ك', sun: 'ض' }, { moon: 'م', sun: 'ط' }, { moon: 'هـ', sun: 'ظ' },
                                        { moon: 'و', sun: 'ل' }, { moon: 'ي', sun: 'ن' }
                                   ]" :key="letter.moon" class="h-16">
                                        <td class="border-l-4 border-blue-400 p-2 text-center font-amiri text-3xl font-bold text-blue-600">{{ letter.moon }}</td>
                                        <td class="border-l-4 border-blue-400 p-2">
                                             <input type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                        </td>
                                        <td class="border-l-2 border-blue-100 p-2 text-center font-amiri text-3xl font-bold text-red-600">{{ letter.sun }}</td>
                                        <td class="p-2">
                                             <input type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
                </div>
           </div>

           <!-- Table 4 (Classification Exercise Table) -->
           <div v-if="lesson.tableData4" class="mt-8 flex flex-col gap-6">
                <!-- New Title Section for Table 4 -->
                <div v-if="lesson.tableData4.title" class="flex items-center justify-center p-6 bg-yellow-50 rounded-3xl border-4 border-yellow-200 shadow-lg mb-4">
                   <p class="text-3xl md:text-4xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                       {{ t(lesson.tableData4.title) }}
                   </p>
                </div>

                <div class="text-center mb-6" v-if="lesson.tableData4.description">
                     <p class="text-xl md:text-2xl font-bold text-gray-700 font-amiri leading-loose bg-white p-6 rounded-3xl border-2 border-yellow-200 shadow-sm">
                        {{ t(lesson.tableData4.description) }}
                     </p>
                </div>

                <div class="bg-white rounded-[3.5rem] shadow-2xl border-4 border-blue-400 overflow-hidden">
                     <table class="w-full border-collapse">
                          <thead>
                               <tr class="bg-blue-400 text-white text-3xl font-bold font-amiri" :class="{'!bg-white !text-red-600 border-b-2 border-blue-400': lesson.id === 20}">
                                    <th v-for="(header, idx) in lesson.tableData4.headers" :key="idx" 
                                        class="p-4 border-l last:border-0 border-white"
                                        :class="{'!border-blue-400 border-l-2': lesson.id === 20}">
                                         {{ t(header) }}
                                    </th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr v-for="(row, rIdx) in lesson.tableData4.rows" :key="rIdx" 
                                   class="h-16 border-b last:border-0 border-blue-100"
                                   :class="{'!border-blue-400 border-b-2': lesson.id === 20, 'bg-blue-50': lesson.id === 20 && rIdx % 2 === 0}">
                                    <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                        class="border-l last:border-0 border-blue-400 p-2"
                                        :class="{'!border-blue-400 border-l-2': lesson.id === 20}">
                                         <!-- If Lesson 20 or 21, Column 0 is Text. Column 1 is Input only if empty -->
                                         <span v-if="((lesson.id === 20 || lesson.id === 21 || lesson.id === 22 || lesson.id === 23) && cIdx === 0) || ((lesson.id === 21 || lesson.id === 22 || lesson.id === 23) && cell)" class="text-2xl md:text-3xl font-bold font-amiri text-gray-800">
                                              {{ t(cell) }}
                                         </span>
                                         <input v-else type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                    </td>
                               </tr>
                          </tbody>
                     </table>
                </div>
           </div>

           <!-- Table 5 (Reverse: Form Question for Answer) -->
           <div v-if="lesson.tableData5" class="mt-8 flex flex-col gap-6">
                <div v-if="lesson.tableData5.title" class="flex items-center justify-center p-6 bg-yellow-50 rounded-3xl border-4 border-yellow-200 shadow-lg mb-4">
                   <p class="text-3xl md:text-4xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                       {{ t(lesson.tableData5.title) }}
                   </p>
                </div>

                <div class="bg-white rounded-[3.5rem] shadow-2xl border-4 border-blue-400 overflow-hidden">
                     <table class="w-full border-collapse">
                          <thead>
                               <tr class="bg-white text-3xl font-bold font-amiri border-b-2 border-blue-400 text-red-600">
                                    <th v-for="(header, idx) in lesson.tableData5.headers" :key="idx" 
                                        class="p-4 border-l-2 last:border-0 border-blue-400">
                                         {{ t(header) }}
                                    </th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr v-for="(row, rIdx) in lesson.tableData5.rows" :key="rIdx" 
                                   class="h-16 border-b-2 last:border-0 border-blue-400"
                                   :class="rIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'">
                                    <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                        class="border-l-2 last:border-0 border-blue-400 p-2">
                                         <!-- Column 0 is Answer (Text), Column 1 is Question (Input) - UNLESS cell has text -->
                                         <span v-if="cIdx === 0 || cell" class="text-2xl md:text-3xl font-bold font-amiri text-gray-800">
                                              {{ t(cell) }}
                                         </span>
                                         <input v-else type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                    </td>
                               </tr>
                          </tbody>
                     </table>
                </div>
           </div>

           <!-- Table 6 (Both Inputs: Form Questions and Answer Myself) -->
           <div v-if="lesson.tableData6 && lesson.id !== 26" class="mt-8 flex flex-col gap-6">
                <div v-if="lesson.tableData6.title" class="flex items-center justify-center p-6 bg-yellow-50 rounded-3xl border-4 border-yellow-200 shadow-lg mb-4">
                   <p class="text-3xl md:text-4xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                       {{ t(lesson.tableData6.title) }}
                   </p>
                </div>

                <div class="bg-white rounded-[3.5rem] shadow-2xl border-4 border-blue-400 overflow-hidden">
                     <table class="w-full border-collapse">
                          <thead>
                               <tr class="bg-white text-3xl font-bold font-amiri border-b-2 border-blue-400 text-red-600">
                                    <th v-for="(header, idx) in lesson.tableData6.headers" :key="idx" 
                                        class="p-4 border-l-2 last:border-0 border-blue-400">
                                         {{ t(header) }}
                                    </th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr v-for="(row, rIdx) in lesson.tableData6.rows" :key="rIdx" 
                                   class="h-16 border-b-2 last:border-0 border-blue-400"
                                   :class="rIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'">
                                    <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                        class="border-l-2 last:border-0 border-blue-400 p-2">
                                         <!-- Both Columns are Inputs - UNLESS cell has text -->
                                         <span v-if="cell" class="text-2xl md:text-3xl font-bold font-amiri text-gray-800">
                                              {{ t(cell) }}
                                         </span>
                                         <input v-else type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                    </td>
                               </tr>
                          </tbody>
                     </table>
                </div>
           </div>

           <!-- Table 7 (Additional Input/Text Table) -->
           <div v-if="lesson.tableData7" class="mt-8 flex flex-col gap-6">
                <div v-if="lesson.tableData7.title" class="flex items-center justify-center p-6 bg-yellow-50 rounded-3xl border-4 border-yellow-200 shadow-lg mb-4">
                   <p class="text-3xl md:text-4xl font-bold text-red-600 font-amiri text-center leading-relaxed">
                       {{ t(lesson.tableData7.title) }}
                   </p>
                </div>

                <div class="bg-white rounded-[3.5rem] shadow-2xl border-4 border-blue-400 overflow-hidden">
                     <table class="w-full border-collapse">
                          <thead>
                               <tr class="bg-white text-3xl font-bold font-amiri border-b-2 border-blue-400 text-red-600">
                                    <th v-for="(header, idx) in lesson.tableData7.headers" :key="idx" 
                                        class="p-4 border-l-2 last:border-0 border-blue-400">
                                         {{ t(header) }}
                                    </th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr v-for="(row, rIdx) in lesson.tableData7.rows" :key="rIdx" 
                                   class="h-16 border-b-2 last:border-0 border-blue-400"
                                   :class="rIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'">
                                    <td v-for="(cell, cIdx) in row" :key="cIdx" 
                                        class="border-l-2 last:border-0 border-blue-400 p-2">
                                         <span v-if="cell" class="text-2xl md:text-3xl font-bold font-amiri text-gray-800">
                                              {{ t(cell) }}
                                         </span>
                                         <input v-else type="text" class="w-full h-full bg-transparent text-center font-amiri text-2xl font-bold focus:outline-none" />
                                    </td>
                               </tr>
                          </tbody>
                     </table>
                </div>
           </div>
       </div>


       <!-- Noun Benefit Section (Final Location) -->
       <div v-if="lesson.nounBenefit" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-16 mt-16">
            <div class="text-center mb-6">
                 <span class="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-lg text-2xl md:text-3xl font-bold font-amiri inline-block">
                      {{ t(lesson.nounBenefit.title) }}
                 </span>
            </div>
            
            <div class="bg-white rounded-[2rem] border-2 border-teal-500 p-8 shadow-xl relative overflow-hidden">
                 <div class="text-center mb-8">
                      <h3 class="text-2xl md:text-3xl font-bold font-amiri text-red-600">{{ t(lesson.nounBenefit.subtitle) }}</h3>
                 </div>

                 <div class="flex flex-col gap-6">
                      <div v-for="(example, idx) in lesson.nounBenefit.examples" :key="idx" 
                           class="flex items-start gap-4 text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-loose">
                           <p v-html="t(example.text).replace(/\*(.*?)\*/g, '<span class=\'text-red-500 font-bold\'>$1</span>')"></p>
                      </div>
                  </div>

                  <div class="mt-8 pt-6 border-t-2 border-dashed border-teal-200 text-center">
                       <p class="text-xl md:text-2xl font-bold font-amiri text-purple-700">
                            {{ t(lesson.nounBenefit.footer) }}
                       </p>
                  </div>
            </div>
       </div>




       <!-- Noun Division Section (Final Location) -->
       <div v-if="lesson.nounDivision" class="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-16 mt-16">
            <div class="text-center mb-6">
                 <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-tr-3xl rounded-bl-3xl shadow-lg text-2xl md:text-3xl font-bold font-amiri inline-block">
                      {{ t(lesson.nounDivision.title) }}
                 </span>
            </div>
            
            <div class="bg-white rounded-[2rem] border-2 border-blue-500 p-8 shadow-xl relative overflow-hidden">
                 <div class="text-center mb-12">
                      <h3 class="text-2xl md:text-3xl font-bold font-amiri text-gray-700">{{ t(lesson.nounDivision.subtitle) }}</h3>
                 </div>

                 <!-- Diamond Layout for Types -->
                 <div class="flex flex-wrap justify-center gap-8 mb-12 relative">
                     <!-- Arrows (SVG or CSS lines could be enhanced here, simplistic representation for now) -->
                     
                     <div v-for="type in lesson.nounDivision.types" :key="type.id" 
                          class="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                          <!-- Diamond Shape bg -->
                          <div class="absolute inset-0 transform rotate-45 rounded-2xl shadow-lg border-4"
                               :class="[
                                   type.color === 'yellow' ? 'bg-yellow-100 border-yellow-400' : 
                                   type.color === 'blue' ? 'bg-blue-100 border-blue-400' : 'bg-orange-100 border-orange-400'
                               ]"></div>
                          <!-- Content -->
                          <div class="relative z-10 text-center transform">
                               <span class="block text-3xl md:text-4xl font-bold font-amiri text-gray-800">
                                   {{ type.id }} <br/>
                                   {{ t(type.name) }}
                               </span>
                          </div>
                          <!-- Decorative Dots/Points on Diamond Tips could be added here -->
                     </div>
                 </div>

                 <!-- Definitions List -->
                 <div class="flex flex-col gap-8">
                      <div v-for="(def, idx) in lesson.nounDivision.definitions" :key="idx" 
                           class="flex items-start gap-4 text-xl md:text-2xl font-bold font-amiri text-gray-800 leading-loose">
                           <span class="text-blue-600 shrink-0">{{ idx + 1 }}-</span>
                           <p>
                               <span class="text-blue-700">{{ t(def.title) }}</span>: <span v-html="t(def.text).replace(/\*(.*?)\*/g, '<span class=\'text-red-500 font-bold\'>$1</span>')"></span>
                           </p>
                      </div>
                  </div>
            </div>
       </div>

       <!-- Alphabet Chart Lesson Type -->
       <div v-else-if="lesson.type === 'alphabetChart'" class="flex flex-col w-full max-w-6xl mx-auto mt-16 px-4 items-center gap-8">
           <PlayAudioButton v-if="lesson.audioUrl" :audioUrl="lesson.audioUrl" />
           <div class="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 border-2 border-gray-200 p-4 rounded-xl bg-white shadow-sm w-full">
               <div v-for="(char, index) in lesson.items" :key="index" 
                    class="aspect-square flex items-center justify-center border border-gray-100 rounded-lg transition-colors shadow-sm bg-white cursor-pointer transform hover:scale-105 duration-200"
                    :class="[
                        lesson.colorTheme === 'blue' ? 'hover:bg-blue-50 hover:border-blue-200' : 
                        lesson.colorTheme === 'green' ? 'hover:bg-green-50 hover:border-green-200' :
                        'hover:bg-red-50 hover:border-red-200'
                    ]"
                >
                   <span 
                        class="text-4xl md:text-6xl font-bold font-amiri"
                        :class="[
                            lesson.colorTheme === 'blue' ? 'text-blue-600' : 
                            lesson.colorTheme === 'green' ? 'text-green-600' :
                            'text-red-600'
                        ]"
                    >{{ char }}</span>
               </div>
           </div>
      </div>

      <!-- Read and Write Review Lesson Type -->
      <div v-else-if="lesson.type === 'readWriteReview'" class="flex flex-col w-full max-w-5xl mx-auto mt-8 gap-8 px-4">
           
           <div class="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col gap-12 relative">
               
               <!-- Audio Button -->
               <div class="absolute top-4 left-4" v-if="lesson.audioUrl">
                   <PlayAudioButton :audioUrl="lesson.audioUrl" />
               </div>
               
               <div v-for="item in lesson.items" :key="'review-' + item.id" class="flex flex-col gap-6">
                   <!-- Read Row -->
                   <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                       <!-- Label -->
                       <div class="shrink-0 w-24 md:w-auto self-center md:self-auto">
                           <span class="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold block text-center border border-red-200 shadow-sm">{{ t('Read') }}</span>
                       </div>
                       
                       <!-- Words -->
                       <div class="flex-1 flex flex-wrap justify-center gap-4 items-center bg-orange-50/50 rounded-2xl p-4 border border-orange-100">
                           <template v-if="item.words">
                               <template v-for="(word, wIdx) in item.words.slice().reverse()" :key="wIdx">
                                   <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ word }}</span>
                                   <div v-if="wIdx < item.words.length - 1" class="w-px h-12 bg-orange-200 hidden md:block"></div>
                               </template>
                           </template>
                           <template v-else>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.text }}</span>
                               <div class="w-px h-12 bg-orange-200 hidden md:block"></div>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.text2 }}</span>
                               <div class="w-px h-12 bg-orange-200 hidden md:block"></div>
                               <span class="text-4xl md:text-6xl font-bold font-amiri text-gray-800">{{ item.highlight }}</span>
                           </template>
                       </div>
                   </div>

                   <!-- Write Row -->
                   <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                       <!-- Label -->
                        <div class="shrink-0 w-24 md:w-auto self-center md:self-auto">
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
const formatVerbalParsing = (text: string) => {
    if (!text) return '';
    return text
        .replace(/\[red\](.*?)\[\/red\]/g, '<span class="text-red-600 font-bold">$1</span>')
        .replace(/\[green\](.*?)\[\/green\]/g, '<span class="text-green-600 font-bold">$1</span>')
        .replace(/\[blue\](.*?)\[\/blue\]/g, '<span class="text-blue-600 font-bold">$1</span>');
};

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

const chunkedRemember = computed(() => {
    if (!lesson.value || !lesson.value.remember) return [];
    const items = lesson.value.remember;
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
});

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
    
    // Use background-image to avoid breaking ligatures
    return word.replace(regex, '<span class="circle-highlight-text">$1</span>');
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
  } else if (newLesson.type === 'shortVowels' && newLesson.items) {
     totalImagesToLoad.value = newLesson.items.filter(i => i.image).length;
  } else if (newLesson.type === 'unitIntro' && newLesson.mainImage) {
     totalImagesToLoad.value = 1;
  } else if (newLesson.type === 'letterExamples') {
     let count = 0;
     if (newLesson.items) {
        count += newLesson.items.filter(i => i.image).length;
        count += newLesson.items.filter(i => i.listenImage).length;
        count += newLesson.items.filter(i => i.readImage).length;
     }
     
     if (newLesson.writingImage) {
        count += 1;
     } else if (newLesson.writingImages) {
        count += newLesson.writingImages.length;
     } else if (newLesson.writingPractice) {
        count += newLesson.writingPractice.filter(p => p.image).length;
     }

     if (newLesson.exercises) {
        count += newLesson.exercises.filter(e => e.image).length;
     }
     
     totalImagesToLoad.value = count;
  }

  // If no images to load (or other types), stop loading immediately
  if (totalImagesToLoad.value === 0) {
    isLoading.value = false;
  } else {
    // Safety timeout: stop loading after 8 seconds max to prevent infinite spinning on stuck images
    setTimeout(() => {
        if (isLoading.value) {
            console.warn('Loading timed out', imagesLoadedCount.value, '/', totalImagesToLoad.value);
            isLoading.value = false;
        }
    }, 8000);
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

:deep(.circle-highlight-text) {
  background-image: radial-gradient(closest-side, transparent 0%, transparent 60%, #ef4444 65%, #ef4444 90%, transparent 95%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150% 150%;
  padding-bottom: 5px;
}
</style>
