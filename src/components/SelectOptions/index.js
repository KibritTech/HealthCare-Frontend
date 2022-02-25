import React, {useState, useEffect } from "react";
import { Select, Space, Button } from 'antd';
import axios from 'axios';
import { doctorsApi } from "../../services/api";

const { Option } = Select;

const SelectOptions = ({getFilteredData}) => {
    const [doctorsList, setDoctorsList] = useState([]);
    const [doctorCategoriesOption, setCategoriesOption] = useState('');
    const [doctorInfoOption, setDoctorInfoOption] = useState('');
    const [filteredInfo, setFilteredInfo] = useState([]);

    useEffect( async () => {        
       await axios.get(doctorsApi)
      .then(res => {
        const doctorsArray = res.data;
        setDoctorsList(doctorsArray);
        getFilteredData(doctorsArray);
        setFilteredInfo(doctorsArray)
      }).catch(error => console.log(error))        
    }, []);

    const sendData = () => {
        let filteredData = doctorsList.filter(item => ((item.field.title === doctorCategoriesOption && item.first_name === doctorInfoOption))||((item.field.title === doctorCategoriesOption || item.first_name === doctorInfoOption)));
        getFilteredData(filteredData)
    }

    function handleCategoryChange(value) {
        setCategoriesOption(value);
        let filterInfo = doctorsList.filter(item => (item.field.title === value));
        setFilteredInfo(filterInfo);
    }

    function handleDoctorChange(value) {
        setDoctorInfoOption(value);
    }

    return (
        <>
            <Space direction="horizontal" align="middle">
                <Select 
                    onSelect={handleCategoryChange}
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Categories"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    {
                        doctorsList.map((item) => (
                            <Option value={item.field.title} key={item.id}>{item.field.title}</Option>
                        ))
                    }
                    
                </Select>

                <Select
                    onSelect={handleDoctorChange}
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Doctors"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    {
                        filteredInfo.map((item) => (
                            <Option value={item.first_name} key={item.id}>{item.first_name + ' ' + item.surname}</Option>
                        ))
                    }
                </Select>

                <Button className="blue-button" onClick={sendData}>Search</Button>
            </Space>
        </>
    )
}

export default SelectOptions;