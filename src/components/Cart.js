import React from "react";

const Cart = (props) => {
  const { products, removeFromCart } = props;

  return (
    <div className="">
      <h1>Cart</h1>
      {products.length === 0 && <h2>Your cart is empty...</h2>}
      {products.length > 0 && <button>Checkout Your Items!</button>}
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <img src={product.img} alt="" />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
