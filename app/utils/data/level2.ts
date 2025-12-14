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

    ];

    return part2Lessons;
};
