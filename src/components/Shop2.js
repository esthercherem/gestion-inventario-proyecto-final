import React, { useState } from 'react';

const Shop = ({ items }) => {
  const [searchText, setSearchText] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleTextSearch = () => {
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

  const handlePriceSearch = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    const filtered = items.filter((item) => {
      const itemPrice = parseFloat(item.price);
      return itemPrice >= min && itemPrice <= max;
    });

    setFilteredItems(filtered);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setMinPrice('');
    setMaxPrice('');
    setFilteredItems(items);
  };

  return (
    <div>
      <h1>Tienda</h1>
      <div>
        {/* Buscador de texto */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar en toda la tienda..."
        />
        <button onClick={handleTextSearch}>Buscar Texto</button>
      </div>
      <div>
        {/* Buscador de rango de precios */}
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Precio mínimo"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Precio máximo"
        />
        <button onClick={handlePriceSearch}>Buscar por Precio</button>
      </div>
      <button onClick={handleClearSearch}>Limpiar</button>
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
