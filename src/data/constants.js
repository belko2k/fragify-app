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
                price: 80.5
            },
            {
                bottle_size: "100ml",
                price: 110.0
            },
            {
                bottle_size: "150ml",
                price: 150.0
            }
        ]
    }
];