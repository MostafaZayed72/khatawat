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
                { id: 1, text: t('Ear'), image: '/level2/5/ear.jpg', letter: 'أُ', highlight: 'أ', listenImage: '/level2/5/listen/1.png', readImage: '/level2/5/read/1.png' },
                { id: 2, text: t('Needle'), image: '/level2/5/needle.jpg', letter: 'إِ', highlight: 'إ', listenImage: '/level2/5/listen/2.png', readImage: '/level2/5/read/2.png' },
                { id: 3, text: t('Lion'), image: '/level2/5/lion.jpg', letter: 'أَ', highlight: 'أ', listenImage: '/level2/5/listen/3.png', readImage: '/level2/5/read/3.png' },
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
            audioUrl: '/level2/5/5.wav',
            writingImage: '/level2/5/write_full.png',
        },
        {
            id: 6,
            title: t('Letter Baa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Duck'), image: '/level2/6/duck.jpg', letter: 'بَ', highlight: 'ب' },
                { id: 2, text: t('Watermelon'), image: '/level2/6/watermelon.jpg', letter: 'بِ', highlight: 'ب' },
                { id: 3, text: t('Tower'), image: '/level2/6/tower.jpg', letter: 'بُ', highlight: 'ب' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'بَا', short: 'بَ' },
                { id: 2, badge: 'ي', long: 'بِيـــ', short: 'بِ' },
                { id: 3, badge: 'و', long: 'بُو', short: 'بُ' },
            ],
            writingPractice: [
                { id: 1, text: 'ب', sub: 'بِ', text2: 'بُ', type: 'solid' },
                { id: 2, text: 'بَ', sub: 'بِ', text2: 'بُ', type: 'dotted' },
                { id: 3, text: 'بَ', sub: 'بِ', text2: 'بُ', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'ب',
                    title: t('Exercise: Circle Letter Baa'),
                    words: [
                        'White', 'Fox', 'Ibrahim',
                        'Gate', 'Fly', 'Seven',
                        'Well', 'Milk', 'Drinks'
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
        },
        {
            id: 7,
            title: t('Letter Taa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Berries'), image: '/level2/7/berries.jpg', letter: 'تُ', highlight: 'ت' },
                { id: 2, text: t('Figs'), image: '/level2/7/fig.jpg', letter: 'تِ', highlight: 'ت' },
                { id: 3, text: t('Dates'), image: '/level2/7/dates.jpg', letter: 'تَ', highlight: 'ت' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'تَا', short: 'تَ' },
                { id: 2, badge: 'ي', long: 'تِيـــ', short: 'تِ' },
                { id: 3, badge: 'و', long: 'تُو', short: 'تُ' },
            ],
            writingPractice: [
                { id: 1, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'solid' },
                { id: 2, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'dotted' },
                { id: 3, text: 'تَابَ', sub: 'تُوتُ', text2: 'بَاتَتْ', type: 'dotted' },
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
                    answer: t('Apple')
                }
            ],
            audioUrl: '/level2/7/7.wav',
        },
        {
            id: 8,
            title: t('Letter Thaa Lesson'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Snake'), image: '/level2/8/snake.jpg', letter: 'ثُ', highlight: 'ث' },
                { id: 2, text: t('Clothes'), image: '/level2/8/clothes.jpg', letter: 'ثِ', highlight: 'ث' },
                { id: 3, text: t('Bull'), image: '/level2/8/bull.jpg', letter: 'ثَ', highlight: 'ث' },
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
                { id: 1, text: t('Soldiers'), image: '/level2/11/soldiers.jpg', letter: 'جُ', highlight: 'ج' },
                { id: 2, text: t('Camels'), image: '/level2/11/camels.jpg', letter: 'جِ', highlight: 'ج' },
                { id: 3, text: t('Carrots'), image: '/level2/11/carrots.jpg', letter: 'جَ', highlight: 'ج' },
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
        },
        {
            id: 12,
            title: t('Letter Haa Lesson'),
            subtitle: t('The Second Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Rope'), image: '/level2/12/rope.png', letter: 'حَ', highlight: 'ح' },
                { id: 2, text: t('Horse'), image: '/level2/12/horse.png', letter: 'حِ', highlight: 'ح' },
                { id: 3, text: t('Whale'), image: '/level2/12/whale.png', letter: 'حُ', highlight: 'ح' },
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
        },
        {
            id: 13,
            title: t('Letter Khaa Lesson'),
            subtitle: t('The Second Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Bread'), image: '/level2/13/bread.jpg', letter: 'خُ', highlight: 'خ' },
                { id: 2, text: t('Cucumber'), image: '/level2/13/cucumber.jpg', letter: 'خِ', highlight: 'خ' },
                { id: 3, text: t('Lettuce'), image: '/level2/13/lettuce.jpg', letter: 'خَ', highlight: 'خ' },
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
                { id: 1, text: t('Bear'), image: '/level2/16/bear.jpg', letter: 'دُ', highlight: 'د' },
                { id: 2, text: t('Rooster'), image: '/level2/16/rooster.jpg', letter: 'دِ', highlight: 'د' },
                { id: 3, text: t('Chicken'), image: '/level2/16/chicken.jpg', letter: 'دَ', highlight: 'د' },
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
                    image: '/level2/16/polar_bear.jpg',
                    answer: 'دُبّ'
                }
            ],
            audioUrl: '/level2/16/16.wav',
        },
        {
            id: 17,
            title: t('Letter Thal Lesson'),
            subtitle: t('The Third Group'),
            type: 'letterExamples',
            items: [
                { id: 1, text: t('Corn'), image: '/level2/17/corn.jpg', letter: 'ذُ', highlight: 'ذ' },
                { id: 2, text: t('Arm'), image: '/level2/17/arm.jpg', letter: 'ذِ', highlight: 'ذ' },
                { id: 3, text: t('Gold'), image: '/level2/17/gold.jpg', letter: 'ذَ', highlight: 'ذ' },
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
                        { id: 2, text: 'أُذُن' }, // Uthun (Ear) - Reusing existing key if possible? No, sticking to text for consistency in arrays
                        { id: 3, text: 'حِذَاء' }, // Hidhaa
                        { id: 4, text: 'نَافِذَة' }, // Nafidha
                        { id: 5, text: 'قُنْفُذ' }, // Qunfudh
                        { id: 6, text: 'غِذَاء' }, // Ghidhaa
                        { id: 7, text: 'ذُبَابَة' }, // Dhubaaba (Fly) - Reusing existing word? Existing key is "Fly": "ذُبَابَة"
                        { id: 8, text: 'تِلْمِيذ' }, // Tilmeeth
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
        },
    ];

    return part2Lessons;
};
