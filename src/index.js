import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "antd/dist/antd.css"
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import UserTable from './TableUser/UserTable';
import DetailUser from './TableUser/DetailUser';
import CreateUser from './TableUser/CreateUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes >
        <Route element={<App/>}>
        <Route index element={<Navigate to = "/UserTable"/>}/>
        <Route path='/UserTable' element={<UserTable />}/>
        <Route path='/DetailUser/:id' element={<DetailUser/>}></Route>
        <Route path='/CreateUser' element={<CreateUser/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);


