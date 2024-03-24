// t-shirts
import tshirt1 from '../assets/images/product/tshirt1.png';
import tshirt2 from '../assets/images/product/tshirt2.png';
import tshirt3 from '../assets/images/product/tshirt3.png';
// bags
import bag1 from '../assets/images/product/bag1.png';
import bag2 from '../assets/images/product/bag2.png';
import bag3 from '../assets/images/product/bag3.png';

// popular products

import supp1 from '../assets/images/product/supp1.png';
import supp2 from '../assets/images/product/supp2.png';
import supp3 from '../assets/images/product/supp3.png';

// category images
import nutrition from '../assets/images/category/Nutrition.png';
import Outfit from '../assets/images/category/Outfit.png';
import Bags from '../assets/images/category/Bags.png';
import Accessories from '../assets/images/category/Accessories.png';

// facilities images
import facility1 from '../assets/images/category/facility1.png';
import facility2 from '../assets/images/category/facility2.png';
import facility3 from '../assets/images/category/facility3.png';
import facility4 from '../assets/images/category/facility4.png';

const newProduct = [
  { productImg: tshirt1, name: 'GYM T-Shirt', price: '৳250.00 ' },
  { productImg: tshirt2, name: 'Half Sleeve T-Shirt', price: '৳300.00' },
  { productImg: tshirt3, name: 'Sleeve-Less T-Shirt', price: '৳300.00 ' },
];

const trendingProduct = [
  { productImg: bag1, name: 'Black GYM Bag', price: '৳250.00' },
  { productImg: bag2, name: 'Best GYM Bag', price: '৳250.00' },
  { productImg: bag3, name: 'Shoulder Bag', price: '৳250.00' },
];

const popularProduct = [
  { productImg: supp1, name: 'Whey Protein Mexico', price: '৳2550.00' },
  { productImg: supp2, name: 'Vegan Protein Powder', price: '৳300.00' },
  { productImg: supp3, name: 'Organic Protein Powder', price: '৳300.00' },
];

const categoryList = [
  {
    img: nutrition,
    name: 'Protein & Nutrition',
  },
  {
    img: Outfit,
    name: 'Sports Outfits',
  },
  {
    img: Bags,
    name: 'Sports Bags',
  },
  {
    img: Accessories,
    name: 'GYM Accessories',
  },
];

const facilitiesList = [
  {
    img: facility1,
    name: 'Fitness Equipment',
  },
  {
    img: facility2,
    name: 'Qualified Trainer',
  },
  {
    img: facility3,
    name: 'Individual Locker',
  },
  {
    img: facility4,
    name: 'Fully Secured Area',
  },
];

export {
  newProduct,
  trendingProduct,
  popularProduct,
  categoryList,
  facilitiesList,
};
