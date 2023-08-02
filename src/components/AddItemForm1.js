// En src/components/AddItemForm.js
import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [kilometer, setKilometer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      company,
      price,
      cost,
      code,
      image,
      purchaseDate,
      kilometer,
    };
    onAddItem(newItem);
    // Aquí puedes enviar el newItem al servidor o realizar cualquier otra acción necesaria
    // Después de enviar los datos, puedes restablecer los valores de los estados para limpiar el formulario.
    setCompany('');
    setPrice('');
    setCost('');
    setCode('');
    setImage('');
    setPurchaseDate('');
    setKilometer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="company">Compañía</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cost">Costo</label>
        <input
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="code">Código</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image">Imagen</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="purchaseDate">Fecha de Compra</label>
        <input
          type="date"
          id="purchaseDate"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="kilometer">Kilometraje</label>
        <input
          type="number"
          id="kilometer"
          value={kilometer}
          onChange={(e) => setKilometer(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Elemento</button>
    </form>
  );
};

export default AddItemForm;
