import { getLevel1Lessons } from './data/level1';
import { getLevel2Lessons } from './data/level2';
import { getLevel3Lessons } from './data/level3';
import { getLevel4Lessons } from './data/level4';

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
    readImage2?: string;
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
    type: 'circle' | 'think' | 'input' | 'text';
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
    type: 'text' | 'gallery' | 'numbers' | 'diagram' | 'hijri' | 'weekDays' | 'drops' | 'textGrid' | 'opposites' | 'conversation' | 'shortVowels' | 'cubes' | 'letterExamples' | 'readWriteReview' | 'alphabetChart' | 'unitIntro' | 'readWriteRows' | 'assembleWrite' | 'arrangeWrite' | 'readGrid' | 'ovalGrid' | 'tanweenTable' | 'dictation' | 'sentenceArrange' | 'boxedWriteRows' | 'contentWithExercises';
    items?: LessonItem[];
    distinguish?: DistinguishItem[];
    writingPractice?: WritingPracticeItem[];
    exercises?: ExerciseItem[];
    exercisesTitle?: string;
    audioUrl?: string; // Legacy/Fallback
    watchAudio?: string;
    listenAudio?: string;
    readAudio?: string;
    readImage?: string;
    readImage2?: string;
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
    colorTheme?: string;
    columns?: { id: number; header: string; color: string; audioUrl?: string; items: { id: number; text: string; highlight?: string }[] }[];
    gridCols?: number;
    readingText?: string[];
    grammarTitle?: string;
    grammarRules?: string[];
    grammarImage?: string;
    tableData?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    tableData2?: { title?: string; headers: string[]; rows: string[][] };
    tableData3?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    tableData4?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    tableData5?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    tableData6?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    tableData7?: { title?: string; description?: string; headers: string[]; rows: string[][] };
    story?: { text: string; image: string }[];
    maddDiagram?: {
        items: {
            word: string;
            madd: { text: string; label: string };
            mamdooh: { text: string; label: string };
        }[];
        partsOfSpeech?: { title: string; branches: string[] };
        nounDefinition?: { title: string; text: string };
        nounExamples?: { title: string; items: string[] };
        verbDefinition?: { title: string; text: string };
        verbDefinition2?: { title: string; text: string };
        verbDefinition3?: { title: string; text: string };
        verbalSentenceParsing?: {
            title: string;
            points: string[];
            thirdComponent?: { title: string; content: string };
            parsingTitle: string;
            parsingSentences: string[];
            table: { headers: string[]; rows: string[][] };
        };
        verbExamples?: { title: string; columns: { title: string; item: string }[] };
        particleDefinition?: { title: string; text: string };
        particleExamples?: { title: string; items: string[] };
        nominalSentenceIntro?: { title: string; sentences: string[] };
        nominalSentenceDefinition?: { title: string; text: string; footer: string };
        nominalSentenceDiagram?: { title: string; branches: { title: string; text: string; color: string }[] };
        nounBenefit?: { title: string; subtitle: string; examples: { text: string; highlight: string }[]; footer: string };
        nounDivision?: {
            title: string;
            subtitle: string;
            types: { id: number; name: string; color: string }[];
            definitions: { title: string; text: string }[];
        };
        verbalSentenceWriting?: { title: string; count: number };
        verbalSentenceConstruction?: {
            title: string;
            models: {
                components: { label: string; color: 'orange' | 'green' | 'blue' }[];
                example: string;
            }[];
        };
        verbalSentenceSummary?: { points: string[] };
    };
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
            videoUrl: 'CPAuON_5d4I',
            image: '/parts/1.png',
            pdfUrl: 'https://drive.google.com/file/d/1nYdgUosHeyyZNPMG8vrOPGakUA7oUZrE/view?usp=sharing',
            lessons: getLevel1Lessons(t)
        },
        {
            id: 2,
            title: t('Part Two'),
            description: t('Coming Soon'),
            videoUrl: '-oulNG9AriU',
            image: '/parts/2.png',
            pdfUrl: 'https://drive.google.com/file/d/1IfVNk1ne8EtEHjuvAQ-33TiGG-C-8G-e/view?usp=sharing',
            lessons: getLevel2Lessons(t)
        },
        {
            id: 3,
            title: t('Part Three'),
            description: t('Coming Soon'),
            videoUrl: 'z1WJUYE397s',
            image: '/parts/3.png',
            pdfUrl: 'https://drive.google.com/file/d/1qHlC5N6G1qJ6Q0Zp0yv_V4Z4QdC7q_J/view?usp=sharing',
            lessons: getLevel3Lessons(t)

        },
        {
            id: 4,
            title: t('Part Four'),
            description: t('Coming Soon'),
            videoUrl: 'OGA-lTea-5w',
            image: '/parts/4.png',
            pdfUrl: 'https://drive.google.com/file/d/1IC6svlKgNDBB-4Vtc24mAUA_-xTkRG7m/view?usp=sharing',
            lessons: getLevel4Lessons(t)
        }
    ];
};
