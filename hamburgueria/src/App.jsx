import React from 'react'
import Header from './components/Header/Header'
import Menu_2 from './components/menu/Menu_2.jsx'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';
import "./App.css"


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu_2 />
        <div className='LayoutContainer'>
          <Layout />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
