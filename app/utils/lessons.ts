import { getLevel1Lessons } from './data/level1';
import { getLevel2Lessons } from './data/level2';
import { getLevel3Lessons } from './data/level3';

export interface LessonItem {
    id: number;
    digit?: string;
    text?: string;
    text2?: string;
    image?: string;
    colorFrom?: string;
    colorTo?: string;
    shadowColor?: string;
    speaker?: string;
    speakerColor?: string;
    letter?: string;
    highlight?: string;
    words?: string[];
    listenImage?: string;
    readImage?: string;
    letters?: string[];
    word?: string;
}

export interface DistinguishItem {
    id: number;
    badge: string;
    long: string;
    short: string;
}

export interface WritingPracticeItem {
    id: number;
    text: string;
    sub: string;
    text2?: string; // The damma/kasra version or just repeating
    sub2?: string;
    type: 'solid' | 'dotted';
    image?: string;
}

export interface ExerciseItem {
    id: number;
    type: 'circle' | 'think';
    title?: string;
    letter?: string;
    words?: (string | { id: number; text: string })[]; // keys for translations or objects
    image?: string;
    answer?: string;
}

export interface Lesson {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    type: 'text' | 'gallery' | 'numbers' | 'diagram' | 'hijri' | 'weekDays' | 'drops' | 'textGrid' | 'opposites' | 'conversation' | 'shortVowels' | 'cubes' | 'letterExamples' | 'readWriteReview' | 'alphabetChart' | 'unitIntro' | 'readWriteRows' | 'assembleWrite';
    items?: LessonItem[];
    distinguish?: DistinguishItem[];
    writingPractice?: WritingPracticeItem[];
    exercises?: ExerciseItem[];
    audioUrl?: string; // Legacy/Fallback
    watchAudio?: string;
    listenAudio?: string;
    readAudio?: string;
    writeAudio?: string;
    distinguishAudio?: string;
    thinkAudio?: string;
    circleAudio?: string;
    exercisesAudio?: string; // General exercises audio
    mainImage?: string;
    diagramImages?: string[];
    groupNumber?: number;
    writingImage?: string;
    writingImages?: string[];
    remember?: string[];
    rememberAudio?: string;
    assemble?: { id: number; letters: string[]; word: string }[];
    assembleAudio?: string;
}

export interface Part {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    image: string;
    pdfUrl?: string;
    lessons: Lesson[];
}

export const getParts = (t: (key: string) => string): Part[] => {
    return [
        {
            id: 1,
            title: t('Part One'),
            description: t('Basics and Daily Life'),
            videoUrl: 'https://www.youtube.com/embed/lTZBNRYJzi4',
            image: '/parts/1.png',
            pdfUrl: 'https://drive.google.com/file/d/1nYdgUosHeyyZNPMG8vrOPGakUA7oUZrE/view?usp=sharing',
            lessons: getLevel1Lessons(t)
        },
        {
            id: 2,
            title: t('Part Two'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/2.png',
            pdfUrl: 'https://drive.google.com/file/d/1IC6svlKgNDBB-4Vtc24mAUA_-xTkRG7m/view?usp=sharing',
            lessons: getLevel2Lessons(t)
        },
        {
            id: 3,
            title: t('Part Three'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/3.png',
            pdfUrl: 'https://drive.google.com/file/d/1qHlC5N6G1qJ6Q0Zp0yv_V4Z4QdC7q_J/view?usp=sharing',
            lessons: getLevel3Lessons(t)

        },
        {
            id: 4,
            title: t('Part Four'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/4.png',
            pdfUrl: 'https://drive.google.com/file/d/1IfVNk1ne8EtEHjuvAQ-33TiGG-C-8G-e/view?usp=sharing',
            lessons: []
        }
    ];
};
