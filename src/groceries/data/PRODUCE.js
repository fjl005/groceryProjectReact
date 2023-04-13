import fruitsImg from '../img/fruits.jpg';
import vegetablesImg from '../img/vegetables.jpg';
import dairyImg from '../img/dairy.jpg';

export const PRODUCE = [
    {
        id: 0,
        groceryType: 'Fruits',
        image: fruitsImg,
        items: [
            {
                name: 'Blueberries',
                price: 5
            }, 
            {
                name: 'Bananas',
                price: 1
            },
            {
                name: 'Blackberries',
                price: 4
            }
        ]
    },
    {
        id: 1,
        groceryType: 'Vegetables',
        image: vegetablesImg,
        items: [
            {
                name: 'Salad Mix',
                price: 5
            }, 
            {
                name: 'Brussels Sprouts',
                price: 5
            },
            {
                name: 'Broccoli',
                price: 5
            }
        ]
    },
    {
        id: 2,
        groceryType: 'Dairy',
        image: dairyImg,
        items: [
            {
                name: 'Milk',
                price: 4
            }, 
            {
                name: 'Eggs',
                price: 100
            },
            {
                name: 'Cheese',
                price: 5
            }
        ]
    }
];
