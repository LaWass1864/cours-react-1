import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";

// On fait un rendu  et on fait un strict mode. App est la composant le plus haut qu'on aura dans notre document
// pour le getelementbyId , tu vas me prendre tout l'application et la passer dans le getelement byId
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);


