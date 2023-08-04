// En src/components/Shop.js
import React from 'react';

const Shop = ({ items }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <div className="products-container">
      {items.map((item) => (
        <div key={item.code} className="product">
        <h3>Tipo de item: {item.type}</h3>
        <p>Código: {item.code}</p>
        <p>Tipo de Oro: {item.goldType}</p>
        <p>Compañía: {item.company}</p>
        <p>Costo: {item.cost}</p>
        <p>Precio: {item.price}</p>
        <p>Fecha de Compra: {item.purchaseDate}</p>
        <p>Lugar de Compra: {item.placeOfPurchase}</p>
        <p>Especificaciones: {item.specifications}</p>
         </div>)
      )};
    </div> 
    </div>)
    };
       
      

export default Shop;
