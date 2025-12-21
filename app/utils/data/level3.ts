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
                { id: 29, text: 'أَسَد' }, { id: 30, text: 'بَرْق' }, { id: 31, text: 'تِين' }, { id: 32, text: 'ثَوْر' },
                { id: 33, text: 'جِلْد' }, { id: 34, text: 'سَمْع' }, { id: 35, text: 'شَوْك' }, { id: 36, text: 'صَبْر' },
                // Page 11
                { id: 37, text: 'ضَبْع' }, { id: 38, text: 'طَبْع' }, { id: 39, text: 'ظَهْر' }, { id: 40, text: 'عَلَم' },
                { id: 41, text: 'عَدْل' }, { id: 42, text: 'دِيك' }, { id: 43, text: 'ذَهَب' }, { id: 44, text: 'رَأْس' },
                { id: 45, text: 'جَمْع' }, { id: 46, text: 'سَمَك' }, { id: 47, text: 'غَيْم' }, { id: 48, text: 'فِيل' },
                // Page 12
                { id: 49, text: 'قَمَر' }, { id: 50, text: 'كَأْس' }, { id: 51, text: 'لَيْث' }, { id: 52, text: 'مَوْز' },
                { id: 53, text: 'نَجْم' }, { id: 54, text: 'كُتُب' }, { id: 55, text: 'وَرْد' }, { id: 56, text: 'يَد' },
                { id: 57, text: 'عِنَب' }, { id: 58, text: 'وَرَق' }, { id: 59, text: 'بَاع' }, { id: 60, text: 'قَمَر' }
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

        {
            id: 4,
            title: t('I Arrange then I Write'),
            description: t('(تَرْتِيبُ كَلِمَةٍ ذَاتِ مَعْنًى مُكَوَّنَةٍ مِنْ ثَلَاثَةِ أَحْرُفٍ غَيْرِ مُرَتَّبَةٍ مَعَ كِتَابَتِهَا عَلَى غِرَارِ الْمِثَالِ الْأَوَّلِ)'),
            type: 'arrangeWrite',
            items: [
                // Page 20
                { id: 1, letters: ['أَ', 'قَ', 'رَ'], word: 'قَرَأَ' },
                { id: 2, letters: ['بَ', 'عَ', 'رَ'], word: 'عَبَرَ' },
                { id: 3, letters: ['سَ', 'رَ', 'تَ'], word: 'سَتَرَ' },
                { id: 4, letters: ['ثَ', 'وِ', 'رَ'], word: 'وَرِثَ' },
                { id: 5, letters: ['حَ', 'نَ', 'جَ'], word: 'نَجَحَ' },
                // Page 21
                { id: 6, letters: ['حَ', 'رَ', 'ثَ'], word: 'حَرَثَ' },
                { id: 7, letters: ['هَ', 'فِ', 'مَ'], word: 'فَهِمَ' },
                { id: 8, letters: ['مَ', 'جَ', 'عَ'], word: 'جَمَعَ' },
                { id: 9, letters: ['جَ', 'لَ', 'مَ'], word: 'جَمَل' },
                { id: 10, letters: ['كَ', 'رَ', 'ذَ'], word: 'ذَكَرَ' },
                // Page 22
                { id: 11, letters: ['جَ', 'مَ', 'رَ'], word: 'رَجَمَ' },
                { id: 12, letters: ['عَ', 'زَ', 'رَ'], word: 'زَرَعَ' },
                { id: 13, letters: ['دَ', 'رَ', 'سَ'], word: 'دَرَسَ' },
                { id: 14, letters: ['شَ', 'طَ', 'رَ'], word: 'شَرَطَ' },
                { id: 15, letters: ['دَ', 'عِ', 'صَ'], word: 'صَعِدَ' },
                // Page 23
                { id: 16, letters: ['ضَ', 'رَ', 'عَ'], word: 'عَرَضَ' },
                { id: 17, letters: ['حَ', 'طَ', 'مَ'], word: 'طَمَحَ' },
                { id: 18, letters: ['ظَ', 'لَّ', 'ا'], word: 'ظَلَّ' },
                { id: 19, letters: ['فَ', 'رَ', 'عَ'], word: 'عَرَفَ' },
                { id: 20, letters: ['غَ', 'بَ', 'لَ'], word: 'بَلَغَ' },
                // Page 24
                { id: 21, letters: ['لَ', 'صَ', 'فَ'], word: 'فَصَلَ' },
                { id: 22, letters: ['مَ', 'سَ', 'لَ'], word: 'لَمَسَ' },
                { id: 23, letters: ['كَ', 'رَ', 'فَ'], word: 'فَكَرَ' },
                { id: 24, letters: ['دَ', 'مِ', 'نَ'], word: 'نَدِمَ' },
                { id: 25, letters: ['لَ', 'نَ', 'قَ'], word: 'نَقَلَ' },
                // Page 25 (New)
                { id: 26, letters: ['رَ', 'مَ', 'هَ'], word: 'هَرَمَ' },
                { id: 27, letters: ['ضُ', 'وَ', 'حَ'], word: 'وَضُحَ' },
                { id: 28, letters: ['بَ', 'لُ', 'جَ'], word: 'جَلُبَ' },
                { id: 29, letters: ['عَ', 'وَ', 'قَ'], word: 'وَقَعَ' },
                { id: 30, letters: ['سَ', 'رَ', 'مَ'], word: 'رَسَمَ' }
            ]
        },
        {
            id: 5,
            title: t('I Construct then I Write'),
            description: t('(تَكْوِينُ كَلِمَةٍ ذَاتِ مَعْنًى مِنَ الْحُرُوفِ الْمُخْتَارَةِ مَعَ وَضْعِ الْحَرَكَاتِ الْمُنَاسِبَةِ عَلَى غِرَارِ الْمِثَالِ الْأَوَّلِ)'),
            type: 'arrangeWrite',
            items: [
                { id: 1, letters: ['ن', 'ص', 'ع'], word: 'صَنَعَ' },
                { id: 2, letters: ['ض', 'ر', 'ع'], word: 'عَرَضَ' },
                { id: 3, letters: ['ح', 'م', 'ط'], word: 'طَمَحَ' },
                { id: 4, letters: ['ن', 'ص', 'ع'], word: 'صَنَعَ' },
                { id: 5, letters: ['ظ', 'ن', 'ر'], word: 'نَظَرَ' },
                // Page 27
                { id: 6, letters: ['ف', 'ر', 'ع'], word: 'عَرَفَ' },
                { id: 7, letters: ['ل', 'ب', 'غ'], word: 'بَلَغَ' },
                { id: 8, letters: ['ف', 'ص', 'ل'], word: 'فَصَلَ' },
                { id: 9, letters: ['ع', 'ل', 'ق'], word: 'قَلَعَ' },
                { id: 10, letters: ['ف', 'ر', 'ك'], word: 'فَرَكَ' },
                // Page 28
                { id: 11, letters: ['س', 'ل', 'م'], word: 'لَمَسَ' },
                { id: 12, letters: ['ل', 'ن', 'ق'], word: 'نَقَلَ' }, // Image 2 Row 2. Right L Mid N Left Q.
                { id: 13, letters: ['ر', 'م', 'ه'], word: 'هَرَمَ' },
                { id: 14, letters: ['ض', 'و', 'ح'], word: 'وَضُحَ' },
                { id: 15, letters: ['ن', 'ل', 'ز'], word: 'نَزَلَ' },
                // Page 29
                { id: 16, letters: ['د', 'ر', 'س'], word: 'دَرَسَ' },
                { id: 17, letters: ['س', 'ر', 'م'], word: 'رَسَمَ' }, // Verified Page 29 Row 2: Right S Mid R Left M.
                { id: 18, letters: ['ح', 'ب', 'س'], word: 'سَبَحَ' },
                { id: 19, letters: ['ح', 'س', 'ب'], word: 'سَحَبَ' },
                { id: 20, letters: ['ح', 'ب', 'ص'], word: 'صَحِبَ' }, // Verified Page 29 Row 5: Right H Mid B Left Saad.
                // Page 30
                { id: 21, letters: ['س', 'د', 'ر'], word: 'سَرَدَ' },
                { id: 22, letters: ['ص', 'ر', 'د'], word: 'رَصَدَ' },
                { id: 23, letters: ['ص', 'ق', 'د'], word: 'قَصَدَ' },
                { id: 24, letters: ['ص', 'ر', 'ب'], word: 'صَبَرَ' },
                { id: 25, letters: ['ص', 'ح', 'د'], word: 'حَصَدَ' }, // Image 4 Row 5: Right Saad Mid Ha Left Dal. -> ['ص', 'ح', 'د']
                // Previous I had ['د', 'ح', 'ص']. This is Reverse.
                // Page 31
                { id: 26, letters: ['ص', 'و', 'ل'], word: 'وَصَلَ' },
                { id: 27, letters: ['م', 'ج', 'ع'], word: 'جَمَعَ' },
                { id: 28, letters: ['م', 'ح', 'ل'], word: 'حَمَلَ' },
                { id: 29, letters: ['ل', 'م', 'ح'], word: 'لَمَحَ' },
                { id: 30, letters: ['ت', 'ك', 'ب'], word: 'كَتَبَ' },
                // Page 32
                { id: 31, letters: ['خ', 'ل', 'د'], word: 'دَخَلَ' },
                { id: 32, letters: ['ر', 'ص', 'ق'], word: 'قَرَصَ' }, // 'Qarasa' (Pinched) or 'Qasara' (Shortened)? 'Qarasa' fits letters R, S, Q.
                { id: 33, letters: ['ق', 'ن', 'ل'], word: 'نَقَلَ' },
                { id: 34, letters: ['و', 'ث', 'ب'], word: 'وَثَبَ' },
                { id: 35, letters: ['ه', 'م', 'ف'], word: 'فَهِمَ' },
                // Page 33
                { id: 36, letters: ['ح', 'ج', 'ن'], word: 'نَجَحَ' },
                { id: 37, letters: ['ن', 'ه', 'ض'], word: 'نَهَضَ' },
                { id: 38, letters: ['د', 'خ', 'ل'], word: 'دَخَلَ' },
                { id: 39, letters: ['ز', 'و', 'ن'], word: 'وَزَنَ' },
                { id: 40, letters: ['ل', 'م', 'ع'], word: 'لَمَعَ' }
            ]
        },
        {
            id: 6,
            title: t('I Read'),
            type: 'readGrid',
            items: [
                // Page 34
                { id: 1, text: 'مَدَحَ' }, { id: 2, text: 'غَرَسَ' }, { id: 3, text: 'سَهِرَ' },
                { id: 4, text: 'فَرِحَ' }, { id: 5, text: 'سَمَكَ' }, { id: 6, text: 'بَغِضَ' },
                { id: 7, text: 'جَبُلُ' }, { id: 8, text: 'قَمَرُ' }, { id: 9, text: 'نَزَلَ' },
                { id: 10, text: 'جَلَسَ' }, { id: 11, text: 'غَسَلَ' }, { id: 12, text: 'رَدَمَ' },
                { id: 13, text: 'صَرَفَ' }, { id: 14, text: 'صَلُحَ' }, { id: 15, text: 'عَنِبُ' },
                { id: 16, text: 'لَبِنُ' }, { id: 17, text: 'نَفَرَ' }, { id: 18, text: 'صَفِقَ' },

                // Page 35
                { id: 19, text: 'سَعِدَ' }, { id: 20, text: 'عَصَرَ' }, { id: 21, text: 'حَرَصَ' },
                { id: 22, text: 'فَقَدَ' }, { id: 23, text: 'سَبَحَ' }, { id: 24, text: 'تَعِبَ' },
                { id: 25, text: 'رَسَمَ' }, { id: 26, text: 'دَرَسَ' }, { id: 27, text: 'لَحِقَ' },
                { id: 28, text: 'رَبَطَ' }, { id: 29, text: 'ضَرَبَ' }, { id: 30, text: 'نَجَرَ' },
                { id: 31, text: 'فَرَجُ' }, { id: 32, text: 'أَخَذَ' }, { id: 33, text: 'نَفَخَ' },
                { id: 34, text: 'كَسَرَ' }, { id: 35, text: 'حَضَرَ' }, { id: 36, text: 'مَرِضَ' },


                // Page 36
                { id: 37, text: 'بَذَرَ' }, { id: 38, text: 'نَفَذَ' }, { id: 39, text: 'يَزِنُ' },
                { id: 40, text: 'سَكَنُ' }, { id: 41, text: 'يَدِي' }, { id: 42, text: 'نَثَرَ' },
                { id: 43, text: 'حَدَثَ' }, { id: 44, text: 'هَرَبَ' }, { id: 45, text: 'بَيِضُ' },
                { id: 46, text: 'نَبَهَ' }, { id: 47, text: 'نَظَرَ' }, { id: 48, text: 'حَفِظَ' },
                { id: 49, text: 'أَسُدُ' }, { id: 50, text: 'فَتَحَ' }, { id: 51, text: 'نَصَتَ' },
                { id: 52, text: 'بَطَلُ' }, { id: 53, text: 'أُذُنُ' }, { id: 54, text: 'زَأَرَ' },

                // Page 37
                { id: 55, text: 'سَأَلَ' }, { id: 56, text: 'قَرَأَ' }, { id: 57, text: 'نَمِرُ' },
                { id: 58, text: 'فَرَشَ' }, { id: 59, text: 'جَمَلُ' }, { id: 60, text: 'نَزَلَ' },
                { id: 61, text: 'فَرَزَ' }, { id: 62, text: 'نَشَرَ' }, { id: 63, text: 'بَلَعَ' },
                { id: 64, text: 'وَصَفَ' }, { id: 65, text: 'صَعَدَ' }, { id: 66, text: 'بَدَأَ' },
                { id: 67, text: 'رَكِبَ' }, { id: 68, text: 'أَسِفَ' }, { id: 69, text: 'صَمَتَ' },
                { id: 70, text: 'قَدَمُ' }, { id: 71, text: 'طَلَبَ' }, { id: 72, text: 'سَمِعَ' },

                // Page 38
                { id: 73, text: 'عَمِلَ' }, { id: 74, text: 'عَمَلُ' }, { id: 75, text: 'مَنَعَ' },
                { id: 76, text: 'عَدَلَ' }, { id: 77, text: 'شَرَحَ' }, { id: 78, text: 'نَجِدُ' },
                { id: 79, text: 'نَزَعَ' }, { id: 80, text: 'بَعُدَ' }, { id: 81, text: 'هَدَمَ' },
                { id: 82, text: 'قَدِمَ' }, { id: 83, text: 'حَصَدَ' }, { id: 84, text: 'نَصَلُ' },
                { id: 85, text: 'بَدَلَ' }, { id: 86, text: 'وَزَنَ' }, { id: 87, text: 'قَسَمَ' },
                { id: 88, text: 'نَدِمَ' }, { id: 89, text: 'قَرُبَ' }, { id: 90, text: 'زَرَعَ' },

                // Page 39
                { id: 91, text: 'أَذِنَ' }, { id: 92, text: 'دَعَمَ' }, { id: 93, text: 'كَسُرَ' },
                { id: 94, text: 'بَلُدَ' }, { id: 95, text: 'فَرُسَ' }, { id: 96, text: 'رَفَدَ' },
                { id: 97, text: 'لَزِمَ' }, { id: 98, text: 'رَكَلَ' }, { id: 99, text: 'فَرِحَ' },
                { id: 100, text: 'عَرَفَ' }, { id: 101, text: 'غَرَفَ' }, { id: 102, text: 'فَرُحَ' },
                { id: 103, text: 'طَلَعَ' }, { id: 104, text: 'وَرَقُ' }, { id: 105, text: 'صَفَحَ' },
                { id: 106, text: 'سَمَحَ' }, { id: 107, text: 'فَهِمَ' }, { id: 108, text: 'بَصُلَ' },

                // Page 40
                { id: 109, text: 'وَصَلَ' }, { id: 110, text: 'وَقَعَ' }, { id: 111, text: 'أَمَرَ' },
                { id: 112, text: 'نَهَضَ' }, { id: 113, text: 'نَظَمَ' }, { id: 114, text: 'نُظُمُ' },
                { id: 115, text: 'لَمَعَ' }, { id: 116, text: 'فَرَدَ' }, { id: 117, text: 'ذَهَبَ' },
                { id: 118, text: 'حَسَبَ' }, { id: 119, text: 'حَرَفُ' }, { id: 120, text: 'رَأَسَ' },
                { id: 121, text: 'أَكَلَ' }, { id: 122, text: 'طَمِعَ' }, { id: 123, text: 'رَأَفَ' },
                { id: 124, text: 'عَبَرَ' }, { id: 125, text: 'كَرُمَ' }, { id: 126, text: 'نَسِيَ' }
            ]
        }
    ];

    return part3Lessons;
};
