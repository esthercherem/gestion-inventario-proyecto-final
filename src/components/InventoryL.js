// En src/components/Inventory.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// const Inventory = ({ onAddItem }) => {
//   const [items, setItems] = useState([]);

//   // Función para agregar un nuevo elemento al inventario
//   const handleAddItem = (newItem) => {
//     setItems([...items, newItem]);
//   };


const Inventory = ({ onAddItem }) => {
    const [company, setCompany] = useState('');
    const [cost, setCost] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [specifications, setSpecifications] = useState('');
    const [calculatedPrice, setCalculatedPrice] = useState('');
    const [code, setCode] = useState('');
    const [goldType, setGoldType] = useState(''); 
    const [itemType, setItemType] = useState(''); 
    const [placeOfPurchase, setPlaceOfPurchase] = useState(''); 
  
    const handleCompanyChange = (e) => {
      const selectedCompany = e.target.value;
      setCompany(selectedCompany);
      updateCode(selectedCompany, cost);
    };
  
    const handleCostChange = (e) => {
      const costValue = e.target.value;
      setCost(costValue);
  
      // Calculamos el precio multiplicando el costo por 2
      const calculatedPriceValue = costValue * 2;
      setCalculatedPrice(calculatedPriceValue);
  
      // Actualizamos el código en base a la compañía y el costo
      updateCode(company, costValue);


    };
  
    const updateCode = (selectedCompany, selectedCost) => {
      let generatedCode = '';
      if (selectedCompany === 'param') {
        generatedCode = `34${selectedCost * 2}-P`;
      } else if (selectedCompany === 'dina') {
        generatedCode = `63${selectedCost * 2}-D`;
      } else if (selectedCompany === 'kine') {
        generatedCode = `28${selectedCost * 2}-K`;
      } else if (selectedCompany === 'bat') {
        generatedCode = `97${selectedCost * 2}-B`;
      }
      setCode(generatedCode);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newItem = {
        company,
        cost,
        price: calculatedPrice,
        purchaseDate,
        specifications,
        code,
        goldType,
        type: itemType,
        placeOfPurchase,
      };
      onAddItem(newItem);
      // Limpiamos el formulario después de enviar los datos
      setCompany('');
      setCost('');
      setPurchaseDate('');
      setSpecifications('');
      setCalculatedPrice('');
      setCode('');
      setGoldType('');
      setItemType('');
      setPlaceOfPurchase('');
    };
  
    return (
      
      <form onSubmit={handleSubmit} >
          <div className="mb-3">
          <label htmlFor="itemType">Tipo de artículo</label>
          <select
            id="itemType"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="collar">Collar</option>
            <option value="pulsera">Pulsera</option>
            <option value="aretes">Aretes</option>
          </select>
          </div>
        <div className="mb-3">
          <label htmlFor="company">Compañía</label>
          <select
            id="company"
            value={company}
            onChange={handleCompanyChange}
            required
          >
            <option value="">Seleccione una compañía</option>
            <option value="param">Param</option>
            <option value="dina">Dina</option>
            <option value="kine">Kine</option>
            <option value="bat">Bat</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="cost">Costo</label>
          <input
            type="number"
            id="cost"
            value={cost}
            onChange={handleCostChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="calculatedPrice">Precio</label>
          <input
            type="number"
            id="calculatedPrice"
            value={calculatedPrice}
            onChange={(e) => setCalculatedPrice(e.target.value)}
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
          <label htmlFor="specifications">Especificaciones</label>
          <textarea
            id="specifications"
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="code">Código</label>
          <input
            type="text"
            id="code"
            value={code}
            readOnly // El código se autorellena, por lo que es de solo lectura
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="goldType">Tipo de Oro</label>
          <select
            id="goldType"
            value={goldType}
            onChange={(e) => setGoldType(e.target.value)}
            required
          >
            <option value="">Seleccione el tipo de oro</option>
            <option value="14K">14K</option>
            <option value="18K">18K</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="placeOfPurchase">Lugar de compra</label>
          <select
            id="placeOfPurchase"
            value={placeOfPurchase}
            onChange={(e) => setPlaceOfPurchase(e.target.value)}
            required
          >
            <option value="">Seleccione un lugar de compra</option>
            <option value="NY">NY</option>
            <option value="LA">LA</option>
            <option value="MIA">MIA</option>
          </select>
        </div>
       
    
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>
            <button type="submit" className="btn btn-primary">
        Agregar Elemento  <handleSubmit onAddItem={onAddItem} /> </button>

        </Link>
      
          
       
      </form>
    );
  };
  
  export default Inventory;
  







