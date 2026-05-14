export const WHATSAPP_NUMBER = '6287861808065';
export const DISPLAY_WHATSAPP_NUMBER = '+62 878-6180-8065';
export const PRODUCT_SIZE = '500g';
export const PRODUCT_PRICE = '35,000 RP';

const dogImage = new URL(
  '../images/dog-transparent/dog-transparent150w.png',
  import.meta.url
).href;
const canImage = new URL('../images/nuts-can.png', import.meta.url).href;
const catImage = new URL(
  '../images/cat-transparent/cat-transparent150w.png',
  import.meta.url
).href;
const puppyImage = new URL(
  '../images/puppy-transparent/puppy-transparent150w.png',
  import.meta.url
).href;

export const PRODUCT_CATEGORIES = [
  {
    id: 'raw-dog-food',
    label: 'Raw Dog Food',
    description: 'Chicken-based raw meals with tuna, gizzard, or liver.',
    image: dogImage,
    productIds: [
      'raw-chicken-tuna',
      'raw-chicken-gizzard',
      'raw-chicken-liver',
    ],
  },
  {
    id: 'cooked-dog-food',
    label: 'Cooked Dog Food',
    description: 'Gently cooked dog meals with vegetables and real protein.',
    image: canImage,
    productIds: [
      'cooked-chicken-tuna',
      'cooked-chicken-gizzard',
      'cooked-chicken-liver',
    ],
  },
  {
    id: 'cat-food',
    label: 'Cat Food',
    description: 'Fish and chicken recipes made for cats in 500g cans.',
    image: catImage,
    productIds: [
      'cat-chicken-tuna',
      'cat-chicken-gizzard',
      'cat-chicken-liver',
      'cat-mackerel-liver',
      'cat-ocean-mackerel',
      'cat-sardine-gizzard',
    ],
  },
  {
    id: 'puppy-food',
    label: 'Puppy Food',
    description: 'Puppy recipes with chicken, greens, seaweed, and rice.',
    image: puppyImage,
    productIds: [
      'puppy-chicken-tuna',
      'puppy-chicken-gizzard',
      'puppy-chicken-liver',
    ],
  },
];

export const PRODUCTS = {
  'raw-chicken-tuna': {
    name: 'Raw Chicken with Tuna',
    categoryId: 'raw-dog-food',
    price: PRODUCT_PRICE,
    image: dogImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'raw-chicken-gizzard': {
    name: 'Raw Chicken with Gizzard',
    categoryId: 'raw-dog-food',
    price: PRODUCT_PRICE,
    image: dogImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'raw-chicken-liver': {
    name: 'Raw Chicken with Liver',
    categoryId: 'raw-dog-food',
    price: PRODUCT_PRICE,
    image: dogImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'cooked-chicken-tuna': {
    name: 'Cooked Chicken with Tuna',
    categoryId: 'cooked-dog-food',
    price: PRODUCT_PRICE,
    image: canImage,
    ingredients: [
      'Tender chicken breast and bone',
      'Premium tuna',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cooked-chicken-gizzard': {
    name: 'Cooked Chicken with Gizzard',
    categoryId: 'cooked-dog-food',
    price: PRODUCT_PRICE,
    image: canImage,
    ingredients: [
      'Tender chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cooked-chicken-liver': {
    name: 'Cooked Chicken with Liver',
    categoryId: 'cooked-dog-food',
    price: PRODUCT_PRICE,
    image: canImage,
    ingredients: [
      'Tender chicken breast and bone',
      'Premium chicken liver',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cat-chicken-tuna': {
    name: 'Chicken with Tuna',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-chicken-gizzard': {
    name: 'Chicken with Gizzard',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-chicken-liver': {
    name: 'Chicken with Liver',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-mackerel-liver': {
    name: 'Mackerel with Chicken Liver',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Fresh mackerel',
      'Premium chicken liver',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-ocean-mackerel': {
    name: 'Ocean Fish with Mackerel',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Premium ocean fish mix',
      'Fresh mackerel',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-sardine-gizzard': {
    name: 'Sardine with Chicken Gizzard',
    categoryId: 'cat-food',
    price: PRODUCT_PRICE,
    image: catImage,
    ingredients: [
      'Premium sardine',
      'Nutrient-rich chicken gizzard',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'puppy-chicken-tuna': {
    name: 'Chicken with Tuna',
    categoryId: 'puppy-food',
    price: PRODUCT_PRICE,
    image: puppyImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
  'puppy-chicken-gizzard': {
    name: 'Chicken with Gizzard',
    categoryId: 'puppy-food',
    price: PRODUCT_PRICE,
    image: puppyImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
  'puppy-chicken-liver': {
    name: 'Chicken with Liver',
    categoryId: 'puppy-food',
    price: PRODUCT_PRICE,
    image: puppyImage,
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
};

export function getProduct(productId) {
  return PRODUCTS[productId] ?? null;
}

export function getCategory(categoryId) {
  return (
    PRODUCT_CATEGORIES.find((category) => category.id === categoryId) ?? null
  );
}
