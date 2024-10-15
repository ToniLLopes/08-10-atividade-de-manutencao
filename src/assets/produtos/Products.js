import pizzaPeperoni from './imgProdutos/PizzaPeperoni.png';
import pizzaPortuguesa from './imgProdutos/PizzaPortuguesa.png';
import PizzaMargherita from './imgProdutos/PizzaMargherita.png';
import PizzaFrangoCatupiry from './imgProdutos/PizzaFrangoCatupiry.png';
import PizzaRuculaTomateSeco from './imgProdutos/PizzaRuculaTomateSeco.png';
import PizzaVegetariana from './imgProdutos/PizzaVegetariana.png';
import PizzaBaconCheddar from './imgProdutos/PizzaBaconCheddar.png';
import PizzaQuatroQueijos from './imgProdutos/PizzaQuatroQueijos.png';
import PizzaChocolateMorango from './imgProdutos/PizzaChocolateMorango.png';
import PizzaBananaCanela from './imgProdutos/PizzaBananaCanela.png';
import PizzaChocolatePreto from './imgProdutos/PizzaChocolatePreto.png';
import PizzaChocolateBranco from './imgProdutos/PizzaChocolateBranco.png';

const products = [
  {
    product: "Pizza Peperoni",
    description: "Pepperoni picante sobre queijo mussarela derretido e molho de tomate.",
    image: pizzaPeperoni,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Portuguesa",
    description: "Presunto, ovos cozidos, cebola, pimentão, azeitonas e queijo mussarela.",
    image: pizzaPortuguesa,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Margherita",
    description: "Molho de tomate fresco, mussarela de búfala e manjericão, finalizado com azeite de oliva extra virgem.",
    image: PizzaMargherita,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Frango c/ Catupiry",
    description: "Frango desfiado, catupiry cremoso e orégano.",
    image: PizzaFrangoCatupiry,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Rúcula com Tomate Seco",
    description: "Mussarela com rúcula, tomates secos e parmesão.",
    image: PizzaRuculaTomateSeco,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Vegetariana",
    description: "Legumes frescos e queijo.",
    image: PizzaVegetariana,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Bacon com Cheddar",
    description: "Bacon crocante, queijo cheddar derretido e cebola caramelizada.",
    image: PizzaBaconCheddar,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza Quatro Queijos",
    description: "Queijos mussarela, gorgonzola, provolone e parmesão em molho branco cremoso.",
    image: PizzaQuatroQueijos,
    prices: [
      { size: "Grande", price: 49.90 },
      { size: "Médio", price: 39.90 },
      { size: "Pequeno", price: 29.90 },
    ],
    category: "Pizza Salgada"
  },
  {
    product: "Pizza de Chocolate c/ Morango",
    description: "Chocolate ao leite, morango fresco e açúcar de confeiteiro.",
    image: PizzaChocolateMorango,
    prices: [
      { size: "Grande", price: 39.90 },
      { size: "Médio", price: 29.90 },
      { size: "Pequeno", price: 19.90 },
    ],
    category: "Pizza Doce"
  },
  {
    product: "Pizza de Banana c/ Canela",
    description: "Banana caramelizada, canela e leite condensado.",
    image: PizzaBananaCanela,
    prices: [
      { size: "Grande", price: 39.90 },
      { size: "Médio", price: 29.90 },
      { size: "Pequeno", price: 19.90 },
    ],
    category: "Pizza Doce"
  },
  {
    product: "Pizza Chocolate Preto",
    description: "Chocolate preto, creme de leite e açúcar.",
    image: PizzaChocolatePreto,
    prices: [
      { size: "Grande", price: 39.90 },
      { size: "Médio", price: 29.90 },
      { size: "Pequeno", price: 19.90 },
    ],
    category: "Pizza Doce"
  },
  {
    product: "Pizza Chocolate Branco",
    description: "Chocolate branco, creme de leite e açúcar.",
    image: PizzaChocolateBranco,
    prices: [
      { size: "Grande", price: 39.90 },
      { size: "Médio", price: 29.90 },
      { size: "Pequeno", price: 19.90 },
    ],
    category: "Pizza Doce"
  }
];

export default products;
