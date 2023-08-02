// En src/components/Shop.js
import React from 'react';

const Shop = ({ items }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <div className="products-container">
      {items.map((item) => (
        <div key={item.code} className="product">
          <img src={item.image} alt={item.company} />
          <h3>{item.company}</h3>
          <p>Compañia: {item.company}</p>
          <p>Precio: ${item.price}</p>
          <p>Kilometraje: {item.kilometer}</p>
          <p>Costo: {item.cost}</p>
          <p>Codigo: {item.code}</p>
          <p>Fecha de compra: {item.purchaseDate}</p>
          <p>Tipo: {item.type}</p>
          <p>Código automatico: {item.code}</p>
          {/* Mostrar enlace para descargar el archivo PDF */}
          {item.pdfLink && (
            <p>
              <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">
                Descargar PDF
              </a>
            </p>
           
          )}
        </div>
      ))}
    </div> 
    </div>
  );
};

export default Shop;
