export interface LessonItem {
    id: number;
    digit?: string;
    text: string;
    image?: string;
    colorFrom?: string;
    colorTo?: string;
    shadowColor?: string;
}

export interface Lesson {
    id: number;
    title: string;
    subtitle?: string; // "المجموعة الأولى"
    description?: string;
    type: 'text' | 'gallery' | 'numbers';
    items?: LessonItem[];
    audioUrl?: string;
}

export const lessons: Lesson[] = [
    {
        id: 1,
        title: "الأرقــام",
        subtitle: "المجموعة الأولى",
        type: 'numbers',
        audioUrl: '/numbers.wav',
        items: [
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
        ]
    },
    {
        id: 2,
        title: "المذكر والمؤنث",
        subtitle: "المجموعة الثانية",
        type: 'gallery',
        items: [
            { id: 1, image: '/2/7.jpg', text: 'ولد' },
            { id: 2, image: '/2/8.jpg', text: 'بنت' },
            { id: 2, image: '/2/3.jpg', text: 'طبيب' },
            { id: 2, image: '/2/4.jpg', text: 'طبيبة' },
            { id: 2, image: '/2/5.jpg', text: 'طالب' },
            { id: 2, image: '/2/6.jpg', text: 'طالبة' },
            { id: 2, image: '/2/1.jpg', text: 'طفل' },
            { id: 2, image: '/2/2.jpg', text: 'طفلة' },
            { id: 2, image: '/2/9.jpg', text: 'رجل' },
            { id: 2, image: '/2/10.jpg', text: 'امرأة' },
        ],
        audioUrl: '/2/2.wav',
    },
    {
        id: 3,
        title: "المفرد والمثنى والجمع",
        subtitle: "المجموعة الثالثة",
        type: 'gallery',
        items: [
            { id: 1, image: '/3/1.jpg', text: 'ولد' },
            { id: 2, image: '/3/2.jpg', text: 'ولدان' },
            { id: 2, image: '/3/3.jpg', text: 'أولاد' },
            { id: 2, image: '/3/4.jpg', text: 'بنت' },
            { id: 2, image: '/3/5.jpg', text: 'بنتان' },
            { id: 2, image: '/3/6.jpg', text: 'بنات' },
            { id: 2, image: '/3/7.jpg', text: 'سيارة' },
            { id: 2, image: '/3/8.jpg', text: 'سياراتان' },
            { id: 2, image: '/3/9.jpg', text: 'سيارات' },
            { id: 2, image: '/3/10.jpg', text: 'طائرة' },
            { id: 2, image: '/3/11.jpg', text: 'طائراتان' },
            { id: 2, image: '/3/12.jpg', text: 'طائرات' },
            { id: 2, image: '/3/13.jpg', text: 'سمكة' },
            { id: 2, image: '/3/14.jpg', text: 'سمكتان' },
            { id: 2, image: '/3/15.jpg', text: 'أسماك' },
            { id: 2, image: '/3/16.jpg', text: 'قلم' },
            { id: 2, image: '/3/17.jpg', text: 'قلمان' },
            { id: 2, image: '/3/18.jpg', text: 'أقلام' },



            
        
        ],
        audioUrl: '/3/3.wav',
    },
];

// Helper to fill the rest
for (let i = 3; i <= 50; i++) {
    lessons.push({
        id: i,
        title: `الدرس ${i}`,
        type: 'text',
        description: `وصف الدرس رقم ${i}`,
        audioUrl: `/audio/lesson${i}.mp3`
    });
}
