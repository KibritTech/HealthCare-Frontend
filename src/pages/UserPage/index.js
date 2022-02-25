import React,{useState } from "react";
import { Spin } from 'antd';
import DoctorCard from "./components/DoctorCard";
import SelectOptions from "../../components/SelectOptions";
import './index.scss';

const UserPage = () => {
    const [filteredOptions, setFilteredOptions] = useState([]);

    const getFilteredData = (data) => {
        setFilteredOptions(data);
    }

    return (
            <div className="user-page">
               <SelectOptions getFilteredData = {getFilteredData}/>

                {     
                    filteredOptions.length > 0 ?
                        filteredOptions.map((item) => (
                            <DoctorCard key = {item.id}
                                id = {item.id}
                                name={item.first_name} 
                                surname={item.surname} 
                                location={item.location} 
                                categories={item.field.title}/>
                        ))     
                        :
                        <Spin size="large" />                    
                }
            
            </div>
    )
}

export default UserPage;