import './App.css';
import FormContainer from './form/containers/FormContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormViewContainer from './form/containers/FormViewContainer';
import { FormContext } from './form/context';
import { useState } from 'react';

function App() {
  const [formValue, setFormValue] = useState({});
  return (
    <div className="flex justify-center items-center">
      <FormContext.Provider value={{ formValue, setFormValue }}>
        <BrowserRouter>
          <Routes>
            <Route path="/form-item" Component={FormViewContainer} />
            <Route path="/" Component={FormContainer} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </div>

  );
}

export default App;
