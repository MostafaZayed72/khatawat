<script setup lang="ts">
import { useLocaleHead } from '#i18n';

useHead(useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
}));


</script>

<template>
  <div class="relative min-h-screen flex justify-center items-center">


    <NuxtPage class="" />
    

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