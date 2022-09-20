import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import { Routes } from 'react-router-dom';
import ProductAdd from './components/pages/ProductAdd/ProductAdd';
import ProductPage from './components/pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="mt-2 ml-80 mr-80">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/create*' element={<ProductAdd />}/>
        <Route path='/edit/:id' element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
