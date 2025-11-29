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
    type: 'text' | 'gallery' | 'numbers' | 'diagram';
    items?: LessonItem[];
    audioUrl?: string;
    mainImage?: string;
    diagramImages?: string[];
}

export interface Part {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    image: string;
    lessons: Lesson[];
}

export const getParts = (t: (key: string) => string): Part[] => {
    const part1Lessons: Lesson[] = [
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
            title: t('Human Development Stages'),
            subtitle: t('Group Four'),
            type: 'gallery',
            items: [
                { id: 1, image: '/4/1.jpg', text: t('Fetus') },
                { id: 2, image: '/4/2.jpg', text: t('Infant') },
                { id: 2, image: '/4/3.jpg', text: t('Young Boy') },
                { id: 2, image: '/4/4.jpg', text: t('Young Girl') },
                { id: 2, image: '/4/5.jpg', text: t('Man') },
                { id: 2, image: '/4/6.jpg', text: t('Woman') },
                { id: 2, image: '/4/7.jpeg', text: t('Old Man') },
            ],
            audioUrl: '/4/4.wav',
        },
        {
            id: 5,
            title: t('Family'),
            subtitle: t('Group Five'),
            type: 'gallery',
            items: [
                { id: 1, image: '/5/1.jpeg', text: t('Grandfather') },
                { id: 2, image: '/5/2.jpg', text: t('Grandmother') },
                { id: 2, image: '/5/3.jpg', text: t('Father') },
                { id: 2, image: '/5/4.jpg', text: t('Mother') },
                { id: 2, image: '/5/5.jpg', text: t('Son') },
                { id: 2, image: '/5/6.jpg', text: t('Daughter') },
            ],
            audioUrl: '/5/5.wav',
        },
        {
            id: 6,
            title: t('Main Body Parts'),
            subtitle: t('Group Six'),
            type: 'diagram',
            diagramImages: ['/6/body.png'],
            items: [
                { id: 1, text: t('Hair') },
                { id: 2, text: t('Head') },
                { id: 3, text: t('Eye') },
                { id: 4, text: t('Nose') },
                { id: 5, text: t('Ear') },
                { id: 6, text: t('Teeth') },
                { id: 7, text: t('Mouth') },
                { id: 8, text: t('Neck') },
                { id: 9, text: t('Back') },
                { id: 10, text: t('Shoulder') },
                { id: 11, text: t('Chest') },
                { id: 12, text: t('Arm') },
                { id: 13, text: t('Elbow') },
                { id: 14, text: t('Stomach') },
                { id: 15, text: t('Hand') },
                { id: 16, text: t('Finger') },
                { id: 17, text: t('Leg') },
                { id: 18, text: t('Knee') },
                { id: 19, text: t('Ankle') },
                { id: 20, text: t('Foot') },
            ],
            audioUrl: '/6/6.wav',
        },
        {
            id: 7,
            title: t('Colors'),
            subtitle: t('Group Seven'),
            type: 'gallery',
            items: [
                { id: 1, image: '/7/1.jpg', text: t('Black') },
                { id: 2, image: '/7/2.jpg', text: t('White') },
                { id: 2, image: '/7/3.jpg', text: t('Blue') },
                { id: 2, image: '/7/4.jpg', text: t('Purple') },
                { id: 2, image: '/7/5.jpg', text: t('Green') },
                { id: 2, image: '/7/6.jpg', text: t('Yellow') },
                { id: 2, image: '/7/7.jpg', text: t('Brown') },
                { id: 2, image: '/7/8.jpg', text: t('Red') },
                { id: 2, image: '/7/9.jpg', text: t('Pink') },
                { id: 2, image: '/7/10.jpg', text: t('Orange') },
                { id: 2, image: '/7/11.jpg', text: t('Grey') },
            ],
            audioUrl: '/7/7.wav',
        },
        {
            id: 8,
            title: t('Clothing'),
            subtitle: t('Group Eight'),
            type: 'gallery',
            items: [
                { id: 1, image: '/8/1.jpg', text: t('Shirt') },
                { id: 2, image: '/8/2.jpg', text: t('Pants') },
                { id: 2, image: '/8/3.jpg', text: t('Shoes') },
                { id: 2, image: '/8/4.jpg', text: t('Hat') },
                { id: 2, image: '/8/5.jpg', text: t('Abaya') },
                { id: 2, image: '/8/6.jpeg', text: t('Coat') },
                { id: 2, image: '/8/7.jpeg', text: t('Dress') },
                { id: 2, image: '/8/8.jpg', text: t('Socks') },
                { id: 2, image: '/8/9.jpg', text: t('Sneakers') },
            ],
            audioUrl: '/8/8.wav',
        },
        {
            id: 9,
            title: t('School Supplies'),
            subtitle: t('Group Nine'),
            type: 'gallery',
            items: [
                { id: 1, image: '/9/1.jpg', text: t('Book') },
                { id: 2, image: '/9/2.jpeg', text: t('Notebook') },
                { id: 2, image: '/9/3.jpeg', text: t('Pencil') },
                { id: 2, image: '/9/4.jpg', text: t('Ink Pen') },
                { id: 2, image: '/9/5.jpeg', text: t('Bag') },
                { id: 2, image: '/9/6.jpeg', text: t('Ruler') },
                { id: 2, image: '/9/7.jpeg', text: t('Eraser') },
                { id: 2, image: '/9/8.jpeg', text: t('Compass') },
                { id: 2, image: '/9/9.jpg', text: t('Protractor') },
                { id: 2, image: '/9/10.jpg', text: t('Colored Pencils') },
            ],
            audioUrl: '/9/9.wav',
        },
        {
            id: 10,
            title: t('Public Institutions'),
            subtitle: t('Group Ten'),
            type: 'gallery',
            items: [
                { id: 1, image: '/10/1.jpeg', text: t('Mosque') },
                { id: 2, image: '/10/2.jpeg', text: t('Hospital') },
                { id: 2, image: '/10/3.jpeg', text: t('Police Station') },
                { id: 2, image: '/10/4.jpeg', text: t('Stadium') },
                { id: 2, image: '/10/5.jpeg', text: t('Zoo') },
            ],
            audioUrl: '/10/10.wav',
        },
        {
            id: 11,
            title: 'أسماء المؤسسات التعليمية',
            subtitle: 'المجموعة الحادية عشرة',
            type: 'gallery',
            items: [
                { id: 1, image: '/11/1.jpg', text: 'روضة' },
                { id: 2, image: '/11/2.jpg', text: 'مدرسة ابتدائية' },
                { id: 2, image: '/11/3.jpg', text: 'مدرسة متوسطة' },
                { id: 2, image: '/11/4.jpg', text: 'معهد' },
                { id: 2, image: '/11/5.jpg', text: 'كلية' },
                { id: 2, image: '/11/6.jpg', text: 'جامعة' },
            ],
            audioUrl: '/11/11.wav',
        },
    ];

    // Helper to fill the rest of Part 1 up to 39 (or 50 as before)
    for (let i = 11; i <= 39; i++) {
        part1Lessons.push({
            id: i,
            title: t('Lesson') + ' ' + i,
            type: 'text',
            description: t('Description of lesson') + ' ' + i,
            audioUrl: `/audio/lesson${i}.mp3`
        });
    }

    return [
        {
            id: 1,
            title: t('Part One'),
            description: t('Basics and Daily Life'),
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            image: '/parts/1.png',
            lessons: part1Lessons
        },
        {
            id: 2,
            title: t('Part Two'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/2.png',
            lessons: []
        },
        {
            id: 3,
            title: t('Part Three'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/3.png',
            lessons: []
        },
        {
            id: 4,
            title: t('Part Four'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/4.png',
            lessons: []
        }
    ];
};

