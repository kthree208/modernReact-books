import React from 'react' ;
import ReactDOM from 'react-dom/client';
import App from '../../books/src/App';
import {Provider} from './context/BooksContext';

const el = document.getElementById("root") ;
const root = ReactDOM.createRoot(el) ;
root.render(
    <Provider >
    <App/>
    </Provider>
) ;