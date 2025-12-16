import type { Lesson } from '../lessons';

export const getLevel2Lessons = (t: (key: string) => string): Lesson[] => {
    const part2Lessons: Lesson[] = [
        {
            id: 1,
            title: t('The Three Short Vowels (1)'),
            type: 'shortVowels',
            items: [
                {
                    id: 1,
                    text: t('Fatha'),
                    image: '/level2/1/1.png',
                    text2: t('By opening the mouth')
                },
            ],
            audioUrl: '/level2/1/1.wav',
        },
        {
            id: 2,
            title: t('The Three Short Vowels (2)'),
            type: 'shortVowels',
            items: [
                {
                    id: 1,
                    text: t('Kasra'),
                    image: '/level2/1/2.png',
                    text2: t('By lowering the lower jaw')
                },
            ],
            audioUrl: '/level2/2/2.wav',
        },
        {
            id: 3,
            title: t('The Three Short Vowels (3)'),
            type: 'shortVowels',
            items: [
                {
                    id: 1,
                    text: t('Damma'),
                    image: '/level2/1/3.png',
                    text2: t('By rounding the lips')
                },
            ],
            audioUrl: '/level2/3/3.wav',
        },
        {
            id: 4,
            title: t('Group One'),
            type: 'cubes',
            groupNumber: 1,
            items: [
                {
                    id: 1,
                    text: 'أ',
                    colorFrom: '#FFA726',
                    colorTo: '#FFB74D',
                    shadowColor: '#F57C00'
                },
                {
                    id: 2,
                    text: 'ب',
                    colorFrom: '#EC407A',
                    colorTo: '#F06292',
                    shadowColor: '#C2185B'
                },
                {
                    id: 3,
                    text: 'ت',
                    colorFrom: '#42A5F5',
                    colorTo: '#64B5F6',
                    shadowColor: '#1976D2'
                },
                {
                    id: 4,
                    text: 'ث',
                    colorFrom: '#66BB6A',
                    colorTo: '#81C784',
                    shadowColor: '#388E3C'
                },
            ],
            audioUrl: '/level2/4/4.wav',
        },
        {
            id: 5,
            title: t('Letter Alif Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Lion'), image: '/level2/5/lion.jpg', letter: 'أَ', highlight: 'أ', listenImage: '/level2/5/listen/1.png', readImage: '/level2/5/read/1.png' },
                { id: 2, text: t('Needle'), image: '/level2/5/needle.png', letter: 'إِ', highlight: 'إ', listenImage: '/level2/5/listen/2.png', readImage: '/level2/5/read/2.png' },
                { id: 3, text: t('Ear'), image: '/level2/5/ear.jpg', letter: 'أُ', highlight: 'أ', listenImage: '/level2/5/listen/3.png', readImage: '/level2/5/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'آ', short: 'أَ' },
                { id: 2, badge: 'ي', long: 'إِيـــ', short: 'إِ' },
                { id: 3, badge: 'و', long: 'أُو', short: 'أُ' },
            ],
            writingPractice: [
                { id: 1, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'solid', image: '/level2/5/write/1.png' },
                { id: 2, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'dotted', image: '/level2/5/write/2.png' },
                { id: 3, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'dotted', image: '/level2/5/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'أ',
                    title: t('Exercise: Circle Letter Alif'),
                    words: [
                        'أَسَد', 'سَأَلَ', 'فَأْر',
                        'بَاسِم', 'أَجَابَ', 'أَرْنَب',
                        'زَأَرَ', 'مَاء', 'كَأْس'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Alif'),
                    image: '/level2/5/rabbit.jpg',
                    answer: t('Rabbit')
                }
            ],

            watchAudio: '/level2/5/1.mp3',
            listenAudio: '/level2/5/2.mp3',
            readAudio: '/level2/5/3.mp3',
            writeAudio: '/level2/5/4.mp3',
            distinguishAudio: '/level2/5/5.mp3',
            thinkAudio: '/level2/5/7.mp3',
            circleAudio: '/level2/5/6.mp3',
            writingImage: '/level2/5/write_full.png',
        },
        {
            id: 6,
            title: t('Letter Baa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Duck'), image: '/level2/6/Batt.jpg', letter: 'بَ', highlight: 'ب', listenImage: '/level2/6/listen/1.png', readImage: '/level2/6/read/1.png' },
                { id: 2, text: t('Watermelon'), image: '/level2/6/watermelon.jpg', letter: 'بِ', highlight: 'ب', listenImage: '/level2/6/listen/2.png', readImage: '/level2/6/read/2.png' },
                { id: 3, text: t('Tower'), image: '/level2/6/tower.jpg', letter: 'بُ', highlight: 'ب', listenImage: '/level2/6/listen/3.png', readImage: '/level2/6/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'بَا', short: 'بَ' },
                { id: 2, badge: 'ي', long: 'بِيـــ', short: 'بِ' },
                { id: 3, badge: 'و', long: 'بُو', short: 'بُ' },
            ],
            writingPractice: [
                { id: 1, text: 'بَ', sub: 'بِ', text2: 'بُ', type: 'solid', image: '/level2/6/write/1.png' },
                { id: 2, text: 'بَ', sub: 'بِ', text2: 'بُ', type: 'dotted', image: '/level2/6/write/2.png' },
                { id: 3, text: 'بَ', sub: 'بِ', text2: 'بُ', type: 'dotted', image: '/level2/6/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ب',
                    title: t('Exercise: Circle Letter Baa'),
                    words: [
                        'بُرْج', 'بَطِيخ', 'بَط',
                        'أَب', 'بَاب', 'بِنْت',
                        'بَيْت', 'كِتَاب', 'عِنَب'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Baa'),
                    image: '/level2/6/orange.jpg',
                    answer: t('Orange')
                }
            ],
            audioUrl: '/level2/6/6.wav',
            watchAudio: '/level2/6/1.mp3',
            listenAudio: '/level2/6/2.mp3',
            readAudio: '/level2/6/3.mp3',
            writeAudio: '/level2/6/4.mp3',
            distinguishAudio: '/level2/6/5.mp3',
            thinkAudio: '/level2/6/7.mp3',
            circleAudio: '/level2/6/6.mp3',
            writingImages: ['/level2/6/write_1.png', '/level2/6/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ'],
            rememberAudio: '/level2/6/remember.mp3',
            assemble: [
                { id: 1, letters: ['أَ', 'ب'], word: 'أَب' },
                { id: 2, letters: ['بُ', 'ن'], word: 'بُن' },
                { id: 3, letters: ['بَ', 'ا', 'ب'], word: 'بَاب' },
                { id: 4, letters: ['بِ', 'نْ', 'ت'], word: 'بِنْت' }
            ],
            assembleAudio: '/level2/6/assemble.mp3',
        },
        {
            id: 7,
            title: t('Letter Taa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Dates'), image: '/level2/7/dates.jpg', letter: 'تَ', highlight: 'ت', listenImage: '/level2/7/listen/1.png', readImage: '/level2/7/read/1.png' },
                { id: 2, text: t('Figs'), image: '/level2/7/fig.jpg', letter: 'تِ', highlight: 'ت', listenImage: '/level2/7/listen/2.png', readImage: '/level2/7/read/2.png' },
                { id: 3, text: t('Berries'), image: '/level2/7/berries.jpg', letter: 'تُ', highlight: 'ت', listenImage: '/level2/7/listen/3.png', readImage: '/level2/7/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'تَا', short: 'تَ' },
                { id: 2, badge: 'ي', long: 'تِيـــ', short: 'تِ' },
                { id: 3, badge: 'و', long: 'تُو', short: 'تُ' },
            ],
            writingPractice: [
                { id: 1, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'solid', image: '/level2/7/write/1.png' },
                { id: 2, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'dotted', image: '/level2/7/write/2.png' },
                { id: 3, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'dotted', image: '/level2/7/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ت',
                    title: t('Exercise: Circle Letter Taa'),
                    words: [
                        'مُعْتَزّ', 'مِفْتَاح', 'تِين',
                        'نَبَات', 'تَمْر', 'تِمْسَاح',
                        'بَيْت', 'تَاج', 'زَيْت'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Taa'),
                    image: '/level2/7/apple.jpg',
                    answer: t('Apple').replace('Apple', 'تُفَّاح')
                }
            ],
            audioUrl: '/level2/7/7.wav',
            watchAudio: '/level2/7/1.mp3',
            listenAudio: '/level2/7/2.mp3',
            readAudio: '/level2/7/3.mp3',
            writeAudio: '/level2/7/4.mp3',
            distinguishAudio: '/level2/7/5.mp3',
            thinkAudio: '/level2/7/7.mp3',
            circleAudio: '/level2/7/6.mp3',
            writingImages: ['/level2/7/write_1.png', '/level2/7/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ'],
            rememberAudio: '/level2/7/remember.mp3',
            assemble: [
                { id: 1, letters: ['تَا', 'بَ'], word: 'تَابَ' },
                { id: 2, letters: ['تُو', 'تُ'], word: 'تُوتُ' },
                { id: 3, letters: ['بَ', 'ا', 'تَ', 'تْ'], word: 'بَاتَتْ' }
            ],
            assembleAudio: '/level2/7/assemble.mp3',
        },

        {
            id: 8,
            title: t('Letter Thaa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Bull'), image: '/level2/8/bull.jpg', letter: 'ثَ', highlight: 'ث', listenImage: '/level2/8/listen/1.png', readImage: '/level2/8/read/1.png' },
                { id: 2, text: t('Clothes'), image: '/level2/8/clothes.jpg', letter: 'ثِ', highlight: 'ث', listenImage: '/level2/8/listen/2.png', readImage: '/level2/8/read/2.png' },
                { id: 3, text: t('Snake'), image: '/level2/8/snake.jpg', letter: 'ثُ', highlight: 'ث', listenImage: '/level2/8/listen/3.png', readImage: '/level2/8/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'ثَا', short: 'ثَ' },
                { id: 2, badge: 'ي', long: 'ثِيـــ', short: 'ثِ' },
                { id: 3, badge: 'و', long: 'ثُو', short: 'ثُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ثَبَتَ', sub: 'ثَابَ', text2: 'بَثَّ', type: 'solid' },
                { id: 2, text: 'ثَبَتَ', sub: 'ثَابَ', text2: 'بَثَّ', type: 'dotted' },
                { id: 3, text: 'ثَبَتَ', sub: 'ثَابَ', text2: 'بَثَّ', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ث',
                    title: t('Exercise: Circle Letter Thaa'),
                    words: [
                        'أَثَاث', 'ثَعْلَب', 'مُثَلَّث',
                        'ثَوْر', 'مِحْرَاث', 'ثَلَّاجَة',
                        'ثِمَار', 'ثَلَاثَة', 'يَثْرِب'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Thaa'),
                    image: '/level2/8/thobe.jpg',
                    answer: t('Thobe')
                }
            ],
            audioUrl: '/level2/8/8.wav',
            watchAudio: '/level2/8/1.mp3',
            listenAudio: '/level2/8/2.mp3',
            readAudio: '/level2/8/3.mp3',
            writeAudio: '/level2/8/4.mp3',
            distinguishAudio: '/level2/8/5.mp3',
            thinkAudio: '/level2/8/7.mp3',
            circleAudio: '/level2/8/6.mp3',
            writingImages: ['/level2/8/write_1.png', '/level2/8/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ'],
            rememberAudio: '/level2/8/remember.mp3',
            assemble: [
                { id: 1, letters: ['ثَ', 'بَ', 'تَ'], word: 'ثَبَتَ' },
                { id: 2, letters: ['ثَا', 'بَ'], word: 'ثَابَ' },
                { id: 3, letters: ['بَ', 'ثَّ'], word: 'بَثَّ' }
            ],
            assembleAudio: '/level2/8/assemble.mp3',
        },
        {
            id: 9,
            title: t('First Group Words Review'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['بُن', 'بَاب', 'أَب'] },
                { id: 2, text: '', words: ['بَاتَ', 'تُوت', 'تَابَ'] },
                { id: 3, text: '', words: ['بَثَّ', 'ثَابَ', 'ثَبَتَ'] },
            ],
            audioUrl: '/level2/9/9.wav',
        },
        {
            id: 10,
            title: t('The Second Group'),
            type: 'cubes',
            groupNumber: 2,
            items: [
                {
                    id: 1,
                    text: 'ج',
                    colorFrom: '#F06292',
                    colorTo: '#F48FB1',
                    shadowColor: '#D81B60'
                },
                {
                    id: 2,
                    text: 'ح',
                    colorFrom: '#29B6F6',
                    colorTo: '#4FC3F7',
                    shadowColor: '#0288D1'
                },
                {
                    id: 3,
                    text: 'خ',
                    colorFrom: '#9CCC65',
                    colorTo: '#AED581',
                    shadowColor: '#689F38'
                },
            ],
            audioUrl: '/level2/10/10.wav',
        },
        {
            id: 11,
            title: t('Letter Jeem Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Carrots'), image: '/level2/11/carrots.jpg', letter: 'جَ', highlight: 'ج', listenImage: '/level2/11/listen/1_large.png', readImage: '/level2/11/read/1.png' },
                { id: 2, text: t('Camels'), image: '/level2/11/camels.jpg', letter: 'جِ', highlight: 'ج', listenImage: '/level2/11/listen/2_large.png', readImage: '/level2/11/read/2.png' },
                { id: 3, text: t('Soldiers'), image: '/level2/11/soldiers.jpg', letter: 'جُ', highlight: 'ج', listenImage: '/level2/11/listen/3_large.png', readImage: '/level2/11/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'جَا', short: 'جَ' },
                { id: 2, badge: 'ي', long: 'جِي', short: 'جِ' },
                { id: 3, badge: 'و', long: 'جُو', short: 'جُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ج', sub: 'جَ', type: 'solid' },
                { id: 2, text: 'جِ', sub: 'جُ', type: 'dotted' },
                { id: 3, text: 'تَاج', sub: 'جَبَل', type: 'solid' },
                { id: 4, text: 'جُبّ', sub: 'جَابَ', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ج',
                    title: t('Exercise: Circle Letter Jeem'),
                    words: [
                        { id: 1, text: 'مَعْجُون' }, // Maajoon
                        { id: 2, text: 'جَمَل' }, // Jamal
                        { id: 3, text: 'جِسْر' }, // Jisr
                        { id: 4, text: 'بُرْج' }, // Burj
                        { id: 5, text: 'جَرَادَة' }, // Jaraada
                        { id: 6, text: 'نُجُود' }, // Nujuud
                        { id: 7, text: 'جَمِيلَة' }, // Jameela
                        { id: 8, text: 'أَمْجَد' }, // Amjad
                        { id: 9, text: 'سَجَّادَة' }, // Sajjada
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Jeem'),
                    image: '/level2/11/crown.jpg',
                    answer: 'تَاج' // Taaj
                }
            ],
            audioUrl: '/level2/11/11.wav',
            watchAudio: '/level2/11/1.mp3',
            listenAudio: '/level2/11/2.mp3',
            readAudio: '/level2/11/3.mp3',
            writeAudio: '/level2/11/4.mp3',
            distinguishAudio: '/level2/11/5.mp3',
            thinkAudio: '/level2/11/7.mp3',
            circleAudio: '/level2/11/6.mp3',
            writingImages: ['/level2/11/write_1.png', '/level2/11/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ'],
            rememberAudio: '/level2/11/remember.mp3',
            assemble: [
                { id: 1, letters: ['تَا', 'ج'], word: 'تَاج' },
                { id: 2, letters: ['جُ', 'بّ'], word: 'جُبّ' },
                { id: 3, letters: ['جَا', 'بَ'], word: 'جَابَ' }
            ],
            assembleAudio: '/level2/11/assemble.mp3',
        },
        {
            id: 12,
            title: t('Letter Haa Lesson'),
            subtitle: t('The Second Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Rope'), image: '/level2/12/rope.png', letter: 'حَ', highlight: 'ح', listenImage: '/level2/12/listen/1.png', readImage: '/level2/12/read/1.png' },
                { id: 2, text: t('Horse'), image: '/level2/12/horse.png', letter: 'حِ', highlight: 'ح', listenImage: '/level2/12/listen/2.png', readImage: '/level2/12/read/2.png' },
                { id: 3, text: t('Whale'), image: '/level2/12/whale.png', letter: 'حُ', highlight: 'ح', listenImage: '/level2/12/listen/3.png', readImage: '/level2/12/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'حَا', short: 'حَ' },
                { id: 2, badge: 'ي', long: 'حِي', short: 'حِ' },
                { id: 3, badge: 'و', long: 'حُو', short: 'حُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ح', sub: 'حَ', type: 'solid' },
                { id: 2, text: 'حِ', sub: 'حُ', type: 'dotted' },
                { id: 3, text: 'أُحِبُّ', sub: 'بَحْر', type: 'solid' },
                { id: 4, text: 'حَبِيب', sub: 'حَجَبَ', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ح',
                    title: t('Exercise: Circle Letter Haa'),
                    words: [
                        { id: 1, text: 'حِصَان' },
                        { id: 2, text: 'حَضَرَ' },
                        { id: 3, text: 'مَزَحَ' },
                        { id: 4, text: 'حَدِيقَة' },
                        { id: 5, text: 'حَازِم' },
                        { id: 6, text: 'مِلْح' },
                        { id: 7, text: 'فَرِحَ' },
                        { id: 8, text: 'قَمْح' },
                        { id: 9, text: 'حَقْل' },
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Haa'),
                    image: '/level2/12/milk.png',
                    answer: 'حَلِيب'
                }
            ],
            audioUrl: '/level2/12/12.wav',
            watchAudio: '/level2/12/1.mp3',
            listenAudio: '/level2/12/2.mp3',
            readAudio: '/level2/12/3.mp3',
            writeAudio: '/level2/12/4.mp3',
            distinguishAudio: '/level2/12/5.mp3',
            thinkAudio: '/level2/12/7.mp3',
            circleAudio: '/level2/12/6.mp3',
            writingImages: ['/level2/12/write_1.png', '/level2/12/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ'],
            rememberAudio: '/level2/12/remember.mp3',
            assemble: [
                { id: 1, letters: ['أُ', 'حِ', 'بُّ'], word: 'أُحِبُّ' },
                { id: 2, letters: ['بَ', 'حْ', 'ر'], word: 'بَحْر' },
                { id: 3, letters: ['حَ', 'بِي', 'ب'], word: 'حَبِيب' },
                { id: 4, letters: ['حَ', 'جَ', 'بَ'], word: 'حَجَبَ' }
            ],
            assembleAudio: '/level2/12/assemble.mp3',
        },
        {
            id: 13,
            title: t('Letter Khaa Lesson'),
            subtitle: t('The Second Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Lettuce'), image: '/level2/13/lettuce.jpg', letter: 'خُ', highlight: 'خ', listenImage: '/level2/13/listen/1.png', readImage: '/level2/13/read/1.png' },
                { id: 2, text: t('Cucumber'), image: '/level2/13/cucumber.jpg', letter: 'خِ', highlight: 'خ', listenImage: '/level2/13/listen/2.png', readImage: '/level2/13/read/2.png' },
                { id: 3, text: t('Bread'), image: '/level2/13/bread.jpg', letter: 'خَ', highlight: 'خ', listenImage: '/level2/13/listen/3.png', readImage: '/level2/13/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'خَا', short: 'خَ' },
                { id: 2, badge: 'ي', long: 'خِي', short: 'خِ' },
                { id: 3, badge: 'و', long: 'خُو', short: 'خُ' },
            ],
            writingPractice: [
                { id: 1, text: 'خ', sub: 'خَ', type: 'solid' },
                { id: 2, text: 'خِ', sub: 'خُ', type: 'dotted' },
                { id: 3, text: 'أَخ', sub: 'أُخْت', type: 'solid' },
                { id: 4, text: 'خَابَ', sub: 'بَخْت', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'خ',
                    title: t('Exercise: Circle Letter Khaa'),
                    words: [
                        { id: 1, text: 'خِيَار' }, // Khiaar
                        { id: 2, text: 'خَالِد' }, // Khaled
                        { id: 3, text: 'نَخْلَة' }, // Nakhla
                        { id: 4, text: 'خَيْمَة' }, // Kheimah
                        { id: 5, text: 'بَطِيخ' }, // Bateekh
                        { id: 6, text: 'خَشَب' }, // Khashab
                        { id: 7, text: 'كُوخ' }, //  Kukh
                        { id: 8, text: 'بَخُور' }, // Bakhur
                        { id: 9, text: 'خُرُوف' }, // Khuruf
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Khaa'),
                    image: '/level2/13/peach.jpg',
                    answer: 'خَوْخ'
                }
            ],
            audioUrl: '/level2/13/13.wav',
            watchAudio: '/level2/13/1.mp3',
            listenAudio: '/level2/13/2.mp3',
            readAudio: '/level2/13/3.mp3',
            writeAudio: '/level2/13/4.mp3',
            distinguishAudio: '/level2/13/5.mp3',
            thinkAudio: '/level2/13/7.mp3',
            circleAudio: '/level2/13/6.mp3',
            writingImages: ['/level2/13/write_1.png', '/level2/13/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ'],
            rememberAudio: '/level2/13/remember.mp3',
            assemble: [
                { id: 1, letters: ['أَ', 'خ'], word: 'أَخ' },
                { id: 2, letters: ['أُ', 'خْ', 'ت'], word: 'أُخْت' },
                { id: 3, letters: ['خَا', 'بَ'], word: 'خَابَ' },
                { id: 4, letters: ['بَ', 'خْ', 'ت'], word: 'بَخْت' }
            ],
            assembleAudio: '/level2/13/assemble.mp3',
        },
        {
            id: 14,
            title: t('Second Group Words Review'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['جَابَ', 'جُبّ', 'جَبَل', 'تَاج'] },
                { id: 2, text: '', words: ['حَجَبَ', 'حَبِيب', 'بَحْر', 'أُحِبُّ'] },
                { id: 3, text: '', words: ['بَخْت', 'خَابَ', 'أُخْت', 'أَخ'] },
            ],
            audioUrl: '/level2/14/14.wav',
        },
        {
            id: 15,
            title: t('The Third Group'),
            type: 'cubes',
            groupNumber: 3,
            items: [
                {
                    id: 1,
                    text: 'د',
                    colorFrom: '#FFA726',
                    colorTo: '#FFB74D',
                    shadowColor: '#F57C00'
                },
                {
                    id: 2,
                    text: 'ذ',
                    colorFrom: '#EC407A',
                    colorTo: '#F06292',
                    shadowColor: '#C2185B'
                },
                {
                    id: 3,
                    text: 'ر',
                    colorFrom: '#42A5F5',
                    colorTo: '#64B5F6',
                    shadowColor: '#1976D2'
                },
                {
                    id: 4,
                    text: 'ز',
                    colorFrom: '#66BB6A',
                    colorTo: '#81C784',
                    shadowColor: '#388E3C'
                },
            ],
            audioUrl: '/level2/15/15.wav',
        },
        {
            id: 16,
            title: t('Letter Dal Lesson'),
            subtitle: t('The Third Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Chicken'), image: '/level2/16/chicken.jpg', letter: 'دُ', highlight: 'د', listenImage: '/level2/16/listen/1.png', readImage: '/level2/16/read/1.png' },
                { id: 2, text: t('Rooster'), image: '/level2/16/rooster.jpg', letter: 'دِ', highlight: 'د', listenImage: '/level2/16/listen/2.png', readImage: '/level2/16/read/2.png' },
                { id: 3, text: t('Bear'), image: '/level2/16/bear.jpg', letter: 'دَ', highlight: 'د', listenImage: '/level2/16/listen/3.png', readImage: '/level2/16/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'دَا', short: 'دَ' },
                { id: 2, badge: 'ي', long: 'دِي', short: 'دِ' },
                { id: 3, badge: 'و', long: 'دُو', short: 'دُ' },
            ],
            writingPractice: [
                { id: 1, text: 'د', sub: 'دَ', type: 'solid' },
                { id: 2, text: 'دِ', sub: 'دُ', type: 'dotted' },
                { id: 3, text: 'دُبّ', sub: 'أَدَب', type: 'solid' },
                { id: 4, text: 'جَد', sub: 'حَدِيد', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'د',
                    title: t('Exercise: Circle Letter Dal'),
                    words: [
                        { id: 1, text: 'دَرَّاجَة' }, // Darraaja
                        { id: 2, text: 'مَدَحَ' }, // Madaha
                        { id: 3, text: 'جَدَّتِي' }, // Jaddati
                        { id: 4, text: 'يَد' }, // Yad
                        { id: 5, text: 'جُنْدِي' }, // Jundi
                        { id: 6, text: 'دَوَاء' }, // Dawaa
                        { id: 7, text: 'حَدِيقَة' }, // Hadeeqa
                        { id: 8, text: 'هُدْهُد' }, // Hudhud
                        { id: 9, text: 'مُهَنْدِس' }, // Muhandis
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Dal'),
                    image: '/level2/16/bearr.jpg',
                    answer: 'دُبّ'
                }
            ],
            audioUrl: '/level2/16/16.wav',
            watchAudio: '/level2/16/1.mp3',
            listenAudio: '/level2/16/2.mp3',
            readAudio: '/level2/16/3.mp3',
            writeAudio: '/level2/16/4.mp3',
            distinguishAudio: '/level2/16/5.mp3',
            thinkAudio: '/level2/16/7.mp3',
            circleAudio: '/level2/16/6.mp3',
            writingImages: ['/level2/16/write_1.png', '/level2/16/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ'],
            rememberAudio: '/level2/16/remember.mp3',
            assemble: [
                { id: 1, letters: ['دُ', 'ب'], word: 'دُبّ' },
                { id: 2, letters: ['ب', 'دَ', 'أَ'], word: 'أَدَب' },
                { id: 3, letters: ['د', 'جَ'], word: 'جَد' },
                { id: 4, letters: ['د', 'دِي', 'حَ'], word: 'حَدِيد' }
            ],
            assembleAudio: '/level2/16/assemble.mp3',
        },
        {
            id: 17,
            title: t('Letter Thal Lesson'),
            subtitle: t('The Third Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Gold'), image: '/level2/17/gold.jpg', letter: 'ذَ', highlight: 'ذ', listenImage: '/level2/17/listen/3.png', readImage: '/level2/17/read/3.png' },
                { id: 2, text: t('Arm'), image: '/level2/17/arm.jpg', letter: 'ذِ', highlight: 'ذ', listenImage: '/level2/17/listen/2.png', readImage: '/level2/17/read/2.png' },
                { id: 3, text: t('Corn'), image: '/level2/17/corn.jpg', letter: 'ذُ', highlight: 'ذ', listenImage: '/level2/17/listen/1.png', readImage: '/level2/17/read/1.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'ذَا', short: 'ذَ' },
                { id: 2, badge: 'ي', long: 'ذِي', short: 'ذِ' },
                { id: 3, badge: 'و', long: 'ذُو', short: 'ذُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ذ', sub: 'ذَ', type: 'solid' },
                { id: 2, text: 'ذِ', sub: 'ذُ', type: 'dotted' },
                { id: 3, text: 'ذَابَ', sub: 'جَذَبَ', type: 'solid' },
                { id: 4, text: 'ذِئْب', sub: 'حَبَّذَا', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ذ',
                    title: t('Exercise: Circle Letter Thal'),
                    words: [
                        { id: 1, text: 'جَذَبَ' }, // Jadhaba
                        { id: 2, text: 'أُذُن' }, // Udhun (Ear)
                        { id: 3, text: 'حِذَاء' }, // Hidhaa
                        { id: 4, text: 'نَافِذَة' }, // Nafidha
                        { id: 5, text: 'قُنْفُذ' }, // Qunfudh
                        { id: 6, text: 'غِذَاء' }, // Ghidhaa
                        { id: 7, text: 'ذَرَّة' }, // Dharrah (Atom) - Assuming this based on visually similar word starting with Thal
                        { id: 8, text: 'تِلْمِيذ' }, // Tilmidh
                        { id: 9, text: 'ذِئْب' }, // Thi'b
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Thal'),
                    image: '/level2/17/tail.jpg',
                    answer: 'ذَيْل'
                }
            ],
            audioUrl: '/level2/17/17.wav',
            watchAudio: '/level2/17/1.mp3',
            listenAudio: '/level2/17/2.mp3',
            readAudio: '/level2/17/3.mp3',
            writeAudio: '/level2/17/4.mp3',
            distinguishAudio: '/level2/17/5.mp3',
            thinkAudio: '/level2/17/7.mp3',
            circleAudio: '/level2/17/6.mp3',
            writingImages: ['/level2/17/write_1.png', '/level2/17/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ'],
            rememberAudio: '/level2/17/remember.mp3',
            assemble: [
                { id: 1, letters: ['ذِ', 'ئْـ', 'ب'], word: 'ذِئْب' },
                { id: 2, letters: ['ذُ', 'بَ', 'ا', 'ب'], word: 'ذُبَاب' },
            ],
            assembleAudio: '/level2/17/assemble.mp3',
        },
        {
            id: 18,
            title: t('Letter Raa Lesson'),
            subtitle: t('The Third Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Thunder'), image: '/level2/18/thunder.jpg', letter: 'رَ', highlight: 'ر', listenImage: '/level2/18/listen/1.png', readImage: '/level2/18/read/1.png' },
                { id: 2, text: t('Feather'), image: '/level2/18/feather.jpg', letter: 'رِ', highlight: 'ر', listenImage: '/level2/18/listen/2.png', readImage: '/level2/18/read/2.png' },
                { id: 3, text: t('Pomegranate'), image: '/level2/18/pomegranate.jpg', letter: 'رُ', highlight: 'ر', listenImage: '/level2/18/listen/3.png', readImage: '/level2/18/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'رَا', short: 'رَ' },
                { id: 2, badge: 'ي', long: 'رِي', short: 'رِ' },
                { id: 3, badge: 'و', long: 'رُو', short: 'رُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ر', sub: 'رَ', type: 'solid' },
                { id: 2, text: 'رِ', sub: 'رُ', type: 'dotted' },
                { id: 3, text: 'رَأْس', sub: 'رِجْل', type: 'solid' },
                { id: 4, text: 'مُرُور', sub: 'سُرُور', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ر',
                    title: t('Exercise: Circle Letter Raa'),
                    words: [
                        { id: 1, text: 'دَرَّاجَة' }, // Darraaja
                        { id: 2, text: 'رَأْس' }, // Ra's
                        { id: 3, text: 'رُمَّان' }, // Rummaan
                        { id: 4, text: 'رَمْل' }, // Raml
                        { id: 5, text: 'رِيَاح' }, // Riyaah
                        { id: 6, text: 'الرِّيَاض' }, // Ar-Riyadh
                        { id: 7, text: 'مَطَر' }, // Matar
                        { id: 8, text: 'رَامِي' }, // Rami
                        { id: 9, text: 'مُرُور' }, // Muruur
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Raa'),
                    image: '/level2/18/giraffe.jpg',
                    answer: 'زَرَافَة' // Zaraafa
                }
            ],
            audioUrl: '/level2/18/18.wav',
            watchAudio: '/level2/18/1.mp3',
            listenAudio: '/level2/18/2.mp3',
            readAudio: '/level2/18/3.mp3',
            writeAudio: '/level2/18/4.mp3',
            distinguishAudio: '/level2/18/5.mp3',
            thinkAudio: '/level2/18/7.mp3',
            circleAudio: '/level2/18/6.mp3',
            writingImages: ['/level2/18/write_1.png', '/level2/18/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ'],
            rememberAudio: '/level2/18/remember.mp3',
            assemble: [
                { id: 1, letters: ['رَ', 'حَ', 'بَ'], word: 'رَحَبَ' },
                { id: 2, letters: ['خَ', 'بَ', 'ر'], word: 'خَبَر' },
                { id: 3, letters: ['جَ', 'ا', 'بِ', 'ر'], word: 'جَابِر' },
                { id: 4, letters: ['حِ', 'بْ', 'ر'], word: 'حِبْر' }
            ],
            assembleAudio: '/level2/18/assemble.mp3',
        },
        {
            id: 19,
            title: t('Letter Zay Lesson'),
            subtitle: t('The Third Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Olives'), image: '/level2/19/olives.jpg', letter: 'زَ', highlight: 'ز', listenImage: '/level2/19/listen/1.png', readImage: '/level2/19/read/1.png' },
                { id: 2, text: t('Decoration'), image: '/level2/19/decoration.jpg', letter: 'زِ', highlight: 'ز', listenImage: '/level2/19/listen/2.png', readImage: '/level2/19/read/2.png' },
                { id: 3, text: t('Flowers'), image: '/level2/19/flowers.jpg', letter: 'زُ', highlight: 'ز', listenImage: '/level2/19/listen/3.png', readImage: '/level2/19/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'زَا', short: 'زَ' },
                { id: 2, badge: 'ي', long: 'زِي', short: 'زِ' },
                { id: 3, badge: 'و', long: 'زُو', short: 'زُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ز', sub: 'زَ', type: 'solid' },
                { id: 2, text: 'زِ', sub: 'زُ', type: 'dotted' },
                { id: 3, text: 'زَأَرَ', sub: 'زُجَاج', type: 'solid' },
                { id: 4, text: 'زَارَ', sub: 'جَزَر', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ز',
                    title: t('Exercise: Circle Letter Zay'),
                    words: [
                        { id: 1, text: 'زِير' }, // Zeer
                        { id: 2, text: 'مِزْهَرِيَّة' }, // Mizhariyya
                        { id: 3, text: 'زَمَان' }, // Zaman
                        { id: 4, text: 'زَفِير' }, // Zafir
                        { id: 5, text: 'جَوْز' }, // Jawz
                        { id: 6, text: 'كَـرَز' }, // Karaz
                        { id: 7, text: 'فَوْز' }, // Fawz
                        { id: 8, text: 'جَزَر' }, // Jazar
                        { id: 9, text: 'مَزْرَعَة' }, // Mazra'a
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Zay'),
                    image: '/level2/19/bananas.jpg',
                    answer: 'مَوْز' // Mawz
                }
            ],
            audioUrl: '/level2/19/19.wav',
            watchAudio: '/level2/19/1.mp3',
            listenAudio: '/level2/19/2.mp3',
            readAudio: '/level2/19/3.mp3',
            writeAudio: '/level2/19/4.mp3',
            distinguishAudio: '/level2/19/5.mp3',
            thinkAudio: '/level2/19/7.mp3',
            circleAudio: '/level2/19/6.mp3',
            writingImages: ['/level2/19/write_1.png', '/level2/19/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ'],
            rememberAudio: '/level2/19/remember.mp3',
            assemble: [
                { id: 1, letters: ['زَ', 'أَ', 'رَ'], word: 'زَأَرَ' },
                { id: 2, letters: ['جَ', 'زَ', 'ر'], word: 'جَزَر' },
                { id: 3, letters: ['زُ', 'جَا', 'ج'], word: 'زُجَاج' },
                { id: 4, letters: ['بَ', 'رَ', 'زَ'], word: 'بَرَزَ' }
            ],
            assembleAudio: '/level2/19/assemble.mp3',
        },
        {
            id: 20,
            title: t('Review of Group Three Words'),
            subtitle: t('Read and Write'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['دُبّ', 'أَدَب', 'جَدّ', 'حَدِيد'] },
                { id: 2, text: '', words: ['ذِئْب', 'جَذَبَ', 'ذَابَ', 'حَبَّذَا'] },
                { id: 3, text: '', words: ['رَحَبَ', 'جَابِر', 'حِبْر', 'خَبَر'] },
                { id: 4, text: '', words: ['زَأَرَ', 'جَزَر', 'زُجَاج', 'بَرَزَ'] },
            ],
            audioUrl: '/level2/20/20.wav',
        },
        {
            id: 21,
            title: t('Group Four'),
            type: 'cubes',
            groupNumber: 4,
            items: [
                {
                    id: 1,
                    text: 'س',
                    colorFrom: '#FFA726',
                    colorTo: '#FFB74D',
                    shadowColor: '#F57C00'
                },
                {
                    id: 2,
                    text: 'ش',
                    colorFrom: '#EC407A',
                    colorTo: '#F06292',
                    shadowColor: '#C2185B'
                },
                {
                    id: 3,
                    text: 'ص',
                    colorFrom: '#039BE5',
                    colorTo: '#29B6F6',
                    shadowColor: '#01579B'
                },
                {
                    id: 4,
                    text: 'ض',
                    colorFrom: '#7CB342', // Greenish
                    colorTo: '#9CCC65',
                    shadowColor: '#558B2F'
                },
            ],
            audioUrl: '/level2/21/21.wav',
        },
        {
            id: 22,
            title: t('Letter Seen Lesson'),
            subtitle: t('Group Four'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Fish'), image: '/level2/22/fish.jpg', letter: 'سَ', highlight: 'س', listenImage: '/level2/22/listen/1.png', readImage: '/level2/22/read/1.png' },
                { id: 2, text: t('Lamp'), image: '/level2/22/lamp.jpg', letter: 'سِ', highlight: 'س', listenImage: '/level2/22/listen/2.png', readImage: '/level2/22/read/2.png' },
                { id: 3, text: t('Sugar'), image: '/level2/22/sugar.jpg', letter: 'سُ', highlight: 'س', listenImage: '/level2/22/listen/3.png', readImage: '/level2/22/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'سَا', short: 'سَ' },
                { id: 2, badge: 'ي', long: 'سِيـــ', short: 'سِ' },
                { id: 3, badge: 'و', long: 'سُو', short: 'سُ' },
            ],
            writingPractice: [
                { id: 1, text: 'سَجَدَ', sub: 'سَتَرَ', text2: 'سَحَبَ', type: 'solid', image: '/level2/22/write/1.png' },
                { id: 2, text: 'سَجَدَ', sub: 'سَتَرَ', text2: 'سَحَبَ', type: 'dotted', image: '/level2/22/write/2.png' },
                { id: 3, text: 'سَجَدَ', sub: 'سَتَرَ', text2: 'سَحَبَ', type: 'dotted', image: '/level2/22/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'س',
                    title: t('Exercise: Circle Letter Seen'),
                    words: [
                        'سَمَاء', 'سُيُول', 'سَلْمَان',
                        'سَيَّارَة', 'شَمْس', 'سَرِير',
                        'سَاعَة', 'رَأْس', 'سِبَاق'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Seen'),
                    image: '/level2/22/cloud.jpg',
                    answer: t('Cloud')
                }
            ],
            audioUrl: '/level2/22/22.wav',
            watchAudio: '/level2/22/1.mp3',
            listenAudio: '/level2/22/2.mp3',
            readAudio: '/level2/22/3.mp3',
            writeAudio: '/level2/22/4.mp3',
            distinguishAudio: '/level2/22/5.mp3',
            thinkAudio: '/level2/22/7.mp3',
            circleAudio: '/level2/22/6.mp3',
            writingImages: ['/level2/22/write_1.png', '/level2/22/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ'],
            rememberAudio: '/level2/22/remember.mp3',
            assemble: [
                { id: 1, letters: ['سَ', 'جَ', 'دَ'], word: 'سَجَدَ' },
                { id: 2, letters: ['سَ', 'تَ', 'رَ'], word: 'سَتَرَ' },
                { id: 3, letters: ['سَ', 'حَ', 'بَ'], word: 'سَحَبَ' },
                { id: 4, letters: ['سَ', 'بَ', 'حَ'], word: 'سَبَحَ' }
            ],
            assembleAudio: '/level2/22/assemble.mp3',
        },
        {
            id: 23,
            title: t('Letter Sheen Lesson'),
            subtitle: t('Group Four'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Sun'), image: '/level2/23/sun.jpg', letter: 'شَ', highlight: 'ش', listenImage: '/level2/23/listen/1.png', readImage: '/level2/23/read/1.png' },
                { id: 2, text: t('Sail'), image: '/level2/23/sail.jpg', letter: 'شِ', highlight: 'ش', listenImage: '/level2/23/listen/2.png', readImage: '/level2/23/read/2.png' },
                { id: 3, text: t('Torch'), image: '/level2/23/torch.jpg', letter: 'شُ', highlight: 'ش', listenImage: '/level2/23/listen/3.png', readImage: '/level2/23/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'شَا', short: 'شَ' },
                { id: 2, badge: 'ي', long: 'شِيـــ', short: 'شِ' },
                { id: 3, badge: 'و', long: 'شُو', short: 'شُ' },
            ],
            writingPractice: [
                { id: 1, text: 'شَرِبَ', sub: 'شَرَحَ', text2: 'حَشَرَ', type: 'solid', image: '/level2/23/write/1.png' },
                { id: 2, text: 'شَرِبَ', sub: 'شَرَحَ', text2: 'حَشَرَ', type: 'dotted', image: '/level2/23/write/2.png' },
                { id: 3, text: 'شَرِبَ', sub: 'شَرَحَ', text2: 'حَشَرَ', type: 'dotted', image: '/level2/23/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ش',
                    title: t('Exercise: Circle Letter Sheen'),
                    words: [
                        'شَاطِئ', 'أَشْرَفَ', 'شُمُوع',
                        'مَمْشَى', 'شُرْطِي', 'عُش',
                        'شَجَرَة', 'عُشْب', 'مِشْمِش'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Sheen'),
                    image: '/level2/23/butterfly.jpg',
                    answer: t('Butterfly')
                }
            ],
            audioUrl: '/level2/23/23.wav',
            watchAudio: '/level2/23/1.mp3',
            listenAudio: '/level2/23/2.mp3',
            readAudio: '/level2/23/3.mp3',
            writeAudio: '/level2/23/4.mp3',
            distinguishAudio: '/level2/23/5.mp3',
            thinkAudio: '/level2/23/7.mp3',
            circleAudio: '/level2/23/6.mp3',
            writingImages: ['/level2/23/write_1.png', '/level2/23/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ'],
            rememberAudio: '/level2/23/remember.mp3',
            assemble: [
                { id: 1, letters: ['شَ', 'رِ', 'بَ'], word: 'شَرِبَ' },
                { id: 2, letters: ['شَ', 'رَ', 'حَ'], word: 'شَرَحَ' },
                { id: 3, letters: ['حَ', 'شَ', 'رَ'], word: 'حَشَرَ' },
                { id: 4, letters: ['رَ', 'شَ', 'دَ'], word: 'رَشَدَ' }
            ],
            assembleAudio: '/level2/23/assemble.mp3',
        },
        {
            id: 24,
            title: t('Letter Saad Lesson'),
            subtitle: t('Group Four'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Falcon'), image: '/level2/24/falcon.jpg', letter: 'صَ', highlight: 'ص', listenImage: '/level2/24/listen/1.png', readImage: '/level2/24/read/1.png' },
                { id: 2, text: t('Tray'), image: '/level2/24/tray.jpg', letter: 'صِ', highlight: 'ص', listenImage: '/level2/24/listen/2.png', readImage: '/level2/24/read/2.png' },
                { id: 3, text: t('Wool'), image: '/level2/24/wool.jpg', letter: 'صُ', highlight: 'ص', listenImage: '/level2/24/listen/3.png', readImage: '/level2/24/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'صَا', short: 'صَ' },
                { id: 2, badge: 'ي', long: 'صِيـــ', short: 'صِ' },
                { id: 3, badge: 'و', long: 'صُو', short: 'صُ' },
            ],
            writingPractice: [
                { id: 1, text: 'صَبَرَ', sub: 'صَدَحَ', text2: 'رَصَدَ', type: 'solid', image: '/level2/24/write/1.png' },
                { id: 2, text: 'صَبَرَ', sub: 'صَدَحَ', text2: 'رَصَدَ', type: 'dotted', image: '/level2/24/write/2.png' },
                { id: 3, text: 'صَبَرَ', sub: 'صَدَحَ', text2: 'رَصَدَ', type: 'dotted', image: '/level2/24/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ص',
                    title: t('Exercise: Circle Letter Saad'),
                    words: [
                        'صَدِيقِي', 'عَصِير', 'مَقْصَف',
                        'قَصِير', 'صَارُوخ', 'بَصَل',
                        'مِقَص', 'صُوص', 'صَالِح'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Saad'),
                    image: '/level2/24/chest.jpg',
                    answer: t('Box')
                }
            ],
            audioUrl: '/level2/24/24.wav',
            watchAudio: '/level2/24/1.mp3',
            listenAudio: '/level2/24/2.mp3',
            readAudio: '/level2/24/3.mp3',
            writeAudio: '/level2/24/4.mp3',
            distinguishAudio: '/level2/24/5.mp3',
            thinkAudio: '/level2/24/7.mp3',
            circleAudio: '/level2/24/6.mp3',
            writingImages: ['/level2/24/write_1.png', '/level2/24/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ'],
            rememberAudio: '/level2/24/remember.mp3',
            assemble: [
                { id: 1, letters: ['صَ', 'بَ', 'رَ'], word: 'صَبَرَ' },
                { id: 2, letters: ['بَ', 'صَ', 'رَ'], word: 'بَصَرَ' },
                { id: 3, letters: ['صَ', 'دَ', 'حَ'], word: 'صَدَحَ' },
                { id: 4, letters: ['رَ', 'صَ', 'دَ'], word: 'رَصَدَ' }
            ],
            assembleAudio: '/level2/24/assemble.mp3',
        },
        {
            id: 25,
            title: t('Letter Daad Lesson'),
            subtitle: t('Group Four'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Lizard'), image: '/level2/25/lizard.jpg', letter: 'ضَ', highlight: 'ض', listenImage: '/level2/25/listen/1.png', readImage: '/level2/25/read/1.png' },
                { id: 2, text: t('Molar'), image: '/level2/25/molar.jpg', letter: 'ضِ', highlight: 'ض', listenImage: '/level2/25/listen/2.png', readImage: '/level2/25/read/2.png' },
                { id: 3, text: t('Officers'), image: '/level2/25/officers.jpg', letter: 'ضُ', highlight: 'ض', listenImage: '/level2/25/listen/3.png', readImage: '/level2/25/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'ضَا', short: 'ضَ' },
                { id: 2, badge: 'ي', long: 'ضِيـــ', short: 'ضِ' },
                { id: 3, badge: 'و', long: 'ضُو', short: 'ضُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ضَرَبَ', sub: 'حَضَرَ', text2: 'رَضَخَ', type: 'solid', image: '/level2/25/write/1.png' },
                { id: 2, text: 'ضَرَبَ', sub: 'حَضَرَ', text2: 'رَضَخَ', type: 'dotted', image: '/level2/25/write/2.png' },
                { id: 3, text: 'ضَرَبَ', sub: 'حَضَرَ', text2: 'رَضَخَ', type: 'dotted', image: '/level2/25/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ض',
                    title: t('Exercise: Circle Letter Daad'),
                    words: [
                        'ضَيْف', 'ضَابِط', 'مِضْمَار',
                        'ضِلْع', 'إِضَاءَة', 'نَهَضَ',
                        'بَعُوض', 'خُضَار', 'ضَبْع'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Daad'),
                    image: '/level2/25/eggs.jpg',
                    answer: t('Eggs')
                }
            ],
            audioUrl: '/level2/25/25.wav',
            watchAudio: '/level2/25/1.mp3',
            listenAudio: '/level2/25/2.mp3',
            readAudio: '/level2/25/3.mp3',
            writeAudio: '/level2/25/4.mp3',
            distinguishAudio: '/level2/25/5.mp3',
            thinkAudio: '/level2/25/7.mp3',
            circleAudio: '/level2/25/6.mp3',
            writingImages: ['/level2/25/write_1.png', '/level2/25/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ'],
            rememberAudio: '/level2/25/remember.mp3',
            assemble: [
                { id: 1, letters: ['ضَ', 'رَ', 'بَ'], word: 'ضَرَبَ' },
                { id: 2, letters: ['حَ', 'ضَ', 'رَ'], word: 'حَضَرَ' },
                { id: 3, letters: ['رَ', 'ضَ', 'خَ'], word: 'رَضَخَ' },
                { id: 4, letters: ['ضِ', 'ر', 'س'], word: 'ضِرْس' }
            ],
            assembleAudio: '/level2/25/assemble.mp3',
        },
        {
            id: 26,
            title: t('Review of Group Four Words'),
            subtitle: t('Read and Write'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['سَجَدَ', 'سَبَحَ', 'سَتَرَ', 'سَحَبَ'] },
                { id: 2, text: '', words: ['شَرِبَ', 'شَرَحَ', 'حَشَرَ', 'رَشَدَ'] },
                { id: 3, text: '', words: ['صَبَرَ', 'بَصَرَ', 'صَدَحَ', 'رَصَدَ'] },
                { id: 4, text: '', words: ['حَضَرَ', 'ضَرَبَ', 'رَضَخَ', 'ضِرْس'] },
            ],
            audioUrl: '/level2/26/26.wav',
        },
        {
            id: 27,
            title: t('Group Five'),
            type: 'cubes',
            groupNumber: 5,
            items: [
                {
                    id: 1,
                    text: 'ط',
                    colorFrom: '#FFA726',
                    colorTo: '#FFB74D',
                    shadowColor: '#F57C00'
                },
                {
                    id: 2,
                    text: 'ظ',
                    colorFrom: '#EC407A',
                    colorTo: '#F06292',
                    shadowColor: '#C2185B'
                },
                {
                    id: 3,
                    text: 'ع',
                    colorFrom: '#039BE5',
                    colorTo: '#29B6F6',
                    shadowColor: '#01579B'
                },
                {
                    id: 4,
                    text: 'غ',
                    colorFrom: '#7CB342',
                    colorTo: '#9CCC65',
                    shadowColor: '#558B2F'
                },
            ],
            audioUrl: '/level2/27/27.wav',
        },
        {
            id: 28,
            title: t('Letter Tah Lesson'),
            subtitle: t('Group Five'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Drum'), image: '/level2/28/drum.jpg', letter: 'طَ', highlight: 'ط', listenImage: '/level2/28/listen/1.png', readImage: '/level2/28/read/1.png' },
                { id: 2, text: t('Child'), image: '/level2/28/child.jpg', letter: 'طِ', highlight: 'ط', listenImage: '/level2/28/listen/2.png', readImage: '/level2/28/read/2.png' },
                { id: 3, text: t('Birds'), image: '/level2/28/birds.jpg', letter: 'طُ', highlight: 'ط', listenImage: '/level2/28/listen/3.png', readImage: '/level2/28/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'طَا', short: 'طَ' },
                { id: 2, badge: 'ي', long: 'طِيـــ', short: 'طِ' },
                { id: 3, badge: 'و', long: 'طُو', short: 'طُ' },
            ],
            writingPractice: [
                { id: 1, text: 'طَبَخَ', sub: 'طَرَحَ', text2: 'طَرَدَ', type: 'solid', image: '/level2/28/write/1.png' },
                { id: 2, text: 'طَبَخَ', sub: 'طَرَحَ', text2: 'طَرَدَ', type: 'dotted', image: '/level2/28/write/2.png' },
                { id: 3, text: 'طَبَخَ', sub: 'طَرَحَ', text2: 'طَرَدَ', type: 'dotted', image: '/level2/28/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ط',
                    title: t('Exercise: Circle Letter Tah'),
                    words: [
                        'طَارِق', 'مَطَّاط', 'فَاطِمَة', // Tariq, Matat, Fatima
                        'مَطَار', 'طُهُور', 'طَبِيب', // Matar, Tuhoor, Tabib
                        'قِطَار', 'يَرْبِط', 'طَائِرَة' // Qitar, Yarbut, Ta'ira
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Tah'),
                    image: '/level2/28/table.jpg',
                    answer: t('Table')
                }
            ],
            audioUrl: '/level2/28/28.wav',
            watchAudio: '/level2/28/1.mp3',
            listenAudio: '/level2/28/2.mp3',
            readAudio: '/level2/28/3.mp3',
            writeAudio: '/level2/28/4.mp3',
            distinguishAudio: '/level2/28/5.mp3',
            thinkAudio: '/level2/28/7.mp3',
            circleAudio: '/level2/28/6.mp3',
            writingImages: ['/level2/28/write_1.png', '/level2/28/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ'],
            rememberAudio: '/level2/28/remember.mp3',
            assemble: [
                { id: 1, letters: ['طَ', 'بَ', 'خَ'], word: 'طَبَخَ' },
                { id: 2, letters: ['طَ', 'رَ', 'حَ'], word: 'طَرَحَ' },
                { id: 3, letters: ['طَ', 'رَ', 'دَ'], word: 'طَرَدَ' },
                { id: 4, letters: ['طُ', 'و', 'ب'], word: 'طُوب' }
            ],
            assembleAudio: '/level2/28/assemble.mp3',
        },
        {
            id: 29,
            title: t('Letter Zaa Lesson'),
            subtitle: t('Group Five'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Envelope'), image: '/level2/29/envelope.jpg', letter: 'ظَ', highlight: 'ظ', listenImage: '/level2/29/listen/1.png', readImage: '/level2/29/read/1.png' },
                { id: 2, text: t('Shadow'), image: '/level2/29/shadow.jpg', letter: 'ظِ', highlight: 'ظ', listenImage: '/level2/29/listen/2.png', readImage: '/level2/29/read/2.png' },
                { id: 3, text: t('Envelopes'), image: '/level2/29/envelopes.jpg', letter: 'ظُ', highlight: 'ظ', listenImage: '/level2/29/listen/3.png', readImage: '/level2/29/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'ظَا', short: 'ظَ' },
                { id: 2, badge: 'ي', long: 'ظِيـــ', short: 'ظِ' },
                { id: 3, badge: 'و', long: 'ظُو', short: 'ظُ' },
            ],
            writingPractice: [
                { id: 1, text: 'حَظَرَ', sub: 'جَحَظَ', text2: 'ظُفْر', type: 'solid', image: '/level2/29/write/1.png' },
                { id: 2, text: 'حَظَرَ', sub: 'جَحَظَ', text2: 'ظُفْر', type: 'dotted', image: '/level2/29/write/2.png' },
                { id: 3, text: 'حَظَرَ', sub: 'جَحَظَ', text2: 'ظُفْر', type: 'dotted', image: '/level2/29/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ظ',
                    title: t('Exercise: Circle Letter Zaa'),
                    words: [
                        'ظَافِر', 'مَنْظُور', 'حَظّ', // Zhaafir, Manzhuur, Hazz
                        'ظَبْي', 'نَظَافَة', 'عَظْم', // Zhabiy, Nazhaafa, Azhm
                        'ظَلَام', 'وَظِيفَة', 'حِفْظ' // Zhalaam, Wazheefa, Hifzh
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Zaa'),
                    image: '/level2/29/glasses.jpg',
                    answer: t('Glasses')
                }
            ],
            audioUrl: '/level2/29/29.wav',
            watchAudio: '/level2/29/1.mp3',
            listenAudio: '/level2/29/2.mp3',
            readAudio: '/level2/29/3.mp3',
            writeAudio: '/level2/29/4.mp3',
            distinguishAudio: '/level2/29/5.mp3',
            thinkAudio: '/level2/29/7.mp3',
            circleAudio: '/level2/29/6.mp3',
            writingImages: ['/level2/29/write_1.png', '/level2/29/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ'],
            rememberAudio: '/level2/29/remember.mp3',
            assemble: [
                { id: 1, letters: ['حَ', 'ظَ', 'رَ'], word: 'حَظَرَ' },
                { id: 2, letters: ['جَ', 'حَ', 'ظَ'], word: 'جَحَظَ' },
                { id: 3, letters: ['ظُ', 'فْ', 'ر'], word: 'ظُفْر' },
                { id: 4, letters: ['حَ', 'ا', 'فِ', 'ظ'], word: 'حَافِظ' }
            ],
            assembleAudio: '/level2/29/assemble.mp3',
        },
        {
            id: 30,
            title: t('Letter Ain Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Flag'), image: '/level2/30/flag.jpg', letter: 'عَ', highlight: 'ع', listenImage: '/level2/30/listen/1.png', readImage: '/level2/30/read/1.png' },
                { id: 2, text: t('Grapes'), image: '/level2/30/grapes.jpg', letter: 'عِ', highlight: 'ع', listenImage: '/level2/30/listen/2.png', readImage: '/level2/30/read/2.png' },
                { id: 3, text: t('Nest'), image: '/level2/30/nest.jpg', letter: 'عُ', highlight: 'ع', listenImage: '/level2/30/listen/3.png', readImage: '/level2/30/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'عَا', short: 'عَ' },
                { id: 2, badge: 'ي', long: 'عِيـــ', short: 'عِ' },
                { id: 3, badge: 'و', long: 'عُو', short: 'عُ' },
            ],
            writingPractice: [
                { id: 1, text: 'عَبَدَ', sub: 'عَبَرَ', text2: 'بَرَعَ', type: 'solid', image: '/level2/30/write/1.png' },
                { id: 2, text: 'عَبَدَ', sub: 'عَبَرَ', text2: 'بَرَعَ', type: 'dotted', image: '/level2/30/write/2.png' },
                { id: 3, text: 'عَبَدَ', sub: 'عَبَرَ', text2: 'بَرَعَ', type: 'dotted', image: '/level2/30/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ع',
                    title: t('Exercise: Circle Letter Ain'),
                    words: [
                        'عَيْن', 'أُسْبُوع', 'سَعِيد', // Ayn, Usbuu, Saeed
                        'عَنْكَبُوت', 'عُمَر', 'مُزَارِع', // Ankabut, Umar, Muzaari
                        'جُمُعَة', 'مَصْنَع', 'عَامِل' // Juma, Masna, Aamil
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Ain'),
                    image: '/level2/30/box.jpg',
                    answer: t('Box')
                }
            ],
            audioUrl: '/level2/30/30.wav',
            watchAudio: '/level2/30/1.mp3',
            listenAudio: '/level2/30/2.mp3',
            readAudio: '/level2/30/3.mp3',
            writeAudio: '/level2/30/4.mp3',
            distinguishAudio: '/level2/30/5.mp3',
            thinkAudio: '/level2/30/7.mp3',
            circleAudio: '/level2/30/6.mp3',
            writingImages: ['/level2/30/write_1.png', '/level2/30/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ'],
            rememberAudio: '/level2/30/remember.mp3',
            assemble: [
                { id: 1, letters: ['عَ', 'بَ', 'دَ'], word: 'عَبَدَ' },
                { id: 2, letters: ['عَ', 'بَ', 'رَ'], word: 'عَبَرَ' },
                { id: 3, letters: ['بَ', 'رَ', 'عَ'], word: 'بَرَعَ' },
                { id: 4, letters: ['عَ', 'بَ', 'سَ'], word: 'عَبَسَ' }
            ],
            assembleAudio: '/level2/30/assemble.mp3',
        },
        {
            id: 31,
            title: t('Letter Ghain Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Gazelle'), image: '/level2/31/gazelle.jpg', letter: 'غَ', highlight: 'غ', listenImage: '/level2/31/listen/1.png', readImage: '/level2/31/read/1.png' },
                { id: 2, text: t('Crows'), image: '/level2/31/crows.jpg', letter: 'غِ', highlight: 'غ', listenImage: '/level2/31/listen/2.png', readImage: '/level2/31/read/2.png' },
                { id: 3, text: t('Clouds'), image: '/level2/31/clouds.jpg', letter: 'غُ', highlight: 'غ', listenImage: '/level2/31/listen/3.png', readImage: '/level2/31/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'غَا', short: 'غَ' },
                { id: 2, badge: 'ي', long: 'غِيـــ', short: 'غِ' },
                { id: 3, badge: 'و', long: 'غُو', short: 'غُ' },
            ],
            writingPractice: [
                { id: 1, text: 'رَغِبَ', sub: 'غَدَرَ', text2: 'رَغَدَ', type: 'solid', image: '/level2/31/write/1.png' },
                { id: 2, text: 'رَغِبَ', sub: 'غَدَرَ', text2: 'رَغَدَ', type: 'dotted', image: '/level2/31/write/2.png' },
                { id: 3, text: 'رَغِبَ', sub: 'غَدَرَ', text2: 'رَغَدَ', type: 'dotted', image: '/level2/31/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'غ',
                    title: t('Exercise: Circle Letter Ghain'),
                    words: [
                        'شُغْل', 'صَمْغ', 'بَبَّغَاء', // Shughl, Samgh, Babagha
                        'غُرُوب', 'صَغِير', 'فَرَاغ', // Ghuroob, Sagheer, Faraagh
                        'غُرْفَة', 'غَدَاء', 'رَغِيف' // Ghurfa, Ghadaa, Ragheef
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Ghain'),
                    image: '/level2/31/washing_machine.jpg',
                    answer: t('Washing Machine')
                }
            ],
            audioUrl: '/level2/31/31.wav',
            watchAudio: '/level2/31/1.mp3',
            listenAudio: '/level2/31/2.mp3',
            readAudio: '/level2/31/3.mp3',
            writeAudio: '/level2/31/4.mp3',
            distinguishAudio: '/level2/31/5.mp3',
            thinkAudio: '/level2/31/7.mp3',
            circleAudio: '/level2/31/6.mp3',
            writingImages: ['/level2/31/write_1.png', '/level2/31/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ'],
            rememberAudio: '/level2/31/remember.mp3',
            assemble: [
                { id: 1, letters: ['رَ', 'غِ', 'بَ'], word: 'رَغِبَ' },
                { id: 2, letters: ['غَ', 'دَ', 'رَ'], word: 'غَدَرَ' },
                { id: 3, letters: ['رَ', 'غَ', 'دَ'], word: 'رَغَدَ' },
                { id: 4, letters: ['غَ', 'رْ', 'ب'], word: 'غَرْب' }
            ],
            assembleAudio: '/level2/31/assemble.mp3',
        },
        {
            id: 32,
            title: t('Review of Group Five Words'),
            subtitle: t('Group Five'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['طَبَخَ', 'طَرَحَ', 'طَرَدَ', 'طُوبَ'] },
                { id: 2, text: '', words: ['حَظَرَ', 'جَحَظَ', 'ظُفْر', 'حَافِظ'] },
                { id: 3, text: '', words: ['عَبَدَ', 'عَبَرَ', 'بَرَعَ', 'عَبَسَ'] },
                { id: 4, text: '', words: ['رَغِبَ', 'غَدَرَ', 'رَغَدَ', 'غَرْب'] },
            ],
            audioUrl: '/level2/32/32.wav',
            reviewAudio: '/level2/32/1.mp3'
        },
        {
            id: 33,
            title: t('Group Six'),
            type: 'cubes',
            groupNumber: 6,
            items: [
                { id: 1, text: 'ف', colorFrom: '#FFA500', colorTo: '#FF8C00', shadowColor: '#CC7A00' }, // Orange
                { id: 2, text: 'ق', colorFrom: '#FFC0CB', colorTo: '#FFB6C1', shadowColor: '#DB7093' }, // Pink
                { id: 3, text: 'ك', colorFrom: '#00BFFF', colorTo: '#1E90FF', shadowColor: '#0000CD' }, // Blue
                { id: 4, text: 'ل', colorFrom: '#9ACD32', colorTo: '#32CD32', shadowColor: '#006400' }, // Green
            ],
            audioUrl: '/level2/33/33.wav',
        },

        {
            id: 34,
            title: t('Letter Fa Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Butterfly'), image: '/level2/34/butterfly.jpg', letter: 'فَ', highlight: 'ف', listenImage: '/level2/34/listen/1.png', readImage: '/level2/34/read/1.png' },
                { id: 2, text: t('Elephant'), image: '/level2/34/elephant.jpg', letter: 'فِ', highlight: 'ف', listenImage: '/level2/34/listen/2.png', readImage: '/level2/34/read/2.png' },
                { id: 3, text: t('Beans'), image: '/level2/34/beans.jpg', letter: 'فُ', highlight: 'ف', listenImage: '/level2/34/listen/3.png', readImage: '/level2/34/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'فَا', short: 'فَ' },
                { id: 2, badge: 'ي', long: 'فِيـــ', short: 'فِ' },
                { id: 3, badge: 'و', long: 'فُو', short: 'فُ' },
            ],
            writingPractice: [
                { id: 1, text: 'فَتَحَ', sub: 'حَفَرَ', text2: 'فَسَدَ', type: 'solid', image: '/level2/34/write/1.png' },
                { id: 2, text: 'فَتَحَ', sub: 'حَفَرَ', text2: 'فَسَدَ', type: 'dotted', image: '/level2/34/write/2.png' },
                { id: 3, text: 'فَتَحَ', sub: 'حَفَرَ', text2: 'فَسَدَ', type: 'dotted', image: '/level2/34/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ف',
                    title: t('Exercise: Circle Letter Fa'),
                    words: [
                        'مِفْتَاح', 'فَانُوس', 'صَفْر',
                        'عَاطِف', 'تُفَّاحَة', 'يَقْفِزُ',
                        'جَعْفَر', 'سَيْف', 'فَأْس'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Fa'),
                    image: '/level2/34/window.jpg',
                    answer: t('Window')
                }
            ],
            audioUrl: '/level2/34/34.wav',
            watchAudio: '/level2/34/1.mp3',
            listenAudio: '/level2/34/2.mp3',
            readAudio: '/level2/34/3.mp3',
            writeAudio: '/level2/34/4.mp3',
            distinguishAudio: '/level2/34/5.mp3',
            thinkAudio: '/level2/34/7.mp3',
            circleAudio: '/level2/34/6.mp3',
            writingImages: ['/level2/34/write_1.png', '/level2/34/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ'],
            rememberAudio: '/level2/34/remember.mp3',
            assemble: [
                { id: 1, letters: ['فَ', 'تَ', 'حَ'], word: 'فَتَحَ' },
                { id: 2, letters: ['حَ', 'فَ', 'رَ'], word: 'حَفَرَ' },
                { id: 3, letters: ['فَ', 'سَ', 'دَ'], word: 'فَسَدَ' },
                { id: 4, letters: ['رَ', 'فَ', 'ضَ'], word: 'رَفَضَ' }
            ],
            assembleAudio: '/level2/34/assemble.mp3',
        },
        {
            id: 35,
            title: t('Letter Qaf Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Boat'), image: '/level2/35/boat.jpg', letter: 'قَ', highlight: 'ق', listenImage: '/level2/35/listen/1.png', readImage: '/level2/35/read/1.png' },
                { id: 2, text: t('Monkey'), image: '/level2/35/monkey.jpg', letter: 'قِ', highlight: 'ق', listenImage: '/level2/35/listen/2.png', readImage: '/level2/35/read/2.png' },
                { id: 3, text: t('Hat'), image: '/level2/35/hat.jpg', letter: 'قُ', highlight: 'ق', listenImage: '/level2/35/listen/3.png', readImage: '/level2/35/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'قَا', short: 'قَ' },
                { id: 2, badge: 'ي', long: 'قِيـــ', short: 'قِ' },
                { id: 3, badge: 'و', long: 'قُو', short: 'قُ' },
            ],
            writingPractice: [
                { id: 1, text: 'رَفَقَ', sub: 'قَطَعَ', text2: 'سَقَطَ', type: 'solid', image: '/level2/35/write/1.png' },
                { id: 2, text: 'رَفَقَ', sub: 'قَطَعَ', text2: 'سَقَطَ', type: 'dotted', image: '/level2/35/write/2.png' },
                { id: 3, text: 'رَفَقَ', sub: 'قَطَعَ', text2: 'سَقَطَ', type: 'dotted', image: '/level2/35/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ق',
                    title: t('Exercise: Circle Letter Qaf'),
                    words: [
                        'قَامُوس', 'قَلَم', 'مِطْرَقَة',
                        'سَقْف', 'قُرْآن', 'قِصَّة',
                        'قَمَر', 'وَرَق', 'طَارِق'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Qaf'),
                    image: '/level2/35/scissors.jpg',
                    answer: t('Scissors')
                }
            ],
            audioUrl: '/level2/35/35.wav',
            watchAudio: '/level2/35/1.mp3',
            listenAudio: '/level2/35/2.mp3',
            readAudio: '/level2/35/3.mp3',
            writeAudio: '/level2/35/4.mp3',
            distinguishAudio: '/level2/35/5.mp3',
            thinkAudio: '/level2/35/7.mp3',
            circleAudio: '/level2/35/6.mp3',
            writingImages: ['/level2/35/write_1.png', '/level2/35/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ'],
            rememberAudio: '/level2/35/remember.mp3',
            assemble: [
                { id: 1, letters: ['رَ', 'فَ', 'قَ'], word: 'رَفَقَ' },
                { id: 2, letters: ['قَ', 'طَ', 'عَ'], word: 'قَطَعَ' },
                { id: 3, letters: ['سَ', 'قَ', 'طَ'], word: 'سَقَطَ' },
                { id: 4, letters: ['رَ', 'قَ', 'صَ'], word: 'رَقَصَ' }
            ],
            assembleAudio: '/level2/35/assemble.mp3',
        },
        {
            id: 36,
            title: t('Letter Kaf Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Palm'), image: '/level2/36/palm.jpg', letter: 'كُ', highlight: 'ك', listenImage: '/level2/36/listen/1.png', readImage: '/level2/36/read/1.png' },
                { id: 2, text: t('Book'), image: '/level2/36/book.jpg', letter: 'كِ', highlight: 'ك', listenImage: '/level2/36/listen/2.png', readImage: '/level2/36/read/2.png' },
                { id: 3, text: t('Chair'), image: '/level2/36/chair.jpg', letter: 'كَ', highlight: 'ك', listenImage: '/level2/36/listen/3.png', readImage: '/level2/36/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'كَا', short: 'كَ' },
                { id: 2, badge: 'ي', long: 'كِيـــ', short: 'كِ' },
                { id: 3, badge: 'و', long: 'كُو', short: 'كُ' },
            ],
            writingPractice: [
                { id: 1, text: 'كَتَبَ', sub: 'رَكَعَ', text2: 'كَسَرَ', sub2: 'رَكِبَ', type: 'solid', image: '/level2/36/write/1.png' },
                { id: 2, text: 'كَتَبَ', sub: 'رَكَعَ', text2: 'كَسَرَ', sub2: 'رَكِبَ', type: 'dotted', image: '/level2/36/write/2.png' },
                { id: 3, text: 'كَتَبَ', sub: 'رَكَعَ', text2: 'كَسَرَ', sub2: 'رَكِبَ', type: 'dotted', image: '/level2/36/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ك',
                    title: t('Exercise: Circle Letter Kaf'),
                    words: [
                        'كَهْف', 'كُرَة', 'سَمَكَة',
                        'إِبْرَة', 'دِيك', 'سُكَّر',
                        'كُرَّاسَة', 'كَلْب', 'كَرِيم'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Kaf'),
                    image: '/level2/36/cup.jpg',
                    answer: t('Cup')
                }
            ],
            audioUrl: '/level2/36/36.wav',
            watchAudio: '/level2/36/1.mp3',
            listenAudio: '/level2/36/2.mp3',
            readAudio: '/level2/36/3.mp3',
            writeAudio: '/level2/36/4.mp3',
            distinguishAudio: '/level2/36/5.mp3',
            thinkAudio: '/level2/36/7.mp3',
            circleAudio: '/level2/36/6.mp3',
            writingImages: ['/level2/36/write_1.png', '/level2/36/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ'],
            rememberAudio: '/level2/36/remember.mp3',
            assemble: [
                { id: 1, letters: ['ك', 'تَ', 'بَ'], word: 'كَتَبَ' },
                { id: 2, letters: ['ك', 'سَ', 'رَ'], word: 'كَسَرَ' },
                { id: 3, letters: ['رَ', 'ك', 'عَ'], word: 'رَكَعَ' },
                { id: 4, letters: ['مَ', 'عَ', 'ك'], word: 'مَعَكَ' }, // Using 'Ma'ak' as a placeholder or inferred from 'Rakiba' in image context but let's check assemble image again. Image shows: ر ك ب -> Rakiba
                // Correction: Image showing assemble words: Ka Ta Ba - Kataba, Ka Sa Ra - Kasara, Ra Ka 'A - Raka'a, Ra Ki Ba - Rakiba (no Ma'ak in image)
                { id: 4, letters: ['رَ', 'كِ', 'بَ'], word: 'رَكِبَ' }
            ],
            assembleAudio: '/level2/36/assemble.mp3',
        },
        {
            id: 37,
            title: t('Letter Lam Lesson'),
            subtitle: t('Group Six'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Milk'), image: '/level2/37/milk.jpg', letter: 'لُ', highlight: 'ل', listenImage: '/level2/37/listen/1.png', readImage: '/level2/37/read/1.png' },
                { id: 2, text: t('Tongue'), image: '/level2/37/tongue.jpg', letter: 'لِ', highlight: 'ل', listenImage: '/level2/37/listen/2.png', readImage: '/level2/37/read/2.png' },
                { id: 3, text: t('Toy'), image: '/level2/37/toy.jpg', letter: 'لَ', highlight: 'ل', listenImage: '/level2/37/listen/3.png', readImage: '/level2/37/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'لَا', short: 'لَ' },
                { id: 2, badge: 'ي', long: 'لِيـــ', short: 'لِ' },
                { id: 3, badge: 'و', long: 'لُو', short: 'لُ' },
            ],
            writingPractice: [
                { id: 1, text: 'لَبَن', sub: 'طَلَبَ', text2: 'طَالِب', sub2: 'غَسَلَ', type: 'solid', image: '/level2/37/write/1.png' },
                { id: 2, text: 'لَبَن', sub: 'طَلَبَ', text2: 'طَالِب', sub2: 'غَسَلَ', type: 'dotted', image: '/level2/37/write/2.png' },
                { id: 3, text: 'لَبَن', sub: 'طَلَبَ', text2: 'طَالِب', sub2: 'غَسَلَ', type: 'dotted', image: '/level2/37/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ل',
                    title: t('Exercise: Circle Letter Lam'),
                    words: [
                        'مِلْعَقَة', 'لَحْم', 'لَيْل',
                        'وَلَد', 'مِلْح', 'جِبَال',
                        'جَمَل', 'بُرْتُقَال', 'قَلَم'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Lam'),
                    image: '/level2/37/lemon.jpg',
                    answer: t('Laymoon')
                }
            ],
            audioUrl: '/level2/37/37.wav',
            watchAudio: '/level2/37/1.mp3',
            listenAudio: '/level2/37/2.mp3',
            readAudio: '/level2/37/3.mp3',
            writeAudio: '/level2/37/4.mp3',
            distinguishAudio: '/level2/37/5.mp3',
            thinkAudio: '/level2/37/7.mp3',
            circleAudio: '/level2/37/6.mp3',
            writingImages: ['/level2/37/write_1.png', '/level2/37/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ'],
            rememberAudio: '/level2/37/remember.mp3',
            assemble: [
                { id: 1, letters: ['لَ', 'بَ', 'ن'], word: 'لَبَن' },
                { id: 2, letters: ['طَ', 'لَ', 'بَ'], word: 'طَلَبَ' },
                { id: 3, letters: ['طَ', 'ال', 'ب'], word: 'طَالِب' },
                { id: 4, letters: ['غَ', 'سَ', 'لَ'], word: 'غَسَلَ' }
            ],
            assembleAudio: '/level2/37/assemble.mp3',
        },
        {
            id: 38,
            title: t('Review of Group Six Words'),
            subtitle: t('Group Six'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['فَتَحَ', 'حَفَرَ', 'فَسَدَ', 'رَفَضَ'] },
                { id: 2, text: '', words: ['رَفَقَ', 'قَطَعَ', 'سَقَطَ', 'رَقَصَ'] },
                { id: 3, text: '', words: ['كَتَبَ', 'كَسَرَ', 'رَكَعَ', 'رَكِبَ'] },
                { id: 4, text: '', words: ['لَبَن', 'طَلَبَ', 'طَالِب', 'غَسَلَ'] },
            ],
            audioUrl: '/level2/38/38.wav',
            reviewAudio: '/level2/38/1.mp3'
        },
        {
            id: 39,
            title: t('Group Seven'),
            type: 'cubes',
            groupNumber: 7,
            items: [
                { id: 1, text: 'م', colorFrom: '#FFA500', colorTo: '#FF8C00', shadowColor: '#CC7A00' }, // Orange
                { id: 2, text: 'ن', colorFrom: '#FFC0CB', colorTo: '#FFB6C1', shadowColor: '#DB7093' }, // Pink
                { id: 3, text: 'هـ', colorFrom: '#00BFFF', colorTo: '#1E90FF', shadowColor: '#0000CD' }, // Blue
                { id: 4, text: 'و', colorFrom: '#9ACD32', colorTo: '#32CD32', shadowColor: '#006400' }, // Green
                { id: 5, text: 'ي', colorFrom: '#A1887F', colorTo: '#8D6E63', shadowColor: '#5D4037' }, // Brown
            ],
            audioUrl: '/level2/39/39.wav',
        },
        {
            id: 40,
            title: t('Letter Meem Lesson'),
            subtitle: t('Group Seven'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Mosque'), image: '/level2/40/mosque.jpg', letter: 'مَ', highlight: 'م', listenImage: '/level2/40/listen/1.png', readImage: '/level2/40/read/1.png' },
                { id: 2, text: t('Scale'), image: '/level2/40/scale.jpg', letter: 'مِ', highlight: 'م', listenImage: '/level2/40/listen/2.png', readImage: '/level2/40/read/2.png' },
                { id: 3, text: t('Mushaf'), image: '/level2/40/mushaf.jpg', letter: 'مُ', highlight: 'م', listenImage: '/level2/40/listen/3.png', readImage: '/level2/40/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'مَا', short: 'مَ' },
                { id: 2, badge: 'ي', long: 'مِيـــ', short: 'مِ' },
                { id: 3, badge: 'و', long: 'مُو', short: 'مُ' },
            ],
            writingPractice: [

                { id: 1, text: 'رَسَمَ', sub: 'سَمَحَ', text2: 'حَسَمَ', sub2: 'مَاجِد', type: 'solid', image: '/level2/40/write/1.png' },
                { id: 2, text: 'رَسَمَ', sub: 'سَمَحَ', text2: 'حَسَمَ', sub2: 'مَاجِد', type: 'dotted', image: '/level2/40/write/2.png' },
                { id: 3, text: 'رَسَمَ', sub: 'سَمَحَ', text2: 'حَسَمَ', sub2: 'مَاجِد', type: 'dotted', image: '/level2/40/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'م',
                    title: t('Exercise: Circle Letter Meem'),
                    words: [
                        'مَدْرَسَة', 'لَحْم', 'مَقَصّ',
                        'عُمَر', 'مِلْعَقَة', 'أَقْلَام',
                        'مِقَصّ', 'نَمِر', 'مِلْح'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Meem'),
                    image: '/level2/40/pomegranate.jpg',
                    answer: t('Pomegranate')
                }
            ],
            audioUrl: '/level2/40/40.wav',
            watchAudio: '/level2/40/1.mp3',
            listenAudio: '/level2/40/2.mp3',
            readAudio: '/level2/40/3.mp3',
            writeAudio: '/level2/40/4.mp3',
            distinguishAudio: '/level2/40/5.mp3',
            thinkAudio: '/level2/40/7.mp3',
            circleAudio: '/level2/40/6.mp3',
            writingImages: ['/level2/40/write_1.png', '/level2/40/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ', 'مَ', 'مِ', 'مُ'],
            rememberAudio: '/level2/40/remember.mp3',
            assemble: [
                { id: 1, letters: ['رَ', 'سَ', 'مَ'], word: 'رَسَمَ' },
                { id: 2, letters: ['سَ', 'مَ', 'حَ'], word: 'سَمَحَ' },
                { id: 3, letters: ['حَ', 'سَ', 'مَ'], word: 'حَسَمَ' },
                { id: 4, letters: ['مَ', 'ا', 'جِد'], word: 'مَاجِد' }
            ],
            assembleAudio: '/level2/40/assemble.mp3',
        },
        {
            id: 41,
            title: t('Letter Noon Lesson'),
            subtitle: t('Group Seven'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Palm Tree'), image: '/level2/41/palm_tree.jpg', letter: 'نَ', highlight: 'ن', listenImage: '/level2/41/listen/1.png', readImage: '/level2/41/read/1.png' },
                { id: 2, text: t('Tiger'), image: '/level2/41/tiger.jpg', letter: 'نَ', highlight: 'ن', listenImage: '/level2/41/listen/2.png', readImage: '/level2/41/read/2.png' },
                { id: 3, text: t('Stars'), image: '/level2/41/stars.jpg', letter: 'نُ', highlight: 'ن', listenImage: '/level2/41/listen/3.png', readImage: '/level2/41/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'نَا', short: 'نَ' },
                { id: 2, badge: 'ي', long: 'نِيـــ', short: 'نِ' },
                { id: 3, badge: 'و', long: 'نُو', short: 'نُ' },
            ],
            writingPractice: [
                { id: 1, text: 'نَبِيل', sub: 'نَمْل', text2: 'نُور', sub2: 'هَنَاء', type: 'solid', image: '/level2/41/write/1.png' },
                { id: 2, text: 'نَبِيل', sub: 'نَمْل', text2: 'نُور', sub2: 'هَنَاء', type: 'dotted', image: '/level2/41/write/2.png' },
                { id: 3, text: 'نَبِيل', sub: 'نَمْل', text2: 'نُور', sub2: 'هَنَاء', type: 'dotted', image: '/level2/41/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ن',
                    title: t('Exercise: Circle Letter Noon'),
                    words: [
                        'زَيْتُون', 'نَافِذَة', 'نَسْر',
                        'نَاد', 'نَار', 'نَعَامَة',
                        'مِنْدِيل', 'نَحْل', 'مُنِيرَة'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Noon'),
                    image: '/level2/41/money.jpg',
                    answer: t('Money')
                }
            ],
            audioUrl: '/level2/41/41.wav',
            watchAudio: '/level2/41/1.mp3',
            listenAudio: '/level2/41/2.mp3',
            readAudio: '/level2/41/3.mp3',
            writeAudio: '/level2/41/4.mp3',
            distinguishAudio: '/level2/41/5.mp3',
            thinkAudio: '/level2/41/7.mp3',
            circleAudio: '/level2/41/6.mp3',
            writingImages: ['/level2/41/write_1.png', '/level2/41/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ', 'مَ', 'مِ', 'مُ', 'نَ', 'نِ', 'نُ'],
            rememberAudio: '/level2/41/remember.mp3',
            assemble: [
                { id: 1, letters: ['نَ', 'بِيـ', 'ـل'], word: 'نَبِيل' },
                { id: 2, letters: ['نُ', 'مُ', 'ل'], word: 'نَمْل' },
                { id: 3, letters: ['نُ', 'و', 'ر'], word: 'نُور' },
                { id: 4, letters: ['هَ', 'نَ', 'اء'], word: 'هَنَاء' }
            ],
            assembleAudio: '/level2/41/assemble.mp3',
        },
        {
            id: 42,
            title: t('Letter Ha Lesson'),
            subtitle: t('Group Seven'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Pyramid'), image: '/level2/42/pyramid.jpg', letter: 'هَ', highlight: 'هـ', listenImage: '/level2/42/listen/1.png', readImage: '/level2/42/read/1.png' },
                { id: 2, text: t('Crescent'), image: '/level2/42/crescent.jpg', letter: 'هـِ', highlight: 'هـ', listenImage: '/level2/42/listen/2.png', readImage: '/level2/42/read/2.png' },
                { id: 3, text: t('Hoopoe'), image: '/level2/42/hoopoe.jpg', letter: 'هُ', highlight: 'هـ', listenImage: '/level2/42/listen/3.png', readImage: '/level2/42/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'هَا', short: 'هَ' },
                { id: 2, badge: 'ي', long: 'هِيـــ', short: 'هـِ' },
                { id: 3, badge: 'و', long: 'هُو', short: 'هُ' },
            ],
            writingPractice: [
                { id: 1, text: 'نَهَلَ', sub: 'هَدَمَ', text2: 'هَزَمَ', sub2: 'هَادٍ', type: 'solid', image: '/level2/42/write/1.png' },
                { id: 2, text: 'نَهَلَ', sub: 'هَدَمَ', text2: 'هَزَمَ', sub2: 'هَادٍ', type: 'dotted', image: '/level2/42/write/2.png' },
                { id: 3, text: 'نَهَلَ', sub: 'هَدَمَ', text2: 'هَزَمَ', sub2: 'هَادٍ', type: 'dotted', image: '/level2/42/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'هـ',
                    title: t('Exercise: Circle Letter Ha'),
                    words: [
                        'نَهْر', 'هَرَاوَة', 'مَهَا',
                        'كَهْرَبَاء', 'هَوَاء', 'وَجْه',
                        'مِيَاه', 'هِرَّة', 'طَهُور'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Ha'),
                    image: '/level2/42/phone.jpg',
                    answer: t('Telephone')
                }
            ],
            audioUrl: '/level2/42/42.wav',
            watchAudio: '/level2/42/1.mp3',
            listenAudio: '/level2/42/2.mp3',
            readAudio: '/level2/42/3.mp3',
            writeAudio: '/level2/42/4.mp3',
            distinguishAudio: '/level2/42/5.mp3',
            thinkAudio: '/level2/42/7.mp3',
            circleAudio: '/level2/42/6.mp3',
            writingImages: ['/level2/42/write_1.png', '/level2/42/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ', 'مَ', 'مِ', 'مُ', 'نَ', 'نِ', 'نُ', 'هَ', 'هـِ', 'هُ'],
            rememberAudio: '/level2/42/remember.mp3',
            assemble: [
                { id: 1, letters: ['نَ', 'هَ', 'لَ'], word: 'نَهَلَ' },
                { id: 2, letters: ['هَ', 'دَ', 'مَ'], word: 'هَدَمَ' },
                { id: 3, letters: ['هَ', 'زَ', 'مَ'], word: 'هَزَمَ' },
                { id: 4, letters: ['هَ', 'ا', 'دٍ'], word: 'هَادٍ' }
            ],
            assembleAudio: '/level2/42/assemble.mp3',
        },
        {
            id: 43,
            title: t('Letter Waw Lesson'),
            subtitle: t('Group Seven'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Rose'), image: '/level2/43/rose.jpg', letter: 'وَ', highlight: 'و', listenImage: '/level2/43/listen/1.png', readImage: '/level2/43/read/1.png' },
                { id: 2, text: t('Pillow'), image: '/level2/43/pillow.jpg', letter: 'وِ', highlight: 'و', listenImage: '/level2/43/listen/2.png', readImage: '/level2/43/read/2.png' },
                { id: 3, text: t('Roses'), image: '/level2/43/roses.jpg', letter: 'وُ', highlight: 'و', listenImage: '/level2/43/listen/3.png', readImage: '/level2/43/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'وَا', short: 'وَ' },
                { id: 2, badge: 'ي', long: 'وِي', short: 'وِ' },
                { id: 3, badge: 'و', long: 'وُو', short: 'وُ' },
            ],
            writingPractice: [
                { id: 1, text: 'وَرَدَ', sub: 'وَصَفَ', text2: 'وَصَلَ', sub2: 'وَرِثَ', type: 'solid', image: '/level2/43/write/1.png' },
                { id: 2, text: 'وَرَدَ', sub: 'وَصَفَ', text2: 'وَصَلَ', sub2: 'وَرِثَ', type: 'dotted', image: '/level2/43/write/2.png' },
                { id: 3, text: 'وَرَدَ', sub: 'وَصَفَ', text2: 'وَصَلَ', sub2: 'وَرِثَ', type: 'dotted', image: '/level2/43/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'و',
                    title: t('Exercise: Circle Letter Waw'),
                    words: [
                        'هَوَاء', 'نُجُوم', 'وَلِيد',
                        'وَظِيفَة', 'صُوَر', 'فَوَاكِه',
                        'جَوَّال', 'مُلَوَّث', 'نَعُود'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Waw'),
                    image: '/level2/43/banana.jpg',
                    answer: t('Banana')
                }
            ],
            audioUrl: '/level2/43/43.wav',
            watchAudio: '/level2/43/1.mp3',
            listenAudio: '/level2/43/2.mp3',
            readAudio: '/level2/43/3.mp3',
            writeAudio: '/level2/43/4.mp3',
            distinguishAudio: '/level2/43/5.mp3',
            thinkAudio: '/level2/43/7.mp3',
            circleAudio: '/level2/43/6.mp3',
            writingImages: ['/level2/43/write_1.png', '/level2/43/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ', 'مَ', 'مِ', 'مُ', 'نَ', 'نِ', 'نُ', 'هَ', 'هـِ', 'هُ', 'وَ', 'وِ', 'وُ'],
            rememberAudio: '/level2/43/remember.mp3',
            assemble: [
                { id: 1, letters: ['و', 'ر', 'د'], word: 'وَرَد' },
                { id: 2, letters: ['و', 'ص', 'ف'], word: 'وَصَفَ' },
                { id: 3, letters: ['و', 'ص', 'ل'], word: 'وَصَلَ' },
                { id: 4, letters: ['و', 'ر', 'ث'], word: 'وَرِثَ' }
            ],
            assembleAudio: '/level2/43/assemble.mp3',
        },
        {
            id: 44,
            title: t('Letter Ya Lesson'),
            subtitle: t('Group Seven'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Reads'), image: '/level2/44/reads.jpg', letter: 'يَ', highlight: 'ي', listenImage: '/level2/44/listen/1.png', readImage: '/level2/44/read/1.png' },
                { id: 2, text: t('Nayef'), image: '/level2/44/nayef.jpg', letter: 'يِ', highlight: 'ي', listenImage: '/level2/44/listen/2.png', readImage: '/level2/44/read/2.png' },
                { id: 3, text: t('Shakes hands'), image: '/level2/44/shakes_hands.jpg', letter: 'يُ', highlight: 'ي', listenImage: '/level2/44/listen/3.png', readImage: '/level2/44/read/3.png' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'يَا', short: 'يَ' },
                { id: 2, badge: 'ي', long: 'يِي', short: 'يِ' },
                { id: 3, badge: 'و', long: 'يُو', short: 'يُ' },
            ],
            writingPractice: [
                { id: 1, text: 'يُحِبُّ', sub: 'يَاسِر', text2: 'يُوسُف', sub2: 'رِيح', type: 'solid', image: '/level2/44/write/1.png' },
                { id: 2, text: 'يُحِبُّ', sub: 'يَاسِر', text2: 'يُوسُف', sub2: 'رِيح', type: 'dotted', image: '/level2/44/write/2.png' },
                { id: 3, text: 'يُحِبُّ', sub: 'يَاسِر', text2: 'يُوسُف', sub2: 'رِيح', type: 'dotted', image: '/level2/44/write/3.png' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ي',
                    title: t('Exercise: Circle Letter Ya'),
                    words: [
                        'بَيْت', 'يَمَامَة', 'رِيَاح',
                        'يَمْشِي', 'يُسْرِعُ', 'سَيَّارَة',
                        'يَرْكُضُ', 'عَيْن', 'رِيَاضَة'
                    ]
                },
                {
                    id: 2,
                    type: 'think',
                    title: t('Mention words with letter Ya'),
                    image: '/level2/44/riyal.jpg',
                    answer: t('Riyal')
                }
            ],
            audioUrl: '/level2/44/44.wav',
            watchAudio: '/level2/44/1.mp3',
            listenAudio: '/level2/44/2.mp3',
            readAudio: '/level2/44/3.mp3',
            writeAudio: '/level2/44/4.mp3',
            distinguishAudio: '/level2/44/5.mp3',
            thinkAudio: '/level2/44/7.mp3',
            circleAudio: '/level2/44/6.mp3',
            writingImages: ['/level2/44/write_1.png', '/level2/44/write_2.png'],
            remember: ['أَ', 'إِ', 'أُ', 'بَ', 'بِ', 'بُ', 'تَ', 'تِ', 'تُ', 'ثَ', 'ثِ', 'ثُ', 'جَ', 'جِ', 'جُ', 'حَ', 'حِ', 'حُ', 'خَ', 'خِ', 'خُ', 'دَ', 'دِ', 'دُ', 'ذَ', 'ذِ', 'ذُ', 'رَ', 'رِ', 'رُ', 'زَ', 'زِ', 'زُ', 'سَ', 'سِ', 'سُ', 'شَ', 'شِ', 'شُ', 'صَ', 'صِ', 'صُ', 'ضَ', 'ضِ', 'ضُ', 'طَ', 'طِ', 'طُ', 'ظَ', 'ظِ', 'ظُ', 'عَ', 'عِ', 'عُ', 'غَ', 'غِ', 'غُ', 'فَ', 'فِ', 'فُ', 'قَ', 'قِ', 'قُ', 'كَ', 'كِ', 'كُ', 'لَ', 'لِ', 'لُ', 'مَ', 'مِ', 'مُ', 'نَ', 'نِ', 'نُ', 'هَ', 'هـِ', 'هُ', 'وَ', 'وِ', 'وُ', 'يَ', 'يِ', 'يُ'],
            rememberAudio: '/level2/44/remember.mp3',
            assemble: [
                { id: 1, letters: ['ي', 'ح', 'ب'], word: 'يُحِبُّ' },
                { id: 2, letters: ['ي', 'ا', 'س', 'ر'], word: 'يَاسِر' },
                { id: 3, letters: ['ي', 'و', 'س', 'ف'], word: 'يُوسُف' },
                { id: 4, letters: ['ر', 'ي', 'ح'], word: 'رِيح' }
            ],
            assembleAudio: '/level2/44/assemble.mp3',
        },
        {
            id: 45,
            title: t('Group Seven Words Review'),
            subtitle: t('Group Seven'),
            type: 'readWriteReview',
            items: [
                { id: 1, text: '', words: ['رَسَمَ', 'سَمَحَ', 'حَسَمَ', 'مَاجِد'] },
                { id: 2, text: '', words: ['نَبِيل', 'نَمْل', 'هَنَاء', 'نُور'] },
                { id: 3, text: '', words: ['نَهَلَ', 'هَدَمَ', 'هَزَمَ', 'هَادٍ'] },
                { id: 4, text: '', words: ['وَرَدَ', 'وَصَفَ', 'وَصَلَ', 'وَرِثَ'] },
                { id: 5, text: '', words: ['يُحِبُّ', 'يَاسِر', 'يُوسُف', 'رِيح'] },
            ],
            audioUrl: '/level2/45/45.wav',
        },
        {
            id: 46,
            title: t('Sukoon Lesson'),
            subtitle: t('Group Seven'),
            type: 'gallery',
            items: [
                { id: 1, text: '<span class="text-red-500">أُسْ</span>رَة', image: '/level2/46/family.jpg' },
                { id: 2, text: '<span class="text-red-500">بِنْ</span>ت', image: '/level2/46/girl.jpg' },
                { id: 3, text: '<span class="text-red-500">طِفْ</span>ل', image: '/level2/46/child.jpg' },
                { id: 4, text: '<span class="text-red-500">بَيْ</span>ت', image: '/level2/46/house.jpg' },
                { id: 5, text: '<span class="text-red-500">رَأْ</span>س', image: '/level2/46/head.jpg' },
                { id: 6, text: '<span class="text-red-500">شَعْ</span>ر', image: '/level2/46/hair.jpg' },
                { id: 7, text: '<span class="text-red-500">وَجْ</span>ه', image: '/level2/46/face.jpg' },
                { id: 8, text: '<span class="text-red-500">أَنْ</span>ف', image: '/level2/46/nose.jpg' },
                { id: 9, text: '<span class="text-red-500">قَلْ</span>ب', image: '/level2/46/heart.jpg' },
                { id: 10, text: '<span class="text-red-500">تَمْ</span>ر', image: '/level2/46/dates.jpg' },
                { id: 11, text: '<span class="text-red-500">زَيْ</span>تُون', image: '/level2/46/olives.jpg' },
                { id: 12, text: '<span class="text-red-500">مَوْ</span>ز', image: '/level2/46/banana.jpg' },
                { id: 13, text: '<span class="text-red-500">مِشْ</span>مِش', image: '/level2/46/apricot.jpg' },
                { id: 14, text: '<span class="text-red-500">خَوْ</span>خ', image: '/level2/46/peach.jpg' },
                { id: 15, text: '<span class="text-red-500">ثُعْ</span>بَان', image: '/level2/46/snake.jpg' },
                { id: 16, text: '<span class="text-red-500">ثَعْ</span>لَب', image: '/level2/46/fox.jpg' },
                { id: 17, text: '<span class="text-red-500">كَلْ</span>ب', image: '/level2/46/dog.jpg' },
                { id: 18, text: '<span class="text-red-500">فَهْ</span>د', image: '/level2/46/cheetah.jpg' },
            ],
            audioUrl: '/level2/46/46.wav',
        },
        {
            id: 47,
            title: t('Shaddah Lesson'),
            subtitle: t('Group Seven'),
            type: 'gallery',
            items: [
                { id: 1, text: 'أ<span class="text-red-500">مِّ</span>ي', image: '/level2/47/mother.jpg' },
                { id: 2, text: 'جَ<span class="text-red-500">دِّ</span>ي', image: '/level2/47/grandfather.jpg' },
                { id: 3, text: 'جَ<span class="text-red-500">دَّ</span>تِي', image: '/level2/47/grandmother.jpg' },
                { id: 4, text: 'عَ<span class="text-red-500">مَّ</span>تِي', image: '/level2/47/aunt.jpg' },
                { id: 5, text: 'مُعَ<span class="text-red-500">لِّ</span>م', image: '/level2/47/teacher_m.jpg' },
                { id: 6, text: 'مُعَ<span class="text-red-500">لِّ</span>مَة', image: '/level2/47/teacher_f.jpg' },
                { id: 7, text: 'فَ<span class="text-red-500">نَّا</span>ن', image: '/level2/47/artist.jpg' },
                { id: 8, text: 'يُفَ<span class="text-red-500">كِّ</span>رُ', image: '/level2/47/thinks.jpg' },
                { id: 9, text: 'يُغَ<span class="text-red-500">نِّ</span>ي', image: '/level2/47/sings.jpg' },
            ],
            audioUrl: '/level2/47/47.wav',
        },
        {
            id: 48,
            title: t('Arabic Alphabet Sounds'),
            subtitle: t('Group Seven'),
            type: 'alphabetChart',
            items: [
                'أَ', 'بَ', 'تَ', 'ثَ', 'جَ', 'حَ', 'خَ',
                'دَ', 'ذَ', 'رَ', 'زَ', 'سَ', 'شَ', 'صَ',
                'ضَ', 'طَ', 'ظَ', 'عَ', 'غَ', 'فَ', 'قَ',
                'كَ', 'لَ', 'مَ', 'نَ', 'هَ', 'وَ', 'يَ'
            ],
            audioUrl: '/level2/48/48.wav',
        },
        {
            id: 49,
            title: t('Arabic Alphabet Sounds'),
            subtitle: t('Group Seven'),
            type: 'alphabetChart',
            colorTheme: 'blue',
            items: [
                'إِ', 'بِ', 'تِ', 'ثِ', 'جِ', 'حِ', 'خِ',
                'دِ', 'ذِ', 'رِ', 'زِ', 'سِ', 'شِ', 'صِ',
                'ضِ', 'طِ', 'ظِ', 'عِ', 'غِ', 'فِ', 'قِ',
                'كِ', 'لِ', 'مِ', 'نِ', 'هِ', 'وِ', 'يِ'
            ],
            audioUrl: '/level2/49/49.wav',
        },
        {
            id: 50,
            title: t('Arabic Alphabet Sounds'),
            subtitle: t('Group Seven'),
            type: 'alphabetChart',
            colorTheme: 'green',
            items: [
                'أُ', 'بُ', 'تُ', 'ثُ', 'جُ', 'حُ', 'خُ',
                'دُ', 'ذُ', 'رُ', 'زُ', 'سُ', 'شُ', 'صُ',
                'ضُ', 'طُ', 'ظُ', 'عُ', 'غُ', 'فُ', 'قُ',
                'كُ', 'لُ', 'مُ', 'نُ', 'هُ', 'وُ', 'يُ'
            ],
            audioUrl: '/level2/50/50.wav',
        },

    ];

    return part2Lessons;
};
