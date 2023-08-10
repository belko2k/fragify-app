import LaVieEstBelle from '../assets/fragrances/womens/la_vie_est_belle.png';
import ch_good_girl from '../assets/fragrances/womens/ch_gg.png';
import ange_ou_demon from '../assets/fragrances/womens/givenchy_aud.png';


const women = [
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
    },
    {
        id: 'givenchy_ange_ou_demon',
        name: 'Ange ou Démon',
        brand: 'Givenchy',
        image: ange_ou_demon,
        gender: "women",
        notes: {
            top: [ "Saffron", "Thyme", "Mandarin Orange" ],
            middle: [ "Lily", "Ylang-Ylang", "Orchid" ],
            base: [ "Vanilla", "Tonka Bean", "Oakmoss", "Brazilian Rosewood" ]
        },
        perfumers: [ "Jean-Pierre Bethouart", "Olivier Cresp" ],
        prices: [
            {
                bottle_size: "30ml",
                price: 55.0
            },
            {
                bottle_size: "50ml",
                price: 81.0
            },
            {
                bottle_size: "100ml",
                price: 102.0
            }
        ]
    }
];


export default women;