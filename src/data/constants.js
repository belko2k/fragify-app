//men
import dhi from '../assets/fragrances/mens/dior_homme_int.png';
import ysl_lhomme from '../assets/fragrances/mens/ysl_lhomme.png';
//women
import LaVieEstBelle from '../assets/fragrances/womens/la_vie_est_belle.png';
import ch_good_girl from '../assets/fragrances/womens/ch_gg.png';

export const men = [
    {
        id: 'dior_homme_intense',
        name: 'Dior Homme Intense',
        brand: 'Dior',
        image: dhi,
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
    }
];

export const women = [
    {
        id: 'la_vie_est_belle',
        name: 'La Vie Est Belle',
        brand: 'Lancôme',
        image: LaVieEstBelle,
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