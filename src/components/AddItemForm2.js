// En src/components/AddItemForm.js
import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState(null); // Cambiamos el estado inicial a null para manejar archivos
  const [purchaseDate, setPurchaseDate] = useState('');
  const [kilometer, setKilometer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      company,
      price,
      cost,
      code,
      image, // El valor de la imagen será el archivo seleccionado (objeto File)
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
    setImage(null); // Reseteamos el valor de la imagen a null para limpiar el campo
    setPurchaseDate('');
    setKilometer('');
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]; // Obtenemos el archivo seleccionado (si hay uno)
    setImage(selectedImage);
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
      {/* ... otros campos de entrada ... */}
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
        <label htmlFor="image">Imagen (PDF)</label>
        <input
          type="file" // Cambiamos el tipo de entrada a "file"
          id="image"
          accept=".pdf" // Limitamos la selección de archivos a PDF
          onChange={handleImageChange} // Usamos el manejador para capturar el archivo seleccionado
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

