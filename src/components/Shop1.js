import React, { useState } from 'react';

const Shop = ({ items }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = () => {
    const sanitizedSearchText = searchText
      .toLowerCase()
      .replace(/[^a-z0-9áéíóúüñ\s]/g, ''); // Eliminar caracteres especiales
    const filtered = items.filter((item) => {
      for (const key in item) {
        if (item[key].toString().toLowerCase().includes(sanitizedSearchText)) {
          return true;
        }
      }
      return false;
    });
    setFilteredItems(filtered);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setFilteredItems(items);
  };

  return (
    <div>
      <h1>Tienda</h1>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Buscar en toda la tienda..."
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClearSearch}>Limpiar</button>
      </div>
      <div className="products-container">
        {filteredItems.map((item) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
