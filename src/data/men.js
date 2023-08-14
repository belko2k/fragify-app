import dhi from '../assets/fragrances/mens/dior_homme_int.png';
import ysl_lhomme from '../assets/fragrances/mens/ysl_lhomme.png';
import light_blue_int from '../assets/fragrances/mens/light_blue_int.png';
import ahs from '../assets/fragrances/mens/ahs.png';
import the_one_edp from '../assets/fragrances/mens/the_one_edp.png';

const men = [
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
    },
    {
        id: 'd&g_the_one_edp',
        name: "The One EDP",
        brand: 'Dolce&Gabbana',
        image: the_one_edp,
        gender: "men",
        notes: {
            top: [ "Grapefruit", "Coriander", "Basil" ],
            middle: [ "Cardamom", "Ginger", "Orange Blossom" ],
            base: [ "Tobacco", "Amber", "Cedar" ]
        },
        perfumers: [ "Olivier Polge" ],
        prices: [
            {
                bottle_size: "50ml",
                price: 81.0
            },
            {
                bottle_size: "100ml",
                price: 117.0
            },
            {
                bottle_size: "150ml",
                price: 131.0
            }
        ]
    }
];

export default men;