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
    subtitle?: string;
    description?: string;
    type: 'text' | 'gallery' | 'numbers';
    items?: LessonItem[];
    audioUrl?: string;
}

export const getLessons = (t: (key: string) => string): Lesson[] => {
    const lessons: Lesson[] = [
        {
            id: 1,
            title: t('Numbers'),
            subtitle: t('Group One'),
            type: 'numbers',
            audioUrl: '/numbers.wav',
            items: [
                { id: 1, digit: '1', text: t('One'), colorFrom: '#FF9800', colorTo: '#FFC107', shadowColor: '#E65100' },
                { id: 2, digit: '2', text: t('Two'), colorFrom: '#03A9F4', colorTo: '#00BCD4', shadowColor: '#01579B' },
                { id: 3, digit: '3', text: t('Three'), colorFrom: '#9C27B0', colorTo: '#E040FB', shadowColor: '#4A148C' },
                { id: 4, digit: '4', text: t('Four'), colorFrom: '#4CAF50', colorTo: '#8BC34A', shadowColor: '#1B5E20' },
                { id: 5, digit: '5', text: t('Five'), colorFrom: '#2196F3', colorTo: '#64B5F6', shadowColor: '#0D47A1' },
                { id: 6, digit: '6', text: t('Six'), colorFrom: '#E91E63', colorTo: '#F48FB1', shadowColor: '#880E4F' },
                { id: 7, digit: '7', text: t('Seven'), colorFrom: '#F44336', colorTo: '#EF5350', shadowColor: '#B71C1C' },
                { id: 8, digit: '8', text: t('Eight'), colorFrom: '#FF5722', colorTo: '#FF7043', shadowColor: '#BF360C' },
                { id: 9, digit: '9', text: t('Nine'), colorFrom: '#795548', colorTo: '#8D6E63', shadowColor: '#3E2723' },
                { id: 10, digit: '10', text: t('Ten'), colorFrom: '#607D8B', colorTo: '#78909C', shadowColor: '#263238' },
                { id: 100, digit: '100', text: t('Hundred'), colorFrom: '#009688', colorTo: '#26A69A', shadowColor: '#004D40' },
                { id: 1000, digit: '1000', text: t('Thousand'), colorFrom: '#3F51B5', colorTo: '#5C6BC0', shadowColor: '#1A237E' },
                { id: 1000000, digit: '1,000,000', text: t('Million'), colorFrom: '#673AB7', colorTo: '#7E57C2', shadowColor: '#311B92' },
                { id: 1000000000, digit: '1,000,000,000', text: t('Billion'), colorFrom: '#9C27B0', colorTo: '#AB47BC', shadowColor: '#4A148C' },
            ]
        },
        {
            id: 2,
            title: t('Masculine and Feminine'),
            subtitle: t('Group Two'),
            type: 'gallery',
            items: [
                { id: 1, image: '/2/7.jpg', text: t('Male Child') },
                { id: 2, image: '/2/8.jpg', text: t('Female Child') },
                { id: 2, image: '/2/3.jpg', text: t('Male Doctor') },
                { id: 2, image: '/2/4.jpg', text: t('Female Doctor') },
                { id: 2, image: '/2/5.jpg', text: t('Male Student') },
                { id: 2, image: '/2/6.jpg', text: t('Female Student') },
                { id: 2, image: '/2/1.jpg', text: t('Male Child') },
                { id: 2, image: '/2/2.jpg', text: t('Female Child') },
                { id: 2, image: '/2/9.jpg', text: t('Man') },
                { id: 2, image: '/2/10.jpg', text: t('Woman') },
            ],
            audioUrl: '/2/2.wav',
        },
        {
            id: 3,
            title: t('Singular, Dual, and Plural'),
            subtitle: t('Group Three'),
            type: 'gallery',
            items: [
                { id: 1, image: '/3/1.jpg', text: t('Boy') },
                { id: 2, image: '/3/2.jpg', text: t('Two Boys') },
                { id: 2, image: '/3/3.jpg', text: t('Boys') },
                { id: 2, image: '/3/4.jpg', text: t('Girl') },
                { id: 2, image: '/3/5.jpg', text: t('Two Girls') },
                { id: 2, image: '/3/6.jpg', text: t('Girls') },
                { id: 2, image: '/3/7.jpg', text: t('Car') },
                { id: 2, image: '/3/8.jpg', text: t('Two Cars') },
                { id: 2, image: '/3/9.jpg', text: t('Cars') },
                { id: 2, image: '/3/10.jpg', text: t('Airplane') },
                { id: 2, image: '/3/11.jpg', text: t('Two Airplanes') },
                { id: 2, image: '/3/12.jpg', text: t('Airplanes') },
                { id: 2, image: '/3/13.jpg', text: t('Fish') },
                { id: 2, image: '/3/14.jpg', text: t('Two Fish') },
                { id: 2, image: '/3/15.jpg', text: t('Fishes') },
                { id: 2, image: '/3/16.jpg', text: t('Pen') },
                { id: 2, image: '/3/17.jpg', text: t('Two Pens') },
                { id: 2, image: '/3/18.jpg', text: t('Pens') },
            ],
            audioUrl: '/3/3.wav',
        },
        {
            id: 4,
            title: "مراحل تطور الإنسان",
            subtitle: "المجموعة الرابعة",
            type: 'gallery',
            items: [
                { id: 1, image: '/4/1.jpg', text: 'جنين' },
                { id: 2, image: '/4/2.jpg', text: 'رضيع' },
                { id: 2, image: '/4/3.jpg', text: 'فتى' },
                { id: 2, image: '/4/4.jpg', text: 'فتاة' },
                { id: 2, image: '/4/5.jpg', text: 'رجل' },
                { id: 2, image: '/4/6.jpg', text: 'امرأة' },
                { id: 2, image: '/4/7.jpg', text: 'عجوز' },
            ],
            audioUrl: '/4/4.wav',
        },
    ];

    // Helper to fill the rest
    for (let i = 5; i <= 50; i++) {
        lessons.push({
            id: i,
            title: t('Lesson') + ' ' + i,
            type: 'text',
            description: t('Description of lesson') + ' ' + i,
            audioUrl: `/audio/lesson${i}.mp3`
        });
    }

    return lessons;
};

