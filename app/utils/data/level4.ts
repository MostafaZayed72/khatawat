import type { Lesson } from '../lessons';

export const getLevel4Lessons = (t: (key: string) => string): Lesson[] => {
    const part4Lessons: Lesson[] = [
        {
            id: 1,
            title: t('Lesson One'),
            subtitle: t('Hassan in the Library'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Hassan'),
                    speakerColor: '#d32f2f',
                    text: t('How are you?')
                },
                {
                    id: 2,
                    speaker: t('Walid'),
                    speakerColor: '#1976d2',
                    text: t('Praise be to Allah, I am fine. How are you?')
                },
                {
                    id: 3,
                    speaker: t('Hassan'),
                    speakerColor: '#d32f2f',
                    text: t('Praise be to Allah, fine.')
                },
                {
                    id: 4,
                    speaker: t('Hassan'),
                    speakerColor: '#d32f2f',
                    text: t('What is the book you are reading?')
                },
                {
                    id: 5,
                    speaker: t('Walid'),
                    speakerColor: '#1976d2',
                    text: t('It is a novel, I love reading novels. What do you read, Hassan?')
                },
                {
                    id: 6,
                    speaker: t('Hassan'),
                    speakerColor: '#d32f2f',
                    text: t('I love reading history books, because they are interesting and attract me a lot.')
                },
                {
                    id: 7,
                    speaker: t('Walid'),
                    speakerColor: '#1976d2',
                    text: t('I will leave you now with your friend the book.')
                },
                {
                    id: 8,
                    speaker: t('Hassan'),
                    speakerColor: '#d32f2f',
                    text: t('Let us continue reading.')
                }
            ]
        },
        {
            id: 2,
            title: t('Lesson Two'),
            subtitle: t('Meeting of two friends'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('How are you, Wasen?')
                },
                {
                    id: 2,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Fine, and how are you?')
                },
                {
                    id: 3,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('Praise be to Allah, we haven\'t met for a long time, what do you do now?')
                },
                {
                    id: 4,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Doctor, and what is your job?')
                },
                {
                    id: 5,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('Arabic language teacher, what is your specialization in medicine?')
                },
                {
                    id: 6,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Pediatrician.')
                },
                {
                    id: 7,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('Beautiful, I wish you success always.')
                },
                {
                    id: 8,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Thanks, where are you going?')
                },
                {
                    id: 9,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('I want to go to Al-Awail School where I work.')
                },
                {
                    id: 10,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Really, it is close to the hospital where I work.')
                },
                {
                    id: 11,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('That is very wonderful, I will visit you there in my free time, God willing.')
                },
                {
                    id: 12,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Waiting for you, I will be very happy.')
                },
                {
                    id: 13,
                    speaker: t('Mona'),
                    speakerColor: '#d32f2f',
                    text: t('Me too, I have arrived at the school, goodbye.')
                },
                {
                    id: 14,
                    speaker: t('Wasen'),
                    speakerColor: '#1976d2',
                    text: t('Goodbye.')
                }
            ]
        },
        {
            id: 3,
            title: t('Lesson Three'),
            subtitle: t('Mohamed in School'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Mohamed'),
                    speakerColor: '#d32f2f',
                    text: t('How are you, my teacher?')
                },
                {
                    id: 2,
                    speaker: t('Teacher'),
                    speakerColor: '#1976d2',
                    text: t('Fine, tell me about your news.')
                },
                {
                    id: 3,
                    speaker: t('Mohamed'),
                    speakerColor: '#d32f2f',
                    text: t('Fine, when is the exam date?')
                },
                {
                    id: 4,
                    speaker: t('Teacher'),
                    speakerColor: '#1976d2',
                    text: t('Next Sunday.')
                },
                {
                    id: 5,
                    speaker: t('Mohamed'),
                    speakerColor: '#d32f2f',
                    text: t('There is still plenty of time for studying and revision.')
                },
                {
                    id: 6,
                    speaker: t('Teacher'),
                    speakerColor: '#1976d2',
                    text: t('I wish you success Mohamed, you are truly a diligent and polite student.')
                },
                {
                    id: 7,
                    speaker: t('Mohamed'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, my teacher.')
                }
            ]
        },
        {
            id: 4,
            title: t('Lesson Four'),
            subtitle: t('Saeed in the Pharmacy'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Saeed'),
                    speakerColor: '#d32f2f',
                    text: t('Peace be upon you.')
                },
                {
                    id: 2,
                    speaker: t('Pharmacist'),
                    speakerColor: '#1976d2',
                    text: t('And upon you peace.')
                },
                {
                    id: 3,
                    speaker: t('Saeed'),
                    speakerColor: '#d32f2f',
                    text: t('The doctor wrote this medicine for me.')
                },
                {
                    id: 4,
                    speaker: t('Pharmacist'),
                    speakerColor: '#1976d2',
                    text: t('Give me the paper to dispense it for you.')
                },
                {
                    id: 5,
                    speaker: t('Pharmacist'),
                    speakerColor: '#1976d2',
                    text: t('Here is the medicine, you must take it three times a day, for a whole week.')
                },
                {
                    id: 6,
                    speaker: t('Saeed'),
                    speakerColor: '#d32f2f',
                    text: t('How much is it?')
                },
                {
                    id: 7,
                    speaker: t('Pharmacist'),
                    speakerColor: '#1976d2',
                    text: t('Ten riyals.')
                },
                {
                    id: 8,
                    speaker: t('Saeed'),
                    speakerColor: '#d32f2f',
                    text: t('Here you go.')
                },
                {
                    id: 9,
                    speaker: t('Pharmacist'),
                    speakerColor: '#1976d2',
                    text: t('I wish you a cure.')
                },
                {
                    id: 10,
                    speaker: t('Saeed'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, goodbye.')
                }
            ]
        },
        {
            id: 5,
            title: t('Lesson Five'),
            subtitle: t('Alaa applies for a job'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Alaa'),
                    speakerColor: '#d32f2f',
                    text: t('Hello.')
                },
                {
                    id: 2,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('Hello to you.')
                },
                {
                    id: 3,
                    speaker: t('Alaa'),
                    speakerColor: '#d32f2f',
                    text: t('The company published news about a vacancy, and I want to apply for it.')
                },
                {
                    id: 4,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('That is correct, give me your CV please.')
                },
                {
                    id: 5,
                    speaker: t('Alaa'),
                    speakerColor: '#d32f2f',
                    text: t('Here you go (CV).')
                },
                {
                    id: 6,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('We will study the file, leave me your number to contact you, and we will tell you the result later.')
                },
                {
                    id: 7,
                    speaker: t('Alaa'),
                    speakerColor: '#d32f2f',
                    text: t('Okay, stay well.')
                },
                {
                    id: 8,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('I wish you success.')
                }
            ]
        },
        {
            id: 6,
            title: t('Lesson Six'),
            subtitle: t('Saleh at the bus station'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Saleh'),
                    speakerColor: '#d32f2f',
                    text: t('Peace be upon you, how are you Youssef?')
                },
                {
                    id: 2,
                    speaker: t('Youssef'),
                    speakerColor: '#1976d2',
                    text: t('And upon you peace, fine.')
                },
                {
                    id: 3,
                    speaker: t('Saleh'),
                    speakerColor: '#d32f2f',
                    text: t('When is the bus time?')
                },
                {
                    id: 4,
                    speaker: t('Youssef'),
                    speakerColor: '#1976d2',
                    text: t('At eight o\'clock.')
                },
                {
                    id: 5,
                    speaker: t('Saleh'),
                    speakerColor: '#d32f2f',
                    text: t('Good, only five minutes left for its arrival.')
                },
                {
                    id: 6,
                    speaker: t('Youssef'),
                    speakerColor: '#1976d2',
                    text: t('True, I will sit in the bus next to you to chat.')
                },
                {
                    id: 7,
                    speaker: t('Saleh'),
                    speakerColor: '#d32f2f',
                    text: t('I am very happy about that.')
                }
            ]
        }
    ];

    return part4Lessons;
};
