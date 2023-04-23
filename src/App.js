import React from 'react';

//react router feataures
import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
  } from "react-router-dom"


import Headercontainer from './Layout/Headercontainer';
import Home from './Headerpages/Home';
import About from './Headerpages/About';
import  Contact from './Headerpages/Contact';
import Recipe from './Headerpages/Recipe';
import Error from './Headerpages/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

     <Route path="/"  element = {<Headercontainer/>}>
    <Route index element = {<Home/>}/>
    <Route path='About' element = {<About/>}/>
    <Route path='Contact' element = {<Contact/>}/>
    <Route path='Recipe' element = {<Recipe/>}/>
   <Route path='*' element = {<Error/>}/>
     </Route>

    ))
  return (
    <div>
       <RouterProvider router={router} />

    </div>
  );
}

export default App;
