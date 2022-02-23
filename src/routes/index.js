import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/ScrollToTop";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop/>
                <Routes>     
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<Main/>} exact/>
                        <Route path='/user' element={<UserPage/>}/>
                        <Route path='/admin' element={<AdminPage/>}/>
                    </Route> 

                    <Route element={<AuthLayout/>}>
                        <Route path='/' element={'hello'} exact/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Route>                    
                </Routes>
        </Router>
    )
}

export default AppRoutes;