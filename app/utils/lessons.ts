export interface LessonItem {
    id: number;
    digit?: string;
    text: string;
    text2?: string;
    image?: string;
    colorFrom?: string;
    colorTo?: string;
    shadowColor?: string;
    speaker?: string;
    speakerColor?: string;
    letter?: string;
    highlight?: string;
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
    type: 'solid' | 'dotted';
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
    type: 'text' | 'gallery' | 'numbers' | 'diagram' | 'hijri' | 'weekDays' | 'drops' | 'textGrid' | 'opposites' | 'conversation' | 'shortVowels' | 'cubes' | 'letterExamples' | 'readWriteReview';
    items?: LessonItem[];
    distinguish?: DistinguishItem[];
    writingPractice?: WritingPracticeItem[];
    exercises?: ExerciseItem[];
    audioUrl?: string;
    mainImage?: string;
    diagramImages?: string[];
    groupNumber?: number;
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
    const part1Lessons: Lesson[] = [
        {
            id: 1,
            title: t('Numbers'),
            subtitle: t('Group One'),
            type: 'numbers',
            items: [
                { id: 1, digit: '1', text: t('One'), colorFrom: '#FF9800', colorTo: '#FFB74D', shadowColor: '#F57C00' },
                { id: 2, digit: '2', text: t('Two'), colorFrom: '#2196F3', colorTo: '#64B5F6', shadowColor: '#1976D2' },
                { id: 3, digit: '3', text: t('Three'), colorFrom: '#9C27B0', colorTo: '#E040FB', shadowColor: '#4A148C' },
                { id: 4, digit: '4', text: t('Four'), colorFrom: '#4CAF50', colorTo: '#8BC34A', shadowColor: '#1B5E20' },
                { id: 5, digit: '5', text: t('Five'), colorFrom: '#2196F3', colorTo: '#64B5F6', shadowColor: '#0D47A1' },
                { id: 6, digit: '6', text: t('Six'), colorFrom: '#E91E63', colorTo: '#F48FB1', shadowColor: '#880E4F' },
                { id: 7, digit: '7', text: t('Seven'), colorFrom: '#F44336', colorTo: '#EF5350', shadowColor: '#B71C1C' },
                { id: 8, digit: '8', text: t('Eight'), colorFrom: '#FF5722', colorTo: '#FF7043', shadowColor: '#BF360C' },
                { id: 9, digit: '9', text: t('Nine'), colorFrom: '#795548', colorTo: '#8D6E63', shadowColor: '#3E2723' },
                { id: 10, digit: '10', text: t('Ten'), colorFrom: '#607D8B', colorTo: '#78909C', shadowColor: '#263238' },
                { id: 100, digit: '100', text: t('Hundred'), colorFrom: '#009688', colorTo: '#26A69A', shadowColor: '#004D40' },
                { id: 1000, digit: '1000', text: t('Thousand'), colorFrom: '#3F51B5', colorTo: '#5C6BC0', shadowColor: '#1A237E' },
                { id: 1000000, digit: '1,000,000', text: t('Million'), colorFrom: '#673AB7', colorTo: '#7E57C2', shadowColor: '#311B92' },
                { id: 1000000000, digit: '1,000,000,000', text: t('Billion'), colorFrom: '#9C27B0', colorTo: '#AB47BC', shadowColor: '#4A148C' },
                { id: 1000000000, digit: '1,000,000,000', text: t('Billion'), colorFrom: '#9C27B0', colorTo: '#AB47BC', shadowColor: '#4A148C' },
            ],
            audioUrl: '/numbers.wav'
        },
        {
            id: 2,
            title: t('Masculine and Feminine'),
            subtitle: t('Group Two'),
            type: 'gallery',
            items: [
                { id: 1, image: '/2/7.jpg', text: t('Boy') },
                { id: 2, image: '/2/8.jpg', text: t('Girl') },
                { id: 2, image: '/2/3.jpg', text: t('Doctor') },
                { id: 2, image: '/2/4.jpg', text: t('Doctor.girl') },
                { id: 2, image: '/2/5.jpg', text: t('Student') },
                { id: 2, image: '/2/6.jpg', text: t('Student.girl') },
                { id: 2, image: '/2/1.jpg', text: t('Child') },
                { id: 2, image: '/2/2.jpg', text: t('Child.girl') },
                { id: 2, image: '/2/9.jpg', text: t('Man') },
                { id: 2, image: '/2/10.jpg', text: t('Woman') },
            ],
            audioUrl: '/2/2.wav',
        },
        {
            id: 3,
            title: t('Singular, Dual, and Plural'),
            subtitle: t('Group Three'),
            type: 'gallery',
            items: [
                { id: 1, image: '/3/1.jpg', text: t('Boy') },
                { id: 2, image: '/3/2.jpg', text: t('Two Boys') },
                { id: 2, image: '/3/3.jpg', text: t('Boys') },
                { id: 2, image: '/3/4.jpg', text: t('Girl') },
                { id: 2, image: '/3/5.jpg', text: t('Two Girls') },
                { id: 2, image: '/3/6.jpg', text: t('Girls') },
                { id: 2, image: '/3/7.jpg', text: t('Car') },
                { id: 2, image: '/3/8.jpg', text: t('Two Cars') },
                { id: 2, image: '/3/9.jpg', text: t('Cars') },
                { id: 2, image: '/3/10.jpg', text: t('Airplane') },
                { id: 2, image: '/3/11.jpg', text: t('Two Airplanes') },
                { id: 2, image: '/3/12.jpg', text: t('Airplanes') },
                { id: 2, image: '/3/13.jpg', text: t('Fish') },
                { id: 2, image: '/3/14.jpg', text: t('Two Fish') },
                { id: 2, image: '/3/15.jpg', text: t('Fishes') },
                { id: 2, image: '/3/16.jpg', text: t('Pen') },
                { id: 2, image: '/3/17.jpg', text: t('Two Pens') },
                { id: 2, image: '/3/18.jpg', text: t('Pens') },
            ],
            audioUrl: '/3/3.wav',
        },
        {
            id: 4,
            title: t('Human Development Stages'),
            subtitle: t('Group Four'),
            type: 'gallery',
            items: [
                { id: 1, image: '/4/1.jpg', text: t('Fetus') },
                { id: 2, image: '/4/2.jpg', text: t('Infant') },
                { id: 2, image: '/4/3.jpg', text: t('Young Boy') },
                { id: 2, image: '/4/4.jpg', text: t('Young Girl') },
                { id: 2, image: '/4/5.jpg', text: t('Man') },
                { id: 2, image: '/4/6.jpg', text: t('Woman') },
                { id: 2, image: '/4/7.jpeg', text: t('Old Man') },
            ],
            audioUrl: '/4/4.wav',
        },
        {
            id: 5,
            title: t('Family'),
            subtitle: t('Group Five'),
            type: 'gallery',
            items: [
                { id: 1, image: '/5/1.jpeg', text: t('Grandfather') },
                { id: 2, image: '/5/2.jpg', text: t('Grandmother') },
                { id: 2, image: '/5/3.jpg', text: t('Father') },
                { id: 2, image: '/5/4.jpg', text: t('Mother') },
                { id: 2, image: '/5/5.jpg', text: t('Son') },
                { id: 2, image: '/5/6.jpg', text: t('Daughter') },
            ],
            audioUrl: '/5/5.wav',
        },
        {
            id: 6,
            title: t('Main Body Parts'),
            subtitle: t('Group Six'),
            type: 'diagram',
            diagramImages: ['/6/body.png'],
            items: [
                { id: 1, text: t('Hair') },
                { id: 2, text: t('Head') },
                { id: 3, text: t('Eye') },
                { id: 4, text: t('Nose') },
                { id: 5, text: t('Ear') },
                { id: 6, text: t('Teeth') },
                { id: 7, text: t('Mouth') },
                { id: 8, text: t('Neck') },
                { id: 9, text: t('Back') },
                { id: 10, text: t('Shoulder') },
                { id: 11, text: t('Chest') },
                { id: 12, text: t('Arm') },
                { id: 13, text: t('Elbow') },
                { id: 14, text: t('Stomach') },
                { id: 15, text: t('Hand') },
                { id: 16, text: t('Finger') },
                { id: 17, text: t('Leg') },
                { id: 18, text: t('Knee') },
                { id: 19, text: t('Ankle') },
                { id: 20, text: t('Foot') },
            ],
            audioUrl: '/6/6.wav',
        },
        {
            id: 7,
            title: t('Colors'),
            subtitle: t('Group Seven'),
            type: 'gallery',
            items: [
                { id: 1, image: '/7/1.jpg', text: t('Black') },
                { id: 2, image: '/7/2.jpg', text: t('White') },
                { id: 2, image: '/7/3.jpg', text: t('Blue') },
                { id: 2, image: '/7/4.jpg', text: t('Purple') },
                { id: 2, image: '/7/5.jpg', text: t('Green') },
                { id: 2, image: '/7/6.jpg', text: t('Yellow') },
                { id: 2, image: '/7/7.jpg', text: t('Brown') },
                { id: 2, image: '/7/8.jpg', text: t('Red') },
                { id: 2, image: '/7/9.jpg', text: t('Pink') },
                { id: 2, image: '/7/10.jpg', text: t('Orange') },
                { id: 2, image: '/7/11.jpg', text: t('Grey') },
            ],
            audioUrl: '/7/7.wav',
        },
        {
            id: 8,
            title: t('Clothing'),
            subtitle: t('Group Eight'),
            type: 'gallery',
            items: [
                { id: 1, image: '/8/1.jpg', text: t('Shirt') },
                { id: 2, image: '/8/2.jpg', text: t('Pants') },
                { id: 2, image: '/8/3.jpg', text: t('Shoes') },
                { id: 2, image: '/8/4.jpg', text: t('Hat') },
                { id: 2, image: '/8/5.jpg', text: t('Abaya') },
                { id: 2, image: '/8/6.jpeg', text: t('Coat') },
                { id: 2, image: '/8/7.jpeg', text: t('Dress') },
                { id: 2, image: '/8/8.jpg', text: t('Socks') },
                { id: 2, image: '/8/9.jpg', text: t('Sneakers') },
            ],
            audioUrl: '/8/8.wav',
        },
        {
            id: 9,
            title: t('School Supplies'),
            subtitle: t('Group Nine'),
            type: 'gallery',
            items: [
                { id: 1, image: '/9/1.jpg', text: t('Book') },
                { id: 2, image: '/9/2.jpeg', text: t('Notebook') },
                { id: 2, image: '/9/3.jpeg', text: t('Pencil') },
                { id: 2, image: '/9/4.jpg', text: t('Ink Pen') },
                { id: 2, image: '/9/5.jpeg', text: t('Bag') },
                { id: 2, image: '/9/6.jpeg', text: t('Ruler') },
                { id: 2, image: '/9/7.jpeg', text: t('Eraser') },
                { id: 2, image: '/9/8.jpeg', text: t('Compass') },
                { id: 2, image: '/9/9.jpg', text: t('Protractor') },
                { id: 2, image: '/9/10.jpg', text: t('Colored Pencils') },
            ],
            audioUrl: '/9/9.wav',
        },
        {
            id: 10,
            title: t('Public Institutions'),
            subtitle: t('Group Ten'),
            type: 'gallery',
            items: [
                { id: 1, image: '/10/1.jpeg', text: t('Mosque') },
                { id: 2, image: '/10/2.jpeg', text: t('Hospital') },
                { id: 2, image: '/10/3.jpeg', text: t('Police Station') },
                { id: 2, image: '/10/4.jpeg', text: t('Stadium') },
                { id: 2, image: '/10/5.jpeg', text: t('Zoo') },
            ],
            audioUrl: '/10/10.wav',
        },
        {
            id: 11,
            title: t('Educational Institutions'),
            subtitle: t('Group Eleven'),
            type: 'gallery',
            items: [
                { id: 1, image: '/11/1.jpg', text: t('Kindergarten') },
                { id: 2, image: '/11/2.jpg', text: t('Elementary School') },
                { id: 2, image: '/11/3.jpg', text: t('Middle School') },
                { id: 2, image: '/11/4.jpg', text: t('Institute') },
                { id: 2, image: '/11/5.jpg', text: t('College') },
                { id: 2, image: '/11/6.jpg', text: t('University') },
            ],
            audioUrl: '/11/11.wav',
        },
        {
            id: 12,
            title: t('Home Parts'),
            subtitle: t('Group Twelve'),
            type: 'gallery',
            items: [
                { id: 1, image: '/12/1.jpg', text: t('Bedroom') },
                { id: 2, image: '/12/2.jpg', text: t('Living Room') },
                { id: 2, image: '/12/3.jpeg', text: t('Bathroom') },
                { id: 2, image: '/12/4.jpg', text: t('Dining Room') },
                { id: 2, image: '/12/5.jpeg', text: t('Kitchen') },
                { id: 2, image: '/12/6.jpeg', text: t('Kids Room') },
            ],
            audioUrl: '/12/12.wav',
        },
        {
            id: 13,
            title: t('Vegetables'),
            subtitle: t('Group Thirteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/13/1.jpg', text: t('Potato') },
                { id: 2, image: '/13/2.jpg', text: t('Tomato') },
                { id: 2, image: '/13/3.jpg', text: t('Cucumber') },
                { id: 2, image: '/13/4.jpg', text: t('Eggplant') },
                { id: 2, image: '/13/5.jpg', text: t('Arugula') },
                { id: 2, image: '/13/6.jpg', text: t('Pepper') },
                { id: 2, image: '/13/7.jpg', text: t('Parsley') },
                { id: 2, image: '/13/8.jpg', text: t('Onion') },
                { id: 2, image: '/13/9.jpg', text: t('Carrot') },
                { id: 2, image: '/13/10.jpg', text: t('Lettuce') },
            ],
            audioUrl: '/13/13.wav',
        },
        {
            id: 14,
            title: t('Fruits'),
            subtitle: t('Group Fourteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/14/1.jpg', text: t('Guava') },
                { id: 2, image: '/14/2.jpg', text: t('Pineapple') },
                { id: 2, image: '/14/3.jpg', text: t('Orange') },
                { id: 2, image: '/14/4.jpg', text: t('Watermelon') },
                { id: 2, image: '/14/5.jpg', text: t('Pomegranate') },
                { id: 2, image: '/14/6.jpg', text: t('Apple') },
                { id: 2, image: '/14/7.jpg', text: t('Banana') },
                { id: 2, image: '/14/8.jpg', text: t('Fig') },
                { id: 2, image: '/14/9.jpg', text: t('Grape') },
                { id: 2, image: '/14/10.jpg', text: t('Strawberry') },
                { id: 2, image: '/14/11.jpg', text: t('Mango') },
                { id: 2, image: '/14/12.jpg', text: t('Peach') },
                { id: 2, image: '/14/13.jpg', text: t('Apricot') },
            ],
            audioUrl: '/14/14.wav',
        },
        {
            id: 15,
            title: t('Foods'),
            subtitle: t('Group Fifteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/15/1.jpg', text: t('Soup') },
                { id: 2, image: '/15/2.jpg', text: t('Biscuit') },
                { id: 2, image: '/15/3.jpg', text: t('Sweet') },
                { id: 2, image: '/15/4.png', text: t('Bread') },
                { id: 2, image: '/15/5.png', text: t('Chicken') },
                { id: 2, image: '/15/6.png', text: t('Meat') },
                { id: 2, image: '/15/7.png', text: t('Fish') },
                { id: 2, image: '/15/8.png', text: t('Cheese') },
                { id: 2, image: '/15/9.png', text: t('Legumes') },
                { id: 2, image: '/15/10.png', text: t('Eggs') },
                { id: 2, image: '/15/11.jpg', text: t('Salad') },
            ],
            audioUrl: '/15/15.wav',
        },
        {
            id: 16,
            title: t('Hot Drinks'),
            subtitle: t('Group Sixteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/16/1.jpg', text: t('Tea') },
                { id: 2, image: '/16/2.jpg', text: t('Coffee') },
                { id: 2, image: '/16/3.jpg', text: t('Milk') },
            ],
            audioUrl: '/16/16.wav',
        },
        {
            id: 17,
            title: t('Cold Drinks'),
            subtitle: t('Group Seventeen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/17/1.jpg', text: t('Water') },
                { id: 2, image: '/17/2.jpg', text: t('Juice') },
                { id: 2, image: '/17/3.jpg', text: t('Soft Drink') },
            ],
            audioUrl: '/17/17.wav',
        },
        {
            id: 18,
            title: t('Home Furniture'),
            subtitle: t('Group Eighteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/18/1.jpg', text: t('Bed') },
                { id: 2, image: '/18/2.jpg', text: t('Wardrobe') },
                { id: 2, image: '/18/3.jpg', text: t('Shelf') },
                { id: 2, image: '/18/4.jpg', text: t('Sofa') },
                { id: 2, image: '/18/5.jpg', text: t('Chair') },
                { id: 2, image: '/18/6.jpg', text: t('Library') },
                { id: 2, image: '/18/7.jpg', text: t('Table') },
                { id: 2, image: '/18/8.jpg', text: t('Pillow') },
                { id: 2, image: '/18/9.jpg', text: t('Carpet') },
                { id: 2, image: '/18/10.jpg', text: t('Curtain') },
            ],
            audioUrl: '/18/18.wav',
        },
        {
            id: 19,
            title: t('Kitchen Tools'),
            subtitle: t('Group Nineteen'),
            type: 'gallery',
            items: [
                { id: 1, image: '/19/1.jpg', text: t('Cup') },
                { id: 2, image: '/19/2.jpg', text: t('Plate') },
                { id: 3, image: '/19/3.jpg', text: t('Knife') },
                { id: 4, image: '/19/4.jpg', text: t('Fork') },
                { id: 5, image: '/19/5.jpg', text: t('Spoon') },
                { id: 6, image: '/19/6.jpg', text: t('Jug') },
                { id: 7, image: '/19/7.jpg', text: t('Bottle') },
                { id: 8, image: '/19/8.jpg', text: t('Tray') },
                { id: 9, image: '/19/9.jpg', text: t('Frying Pan') },
                { id: 10, image: '/19/10.jpg', text: t('Gas Stove') },
                { id: 11, image: '/19/11.jpg', text: t('Kettle') },
                { id: 12, image: '/19/12.jpg', text: t('Ladle') },
            ],
            audioUrl: '/19/19.wav',
        },
        {
            id: 20,
            title: t('Home Appliances'),
            subtitle: t('Group Twenty'),
            type: 'gallery',
            items: [
                { id: 1, image: '/20/1.jpg', text: t('Washing Machine') },
                { id: 2, image: '/20/2.jpg', text: t('Refrigerator') },
                { id: 3, image: '/20/3.jpg', text: t('Blender') },
                { id: 4, image: '/20/4.jpg', text: t('Radio') },
                { id: 5, image: '/20/5.jpg', text: t('Television') },
                { id: 6, image: '/20/6.jpg', text: t('Vacuum Cleaner') },
                { id: 7, image: '/20/7.jpg', text: t('Heater') },
                { id: 8, image: '/20/8.jpg', text: t('Grill') },
                { id: 9, image: '/20/9.jpg', text: t('Telephone') },
                { id: 10, image: '/20/10.jpg', text: t('Fan') },
                { id: 11, image: '/20/11.jpg', text: t('Electric Heater') },
                { id: 12, image: '/20/12.jpg', text: t('Oven') },
            ],
            audioUrl: '/20/20.wav',
        },
        {
            id: 21,
            title: t('Transportation'),
            subtitle: t('Group Twenty-One'),
            type: 'gallery',
            items: [
                { id: 1, image: '/21/1.jpg', text: t('Bicycle') },
                { id: 2, image: '/21/2.jpg', text: t('Motorcycle') },
                { id: 3, image: '/21/3.jpg', text: t('Cart') },
                { id: 4, image: '/21/4.jpg', text: t('Car') },
                { id: 5, image: '/21/5.jpg', text: t('Bus') },
                { id: 6, image: '/21/6.jpg', text: t('Train') },
                { id: 7, image: '/21/7.jpg', text: t('Airplane') },
                { id: 8, image: '/21/8.jpg', text: t('Ship') },
                { id: 9, image: '/21/9.jpg', text: t('Truck') },
                { id: 10, image: '/21/10.jpg', text: t('Hot Air Balloon') },
            ],
            audioUrl: '/21/21.wav',
        },

        {
            id: 22,
            title: t('Road Components'),
            subtitle: t('Group Twenty-Two'),
            type: 'gallery',
            items: [
                { id: 1, image: '/22/1.jpg', text: t('Street') },
                { id: 2, image: '/22/2.jpg', text: t('Sidewalk') },
                { id: 2, image: '/22/3.jpg', text: t('Traffic Light') },
                { id: 2, image: '/22/4.jpg', text: t('Bridge') },
                { id: 2, image: '/22/5.jpg', text: t('Railway') },
                { id: 2, image: '/22/6.jpg', text: t('Crosswalk') },
                { id: 2, image: '/22/7.jpg', text: t('Roundabout') },
                { id: 2, image: '/22/8.jpg', text: t('Billboard') },
                { id: 2, image: '/22/9.jpg', text: t('Parking Lot') },
            ],
            audioUrl: '/22/22.wav',
        },
        {
            id: 23,
            title: t('Professions and Crafts'),
            subtitle: t('Group Twenty-Three'),
            type: 'gallery',
            items: [
                { id: 1, image: '/23/1.jpg', text: t('Lawyer') },
                { id: 2, image: '/23/2.jpg', text: t('Doctor') },
                { id: 2, image: '/23/3.jpg', text: t('Pharmacist') },
                { id: 2, image: '/23/4.jpg', text: t('Tailor') },
                { id: 2, image: '/23/5.jpg', text: t('Barber') },
                { id: 2, image: '/23/6.jpg', text: t('Baker') },
                { id: 2, image: '/23/7.jpg', text: t('Fisherman') },
                { id: 2, image: '/23/8.jpg', text: t('Engineer') },
                { id: 2, image: '/23/9.jpg', text: t('Butcher') },
                { id: 2, image: '/23/10.jpg', text: t('Blacksmith') },
                { id: 2, image: '/23/11.jpg', text: t('Carpenter') },
            ],
            audioUrl: '/23/23.wav',
        },
        {
            id: 24,
            title: t('Animal Names'),
            subtitle: t('Group Twenty-Four'),
            type: 'gallery',
            items: [
                { id: 1, image: '/24/1.jpeg', text: t('Camel') },
                { id: 2, image: '/24/2.jpeg', text: t('Monkey') },
                { id: 2, image: '/24/3.jpeg', text: t('Cat') },
                { id: 2, image: '/24/4.jpeg', text: t('Rabbit') },
                { id: 2, image: '/24/5.jpeg', text: t('Cow') },
                { id: 2, image: '/24/6.jpeg', text: t('Lion') },
                { id: 2, image: '/24/7.jpeg', text: t('Donkey') },
                { id: 2, image: '/24/8.jpeg', text: t('Elephant') },
                { id: 2, image: '/24/9.jpeg', text: t('Giraffe') },
                { id: 2, image: '/24/10.jpeg', text: t('Sheep') },
                { id: 2, image: '/24/11.jpeg', text: t('Gazelle') },
                { id: 2, image: '/24/12.jpeg', text: t('Fox') },
                { id: 2, image: '/24/13.jpeg', text: t('Dog') },
                { id: 2, image: '/24/14.jpeg', text: t('Tiger') },
            ],
            audioUrl: '/24/24.wav',
        },
        {
            id: 25,
            title: t('Bird Names'),
            subtitle: t('Group Twenty-Five'),
            type: 'gallery',
            items: [
                { id: 1, image: '/25/1.jpeg', text: t('Chicken') },
                { id: 2, image: '/25/2.jpeg', text: t('Duck') },
                { id: 2, image: '/25/3.jpeg', text: t('Ostrich') },
                { id: 2, image: '/25/4.jpeg', text: t('Peacock') },
                { id: 2, image: '/25/5.jpeg', text: t('Pigeon') },
                { id: 2, image: '/25/6.jpeg', text: t('Sparrow') },
                { id: 2, image: '/25/7.jpeg', text: t('Parrot') },
                { id: 2, image: '/25/8.jpeg', text: t('Falcon') },
                { id: 2, image: '/25/9.jpeg', text: t('Hoopoe') },
                { id: 2, image: '/25/10.jpeg', text: t('Seagull') },
                { id: 2, image: '/25/11.jpeg', text: t('Crow') },
                { id: 2, image: '/25/12.jpeg', text: t('Eagle') },
                { id: 2, image: '/25/13.jpeg', text: t('Owl') },
            ],
            audioUrl: '/25/25.wav',
        },
        {
            id: 26,
            title: t('Reptiles and Amphibians Names'),
            subtitle: t('Group Twenty-Six'),
            type: 'gallery',
            items: [
                { id: 1, image: '/26/1.jpeg', text: t('Crocodile') },
                { id: 2, image: '/26/2.jpeg', text: t('Turtle') },
                { id: 2, image: '/26/3.jpeg', text: t('Snake') },
                { id: 2, image: '/26/4.jpeg', text: t('Frog') },
            ],
            audioUrl: '/26/26.wav',
        },
        {
            id: 27,
            title: t('Insect Names'),
            subtitle: t('Group Twenty-Seven'),
            type: 'gallery',
            items: [
                { id: 1, image: '/27/1.jpeg', text: t('Ant') },
                { id: 2, image: '/27/2.jpeg', text: t('Bee') },
                { id: 2, image: '/27/3.jpeg', text: t('Fly') },
                { id: 2, image: '/27/4.jpeg', text: t('Mosquito') },
                { id: 2, image: '/27/5.jpeg', text: t('Butterfly') },
                { id: 2, image: '/27/6.jpeg', text: t('Spider') },
                { id: 2, image: '/27/7.jpeg', text: t('Scorpion') },
            ],
            audioUrl: '/27/27.wav',
        },
        {
            id: 28,
            title: t('The Four Directions'),
            subtitle: t('Group Twenty-Eight'),
            type: 'gallery',
            items: [
                { id: 1, image: '/28/1.svg', text: t('North') },
                { id: 2, image: '/28/2.svg', text: t('South') },
                { id: 3, image: '/28/3.svg', text: t('East') },
                { id: 4, image: '/28/4.svg', text: t('West') },
            ],
            audioUrl: '/28/28.wav',
        },
        {
            id: 29,
            title: t('The Four Seasons'),
            subtitle: t('Group Twenty-Nine'),
            type: 'gallery',
            items: [
                { id: 1, image: '/29/1.svg', text: t('Summer') },
                { id: 2, image: '/29/2.svg', text: t('Spring') },
                { id: 3, image: '/29/3.svg', text: t('Winter') },
                { id: 4, image: '/29/4.svg', text: t('Autumn') },
            ],
            audioUrl: '/29/29.wav',
        },
        {
            id: 30,
            title: t('Weather Conditions'),
            subtitle: t('Group Thirty'),
            type: 'gallery',
            items: [
                { id: 1, image: '/30/1.svg', text: t('Hot') },
                { id: 2, image: '/30/2.svg', text: t('Cloudy') },
                { id: 3, image: '/30/3.svg', text: t('Rainy') },
                { id: 4, image: '/30/4.svg', text: t('Foggy') },
                { id: 5, image: '/30/5.svg', text: t('Cold') },
                { id: 6, image: '/30/6.svg', text: t('Stormy') },
            ],
            audioUrl: '/30/30.wav',
        },
        {
            id: 31,
            title: t('Months of the Arabic Year'),
            subtitle: t('Group Thirty-One'),
            type: 'hijri',
            items: [
                { id: 1, text: t('Muharram') },
                { id: 2, text: t('Safar') },
                { id: 3, text: t('Rabi Al-Awwal') },
                { id: 4, text: t('Rabi Al-Thani') },
                { id: 5, text: t('Jumada Al-Ula') },
                { id: 6, text: t('Jumada Al-Akhirah') },
                { id: 7, text: t('Rajab') },
                { id: 8, text: t('Shaban') },
                { id: 9, text: t('Ramadan') },
                { id: 10, text: t('Shawwal') },
                { id: 11, text: t('Dhu Al-Qidah') },
                { id: 12, text: t('Dhu Al-Hijjah') },
            ],
            audioUrl: '/31/31.wav',
        },
        {
            id: 32,
            title: t('Days of the Week'),
            subtitle: t('Group Thirty-Two'),
            type: 'weekDays',
            items: [
                { id: 1, text: t('Saturday'), colorFrom: '#5c9ad5' },
                { id: 2, text: t('Sunday'), colorFrom: '#ed7d31' },
                { id: 3, text: t('Monday'), colorFrom: '#a5a5a5' },
                { id: 4, text: t('Tuesday'), colorFrom: '#ffc000' },
                { id: 5, text: t('Wednesday'), colorFrom: '#4472c4' },
                { id: 6, text: t('Thursday'), colorFrom: '#70ad47' },
                { id: 7, text: t('Friday'), colorFrom: '#9e480e' }, // Using a placeholder color, will adjust in Vue if needed or use this property
            ],
            audioUrl: '/32/32.wav',
        },
        {
            id: 33,
            title: t('Times of the Day'),
            subtitle: t('Group Thirty-Three'),
            type: 'weekDays',
            items: [
                { id: 1, text: t('Fajr'), colorFrom: '#5c9ad5' },
                { id: 2, text: t('Sunrise'), colorFrom: '#ed7d31' },
                { id: 3, text: t('Dhuhr'), colorFrom: '#a5a5a5' },
                { id: 4, text: t('Asr'), colorFrom: '#ffc000' },
                { id: 5, text: t('Maghrib'), colorFrom: '#4472c4' },
                { id: 6, text: t('Isha'), colorFrom: '#70ad47' },
            ],
            audioUrl: '/33/33.wav',
        },
        {
            id: 34,
            title: t('Time Divisions'),
            subtitle: t('Group Thirty-Four'),
            type: 'drops',
            items: [
                { id: 1, text: t('Century') },
                { id: 2, text: t('Year') },
                { id: 3, text: t('Day') },
                { id: 4, text: t('Hour') },
                { id: 5, text: t('Minute') },
                { id: 6, text: t('Second') },
            ],
            audioUrl: '/34/34.wav',
        },
        {
            id: 35,
            title: t('Landforms'),
            subtitle: t('Group Thirty-Five'),
            type: 'gallery',
            items: [
                { id: 1, image: '/35/1.jpeg', text: t('Mountain') },
                { id: 2, image: '/35/2.jpeg', text: t('Plain') },
                { id: 3, image: '/35/3.jpeg', text: t('Plateau') },
                { id: 4, image: '/35/4.jpeg', text: t('Hill') },
                { id: 5, image: '/35/5.jpeg', text: t('Sea') },
                { id: 6, image: '/35/6.jpeg', text: t('River') },
                { id: 7, image: '/35/7.jpeg', text: t('Volcano') },
                { id: 8, image: '/35/8.jpeg', text: t('Valley') },
                { id: 9, image: '/35/9.jpeg', text: t('Gulf') },
                { id: 10, image: '/35/10.jpeg', text: t('Lake') },
            ],
            audioUrl: '/35/35.wav',
        },
        {
            id: 36,
            title: t('Celestial Bodies'),
            subtitle: t('Group Thirty-Six'),
            type: 'gallery',
            items: [
                { id: 1, image: '/36/1.jpeg', text: t('Moon') },
                { id: 2, image: '/36/2.jpeg', text: t('Sun') },
                { id: 3, image: '/36/3.jpeg', text: t('Star') },
                { id: 4, image: '/36/4.jpeg', text: t('Meteor') },
                { id: 5, image: '/36/5.jpeg', text: t('Meteorite') },
                { id: 6, image: '/36/6.jpeg', text: t('Comet') },
                { id: 7, image: '/36/7.jpeg', text: t('Galaxy') },
            ],
            audioUrl: '/36/36.wav',
        },
        {
            id: 37,
            title: t('Geometric Shapes'),
            subtitle: t('Group Thirty-Seven'),
            type: 'gallery',
            items: [
                { id: 1, image: '/37/1.jpeg', text: t('Square') },
                { id: 2, image: '/37/2.jpeg', text: t('Circle') },
                { id: 3, image: '/37/3.jpeg', text: t('Triangle') },
                { id: 4, image: '/37/4.jpeg', text: t('Rectangle') },
                { id: 5, image: '/37/5.jpeg', text: t('Oval') },
                { id: 6, image: '/37/6.jpeg', text: t('Rhombus') },
            ],
            audioUrl: '/37/37.wav',
        },
        {
            id: 38,
            title: t('Feelings and Emotions'),
            subtitle: t('Group Thirty-Eight'),
            type: 'textGrid',
            items: [
                { id: 1, text: t('Affection') },
                { id: 2, text: t('Anger') },
                { id: 3, text: t('Boredom') },
                { id: 4, text: t('Trust') },
                { id: 5, text: t('Creativity') },
                { id: 6, text: t('Curiosity') },
                { id: 7, text: t('Despair') },
                { id: 8, text: t('Depression') },
                { id: 9, text: t('Danger') },
                { id: 10, text: t('Disappointment') },
                { id: 11, text: t('Doubt') },
                { id: 12, text: t('Betrayal') },
                { id: 13, text: t('Sadness') },
                { id: 14, text: t('Joy') },
                { id: 15, text: t('Fatigue') },
                { id: 16, text: t('Dream') },
                { id: 17, text: t('Pressure') },
                { id: 18, text: t('Optimism') },
                { id: 19, text: t('Satisfaction') },
                { id: 20, text: t('Shock') },
                { id: 21, text: t('Humanity') },
                { id: 22, text: t('Thinking') },
                { id: 23, text: t('Love') },
                { id: 24, text: t('Hate') },
            ],
            audioUrl: '/38/38.wav',
        },
        {
            id: 39,
            title: t('Opposites'),
            subtitle: t('Group Thirty-Nine'),
            type: 'opposites',
            items: [
                { id: 1, text: t('Big'), text2: t('Small') },
                { id: 2, text: t('Rich'), text2: t('Poor') },
                { id: 3, text: t('Tall'), text2: t('Short') },
                { id: 4, text: t('Famous'), text2: t('Unknown') },
                { id: 5, text: t('Fast'), text2: t('Slow') },
                { id: 6, text: t('Cheap'), text2: t('Expensive') },
                { id: 7, text: t('Thick'), text2: t('Thin') },
                { id: 8, text: t('Smart'), text2: t('Stupid') },
                { id: 9, text: t('Earth'), text2: t('Sky') },
                { id: 10, text: t('Coward'), text2: t('Brave') },
                { id: 11, text: t('Outside'), text2: t('Inside') },
                { id: 12, text: t('Diligent'), text2: t('Lazy') },
                { id: 13, text: t('Sad'), text2: t('Happy') },
                { id: 14, text: t('Dry'), text2: t('Wet') },
                { id: 15, text: t('Question'), text2: t('Answer') },
                { id: 16, text: t('Closed'), text2: t('Open') },
                { id: 17, text: t('Winner'), text2: t('Loser') },
                { id: 18, text: t('Good'), text2: t('Bad') },
                { id: 19, text: t('Beautiful'), text2: t('Ugly') },
                { id: 20, text: t('Hot'), text2: t('Cold') },
                { id: 21, text: t('Bright'), text2: t('Dark') },
                { id: 22, text: t('High'), text2: t('Low') },
                { id: 23, text: t('Full'), text2: t('Empty') },
                { id: 24, text: t('Clean'), text2: t('Dirty') },
                { id: 25, text: t('Beginning'), text2: t('End') },
            ],
            audioUrl: '/39/39.wav',
        },
        {
            id: 40,
            title: t('Conversation Number 1'),
            subtitle: t('Conversation Number 1'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Ahmed'), text: t('As-salamu alaykum'), speakerColor: '#1565C0' }, // Blue
                { id: 2, speaker: t('Mohamed'), text: t('Wa alaykum as-salam'), speakerColor: '#C62828' }, // Red
                { id: 3, speaker: t('Ahmed'), text: t('How are you Mohamed?'), speakerColor: '#1565C0' }, // Blue
                { id: 4, speaker: t('Mohamed'), text: t('Fine'), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/40/40.wav',
        },
        {
            id: 41,
            title: t('Conversation Number 2'),
            subtitle: t('Conversation Number 2'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Sarah'), text: t('What is your name?'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Heba'), text: t('My name is Heba.'), speakerColor: '#1565C0' }, // Blue
                { id: 3, speaker: t('Heba'), text: t('And what is your name?'), speakerColor: '#1565C0' }, // Blue (Continuation)
                { id: 4, speaker: t('Sarah'), text: t('I am Sarah, how old are you?'), speakerColor: '#C62828' }, // Red
                { id: 5, speaker: t('Heba'), text: t('Twenty years, and you?'), speakerColor: '#1565C0' }, // Blue
                { id: 6, speaker: t('Sarah'), text: t('Eighteen years.'), speakerColor: '#C62828' }, // Red
                { id: 7, speaker: t('Heba'), text: t('Goodbye Sarah.'), speakerColor: '#1565C0' }, // Blue
                { id: 8, speaker: t('Sarah'), text: t('Goodbye.'), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/41/41.wav',
        },
        {
            id: 42,
            title: t('Conversation Number 3'),
            subtitle: t('Conversation Number 3'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Mona'), text: t('Good evening Youssef.'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Youssef'), text: t('Good evening.'), speakerColor: '#4CAF50' }, // Green
                { id: 3, speaker: t('Mona'), text: t('What do you want?'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Youssef'), text: t('I want to have dinner.'), speakerColor: '#4CAF50' }, // Green
                { id: 5, speaker: t('Mona'), text: t('What do you want to eat?'), speakerColor: '#C62828' }, // Red
                { id: 6, speaker: t('Youssef'), text: t('Fried potatoes and some fruit.'), speakerColor: '#4CAF50' }, // Green
                { id: 7, speaker: t('Mona'), text: t('I will prepare that for you right away.'), speakerColor: '#C62828' }, // Red
                { id: 8, speaker: t('Youssef'), text: t('Thank you.'), speakerColor: '#4CAF50' }, // Green
            ],
            audioUrl: '/42/42.wav',
        },
        {
            id: 43,
            title: t('Conversation Number 4'),
            subtitle: t('Conversation Number 4'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('The Son'), text: t('Where is Jerusalem located, father?'), speakerColor: '#1565C0' }, // Blue
                { id: 2, speaker: t('The Father'), text: t('It is in the State of Palestine, my son.'), speakerColor: '#C62828' }, // Red
                { id: 3, speaker: t('The Son'), text: t('Is it beautiful?'), speakerColor: '#1565C0' }, // Blue
                { id: 4, speaker: t('The Father'), text: t('It is very wonderful.'), speakerColor: '#C62828' }, // Red
                { id: 5, speaker: t('The Son'), text: t('You made me eager to visit it, father.'), speakerColor: '#1565C0' }, // Blue
                { id: 6, speaker: t('The Father'), text: t('We will go there in the summer vacation.'), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/43/43.wav',
        },
        {
            id: 44,
            title: t('Conversation Number 5'),
            subtitle: t('Conversation Number 5'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('The Seller'), text: t('What do you want, Samir?'), speakerColor: '#4CAF50' }, // Green
                { id: 2, speaker: t('Samir'), text: t('I want a little sugar.'), speakerColor: '#1565C0' }, // Blue
                { id: 3, speaker: t('The Seller'), text: t('Here you go, Samir, this is what you asked for.'), speakerColor: '#4CAF50' }, // Green
                { id: 4, speaker: t('Samir'), text: t('How much is it?'), speakerColor: '#1565C0' }, // Blue
                { id: 5, speaker: t('The Seller'), text: t('Twenty riyals.'), speakerColor: '#4CAF50' }, // Green
                { id: 6, speaker: t('Samir'), text: t('Here is the money.'), speakerColor: '#1565C0' }, // Blue
                { id: 7, speaker: t('The Seller'), text: t('Thank you, Samir, see you later.'), speakerColor: '#4CAF50' }, // Green
                { id: 8, speaker: t('Samir'), text: t('See you later.'), speakerColor: '#1565C0' }, // Blue
            ],
            audioUrl: '/44/44.wav',
        },
        {
            id: 45,
            title: t('Conversation Number 6'),
            subtitle: t('Conversation Number 6'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('The Teacher'), text: t('What is the king of the jungle?'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Mahmoud'), text: t('The lion.'), speakerColor: '#4CAF50' }, // Green
                { id: 3, speaker: t('The Teacher'), text: t('Well done, Mahmoud, do you know what is the fastest animal?'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Mahmoud'), text: t('Indeed, my teacher, it is the cheetah.'), speakerColor: '#4CAF50' }, // Green
                { id: 5, speaker: t('The Teacher'), text: t('Very excellent, Mahmoud.'), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/45/45.wav',
        },
        {
            id: 46,
            title: t('Conversation Number 7'),
            subtitle: t('Conversation Number 7'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Raed'), text: t('How did you get home, Ali?'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Ali'), text: t('I came by car, and you, Raed?'), speakerColor: '#1565C0' }, // Blue
                { id: 3, speaker: t('Raed'), text: t('The weather was nice and I came walking.'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Ali'), text: t('Really, the weather is beautiful today.'), speakerColor: '#1565C0' }, // Blue
                { id: 5, speaker: t('Raed'), text: t('What do you think, Ali, about going to the sea?'), speakerColor: '#C62828' }, // Red
                { id: 6, speaker: t('Ali'), text: t("Great idea, let's go immediately."), speakerColor: '#1565C0' }, // Blue
                { id: 7, speaker: t('Raed'), text: t("Let's go, Ali."), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/46/46.wav',
        },
        {
            id: 47,
            title: t('Conversation Number 8'),
            subtitle: t('Conversation Number 8'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('The Manager'), text: t('Inform all engineers of an emergency meeting.'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Salem'), text: t('Present, what is the reason for that meeting?'), speakerColor: '#4CAF50' }, // Green
                { id: 3, speaker: t('The Manager'), text: t('To discuss the upcoming projects for the company.'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Salem'), text: t('When is the meeting?'), speakerColor: '#4CAF50' }, // Green
                { id: 5, speaker: t('The Manager'), text: t('Monday, at nine in the morning.'), speakerColor: '#C62828' }, // Red
                { id: 6, speaker: t('Salem'), text: t('Okay, I will do that now.'), speakerColor: '#4CAF50' }, // Green
            ],
            audioUrl: '/47/47.wav',
        },
        {
            id: 48,
            title: t('Conversation Number 9'),
            subtitle: t('Conversation Number 9'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Salma'), text: t('What is the color of the banana?'), speakerColor: '#1565C0' }, // Blue
                { id: 2, speaker: t('Saeed'), text: t('Its color is yellow.'), speakerColor: '#C62828' }, // Red
                { id: 3, speaker: t('Salma'), text: t('And what is the color of the egg?'), speakerColor: '#1565C0' }, // Blue
                { id: 4, speaker: t('Saeed'), text: t('An easy question, its color is white.'), speakerColor: '#C62828' }, // Red
                { id: 5, speaker: t('Salma'), text: t('And what is the shape of the egg?'), speakerColor: '#1565C0' }, // Blue
                { id: 6, speaker: t('Saeed'), text: t('Oval.'), speakerColor: '#C62828' }, // Red
                { id: 7, speaker: t('Salma'), text: t('Well done, Saeed.'), speakerColor: '#1565C0' }, // Blue
            ],
            audioUrl: '/48/48.wav',
        },
        {
            id: 49,
            title: t('Conversation Number 10'),
            subtitle: t('Conversation Number 10'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Saleh'), text: t('Which is faster, the plane or the train?'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Sawsan'), text: t('I think the train is faster.'), speakerColor: '#4CAF50' }, // Green
                { id: 3, speaker: t('Saleh'), text: t('Wrong answer, Sawsan, the plane is faster than the train.'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Sawsan'), text: t('I apologize to you, Saleh.'), speakerColor: '#4CAF50' }, // Green
                { id: 5, speaker: t('Saleh'), text: t('No problem, Sawsan, the important thing is that you learn from your mistake.'), speakerColor: '#C62828' }, // Red
                { id: 6, speaker: t('Sawsan'), text: t('Indeed, I learned that from you, thank you for the information.'), speakerColor: '#4CAF50' }, // Green
                { id: 7, speaker: t('Saleh'), text: t('You are welcome.'), speakerColor: '#C62828' }, // Red
            ],
            audioUrl: '/49/49.wav',
        },
        {
            id: 50,
            title: t('Conversation Number 11'),
            subtitle: t('Conversation Number 11'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('Jassem'), text: t('Which country are you from, Mariam?'), speakerColor: '#1565C0' }, // Blue
                { id: 2, speaker: t('Mariam'), text: t('I am from Morocco, and you?'), speakerColor: '#C62828' }, // Red
                { id: 3, speaker: t('Jassem'), text: t('I am from Saudi Arabia.'), speakerColor: '#1565C0' }, // Blue
                { id: 4, speaker: t('Mariam'), text: t('Honored to meet you, Jassem.'), speakerColor: '#C62828' }, // Red
                { id: 5, speaker: t('Jassem'), text: t('And I am also happy to see you.'), speakerColor: '#1565C0' }, // Blue
                { id: 6, speaker: t('Mariam'), text: t('Good morning, Jassem, I will leave now.'), speakerColor: '#C62828' }, // Red
                { id: 7, speaker: t('Jassem'), text: t('Goodbye.'), speakerColor: '#1565C0' }, // Blue
            ],
            audioUrl: '/50/50.wav',
        },
        {
            id: 51,
            title: t('Conversation Number 12'),
            subtitle: t('Conversation Number 12'),
            type: 'conversation',
            items: [
                { id: 1, speaker: t('The Grandfather'), text: t('Which university are you studying at now, Wasan?'), speakerColor: '#C62828' }, // Red
                { id: 2, speaker: t('Wasan'), text: t('I am studying at Makkah University, grandfather.'), speakerColor: '#4CAF50' }, // Green
                { id: 3, speaker: t('The Grandfather'), text: t('Which college are you studying at in the university?'), speakerColor: '#C62828' }, // Red
                { id: 4, speaker: t('Wasan'), text: t('I am studying at the College of Sharia.'), speakerColor: '#4CAF50' }, // Green
                { id: 5, speaker: t('The Grandfather'), text: t('What is your major at the university?'), speakerColor: '#C62828' }, // Red
                { id: 6, speaker: t('Wasan'), text: t('Islamic Sharia, grandfather.'), speakerColor: '#4CAF50' }, // Green
                { id: 7, speaker: t('The Grandfather'), text: t('Good luck to you, my daughter.'), speakerColor: '#C62828' }, // Red
                { id: 8, speaker: t('Wasan'), text: t('Thank you, grandfather.'), speakerColor: '#4CAF50' }, // Green
            ],
            audioUrl: '/51/51.wav',
        },
    ];

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
                { id: 1, text: t('Ear'), image: '/level2/5/ear.jpg', letter: 'أُ', highlight: 'أ' },
                { id: 2, text: t('Needle'), image: '/level2/5/needle.jpg', letter: 'إِ', highlight: 'إ' },
                { id: 3, text: t('Lion'), image: '/level2/5/lion.jpg', letter: 'أَ', highlight: 'أ' },
            ],
            distinguish: [
                { id: 1, badge: 'ا', long: 'آ', short: 'أَ' },
                { id: 2, badge: 'ي', long: 'إِيـــ', short: 'إِ' },
                { id: 3, badge: 'و', long: 'أُو', short: 'أُ' },
            ],
            writingPractice: [
                { id: 1, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'solid' },
                { id: 2, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'dotted' },
                { id: 3, text: 'أَ', sub: 'إِ', text2: 'أُ', type: 'dotted' },
            ],
            exercises: [
                {
                    id: 1,
                    type: 'circle',
                    letter: 'أ',
                    title: t('Exercise: Circle Letter Alif'),
                    words: [
                        'Lion', 'Ask', 'Mouse',
                        'Basim', 'Answered', 'Rabbit',
                        'Roared', 'Water', 'Cup'
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
                        'Mutaz', 'Key', 'Figs',
                        'Plant', 'Dates', 'Crocodile',
                        'House', 'Crown', 'Oil'
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
                        'Furniture', 'Fox', 'Triangle',
                        'Bull', 'Plow', 'Fridge',
                        'Fruit', 'Three', 'Yathrib'
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
                { id: 1, text: 'أَب', text2: 'بَاب', highlight: 'بُن' },
                { id: 2, text: 'تَابَ', text2: 'تُوت', highlight: 'بَاتَ' },
                { id: 3, text: 'ثَبَتَ', text2: 'ثَابَ', highlight: 'بَثَّ' },
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
    ];


    return [
        {
            id: 1,
            title: t('Part One'),
            description: t('Basics and Daily Life'),
            videoUrl: 'https://www.youtube.com/embed/lTZBNRYJzi4',
            image: '/parts/1.png',
            pdfUrl: 'https://drive.google.com/file/d/1nYdgUosHeyyZNPMG8vrOPGakUA7oUZrE/view?usp=sharing',
            lessons: part1Lessons
        },
        {
            id: 2,
            title: t('Part Two'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/2.png',
            pdfUrl: 'https://drive.google.com/file/d/1IC6svlKgNDBB-4Vtc24mAUA_-xTkRG7m/view?usp=sharing',
            lessons: part2Lessons
        },
        {
            id: 3,
            title: t('Part Three'),
            description: t('Coming Soon'),
            videoUrl: '',
            image: '/parts/3.png',
            pdfUrl: 'https://drive.google.com/file/d/1RuFvD46Ku5cpOWYpuCgMr2OXSryLVIss/view?usp=sharing',
            lessons: []
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

