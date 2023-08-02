// En src/components/Shop.js
import React from 'react';

const Shop = ({ items }) => {
  return (
    <div>
      <h1>Tienda</h1>
      {/* Aquí puedes mostrar los productos ordenados como una tienda */}
      {items.map((item) => (
        <div key={item.code} className="product">
          <img src={item.image} alt={item.company} />
          <h3>{item.company}</h3>
          <p>Precio: ${item.price}</p>
          <p>Kilometraje: {item.kilometer}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
