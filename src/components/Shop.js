import React, { useState } from 'react';
import AddItemForm from './AddItemForm';

const Shop = () => {
  const [items, setItems] = useState([]);

  // Función para agregar un nuevo elemento al inventario
  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, sold: false }]);
  };

  // Función para marcar un artículo como vendido
  const handleMarkAsSold = (index) => {
    const updatedItems = [...items];
    updatedItems[index].sold = true;
    setItems(updatedItems);
  };

  // Función para editar un artículo
  const handleEditItem = (index, clienta, precioVenta) => {
    const updatedItems = [...items];
    updatedItems[index].clienta = clienta;
    updatedItems[index].precioVenta = precioVenta;
    setItems(updatedItems);
  };

  // Función para borrar un artículo
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Tienda</h1>
      <AddItemForm onAddItem={handleAddItem} />
      {items.map((item, index) => (
        <div key={index} className="product">
            
          <h3>Tipo de item: {item.type}</h3>
          <p>Código: {item.code}</p>
          <p>Tipo de Oro: {item.goldType}</p>
          <p>Compañía: {item.company}</p>
          <p>Costo: {item.cost}</p>
          <p>Precio: {item.price}</p>
          <p>Fecha de Compra: {item.purchaseDate}</p>
          <p>Lugar de Compra: {item.placeOfPurchase}</p>
          <p>Especificaciones: {item.specifications}</p>

          {/* Mostrar "Vendido" si el artículo está marcado como vendido */}
          {item.sold && <p>Vendido</p>}

          {/* Mostrar el formulario para editar el artículo */}
          {!item.sold && (
            <div>
              <button onClick={() => handleMarkAsSold(index)}>Vendido</button>
              <input
                type="text"
                value={item.clienta || ''}
                placeholder="Cliente"
                onChange={(e) => handleEditItem(index, e.target.value, item.precioVenta)}
              />
              <input
                type="number"
                value={item.precioVenta || ''}
                placeholder="Precio de venta"
                onChange={(e) => handleEditItem(index, item.clienta, e.target.value)}
              />
              <button onClick={() => handleDeleteItem(index)}>Borrar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Shop;
