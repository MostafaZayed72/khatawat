import { defineNuxtPlugin } from '#app';
import AOS from 'aos';
// نحتاج أيضاً إلى استيراد ملفات CSS الخاصة بـ AOS
import 'aos/dist/aos.css'; 

export default defineNuxtPlugin((nuxtApp) => {
    // التأكد من أننا في جانب العميل قبل التهيئة
    if (process.client) {
        AOS.init({
            // الخيارات الافتراضية
            offset: 120, // المسافة (بالبكسل) من النقطة التي يجب أن تبدأ عندها الرسوم المتحركة
            delay: 0, // التأخير الافتراضي في تنفيذ الرسوم المتحركة
            duration: 800, // مدة الرسوم المتحركة
            once: true, // سواء كان يجب أن تحدث الرسوم المتحركة مرة واحدة فقط
            mirror: false, // سواء كان يجب عكس الرسوم المتحركة عند التمرير للأعلى
        });
    }
});
