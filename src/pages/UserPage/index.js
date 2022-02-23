import React,{useState } from "react";
import DoctorCard from "./components/DoctorCard";
import SelectOptions from "../../components/SelectOptions";
import Auth from "../../services/auth";
import './index.scss';

const UserPage = () => {
    const [filteredOptions, setFilteredOptions] = useState([]);

    localStorage.setItem('user', 'patient');
    const userName=Auth();

    const getFilteredData = (data) => {
        setFilteredOptions(data);
    }

    return (
            <div className="user-page">
               <SelectOptions getFilteredData = {getFilteredData}/>

                {     
                    filteredOptions.map((item) => (
                        <DoctorCard key = {item.id}
                            name={item.first_name} 
                            surname={item.surname} 
                            location={item.location} 
                            categories={item.field.title}/>
                    ))                   
                }
            
            </div>
    )
}

export default UserPage;