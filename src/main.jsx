import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './idCss.css'
import './classCss.css'
import router from './assets/Router';
import { RouterProvider } from 'react-router-dom'
import PageFooter from './assets/Component/PageFooter';


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <RouterProvider router={router} />
     <PageFooter/>
   </React.StrictMode>
 );