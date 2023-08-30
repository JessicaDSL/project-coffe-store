import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/context-product';

const ProductList = () => {
  const { products, setQuantity } = useContext(ProductContext);
  const [totalValue, setTotalValue] = useState(false);

  function handleQuantity(value: number, productId: number) {
    setQuantity(value, productId)

  }


  return (
    <ul>
      {products.map(item => 
        <li key={item.id}>
          {item.nameProduct}
          {item.price}
          <button value={item.id} onClick={() => handleQuantity(-1, item.id)}  disabled={item.quantity === 0}>-</button>
          {item.quantity}
          <button value={item.id} onClick={() => handleQuantity(+1, item.id)}>+</button>
          total: {item.quantity ? (item.quantity * item.price) : item.price}
        </li>
      )}
    </ul>
  )
}

export default ProductList;

