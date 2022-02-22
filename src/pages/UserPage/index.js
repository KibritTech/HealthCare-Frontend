import React from "react";
import { Typography, Select, Space, Button } from 'antd';
import DoctorCard from "../DoctorCard";
import './index.scss';

const { Title, Text } = Typography;
const { Option } = Select;


const UserPage = () => {
    return (
            <div className="user-page">
                <Space direction="horizontal" align="middle">
                    <Select
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
                        <Option value="1">Leyla Mammadova</Option>
                        <Option value="2">Bill Gates</Option>
                        <Option value="3">Steve Jobs</Option>
                    </Select>

                    <Button className="pink-button">Search</Button>
                </Space>
                
                <DoctorCard/>
            
            </div>
    )
}

export default UserPage;