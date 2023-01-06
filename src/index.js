import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from './component/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
)

reportWebVitals();