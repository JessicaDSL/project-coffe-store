import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { Product } from '../types/products-type'

interface ProductsContextType {
  products: Product[],
  setQuantity: (value: number, productId: number) => void,  
}

const DEFAULT_VALUE: ProductsContextType = {
  products: [],
  setQuantity: () => {},
}

export const ProductContext = createContext<ProductsContextType>(DEFAULT_VALUE);

const { Provider } = ProductContext;

export const ProductProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts()
  }, [])

  function setQuantity(value: number, productId: number) {
    const updateProducts = products.map(item => 
      item.id === productId ? {...item, quantity: (item.quantity + value)} : item
    );
    
    setProducts(updateProducts)
  }

  return (
    <Provider value={{products, setQuantity}}>
      {props.children}
    </Provider>
  )

}