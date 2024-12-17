import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="card">
            <div className="img">
              <img src={product.image} alt={product.title} title={product.title} />
            </div>
            <div className="card-text">
              <h2 title={product.title}>{product.title}</h2>
              <div className="price">{product.price}$</div>
              <div className="tag">{product.category}</div>
              <div className="rate" title={`${product.rating.count} rate`}>
                {product.rating.rate}
              </div>
              <div className="desc">{product.description.substring(0, 60)}</div>
              <a href="#" className="btn">add to cart</a>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;
