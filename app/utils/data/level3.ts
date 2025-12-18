import type { Lesson } from '../lessons';

export const getLevel3Lessons = (t: (key: string) => string): Lesson[] => {
    const part3Lessons: Lesson[] = [
        {
            id: 1,
            title: t('Unit One'),
            subtitle: t('Words with Three Letters'),
            type: 'unitIntro',
            items: []
        },
        {
            id: 2,
            title: t('I Read and Write'),
            type: 'readWriteRows',
            items: [
                // Page 8
                { id: 1, text: 'أَخَذَ' }, { id: 2, text: 'بَدَأَ' }, { id: 3, text: 'تَرَكَ' }, { id: 4, text: 'ثَبَتَ' },
                { id: 5, text: 'جَلَسَ' }, { id: 6, text: 'حَصَدَ' }, { id: 7, text: 'خَبَزَ' }, { id: 8, text: 'دَخَلَ' },
                { id: 9, text: 'ذَهَبَ' }, { id: 10, text: 'رَحَلَ' }, { id: 11, text: 'زَرَعَ' }, { id: 12, text: 'سَبَقَ' },
                // Page 9
                { id: 13, text: 'شَكَرَ' }, { id: 14, text: 'صَنَعَ' }, { id: 15, text: 'ضَحِكَ' }, { id: 16, text: 'طَبَعَ' },
                { id: 17, text: 'ظَهَرَ' }, { id: 18, text: 'عَلِمَ' }, { id: 19, text: 'غَرَسَ' }, { id: 20, text: 'فَتَحَ' },
                { id: 21, text: 'قَصَدَ' }, { id: 22, text: 'كَتَبَ' }, { id: 23, text: 'لَحِقَ' }, { id: 24, text: 'مَنَعَ' },
                // Page 10 (Corrected)
                { id: 25, text: 'نَبَعَ' }, { id: 26, text: 'هَدَمَ' }, { id: 27, text: 'وَعَدَ' }, { id: 28, text: 'أَسَرَ' },
                { id: 29, text: 'أَسَدُ' }, { id: 30, text: 'بَرْقُ' }, { id: 31, text: 'تِينُ' }, { id: 32, text: 'ثَوْرُ' },
                { id: 33, text: 'جِلْدُ' }, { id: 34, text: 'سَمْعُ' }, { id: 35, text: 'شَوْكُ' }, { id: 36, text: 'صَبْرُ' },
                // Page 11
                { id: 37, text: 'ضَبْعُ' }, { id: 38, text: 'طَبْعُ' }, { id: 39, text: 'ظَهْرُ' }, { id: 40, text: 'عَلَمُ' },
                { id: 41, text: 'عَدْلُ' }, { id: 42, text: 'دِيكُ' }, { id: 43, text: 'ذَهَبُ' }, { id: 44, text: 'رَأْسُ' },
                { id: 45, text: 'جَمْعُ' }, { id: 46, text: 'سَمَكُ' }, { id: 47, text: 'غَيْمُ' }, { id: 48, text: 'فِيلُ' },
                // Page 12
                { id: 49, text: 'قَمَرُ' }, { id: 50, text: 'كَأْسُ' }, { id: 51, text: 'لَيْثُ' }, { id: 52, text: 'مَوْزُ' },
                { id: 53, text: 'نَجْمُ' }, { id: 54, text: 'كُتُبُ' }, { id: 55, text: 'وَرْدُ' }, { id: 56, text: 'يَدُ' },
                { id: 57, text: 'عِنَبُ' }, { id: 58, text: 'وَرَقُ' }, { id: 59, text: 'بَاعُ' }, { id: 60, text: 'قَمَرُ' }
            ]
        },
        {
            id: 3,
            title: t('I Assemble then I Write'),
            description: t('(تَرْتِيبُ كَلِمَةٍ مُكَوَّنَةٍ مِنْ ثَلَاثَةِ أَحْرُفٍ مُرَتَّبَةٍ مَعَ كِتَابَتِهَا عَلَى غِرَارِ الْمِثَالِ الْأَوَّلِ)'),
            type: 'assembleWrite',
            items: [
                // Page 13
                { id: 1, letters: ['أَ', 'خَ', 'ذَ'], word: 'أَخَذَ' },
                { id: 2, letters: ['بَ', 'دَ', 'أَ'], word: 'بَدَأَ' },
                { id: 3, letters: ['تَ', 'رَ', 'كَ'], word: 'تَرَكَ' },
                { id: 4, letters: ['ثَ', 'بَ', 'تَ'], word: 'ثَبَتَ' },
                { id: 5, letters: ['جَ', 'لَ', 'سَ'], word: 'جَلَسَ' },
                // Page 14
                { id: 6, letters: ['حَ', 'صَ', 'دَ'], word: 'حَصَدَ' },
                { id: 7, letters: ['خَ', 'بَ', 'زَ'], word: 'خَبَزَ' },
                { id: 8, letters: ['دَ', 'خَ', 'لَ'], word: 'دَخَلَ' },
                { id: 9, letters: ['ذَ', 'هَ', 'بَ'], word: 'ذَهَبَ' },
                { id: 10, letters: ['رَ', 'حَ', 'لَ'], word: 'رَحَلَ' },
                // Page 15
                { id: 11, letters: ['زَ', 'رَ', 'عَ'], word: 'زَرَعَ' },
                { id: 12, letters: ['سَ', 'بَ', 'قَ'], word: 'سَبَقَ' },
                { id: 13, letters: ['شَ', 'كَ', 'رَ'], word: 'شَكَرَ' },
                { id: 14, letters: ['صَ', 'نَ', 'عَ'], word: 'صَنَعَ' },
                { id: 15, letters: ['ضَ', 'حِ', 'كَ'], word: 'ضَحِكَ' },
                // Page 16
                { id: 16, letters: ['طَ', 'بَ', 'عَ'], word: 'طَبَعَ' },
                { id: 17, letters: ['ظَ', 'هَ', 'رَ'], word: 'ظَهَرَ' },
                { id: 18, letters: ['عَ', 'لِ', 'مَ'], word: 'عَلِمَ' },
                { id: 19, letters: ['غَ', 'رَ', 'سَ'], word: 'غَرَسَ' },
                { id: 20, letters: ['فَ', 'تَ', 'حَ'], word: 'فَتَحَ' },
                // Page 17
                { id: 21, letters: ['قَ', 'صَ', 'دَ'], word: 'قَصَدَ' },
                { id: 22, letters: ['ك', 'تَ', 'بَ'], word: 'كَتَبَ' },
                { id: 23, letters: ['لَ', 'حِ', 'قَ'], word: 'لَحِقَ' },
                { id: 24, letters: ['مَ', 'نَ', 'عَ'], word: 'مَنَعَ' },
                { id: 25, letters: ['نَ', 'بَ', 'عَ'], word: 'نَبَعَ' },
                // Page 18
                { id: 26, letters: ['تَ', 'ا', 'بَ'], word: 'تَابَ' },
                { id: 27, letters: ['هَ', 'دَ', 'ى'], word: 'هَدَى' },
                { id: 28, letters: ['وَ', 'صَ', 'لَ'], word: 'وَصَلَ' },
                { id: 29, letters: ['يَ', 'فَ', 'عَ'], word: 'يَفَعَ' },
                { id: 30, letters: ['قَ', 'صَّ'], word: 'قَصَّ' }, // Assuming separate letters show sad with shadda or repeated? Image shows 3 circles for most. Row 5 has 3 circles: q, s, s. So letters: qa, sa, sa.
                // Page 19
                { id: 31, letters: ['دَ', 'رَ', 'بَ'], word: 'دَرَبَ' },
                { id: 32, letters: ['ضَ', 'حِ', 'كَ'], word: 'ضَحِكَ' },
                { id: 33, letters: ['قَ', 'رُ', 'بَ'], word: 'قَرُبَ' },
                { id: 34, letters: ['عَ', 'دَّ'], word: 'عَدَّ' }, // Image has 3 circles: 'a', 'd', 'd'.
                { id: 35, letters: ['مَ', 'زَ', 'قَ'], word: 'مَزَقَ' }
            ]
        },
    ];

    return part3Lessons;
};
