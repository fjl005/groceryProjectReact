import salmonImg from '../img/salmon.jpg';
import steakImg from '../img/steak.jpg';
import tofuImg from '../img/tofu.jpg';

export const PROTEIN = [
    {
        id: 0,
        groceryType: 'Lean Meat',
        image: salmonImg,
        items: [
            {
                name: 'Chicken Breast',
                price: 10
            }, 
            {
                name: 'Ground Turkey',
                price: 5
            },
            {
                name: 'Salmon',
                price: 15
            }
        ]
    },
    {
        id: 1,
        groceryType: 'Red Meat',
        image: steakImg,
        items: [
            {
                name: 'Steak',
                price: 20
            }, 
            {
                name: 'Bacon',
                price: 5
            },
            {
                name: 'Ground Beef',
                price: 5
            }
        ]
    },
    {
        id: 2,
        groceryType: 'Vegetarian Protein',
        image: tofuImg,
        items: [
            {
                name: 'Beans',
                price: 4
            }, 
            {
                name: 'Tofu',
                price: 3
            },
            {
                name: 'Impossible Beef',
                price: 5
            }
        ]
    }
];