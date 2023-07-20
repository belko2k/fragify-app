import dhi from './assets/fragrances/mens/dior_homme_int.png';

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
    }
];

export const women = [
    {
        id: 'la_vie_est_belle',
        name: 'La Vie Est Belle',
        brand: 'Lancôme',
        image: dhi,
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
    }
];