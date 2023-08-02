// // En src/components/AddItemForm.js
// import React, { useState } from 'react';

// const AddItemForm = ({ onAddItem }) => {
//   const [company, setCompany] = useState('');
//   const [price, setPrice] = useState('');
//   const [cost, setCost] = useState('');
//   const [code, setCode] = useState('');
//   const [image, setImage] = useState(null); // Cambiamos el estado inicial a null para manejar archivos
//   const [purchaseDate, setPurchaseDate] = useState('');
//   const [kilometer, setKilometer] = useState('');
//   const [itemType, setItemType] = useState(''); // Nuevo estado para el tipo de artículo (pulsera, collar, aretes)
//   const [companyOption, setCompanyOption] = useState(''); // Nuevo estado para la opción de compañía
//   const [calculatedPrice, setCalculatedPrice] = useState('');
//  // let [generatedCode, setGeneratedCode] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//  // Lógica para generar el código del producto en base a la compañía y el precio
//  let generatedCode = '';
//  if (companyOption === 'param') {
//    generatedCode = `34${price}-P`;
//  } else if (companyOption === 'dina') {
//    generatedCode = `63${price}-D`;
//  } else if (companyOption === 'bat') {
//    generatedCode = `28${price}-B`;
//  } else if (companyOption === 'kine') {
//    generatedCode = `95${price}-K`;
//  }


// //  const handleCostChange = (e) => {
// //     const costValue = e.target.value;
// //     setCost(costValue);


//       // Calculamos el precio multiplicando el costo por 2
//       const calculatedPriceValue = costValue * 2;
//       setCalculatedPrice(calculatedPriceValue);
//     };

//     const newItem = {
//       company,
//       price,
//       cost,
//       code,
//       image, // El valor de la imagen será el archivo seleccionado (objeto File)
//       purchaseDate,
//       kilometer,
//       type: itemType,
//       companyName: companyOption,
//       codeAuto: generatedCode,
//     };
//     onAddItem(newItem);
//     // Aquí puedes enviar el newItem al servidor o realizar cualquier otra acción necesaria
//     // Después de enviar los datos, puedes restablecer los valores de los estados para limpiar el formulario.
//     setCompany('');
//     setPrice('');
//     setCost('');
//     setCode('');
//     setImage(null); // Reseteamos el valor de la imagen a null para limpiar el campo
//     setPurchaseDate('');
//     setKilometer('');
//     setItemType('');
//     setCompanyOption('');
//     setCalculatedPrice('');
//     //setGeneratedCode('');
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0]; // Obtenemos el archivo seleccionado (si hay uno)
//     setImage(selectedImage);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="company">Compañía</label>
//         <input
//           type="text"
//           id="company"
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//           required
//         />
//       </div>
//       {/* ... otros campos de entrada ... */}
//       {/* <div className="mb-3">
//         <label htmlFor="price">Precio</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="cost">Costo</label>
//         <input
//           type="number"
//           id="cost"
//           value={cost}
//           onChange={(e) => setCost(e.target.value)}
//           required
//         />
//       </div> */}



// <div className="mb-3">
//         {/* <label htmlFor="cost">Costo</label>
//         <input
//           type="number"
//           id="cost"
//           value={cost}
//           onChange={handleCostChange}
//           required */}
//         {/* /> */}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="price">Precio</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="calculatedPrice">Precio Calculado</label>
//         <input
//           type="number"
//           id="calculatedPrice"
//           value={calculatedPrice}
//           onChange={(e) => setCalculatedPrice(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="code">Código</label>
//         <input
//           type="text"
//           id="code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="image">Imagen (PDF)</label>
//         <input
//           type="file" // Cambiamos el tipo de entrada a "file"
//           id="image"
//           accept=".pdf" // Limitamos la selección de archivos a PDF
//           onChange={handleImageChange} // Usamos el manejador para capturar el archivo seleccionado
//           required
//        />
//        </div>
//     <div className="mb-3">
//         <label htmlFor="purchaseDate">Fecha de Compra</label>
//         <input
//           type="date"
//           id="purchaseDate"
//           value={purchaseDate}
//           onChange={(e) => setPurchaseDate(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="kilometer">Kilometraje</label>
//         <input
//           type="number"
//           id="kilometer"
//           value={kilometer}
//           onChange={(e) => setKilometer(e.target.value)}
//           required
//         />

// <div className="mb-3">
//         <label htmlFor="itemType">Tipo de artículo</label>
//         <select
//           id="itemType"
//           value={itemType}
//           onChange={(e) => setItemType(e.target.value)}
//           required
//         >
//           <option value="">Seleccione un tipo</option>
//           <option value="pulsera">Pulsera</option>
//           <option value="collar">Collar</option>
//           <option value="aretes">Aretes</option>
//         </select>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="companyOption">Compañía</label>
//         <select
//           id="companyOption"
//           value={companyOption}
//           onChange={(e) => setCompanyOption(e.target.value)}
//           required
//         >
//           <option value="">Seleccione una compañía</option>
//           <option value="param">Param</option>
//           <option value="dina">Dina</option>
//           <option value="bat">Bat</option>
//           <option value="kine">Kine</option>
//         </select>
//         </div>
//       </div>
//       <button type="submit" className="btn btn-primary">Agregar Elemento</button>
//     </form>
//   );
// };

// export default AddItemForm;

