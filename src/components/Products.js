import React from "react";

const Products = (props) => {
  const { products, addToCart } = props;

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <img src={product.img} alt="" />
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
