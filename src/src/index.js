import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/ReduxService';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
