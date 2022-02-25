import React, {useState} from "react";
import Schedule from "./components/Schedule";
import SelectOptions from "../../components/SelectOptions";
import './index.scss';

const AdminPage = () => {
    const [filteredOptions, setFilteredOptions] = useState([]);

    const getFilteredData =  (data) => {
         setFilteredOptions(data);        
    }   

    return (
            <div className="user-page">
                <SelectOptions getFilteredData = {getFilteredData}/>
                {
                    filteredOptions.length>0?
                    <Schedule filteredOptions={filteredOptions}/>   
                    :
                    null
                }           
                      
            </div>
    )
}

export default AdminPage;