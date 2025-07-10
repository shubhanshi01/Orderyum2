import React from 'react';

const mealsData = {
  "banner": [
    require('./images/7.jpg'),
    require('./images/5.jpg'),
    require('./images/6.jpg'),
    require('./images/8.jpg'),
  ],
  "categories": 
  ['Pizza',
     'Burger', 'Salad', 'Dessert', 'Drinks'],
  "Food" : [
    {
        id: 1,
      name: 'Paneer Butter Masala',
      desc: 'Rich and creamy curry with soft paneer cubes.',
      price: '₹220',
      image:require('../Component/images/paneer.jpg'),
    },
    {
      id: 2,
      name: 'Veg Biryani',
      desc: 'Aromatic rice with fresh vegetables and spices.',
      price: '₹180',
      image: require('../Component/images/biryani.jpg'),
    },
    {
        id: 3,
      name: 'Dal Makhani',
      desc: 'Slow-cooked black lentils in a buttery sauce.',
      price: '₹160',
      image: require('../Component/images/dal.jpg'),
    },
    {
        id: 4,
      name: 'Chole Bhature',
      desc: 'Spicy chickpeas served with fluffy bhature.',
      price: '₹140',
      image: require('../Component/images/chole.jpg'),
    },
      {
        id: 5,
        name: 'Margherita Pizza',
        desc: 'Classic delight with 100% real mozzarella cheese.',
        price: '₹220',
        image: require('../Component/images/1.jpg'),},
      {
        id: 6,
        name: 'Egg Ramen',
        desc: 'Spicy paneer cubes grilled with saucy ramen perfection.',
        price: '₹180',
        image:  require('../Component/images/3.jpg'),
      },
      
      {
        id: 7,
        name: 'Palak Paneer',
        desc: 'Soft paneer in creamy spinach gravy.',
        price: '₹200',
        image: require('../Component/images/palak.jpg'),},
      {
        id: 8,
        name: 'Masala Dosa',
        desc: 'Crispy rice crepe with spiced potato filling.',
        price: '₹120',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-1.jpg',
      },
      {
        id: 9,
        name: 'Aloo Paratha',
        desc: 'Whole wheat flatbread stuffed with spiced potatoes.',
        price: '₹80',
        image: require('../Component/images/aloo.jpg'),
      },
      {
        id: 10,
        name: 'Rajma Chawal',
        desc: 'Red kidney beans curry with steamed rice.',
        price: '₹150',
        image: require('../Component/images/rajma.jpg'),
      },
      {
        id: 11,
        name: 'Pav Bhaji',
        desc: 'Spiced vegetable mash with buttered buns.',
        price: '₹130',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-recipe-1.jpg',
      },
      {
        id: 12,
        name: 'Idli Sambar',
        desc: 'Steamed rice cakes with lentil vegetable stew.',
        price: '₹100',
        image: require('../Component/images/idli.jpg'),
      },
      {
        id: 13,
        name: 'Vada Pav',
        desc: 'Spicy potato fritter in a bun with chutneys.',
        price: '₹60',
        image: require('../Component/images/vada.jpg'),
      },
      {
        id: 14,
        name: 'Malai Kofta',
        desc: 'Vegetable dumplings in rich creamy gravy.',
        price: '₹240',
        image: require('../Component/images/malai.jpg'),
      },
      {
        id: 15,
        name: 'Samosa',
        desc: 'Crispy pastry with spiced potato filling.',
        price: '₹40',
        image: require('../Component/images/samosa.jpg'),
      },
      
  
  ]};
export default mealsData;