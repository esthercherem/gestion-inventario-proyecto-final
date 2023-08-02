import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  //const [company, setCompany] = useState('');
 // const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState(null); // Cambiamos el estado inicial a null para manejar archivos
  const [purchaseDate, setPurchaseDate] = useState('');
  //const [kilometer, setKilometer] = useState('');
  const [itemType, setItemType] = useState(''); // Nuevo estado para el tipo de artículo (pulsera, collar, aretes)
  const [companyOption, setCompanyOption] = useState(''); // Nuevo estado para la opción de compañía
  const [calculatedPrice, setCalculatedPrice] = useState('');

  // Lógica para generar el código del producto en base a la compañía y el precio
  const handleCalculatedPriceChange = (e) => {
    setCalculatedPrice(e.target.value);
    updateCode(companyOption, e.target.value);
  };

  

  const updateCode = (selectedCompany, selectedPrice) => {
    // Generate the code based on the selected company and price
    let generatedCode = '';
    if (selectedCompany === 'param') {
      generatedCode = `34${selectedPrice}-P`;
    } else if (selectedCompany === 'dina') {
      generatedCode = `63${selectedPrice}-D`;
    } else if (selectedCompany === 'bat') {
      generatedCode = `28${selectedPrice}-B`;
    } else if (selectedCompany === 'kine') {
      generatedCode = `95${selectedPrice}-K`;
    }
    setCode(generatedCode);
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      //company,
      //price,
      cost,
      code,
      image,
      purchaseDate,
      //kilometer,
      type: itemType,
      companyName: companyOption,
      codeAuto: calculatedPrice,
    };
    onAddItem(newItem);
    // Restablecemos los valores de los estados para limpiar el formulario.
    //setCompany('');
    //setPrice('');
    setCost('');
    setCode('');
    setImage(null);
    setPurchaseDate('');
    //setKilometer('');
    setItemType('');
    setCompanyOption('');
    setCalculatedPrice('');
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]; // Obtenemos el archivo seleccionado (si hay uno)
    setImage(selectedImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
      <div className="mb-3">
        <label htmlFor="calculatedPrice">Precio Calculado</label>
        <input
          type="number"
          id="calculatedPrice"
          value={calculatedPrice}
          onChange={handleCalculatedPriceChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company">Compañía</label>
        <input
          type="text"
          id="company"
          value={companyOption}
          onChange={(e) => setCompanyOption(e.target.value)}
          required
        />
      </div>
      {/* ... otros campos de entrada ... */}
      <div className="mb-3">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          value={calculatedPrice}
          onChange={(e) => setCalculatedPrice(e.target.value)}
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
        <label htmlFor="code">Código</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      {/* ... */}
      <button type="submit" className="btn btn-primary">
        Agregar Elemento
      </button>
    </form>
  );
};

export default AddItemForm;
