import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import developers from './data/developers.js'
import lenguajes from './data/lenguajes.js'
import DevelopersViews from './views/DeveloperViews.jsx'
import LenguajesVistas from './views/LenguajesVistas.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = [
  {
    path:"/",
    element: <App />,
  },
];

developers.forEach((len)=>{
  router.push({
    path:len.nid,
    element:<DevelopersViews len ={len}/>
  });
});
lenguajes.forEach((len)=>{
  router.push({
    path:len.ntitulo,
    element:<LenguajesVistas len ={len}/>
  });
});

console.log(router);
const routers=createBrowserRouter(router);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/> 
  </React.StrictMode>,
)
