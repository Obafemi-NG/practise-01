// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
//
// ReactDOM.render(
//   <React.StrictMode>
//     < />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//The code below is totally diffenrent and use when i was practising react router.

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path = 'expenses' element = {<Expenses />} />
        <Route path = 'invoices' element = {<Invoices />}>
          <Route index element = {<main style = {{padding : '1rem'}}>
              <h2>Select a specific invoice broo!</h2>
            </main>} />
          <Route path = ':invoiceId' element = {<Invoice/>}  />
        </Route>
        <Route path = '*' element  = { <main>
          <p>
            There is nothing to view here.
          </p>
        </main> } />
      </Route>


    </Routes>
  </BrowserRouter>,
  rootElement
);
