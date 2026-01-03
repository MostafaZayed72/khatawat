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
        },
        {
            id: 7,
            title: t('Lesson Seven'),
            subtitle: t('Salem in the Airport'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('Welcome Salem, how can I help you?')
                },
                {
                    id: 2,
                    speaker: t('Salem'),
                    speakerColor: '#d32f2f',
                    text: t('I want a ticket to London.')
                },
                {
                    id: 3,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('Okay, give me your passport please.')
                },
                {
                    id: 4,
                    speaker: t('Salem'),
                    speakerColor: '#d32f2f',
                    text: t('Sure, here you go.')
                },
                {
                    id: 5,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('There is a trip at one in the afternoon, would you like to book it?')
                },
                {
                    id: 6,
                    speaker: t('Salem'),
                    speakerColor: '#d32f2f',
                    text: t('The time doesn\'t suit me, are there other appointments?')
                },
                {
                    id: 7,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('Yes, there is a trip at six in the evening and another at eleven in the morning.')
                },
                {
                    id: 8,
                    speaker: t('Salem'),
                    speakerColor: '#d32f2f',
                    text: t('Yes this is suitable, I want you to book me on the trip that takes off at six in the evening.')
                },
                {
                    id: 9,
                    speaker: t('Employee'),
                    speakerColor: '#1976d2',
                    text: t('Okay I will do that.')
                },
                {
                    id: 10,
                    speaker: t('Salem'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you.')
                }
            ]
        },
        {
            id: 8,
            title: t('Lesson Eight'),
            subtitle: t('Samir Visits his Sick Friend'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Samir'),
                    speakerColor: '#d32f2f',
                    text: t('How are you my friend?')
                },
                {
                    id: 2,
                    speaker: t('Ayman'),
                    speakerColor: '#1976d2',
                    text: t('Praise be to Allah fine.')
                },
                {
                    id: 3,
                    speaker: t('Samir'),
                    speakerColor: '#d32f2f',
                    text: t('Masha Allah your face is bright, it seems you improved.')
                },
                {
                    id: 4,
                    speaker: t('Ayman'),
                    speakerColor: '#1976d2',
                    text: t('Yes, I feel my health is good now.')
                },
                {
                    id: 5,
                    speaker: t('Samir'),
                    speakerColor: '#d32f2f',
                    text: t('Do not forget to drink the medicine on time.')
                },
                {
                    id: 6,
                    speaker: t('Ayman'),
                    speakerColor: '#1976d2',
                    text: t('I thank you for your concern.')
                },
                {
                    id: 7,
                    speaker: t('Samir'),
                    speakerColor: '#d32f2f',
                    text: t('No thanks for duty my friend, I wish you wellness and urgent healing.')
                },
                {
                    id: 8,
                    speaker: t('Ayman'),
                    speakerColor: '#1976d2',
                    text: t('I was very pleased with your visit.')
                }
            ]
        },
        {
            id: 9,
            title: t('Lesson Nine'),
            subtitle: t('Suad in the Hospital'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('What is your name?')
                },
                {
                    id: 2,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('Suad.')
                },
                {
                    id: 3,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('What do you complain of Suad?')
                },
                {
                    id: 4,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('I feel severe pain in my belly.')
                },
                {
                    id: 5,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('Put your hand on the pain place Suad.')
                },
                {
                    id: 6,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('Here, in the lower belly doctor.')
                },
                {
                    id: 7,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('What did you eat today?')
                },
                {
                    id: 8,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('I ate a little eggs, and bought a piece of candy and I was on my way to the club.')
                },
                {
                    id: 9,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('From where did you buy that candy?')
                },
                {
                    id: 10,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('From a street vendor standing in the street.')
                },
                {
                    id: 11,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('This is the reason Suad, street vendors food is polluted and carries microbes.')
                },
                {
                    id: 12,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('I was wrong doctor, I will not do that again.')
                },
                {
                    id: 13,
                    speaker: t('Doctor_Male'),
                    speakerColor: '#1976d2',
                    text: t('You must take the medicine and rest for two days.')
                },
                {
                    id: 14,
                    speaker: t('Suad'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you doctor.')
                }
            ]
        },
        {
            id: 10,
            title: t('Lesson Ten'),
            subtitle: t('Karim in the Vegetable Market'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Karim'),
                    speakerColor: '#d32f2f',
                    text: t('Peace be upon you, how much is the tomato price?')
                },
                {
                    id: 2,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('And upon you peace, the kilo is five riyals.')
                },
                {
                    id: 3,
                    speaker: t('Karim'),
                    speakerColor: '#d32f2f',
                    text: t('Okay, I want two kilos of tomatoes.')
                },
                {
                    id: 4,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Okay, do you want anything else?')
                },
                {
                    id: 5,
                    speaker: t('Karim'),
                    speakerColor: '#d32f2f',
                    text: t('Actually, I want also a kilo of potatoes, and a little of parsley if you please.')
                },
                {
                    id: 6,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('I will prepare that for you now, please wait a little.')
                },
                {
                    id: 7,
                    speaker: t('Karim'),
                    speakerColor: '#d32f2f',
                    text: t('Okay.')
                },
                {
                    id: 8,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Here are your goods and their value is twenty riyals.')
                },
                {
                    id: 9,
                    speaker: t('Karim'),
                    speakerColor: '#d32f2f',
                    text: t('Here you go.')
                },
                {
                    id: 10,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Thank you, goodbye.')
                }
            ]
        },
        {
            id: 11,
            title: t('Lesson Eleven'),
            subtitle: t('Adel in the Fruit Market'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Here you go, can I help you?')
                },
                {
                    id: 2,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('Do you have strawberries, and bananas?')
                },
                {
                    id: 3,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Yes, how much do you want of them?')
                },
                {
                    id: 4,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('I want a kilo of strawberries, and two kilos of bananas.')
                },
                {
                    id: 5,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('I will prepare them for you now.')
                },
                {
                    id: 6,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('Waiting for you.')
                },
                {
                    id: 7,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Here you go, do you want anything else?')
                },
                {
                    id: 8,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('No, and thanks, how much is the total amount?')
                },
                {
                    id: 9,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Fifteen riyals.')
                },
                {
                    id: 10,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('Here is twenty riyals.')
                },
                {
                    id: 11,
                    speaker: t('Seller'),
                    speakerColor: '#1976d2',
                    text: t('Here is the change.')
                },
                {
                    id: 12,
                    speaker: t('Adel'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, goodbye.')
                }
            ]
        },
        {
            id: 12,
            title: t('Lesson Twelve'),
            subtitle: t('Hamed in the Butchery'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('How are you?')
                },
                {
                    id: 2,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('We have various meats at good prices.')
                },
                {
                    id: 3,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('Do you sell fresh or frozen meats?')
                },
                {
                    id: 4,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('We have all types, which one do you want?')
                },
                {
                    id: 5,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('I want a kilo of fresh meat.')
                },
                {
                    id: 6,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('Okay, wait just one minute please.')
                },
                {
                    id: 7,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('Okay.')
                },
                {
                    id: 8,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('Here you go, do you want anything else?')
                },
                {
                    id: 9,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('No, and thanks, what is the meat price?')
                },
                {
                    id: 10,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('Fifty riyals.')
                },
                {
                    id: 11,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('Isn\'t the price a little high?')
                },
                {
                    id: 12,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('This is the price of fresh meats, but I will deduct ten riyals for you, so you become a permanent customer for us.')
                },
                {
                    id: 13,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, this is from your kindness, here is forty riyals.')
                },
                {
                    id: 14,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('With health and healing, I hope to see you again.')
                },
                {
                    id: 15,
                    speaker: t('Hamed'),
                    speakerColor: '#d32f2f',
                    text: t('I will do that later, goodbye now.')
                },
                {
                    id: 16,
                    speaker: t('Butcher'),
                    speakerColor: '#1976d2',
                    text: t('With safety.')
                }
            ]
        },
        {
            id: 13,
            title: t('Lesson Thirteen'),
            subtitle: t('Wareef in the Restaurant'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('Peace be upon you.')
                },
                {
                    id: 2,
                    speaker: t('Waitress'),
                    speakerColor: '#1976d2',
                    text: t('Welcome, here is the meal menu.')
                },
                {
                    id: 3,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, this is kind of you, I want a chicken sandwich and a cup of orange juice.')
                },
                {
                    id: 4,
                    speaker: t('Waitress'),
                    speakerColor: '#1976d2',
                    text: t('Anything else?')
                },
                {
                    id: 5,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('No, and thanks.')
                },
                {
                    id: 6,
                    speaker: t('Waitress'),
                    speakerColor: '#1976d2',
                    text: t('I will bring it to you in a little while, you have to wait a little.')
                },
                {
                    id: 7,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('Okay.')
                },
                {
                    id: 8,
                    speaker: t('Waitress'),
                    speakerColor: '#1976d2',
                    text: t('Here is what you ordered, bon appetit.')
                },
                {
                    id: 9,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you.')
                },
                {
                    id: 10,
                    speaker: t('Waitress'),
                    speakerColor: '#1976d2',
                    text: t('Here is your invoice, is there any other service I can provide for you?')
                },
                {
                    id: 11,
                    speaker: t('Wareef'),
                    speakerColor: '#d32f2f',
                    text: t('No, thank you.')
                }
            ]
        },
        {
            id: 14,
            title: t('Lesson Fourteen'),
            subtitle: t('Ali in the Hotel'),
            type: 'conversation',
            items: [
                {
                    id: 1,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Peace be upon you.')
                },
                {
                    id: 2,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Welcome, how can I help you?')
                },
                {
                    id: 3,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('I want to book a room please.')
                },
                {
                    id: 4,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('How long do you want to spend with us in the hotel?')
                },
                {
                    id: 5,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Three days only.')
                },
                {
                    id: 6,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Have you given me your ID card so I can execute the booking procedures for you?')
                },
                {
                    id: 7,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Of course, here you go, how much is the cost please?')
                },
                {
                    id: 8,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Fifty riyals per night, so the total is one hundred and fifty riyals.')
                },
                {
                    id: 9,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('I have my bank card, do you deal with it?')
                },
                {
                    id: 10,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Of course, give it to me please.')
                },
                {
                    id: 11,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Here you go.')
                },
                {
                    id: 12,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('I finished the booking procedures, you can sign here.')
                },
                {
                    id: 13,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Okay.')
                },
                {
                    id: 14,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Here are your cards, your room number is two hundred and one on the second floor, and this is your room key.')
                },
                {
                    id: 15,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, is there someone to help me deliver the bags to the room?')
                },
                {
                    id: 16,
                    speaker: t('Receptionist'),
                    speakerColor: '#1976d2',
                    text: t('Yes my dear, the messenger will accompany you to the room and will deliver your bags to the room.')
                },
                {
                    id: 17,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you very much, let\'s go.')
                },
                {
                    id: 18,
                    speaker: t('Messenger'),
                    speakerColor: '#1976d2',
                    text: t('Here you go sir, I wish you times full of comfort and happiness in this hotel.')
                },
                {
                    id: 19,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('I hope so.')
                },
                {
                    id: 20,
                    speaker: t('Messenger'),
                    speakerColor: '#1976d2',
                    text: t('Here we have arrived at the room, do you want anything else my dear?')
                },
                {
                    id: 21,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('Thank you, I appreciate your good treatment and your kindness.')
                },
                {
                    id: 22,
                    speaker: t('Messenger'),
                    speakerColor: '#1976d2',
                    text: t('Okay my dear, if you need anything do not hesitate to call the hotel phone, goodbye.')
                },
                {
                    id: 23,
                    speaker: t('Ali'),
                    speakerColor: '#d32f2f',
                    text: t('I will do that when needed, goodbye.')
                }
            ]
        },
        {
            id: 15,
            title: t('Language Skills Lessons'),
            subtitle: t('Lesson One: The Sun'),
            type: 'contentWithExercises',
            readImage: '/level4/lesson15/sun.png',
            readImage2: '/level4/lesson15/solar_panels.png',
            readingText: [
                t('The Sun is one of the blessings that Allah has bestowed upon us, for it is one of the stars that radiates light and warmth for us during the day, and it is beneficial for the human body, and the sun is considered one of the important factors in the life of plants, as its rays are a source of their growth, just as it is one of the main sources of energy, and it can be used to generate electricity, so did we know how essential it is for life? And did we praise Allah for it?')
            ],
            grammarRules: [
                t('(Al) The Solar'),
                t('1. It is the (Al) that comes at the beginning of the word.'),
                t('2. We write the solar (Al) and do not pronounce it during reading, and the letter Lam does not show any diacritic.'),
                t('3. The letter that comes after it is always stressed (Mushaddad).'),
                t('4. The solar (Al) comes with the following letters: (14 letters)'),
                t('T, Th, D, Dh, R, Z, S, Sh, S, D, T, Z, L, N')
            ],
            tableData: {
                headers: [t('These words appeared in the lesson, re-read them observing the pronunciation and writing of (Al) Solar:')],
                rows: [
                    [t('The Blessings'), t('The Energy')],
                    [t('The Stars'), t('The Clean')],
                    [t('The Light'), t('The Boss')],
                    [t('The Warmth'), t('The World')],
                    [t('The Food'), t('The Winds')]
                ]
            },
            exercisesTitle: t('Mention a number of words starting with (Al) Solar other than the words found in the lesson.'),
            exercises: [
                { id: 1, type: 'input', title: '' },
                { id: 2, type: 'input', title: '' },
                { id: 3, type: 'input', title: '' },
                { id: 4, type: 'input', title: '' },
                { id: 5, type: 'input', title: '' },
                { id: 6, type: 'input', title: '' },
                { id: 7, type: 'input', title: '' },
                { id: 8, type: 'input', title: '' },
                { id: 9, type: 'input', title: '' },
                { id: 10, type: 'input', title: '' }
            ]
        },
        {
            id: 16,
            title: t('Lesson Sixteen'),
            subtitle: t('Lesson Two: The Sea'),
            type: 'contentWithExercises',
            readImage: '/level4/lesson16/sea.png',
            readingText: [
                t('The sea and the ocean are the largest sources of water in life, and water covers three-quarters of the Earth, and they contain many great secrets that have not been discovered until now, as man has discovered space and has not reached the rest of the secrets of the seas. Seas are a route for international trade, and they are an important source of food, and a source of salts and hidden treasures; so glory be to Him whose creation this is.')
            ],
            grammarRules: [
                t('(Al) The Moon'),
                t('1. It is the (Al) that comes at the beginning of the word.'),
                t('2. We write the moon (Al) and pronounce it during reading, and the letter Lam movement is always Sukun.'),
                t('3. The letter Lam movement is always Sukun.'),
                t('4. The moon (Al) comes with the following letters: (14 letters)')
            ],
            grammarImage: '/level4/lesson16/moon_letters.png',
            tableData: {
                headers: [t('These words appeared in the lesson, re-read them observing the pronunciation and writing of (Al) Moon:')],
                rows: [
                    [t('The Sea'), t('The Life')],
                    [t('The Ocean'), t('The Earth')]
                ]
            },
            exercisesTitle: t('Mention a number of words starting with (Al) Moon other than the words found in the lesson.'),
            exercises: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, type: 'input', title: '' })),
            tableData2: {
                headers: [t('Training')],
                rows: [
                    [t('Search for words like in the previous training.')]
                ]
            }
        },
        {
            id: 17,
            title: t('Language Skills Lessons'),
            subtitle: t('Lesson Three: My House'),
            type: 'contentWithExercises',
            readImage: '/level4/lesson17/house.png',
            readingText: [
                t('In my house, there is a large mulberry tree, a small fig tree, a pomegranate tree, and many roses. Birds stand on the trees and sing: I love the garden.')
            ],
            grammarTitle: t('Madd Letters Title'),
            grammarRules: [
                t('Madd letters are three, and they are: (Alif), (Waw), (Yaa), and they do not accept vowels.'),
                t('The letter that precedes the Madd letter is called (the lengthened letter).'),
                t('The vowel of the lengthened letter that precedes Alif is (the Fatha).'),
                t('The vowel of the lengthened letter that precedes Waw is (the Damma).'),
                t('The vowel of the lengthened letter that precedes Yaa is (the Kasra).'),
                t('The Madd letter and the lengthened letter together are called (the Madd syllable).')
            ],
            maddDiagram: {
                items: [
                    {
                        word: t('Suad'),
                        madd: { text: t('ا'), label: t('Madd Letter') },
                        mamdooh: { text: t('عَـ'), label: t('Lengthened Letter') }
                    },
                    {
                        word: t('Saud'),
                        madd: { text: t('و'), label: t('Madd Letter') },
                        mamdooh: { text: t('عُـ'), label: t('Lengthened Letter') }
                    },
                    {
                        word: t('Saeed'),
                        madd: { text: t('ي'), label: t('Madd Letter') },
                        mamdooh: { text: t('عِـ'), label: t('Lengthened Letter') }
                    }
                ]
            },
            tableData: {
                headers: [t('Madd (Al-Alif)'), t('Madd (Al-Waw)'), t('Madd (Al-Yaa)')],
                rows: [
                    [t('Pomegranate'), t('Mulberry'), t('In')],
                    [t('Trees'), t('Roses'), t('My House')],
                    [t('Birds-Sparrows'), t('Birds-General'), t('Big')],
                    [t('Returned'), '', t('Small')],
                    [t('I (Ana)'), '', t('Garden')]
                ]
            },
            tableData2: {
                headers: [t('Madd (Al-Alif)'), t('Madd (Al-Waw)'), t('Madd (Al-Yaa)')],
                rows: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]
            },
            tableData3: {
                headers: ['', t('Syllable'), ''],
                rows: [
                    [t('Qa-la'), t('لَ'), t('Said')],
                    [t('Nu-ru'), t('رُ'), t('Noor')],
                    [t('Ti-nu'), t('نُ'), t('Teen')],
                    [t('Fi-lu'), t('لُ'), t('Feel')],
                    [t('Na-ru'), t('رُ'), t('Fire')],
                    [t('Su-ru'), t('رُ'), t('Soor')]
                ]
            },
            tableData4: {
                headers: [t('Madd (Al-Alif)'), t('Madd (Al-Waw)'), t('Madd (Al-Yaa)')],
                rows: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]
            },
            exercisesTitle: t('Categorize the following words according to the type of Madd letter.'),
            exercises: [
                { id: 1, type: 'text', title: t('Seas') + ' - ' + t('Figs') + ' - ' + t('Elephants') + ' - ' + t('Won') + ' - ' + t('Says') + ' - ' + t('Said') + ' - ' + t('Beans') + ' - ' + t('Reem') + ' - ' + t('Fire') },
                { id: 2, type: 'input', title: '' },
                { id: 3, type: 'input', title: '' },
                { id: 4, type: 'input', title: '' },
                { id: 5, type: 'input', title: '' },
                { id: 6, type: 'input', title: '' },
                { id: 7, type: 'input', title: '' },
                { id: 8, type: 'input', title: '' },
                { id: 9, type: 'input', title: '' },
                { id: 10, type: 'input', title: '' }
            ]
        },
        {
            id: 18,
            title: t('Language Skills Lessons'),
            subtitle: t('Lesson Four: The Duck Noura'),
            type: 'contentWithExercises',
            readImage: '/level4/lesson18/noura.png',
            readingText: [
                t('It is a small duck, but strong, swimming in a northern lake.'),
                t('She heard the chick shouting loudly: Save me, save me...'),
                t('So she hurried to him and saved him; he said to her: Thank you, thank you, Noura.')
            ],
            tableData: {
                headers: [t('Classification of Nouns according to numbering:')],
                rows: [
                    [t('The Singular'), t('The Dual'), t('The Plural')],
                    ['بِئْرٌ', 'بِئْرَانِ', 'آبَارٌ'],
                    ['شَجَرَةٌ', 'شَجَرَتَانِ', 'أَشْجَارٌ'],
                    ['الْبَطَّةُ', 'الْبَطَّتَانِ', 'الْبَطَّاتُ']
                ]
            },
            grammarTitle: t('Grammar Header: Words ending with Taa and Ha'),
            grammarRules: [
                t('Open Taa Rule'),
                t('Marbuta Taa Rule 1'),
                t('Marbuta Taa Rule 2'),
                t('Ha Rule 1'),
                t('Ha Rule 2')
            ],
            tableData3: {
                headers: [t('Words appeared in the previous text, classify them according to the following schedule:')],
                rows: [
                    [t('Open Taa Header'), t('Marbuta Taa Header'), t('Ha Header')],
                    ['سَمِعَتْ', 'الْبَطَّةُ', 'إِلَيْهِ'],
                    ['فَأَسْرَعَتْ', 'نُورَةُ', 'أَنْقَذَتْهُ'],
                    ['', 'صَغِيرَةٌ', ''],
                    ['', 'قَوِيَّةٌ', '']
                ]
            },
            exercisesTitle: t('Classify the following words according to the following table:'),
            exercises: [
                {
                    id: 1,
                    type: 'text',
                    title: '( وَرَقَة - بِنْت - سَلَّة - هَذِهِ - كُرَات - فَاطِمَة - حَبِيبَة - لَهُ - سَيَّارَات - وَرْدَة - كَتَبَتْ - رِحْلَة - مِيَاه )'
                }
            ],
            tableData4: {
                headers: [t('(Ta - T)'), t('(Ta_marbuta - Ta_marbuta)'), t('(Ha - Ha)')],
                rows: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]
            }
        }
    ];

    return part4Lessons;
};
