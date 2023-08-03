//men
import dhi from '../assets/fragrances/mens/dior_homme_int.png';
import ysl_lhomme from '../assets/fragrances/mens/ysl_lhomme.png';
import light_blue_int from '../assets/fragrances/mens/light_blue_int.png';
import ahs from '../assets/fragrances/mens/ahs.png';
//women
import LaVieEstBelle from '../assets/fragrances/womens/la_vie_est_belle.png';
import ch_good_girl from '../assets/fragrances/womens/ch_gg.png';

export const men = [
    {
        id: 'dior_homme_intense',
        name: 'Dior Homme Intense',
        brand: 'Dior',
        image: dhi,
        gender: "men",
        notes: {
            top: [ "Lavender" ],
            middle: [ "Iris", "Ambrette Seed", "Pear" ],
            base: [ "Virginia Cedar", "Vetiver" ]
        },
        perfumers: [ "François Demachy" ],
        prices: [
            {
                bottle_size: "50ml",
                price: 82.5
            },
            {
                bottle_size: "100ml",
                price: 114.0
            },
            {
                bottle_size: "150ml",
                price: 128.0
            }
        ]
    },
    {
        id: 'ysl_lhomme',
        name: "L'Homme",
        brand: 'YSL',
        image: ysl_lhomme,
        gender: "men",
        notes: {
            top: [ "Ginger", "Bergamot", "Lemon" ],
            middle: [ "Spices", "Violet Leaf", "White Pepper", "Basil" ],
            base: [ "Tonka Bean", "Cedar", " Tahitian Vetiver" ]
        },
        perfumers: [ "Anne Flipo", "Dominique Ropion", "Juliette Karagueuzoglou", "Pierre Wargnye" ],
        prices: [
            {
                bottle_size: "40ml",
                price: 72.0
            },
            {
                bottle_size: "60ml",
                price: 89.0
            },
            {
                bottle_size: "100ml",
                price: 108.0
            },
            {
                bottle_size: "150ml",
                price: 164.0
            }
        ]
    },
    {
        id: 'd&g_light_blue_eau_intense',
        name: "Light Blue Eau Intense",
        brand: 'Dolce&Gabbana',
        image: light_blue_int,
        gender: "men",
        notes: {
            top: [ "Grapefruit", "Mandarin Orange" ],
            middle: [ "Sea water", "Juniper" ],
            base: [ "Musk", "Amberwood" ]
        },
        perfumers: [ "Alberto Morillas" ],
        prices: [
            {
                bottle_size: "50ml",
                price: 75.0
            },
            {
                bottle_size: "100ml",
                price: 102.0
            },
            {
                bottle_size: "200ml",
                price: 164.0
            }
        ]
    },
    {
        id: 'chanel_allure_homme_sport',
        name: "Allure Home Sport",
        brand: 'Chanel',
        image: ahs,
        gender: "men",
        notes: {
            top: [ "Orange", "Sea Notes", "Mandarin", "Aldehydes" ],
            middle: [ "Pepper", "Cedar", "Neroli" ],
            base: [ "White Musk", "Amber", "Tonka Bean", "Vanilla", "Vetiver" ]
        },
        perfumers: [ "Jacques Polge" ],
        prices: [
            {
                bottle_size: "50ml",
                price: 86.0
            },
            {
                bottle_size: "100ml",
                price: 121.0
            },
            {
                bottle_size: "150ml",
                price: 145.0
            }
        ]
    }
];

//WOMEN

export const women = [
    {
        id: 'la_vie_est_belle',
        name: 'La Vie Est Belle',
        brand: 'Lancôme',
        image: LaVieEstBelle,
        gender: "women",
        notes: {
            top: [ "Black Currant", "Pear" ],
            middle: [ "Iris", "Jasmine", "Orange Blossom" ],
            base: [ "Praline", "Vanilla", "Patchouli", "Tonka Bean" ]
        },
        perfumers: [ "Anne Flipo", "Dominique Ropion", "Olivier Polge" ],
        prices: [
            {
                bottle_size: "30ml",
                price: 58.9
            },
            {
                bottle_size: "50ml",
                price: 78.9
            },
            {
                bottle_size: "100ml",
                price: 98.0
            },
            {
                bottle_size: "150ml",
                price: 158.5
            }
        ]
    },
    {
        id: 'carolina_herrera_good_girl',
        name: 'Good Girl ',
        brand: 'Carolina Herrera',
        image: ch_good_girl,
        gender: "women",
        notes: {
            top: [ "Almond" ],
            middle: [ "Tuberose", "Jasmine Sambac" ],
            base: [ "Cacao", "Tonka Bean" ]
        },
        perfumers: [ "Louise Turner", "Quentin Bisch" ],
        prices: [
            {
                bottle_size: "30ml",
                price: 58.9
            },
            {
                bottle_size: "50ml",
                price: 78.9
            },
            {
                bottle_size: "100ml",
                price: 98.0
            },
            {
                bottle_size: "150ml",
                price: 158.5
            }
        ]
    }
];

export const allFragrances = [ ...men, ...women ];