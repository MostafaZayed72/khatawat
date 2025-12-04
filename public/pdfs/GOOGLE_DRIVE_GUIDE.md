# استخدام Google Drive لعرض ملفات PDF

## 📋 الخطوات المطلوبة:

### 1. رفع ملفات PDF إلى Google Drive

1. افتح [Google Drive](https://drive.google.com)
2. ارفع ملفات PDF الأربعة (level1.pdf, level2.pdf, level3.pdf, level4.pdf)
3. لكل ملف:
   - انقر بالزر الأيمن على الملف
   - اختر "مشاركة" أو "Share"
   - اضغط على "تغيير" بجانب "مقيّد"
   - اختر "أي شخص لديه الرابط" (Anyone with the link)
   - تأكد من أن الصلاحية "عارض" (Viewer) وليس "محرر"
   - انسخ الرابط

### 2. الحصول على معرف الملف (File ID)

الرابط الذي نسخته سيكون بهذا الشكل:
```
https://drive.google.com/file/d/1ABC123xyz456DEF789/view?usp=sharing
```

معرف الملف هو الجزء بين `/d/` و `/view`:
```
1ABC123xyz456DEF789
```

### 3. تحديث الكود

في ملف `e:\projects\khatwat\app\utils\lessons.ts`، استبدل:
- `YOUR_FILE_ID_LEVEL1` بمعرف ملف المستوى 1
- `YOUR_FILE_ID_LEVEL2` بمعرف ملف المستوى 2
- `YOUR_FILE_ID_LEVEL3` بمعرف ملف المستوى 3
- `YOUR_FILE_ID_LEVEL4` بمعرف ملف المستوى 4

### مثال:
```typescript
pdfUrl: 'https://drive.google.com/file/d/1ABC123xyz456DEF789/preview',
```

## ✅ المميزات:

1. **لا حاجة لرفع الملفات على السيرفر** - الملفات على Google Drive
2. **دعم الملفات الكبيرة** - حتى 100 MB أو أكثر
3. **عرض مباشر** - بدون تحميل
4. **أمان عالي** - Google Drive يمنع التحميل المباشر في وضع Preview
5. **سرعة عالية** - Google Drive CDN سريع جداً

## 🔒 الأمان:

- استخدام `/preview` بدلاً من `/view` يمنع زر التحميل
- الصلاحيات "عارض فقط" تمنع التعديل
- لا يمكن تحميل الملف مباشرة من iframe

## 📝 ملاحظات:

- تأكد من أن الملفات مشاركة كـ "أي شخص لديه الرابط"
- استخدم `/preview` في نهاية الرابط وليس `/view`
- الملفات ستُعرض داخل iframe بشكل آمن
