import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { PublicLayout } from '../layout/PublicLayout';
import { Inicio } from '../paginas/Inicio';
import { CrearPersona } from '../paginas/CrearPersona';
import { ListarPersona } from '../paginas/ListarPersona';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Inicio/>}/>
            <Route path='inicio' element={<Inicio/>}/>
            <Route path='crear' element={<CrearPersona/>}/>
            <Route path='listar' element={<ListarPersona/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
