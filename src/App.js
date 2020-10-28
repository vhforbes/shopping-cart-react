import React, { useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const retrievedCart = JSON.parse(window.localStorage.getItem("cart")) || [];

  const [cart, setCart] = React.useState(retrievedCart);

  const PRODUCTS_PAGE = "products";

  const CART_PAGE = "cart";

  const [page, setPage] = React.useState("products");

  const [products] = React.useState([
    {
      name: "Battery",
      price: "$2.99",
      img:
        "https://eletronicasantana.vteximg.com.br/arquivos/ids/59328-460-460/Pilha-Alcalina-12V-MN-21-A23-Com-1-Unidade---Duracell-2.jpg?v=636572278283130000",
    },
    {
      name: "Blanket",
      price: "$12.99",
      img:
        "https://portalmarlene.vteximg.com.br/arquivos/ids/166401-565-565/Cobertor-Rashel-Soft-Fendi.jpg?v=636893094178170000",
    },
    {
      name: "Toothbrush",
      price: "$5.99",
      img:
        "https://cdn.shopify.com/s/files/1/0657/1613/products/Premium_Brush_Silver_01_1024x1024.png?v=1568694132",
    },
    {
      name: "Sunglass",
      price: "$5.99",
      img:
        "https://www.mi-store.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/g/l/glasses.jpg",
    },
    {
      name: "Mask",
      price: "$3.99",
      img:
        "https://www.xd-design.com/media/catalog/product/cache/6234a6caa598d293fc1ee792a975b02a/p/r/protectivemask_black_01.jpg",
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const goToCart = () => {
    setPage(CART_PAGE);
  };

  const goToProducts = () => {
    setPage(PRODUCTS_PAGE);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <div className="App">
      <header>
        <h1>Victor's Store</h1>
        {page === "products" && (
          <button onClick={() => goToCart()}>Go to cart ({cart.length})</button>
        )}
        {page === "cart" && (
          <button onClick={() => goToProducts()}>Go to products</button>
        )}
      </header>
      {
        page === "products" && (
          <Products products={products} addToCart={addToCart} />
        ) // Conditional to show products
      }
      {page === "cart" && (
        <Cart products={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
