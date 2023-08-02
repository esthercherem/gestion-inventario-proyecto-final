import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Inventory from './components/Inventory';
import Shop from './components/Shop';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  // Función para agregar un nuevo elemento al inventario
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Función para eliminar un elemento del inventario
  const handleDeleteItem = (code) => {
    setItems(items.filter(item => item.code !== code));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/inventory"
              element={<Inventory onAddItem={handleAddItem} />}
            />
            <Route path="/shop" element={<Shop items={items} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
