import { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  nameProduct: string;
  price: number;
  quantity: number;
  description: string;
};

const cafeteriaProducts: Product[] = [
  {
    id: 1,
    nameProduct: "Café Espresso",
    price: 2.5,
    quantity: 0,
    description: "Um shot de café espresso puro e intenso."
  },
  {
    id: 2,
    nameProduct: "Café Latte",
    price: 3.0,
    quantity: 0,
    description: "Café espresso com leite vaporizado, cremoso e suave."
  },
  {
    id: 3,
    nameProduct: "Cappuccino",
    price: 3.2,
    quantity: 0,
    description: "Café espresso, leite vaporizado e espuma de leite."
  },
  {
    id: 4,
    nameProduct: "Mocha",
    price: 3.5,
    quantity: 0,
    description: "Café espresso, leite vaporizado, chocolate e chantilly."
  },
  {
    id: 5,
    nameProduct: "Café Americano",
    price: 2.0,
    quantity: 0,
    description: "Café espresso diluído em água quente, mais suave."
  },
  {
    id: 6,
    nameProduct: "Macchiato",
    price: 2.8,
    quantity: 0,
    description: "Café espresso com uma pequena quantidade de leite vaporizado."
  },
  {
    id: 7,
    nameProduct: "Café Gelado",
    price: 4.0,
    quantity: 0,
    description: "Café espresso resfriado com gelo, perfeito para dias quentes."
  },
  {
    id: 8,
    nameProduct: "Chai Latte",
    price: 4.2,
    quantity: 0,
    description: "Chá preto com especiarias e leite vaporizado."
  },
  {
    id: 9,
    nameProduct: "Café Misto",
    price: 2.8,
    quantity: 0,
    description: "Café espresso com uma quantidade igual de leite."
  },
  {
    id: 10,
    nameProduct: "Café Descafeinado",
    price: 2.7,
    quantity: 0,
    description: "Café espresso sem cafeína, ideal para noites tranquilas."
  },
  {
    id: 11,
    nameProduct: "Café com Leite",
    price: 2.8,
    quantity: 0,
    description: "Café espresso com uma boa dose de leite."
  },
  {
    id: 12,
    nameProduct: "Café Viennese",
    price: 3.5,
    quantity: 0,
    description: "Café espresso com chantilly e cobertura de chocolate."
  },
  {
    id: 13,
    nameProduct: "Café Cortado",
    price: 2.6,
    quantity: 0,
    description: "Café espresso cortado com uma pequena quantidade de leite."
  },
  {
    id: 14,
    nameProduct: "Café Irlandês",
    price: 5.0,
    quantity: 0,
    description: "Café espresso com uísque irlandês e chantilly."
  },
  {
    id: 15,
    nameProduct: "Café Viennois",
    price: 3.8,
    quantity: 0,
    description: "Café espresso com chantilly e cacau em pó."
  },
  {
    id: 16,
    nameProduct: "Café Affogato",
    price: 4.5,
    quantity: 0,
    description: "Café espresso servido com uma bola de sorvete de baunilha."
  },
  {
    id: 17,
    nameProduct: "Café Flat White",
    price: 3.3,
    quantity: 0,
    description: "Café espresso com leite vaporizado, cremoso e suave."
  },
  {
    id: 18,
    nameProduct: "Café Cortado",
    price: 2.6,
    quantity: 0,
    description: "Café espresso cortado com uma pequena quantidade de leite."
  },
  {
    id: 19,
    nameProduct: "Café Mocha",
    price: 3.8,
    quantity: 0,
    description: "Café espresso com leite vaporizado, chocolate e chantilly."
  },
  {
    id: 20,
    nameProduct: "Café Macchiato",
    price: 3.0,
    quantity: 0,
    description: "Café espresso com uma pequena quantidade de leite vaporizado."
  },{
    id: 21,
    nameProduct: "Sanduíche de Frango Grelhado",
    price: 6.0,
    quantity: 0,
    description: "Peito de frango grelhado, alface, tomate e maionese."
  },
  {
    id: 22,
    nameProduct: "Sanduíche Vegano",
    price: 5.5,
    quantity: 0,
    description: "Hambúrguer vegano, alface, tomate e maionese vegana."
  },
  {
    id: 23,
    nameProduct: "Sanduíche de Peru",
    price: 5.0,
    quantity: 0,
    description: "Peito de peru, queijo, alface, tomate e mostarda."
  },
  {
    id: 24,
    nameProduct: "Sanduíche de Atum",
    price: 5.0,
    quantity: 0,
    description: "Atum, maionese, cebola, alface e picles."
  },
  {
    id: 25,
    nameProduct: "Sanduíche de Ovo e Bacon",
    price: 4.5,
    quantity: 0,
    description: "Ovos mexidos, bacon crocante e queijo derretido."
  },{
    id: 26,
    nameProduct: "Bolo de Chocolate",
    price: 4.0,
    quantity: 0,
    description: "Uma fatia deliciosa de bolo de chocolate com cobertura."
  },
  {
    id: 27,
    nameProduct: "Bolo de Morango",
    price: 4.2,
    quantity: 0,
    description: "Uma fatia de bolo de morango com recheio e cobertura de morangos."
  },
  {
    id: 28,
    nameProduct: "Bolo de Cenoura",
    price: 3.8,
    quantity: 0,
    description: "Uma fatia de bolo de cenoura com cobertura de chocolate."
  },
  {
    id: 29,
    nameProduct: "Bolo de Limão",
    price: 4.0,
    quantity: 0,
    description: "Uma fatia refrescante de bolo de limão com glacê de limão."
  },
  {
    id: 30,
    nameProduct: "Bolo Red Velvet",
    price: 4.5,
    quantity: 0,
    description: "Uma fatia de bolo Red Velvet com creme de queijo."
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cafeteriaProducts);
}