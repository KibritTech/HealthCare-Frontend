import React from "react";
import Schedule from "./components/Schedule";
import Auth from "../../services/auth";
import SelectOptions from "../../components/SelectOptions";
import './index.scss';

const AdminPage = () => {
    localStorage.setItem('user', 'admin');
    const userName=Auth();

    return (
            <div className="user-page">
                <SelectOptions/>                
                <Schedule/>            
            </div>
    )
}

export default AdminPage;