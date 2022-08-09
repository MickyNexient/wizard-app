import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import Wizards, { WizardA, WizardB } from './pages/Wizards';


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/wizards" element={<Wizards />}>
          <Route path="a/*" element={<WizardA />} />
          <Route path="b" element={<WizardB />} />
          <Route
            path="*"
            element={
              <div>
                <p>Wizard not found</p>
              </div>
            }
          />
        </Route>
        <Route
            path="*"
            element={
              <div>
                <p>Page not found</p>
              </div>
            }
          />
      </Route>
    </Routes>
  </BrowserRouter>
)
