import React from 'react';
import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './assets/produtos/Products'; // Importe os produtos do novo arquivo
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
      <div className='container-fluid mt-5'>
       {/* Para reaproveitar elementos */}
      <Outlet/>
      </div>
      {/* <footer>
      <FooterComponent/>
    </footer> */}
    </div>
  );
}
export default App;
