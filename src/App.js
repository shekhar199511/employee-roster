import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import EmployeeAdmin from './container/EmployeeAdmin/EmployeeAdmin'

function App() {
  return (
    <BrowserRouter>
      <div>
        <EmployeeAdmin />
      </div>
    </BrowserRouter>
  );
}

export default App;
