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
        },
        {
            id: 7,
            title: t('الكلمات الثلاثية التي تحوي على مقطع ساكن'),
            description: t('لمحة مختصرة لقراءة بعض الكلمات التي تحتوي على عدد من المهارات اللغوية'),
            type: 'ovalGrid',
            items: [
                // Page 41 (Images converted to text)
                // Row 1 (R->L): Nimr, Habl, Jubn, Fasl
                { id: 1, text: 'نِمْرُ' }, { id: 2, text: 'حَبْلُ' }, { id: 3, text: 'جُبْنُ' }, { id: 4, text: 'فَصْلُ' },
                // Row 2: Kalb, Tabl, Raml, Qufl
                { id: 5, text: 'كَلْبُ' }, { id: 6, text: 'طَبْلُ' }, { id: 7, text: 'رَمْلُ' }, { id: 8, text: 'قُفْلُ' },
                // Row 3: Anf, Ayn, Zhufr, Rijl
                { id: 9, text: 'أَنْفُ' }, { id: 10, text: 'عَيْنُ' }, { id: 11, text: 'ظُفْرُ' }, { id: 12, text: 'رِجْلُ' },

                // Page 42 (Pink Ovals)
                // Row 1: Wazn, Sam, Ilm, Rasm
                { id: 13, text: 'وَزْنُ' }, { id: 14, text: 'سَمْعُ' }, { id: 15, text: 'عِلْمُ' }, { id: 16, text: 'رَسْمُ' },
                // Row 2: Qaml, Lawh, Adl, Misk
                { id: 17, text: 'قَمْلُ' }, { id: 18, text: 'لَوْحُ' }, { id: 19, text: 'عَدْلُ' }, { id: 20, text: 'مِسْكُ' },
                // Row 3: Ta'm, Qird, Bayt, Aql
                { id: 21, text: 'طَعْمُ' }, { id: 22, text: 'قِرْدُ' }, { id: 23, text: 'بَيْتُ' }, { id: 24, text: 'عَقْلُ' },
                // Row 4: Barq, Naml, Kasr, Akl
                { id: 25, text: 'بَرْقُ' }, { id: 26, text: 'نَمْلُ' }, { id: 27, text: 'كَسْرُ' }, { id: 28, text: 'أَكْلُ' }
            ]
        },
        {
            id: 8,
            title: t('الكلمات الثلاثية التي تحوي على مقطع المد'),
            type: 'ovalGrid',
            colorTheme: 'green',
            items: [
                // Page 43 (Images converted to text)
                // Row 1 (R->L): Ful, Mal, Fil, Bab
                { id: 1, text: 'فُولُ' }, { id: 2, text: 'مَالُ' }, { id: 3, text: 'فِيلُ' }, { id: 4, text: 'بَابُ' },
                // Row 2 (R->L): Kub, Hut, Dud, Sur
                { id: 5, text: 'كُوبُ' }, { id: 6, text: 'حُوتُ' }, { id: 7, text: 'دُودُ' }, { id: 8, text: 'سُورُ' },
                // Row 3 (R->L): Tut, Dik, Zir, Tin
                { id: 9, text: 'تُوتُ' }, { id: 10, text: 'دِيكُ' }, { id: 11, text: 'زِيرُ' }, { id: 12, text: 'تِينُ' },

                // Page 44 (Green Ovals)
                // Row 1: Zar, Eid, Kaf, Qal
                { id: 13, text: 'زَارَ' }, { id: 14, text: 'عِيدُ' }, { id: 15, text: 'كَافُ' }, { id: 16, text: 'قَالَ' },
                // Row 2: Ad, Jar, Rim, Ud
                { id: 17, text: 'عَادَ' }, { id: 18, text: 'جَارُ' }, { id: 19, text: 'رِيمُ' }, { id: 20, text: 'عُودُ' },
                // Row 3: Sad, Hur, Rif, Tar
                { id: 21, text: 'صَادَ' }, { id: 22, text: 'حُورُ' }, { id: 23, text: 'رِيفُ' }, { id: 24, text: 'طَارَ' },
                // Row 4: Sam, Ghar, Nam, Dur
                { id: 25, text: 'صَامَ' }, { id: 26, text: 'غَارُ' }, { id: 27, text: 'نَامَ' }, { id: 28, text: 'دُورُ' }
            ]
        },
        {
            id: 9,
            title: t('الكلمات الثلاثية التي تحوي على الحروف المُشَدَّدَة'),
            type: 'ovalGrid',
            colorTheme: 'orange',
            items: [

                { id: 1, text: 'مَ<span class="text-red-600">كَّ</span>ة' },
                { id: 2, text: 'سُ<span class="text-red-600">كَّ</span>رُ' },
                { id: 3, text: 'بَ<span class="text-red-600">طَّ</span>ة' },

                // Row 2 (R->L): Qittah, Wazzah, Jarrah
                { id: 4, text: 'قِ<span class="text-red-600">طَّ</span>ة' },
                { id: 5, text: 'وَ<span class="text-red-600">زَّ</span>ة' },
                { id: 6, text: 'جَ<span class="text-red-600">رَّ</span>ة' },

                // Row 3 (R->L): Samma'ah, Sabbah
                // Samma'ah: S - M(Shadda) - A - 'A - H. Middle/Stressed is Mim.
                { id: 7, text: 'سَ<span class="text-red-600">مَّ</span>اعَة' },
                { id: 8, text: 'سَ<span class="text-red-600">بَّ</span>اح' },

                // Page 46 (Green/Orange Ovals) - Verbs
                // Row 1 (R->L): Baddala, Hassana, Wadd'a, Jarraba
                { id: 9, text: 'بَ<span class="text-red-600">دَّ</span>لَ' },
                { id: 10, text: 'حَ<span class="text-red-600">سَّ</span>نَ' },
                { id: 11, text: 'وَ<span class="text-red-600">دَّ</span>عَ' },
                { id: 12, text: 'جَ<span class="text-red-600">رَّ</span>بَ' },

                // Row 2 (R->L): Da'ama, Sarrafa, Darraba, Haddatha
                { id: 13, text: 'دَ<span class="text-red-600">عَّ</span>مَ' },
                { id: 14, text: 'صَ<span class="text-red-600">رَّ</span>فَ' },
                { id: 15, text: 'دَ<span class="text-red-600">رَّ</span>بَ' },
                { id: 16, text: 'حَ<span class="text-red-600">دَّ</span>ثَ' },

                // Row 3 (R->L): Qassama, Wazza'a, Jarrada, Qallada
                { id: 17, text: 'قَ<span class="text-red-600">سَّ</span>مَ' },
                { id: 18, text: 'وَ<span class="text-red-600">زَّ</span>عَ' },
                { id: 19, text: 'جَ<span class="text-red-600">رَّ</span>دَ' },
                { id: 20, text: 'قَ<span class="text-red-600">لَّ</span>دَ' },

                // Row 4 (R->L): Darrasa, 'Abbara, Ghassala, Saddada
                { id: 21, text: 'دَ<span class="text-red-600">رَّ</span>سَ' },
                { id: 22, text: 'عَ<span class="text-red-600">بَّ</span>رَ' },
                { id: 23, text: 'غَ<span class="text-red-600">سَّ</span>لَ' },
                { id: 24, text: 'سَ<span class="text-red-600">دَّ</span>دَ' }
            ]
        },
        {
            id: 10,
            title: t('Reading words containing Tanween'),
            type: 'tanweenTable',
            columns: [
                {
                    id: 1,
                    header: 'تَنَوِينُ ضَمٍّ',
                    color: 'red',
                    items: [
                        { id: 1, text: 'وَاقِ<span class="text-red-600">فٌ</span>' },
                        { id: 2, text: 'طَالِ<span class="text-red-600">بٌ</span>' },
                        { id: 3, text: 'قَمَ<span class="text-red-600">رٌ</span>' },
                        { id: 4, text: 'شَجَرَ<span class="text-red-600">ةٌ</span>' }
                    ]
                },
                {
                    id: 2,
                    header: 'تَنَوِينُ كَسْرٍ',
                    color: 'green',
                    items: [
                        { id: 1, text: 'وَاقِ<span class="text-green-600">فٍ</span>' },
                        { id: 2, text: 'طَالِ<span class="text-green-600">بٍ</span>' },
                        { id: 3, text: 'قَمَ<span class="text-green-600">رٍ</span>' },
                        { id: 4, text: 'شَجَرَ<span class="text-green-600">ةٍ</span>' }
                    ]
                },
                {
                    id: 3,
                    header: 'تَنَوِينُ فَتْحٍ',
                    color: 'blue',
                    items: [
                        { id: 1, text: 'وَا<span class="text-blue-600">قِفًا</span>' },
                        { id: 2, text: 'طَالِ<span class="text-blue-600">بًا</span>' },
                        { id: 3, text: 'قَمَ<span class="text-blue-600">رًا</span>' },
                        { id: 4, text: 'شَجَرَ<span class="text-blue-600">ةً</span>' }
                    ]
                }
            ]
        },
        {
            id: 11,
            title: t('Reading words ending with open Taa or Marbuta Taa or Haa'),
            type: 'tanweenTable',
            columns: [
                {
                    id: 1,
                    header: 'كَلِمَاتٌ مَخْتُومَةٌ بِتَاءٍ مَفْتُوحَةٍ',
                    color: 'red',
                    items: [
                        { id: 1, text: 'أَكَلَ<span class="text-red-600">تْ</span>' },
                        { id: 2, text: 'ذَهَبَ<span class="text-red-600">تْ</span>' },
                        { id: 3, text: 'بَيْ<span class="text-red-600">تٌ</span>' },
                        { id: 4, text: 'بَنَا<span class="text-red-600">تٌ</span>' }
                    ]
                },
                {
                    id: 2,
                    header: 'كَلِمَاتٌ مَخْتُومَةٌ بِتَاءٍ مَرْبُوطَةٍ',
                    color: 'green',
                    items: [
                        { id: 1, text: 'حَدِيقَ<span class="text-green-600">ةٌ</span>' },
                        { id: 2, text: 'مُعَلِّمَ<span class="text-green-600">ةٌ</span>' },
                        { id: 3, text: 'نَخْلَ<span class="text-green-600">ةٌ</span>' },
                        { id: 4, text: 'بَقَرَ<span class="text-green-600">ةٌ</span>' }
                    ]
                },
                {
                    id: 3,
                    header: 'كَلِمَاتٌ مَخْتُومَةٌ بِهَاءٍ',
                    color: 'blue',
                    items: [
                        { id: 1, text: 'مِيَا<span class="text-blue-600">هٌ</span>' },
                        { id: 2, text: 'وُجُو<span class="text-blue-600">هٌ</span>' },
                        { id: 3, text: 'قَلَمُ<span class="text-blue-600">هُ</span>' },
                        { id: 4, text: 'عَلَيْ<span class="text-blue-600">هِ</span>' }
                    ]
                }
            ]
        },
        {
            id: 12,
            title: t('Reading words containing Sun Lam and Moon Lam'),
            type: 'tanweenTable',
            columns: [
                {
                    id: 1,
                    header: '(ال) الشَّمْسِيَّة',
                    color: 'red',
                    items: [
                        { id: 1, text: '<span class="text-red-600">الشَّ</span>مْسُ' },
                        { id: 2, text: '<span class="text-red-600">النَّ</span>وْمُ' },
                        { id: 3, text: '<span class="text-red-600">الصَّ</span>يْفُ' },
                        { id: 4, text: '<span class="text-red-600">الشِّ</span>تَاءُ' }
                    ]
                },
                {
                    id: 2,
                    header: '(ال) الْقَمَرِيَّة',
                    color: 'green',
                    items: [
                        { id: 1, text: '<span class="text-green-600">الْ</span>قَمَرُ' },
                        { id: 2, text: '<span class="text-green-600">الْ</span>بَصَلُ' },
                        { id: 3, text: '<span class="text-green-600">الْ</span>حُوتُ' },
                        { id: 4, text: '<span class="text-green-600">الْ</span>جَمَلُ' }
                    ]
                }
            ]
        },
        {
            id: 13,
            title: t('First Spelling Diagnosis'),
            subtitle: t('I write what is dictated to me'),
            type: 'dictation',
            items: [
                { id: 1, text: '' }, { id: 2, text: '' },
                { id: 3, text: '' }, { id: 4, text: '' },
                { id: 5, text: '' }, { id: 6, text: '' },
                { id: 7, text: '' }, { id: 8, text: '' },
                { id: 9, text: '' }, { id: 10, text: '' }
            ]
        },
        {
            id: 14,
            title: t('Unit Two'),
            subtitle: t('Words consisting of four letters and more'),
            type: 'unitIntro',
            items: []
        },
        {
            id: 15,
            title: t('I Read and Write'),
            type: 'readWriteRows',
            gridCols: 3,
            items: [
                // Page 52
                { id: 1, text: 'بَعِيدٌ' }, { id: 2, text: 'مَدْرَسَةٌ' }, { id: 3, text: 'مَدْرَسَتِي' },
                { id: 4, text: 'وَاسِعٌ' }, { id: 5, text: 'جَمَلٌ' }, { id: 6, text: 'أَبْيَضُ' },
                // Page 53
                { id: 7, text: 'أَسْوَدُ' }, { id: 8, text: 'صَفْرَاءُ' }, { id: 9, text: 'حَمْرَاءُ' },
                { id: 10, text: 'طَائِرَةٌ' }, { id: 11, text: 'سَلْمَانُ' }, { id: 12, text: 'أَذْهَبُ' },
                // Page 54
                { id: 13, text: 'أَدْرُسُ' }, { id: 14, text: 'طَارِقٌ' }, { id: 15, text: 'جَوْهَرَةٌ' },
                { id: 16, text: 'زَمْزَمٌ' }, { id: 17, text: 'يَكْتُبُ' }, { id: 18, text: 'يَقْرَأُ' },
                // Page 55
                { id: 19, text: 'سُعَادُ' }, { id: 20, text: 'نَامَتْ' }, { id: 21, text: 'حَقِيبَةٌ' },
                { id: 22, text: 'شَجَرَةٌ' }, { id: 23, text: 'سَيَّارَةٌ' }, { id: 24, text: 'قَرِيبٌ' },
                // Page 56
                { id: 25, text: 'وَاسِعٌ' }, { id: 26, text: 'جَمِيلٌ' }, { id: 27, text: 'أَبْيَضُ' },
                { id: 28, text: 'أَسْوَدُ' }, { id: 29, text: 'جَوَاهِرٌ' }, { id: 30, text: 'يُذَاكِرُ' },
                // Page 57
                { id: 31, text: 'عِجْلَةٌ' }, { id: 32, text: 'فَصْلِي' }, { id: 33, text: 'وَالِدِي' },
                { id: 34, text: 'عَمِلْتُ' }, { id: 35, text: 'كِتَابًا' }, { id: 36, text: 'وَرَقَةً' },
                // Page 58
                { id: 37, text: 'فُصُولُ' }, { id: 38, text: 'لُغَتِي' }, { id: 39, text: 'عُلُومٌ' },
                { id: 40, text: 'عُهُودٌ' }, { id: 41, text: 'وَاقِفًا' }, { id: 42, text: 'فَاطِمَةُ' },
                // Page 59
                { id: 43, text: 'فَارِسٌ' }, { id: 44, text: 'صَغِيرَةٌ' }, { id: 45, text: 'قَلَمِي' },
                { id: 46, text: 'طِفْلَةٌ' }, { id: 47, text: 'حَدِيقَةٌ' }, { id: 48, text: 'لَوْحَةٌ' },
                // Page 60
                { id: 49, text: 'طَرِيقًا' }, { id: 50, text: 'رَصِيفٌ' }, { id: 51, text: 'حُسَامٌ' },
                { id: 52, text: 'هِشَامٌ' }, { id: 53, text: 'بَقَرَةٌ' }, { id: 54, text: 'عِمَادُ' },
                // Page 61
                { id: 55, text: 'سَحَابَةٌ' }, { id: 56, text: 'الْحِصَانُ' }, { id: 57, text: 'فَيْصَلُ' },
                { id: 58, text: 'الْمَدِينَةُ' }, { id: 59, text: 'جِبَالٌ' }, { id: 60, text: 'مُعَلِّمٌ' },
                // Page 62
                { id: 61, text: 'مُزَارِعٌ' }, { id: 62, text: 'أَعْلَامُ' }, { id: 63, text: 'مَلْعَبٌ' },
                { id: 64, text: 'يُسَافِرُ' }, { id: 65, text: 'أَبْهَا' }, { id: 66, text: 'قَرْيَةٌ' },
                // Page 63
                { id: 67, text: 'فَرَاشَةٌ' }, { id: 68, text: 'يُسَامِحُ' }, { id: 69, text: 'سَاعَةٌ' },
                { id: 70, text: 'بَاخِرَةٌ' }, { id: 71, text: 'كَثِيرَةٌ' }, { id: 72, text: 'قَلِيلٌ' },
                // Page 64
                { id: 73, text: 'أَلْوَانٌ' }, { id: 74, text: 'جَابِرٌ' }, { id: 75, text: 'يُدَافِعُ' },
                { id: 76, text: 'تِمْسَاحٌ' }, { id: 77, text: 'الشَّارِعُ' }, { id: 78, text: 'بَيْضَةٌ' },
                // Page 65
                { id: 79, text: 'دَجَاجٌ' }, { id: 80, text: 'سَمِعْتُ' }, { id: 81, text: 'طَبِيبٌ' },
                { id: 82, text: 'صَافِرَةٌ' }, { id: 83, text: 'خَرُوفٌ' }, { id: 84, text: 'سَعِيدٌ' },
                // Page 66
                { id: 85, text: 'أَسَدٌ' }, { id: 86, text: 'أَصْفَرُ' }, { id: 87, text: 'مُحَمَّدٌ' },
                { id: 88, text: 'نُقُودٌ' }, { id: 89, text: 'الْعَمَلُ' }, { id: 90, text: 'مَسَاجِدُ' },
                // Page 67
                { id: 91, text: 'صَالِحٌ' }, { id: 92, text: 'جِسْرًا' }, { id: 93, text: 'النَّادِي' },
                { id: 94, text: 'يَرْكُضُ' }, { id: 95, text: 'يَتَدَرَّبُ' }, { id: 96, text: 'غِذَاءٌ' }
            ]
        }
    ];

    return part3Lessons;
};
