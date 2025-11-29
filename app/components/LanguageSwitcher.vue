<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// استخراج الدوال من useI18n()
const { locale, locales, setLocale } = useI18n();

// 1. حساب اللغة الأخرى المتاحة
const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>)
    .filter(i => i.code !== locale.value);
});

// 2. دالة تغيير اللغة (تعتمد على setLocale لتغيير اللغة محلياً)
const changeLanguage = (newLocaleCode: string) => {
  if (newLocaleCode) {
    // هذا هو السطر الذي يغير اللغة دون إعادة توجيه (إذا كانت strategy: 'no_prefix')
    setLocale(newLocaleCode as any); 
  }
};

// 3. حسابات مساعدة
const otherLocale = computed(() => availableLocales.value[0]);
// تغيير أيقونة العلم بناءً على اللغة الحالية
const currentFlagIcon = computed(() => locale.value === 'ar' ? 'flag:gb-4x3' : 'flag:sa-4x3');
</script>

<template>
  <div v-if="otherLocale" class="flex items-center ">
    <button class="flex items-center space-x-2 rtl:space-x-reverse
                 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
                 text-gray-900 dark:text-white font-medium
                 py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
      @click="changeLanguage(otherLocale.code)">
      
      <Icon :name="currentFlagIcon" class="w-5 h-5" />

      <Icon name="lucide:arrow-right" class="w-4 h-4 rtl:rotate-180" />
    </button>
  </div>
</template>