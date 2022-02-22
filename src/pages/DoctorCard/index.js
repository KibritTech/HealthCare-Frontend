import React from "react";
import {Link} from "react-router-dom";
import { Typography, Select, Space, Button, Row, Col } from 'antd';
import CompanyLogo from '../../assets/images/company-logo.png';
import {StarFilled} from '@ant-design/icons';
import './index.scss';

const { Title, Text } = Typography;
const { Option } = Select;


const DoctorCard = () => {
    return (
            <div className="doctor-card">
               <Row align="middle">
                    <Col span={12}>
                        <Space direction="horizontal">              
                            <img src={CompanyLogo}/>              
                            <Space direction="vertical">
                                <Title level={5}>Pediatr</Title>
                                <Text>Leyla Mammadova</Text>
                                <Text><StarFilled /></Text>
                            </Space>
                        </Space>
                    </Col>

                    <Col span={12} className='account-badge-buttons'>
                        <Space direction="horizontal">
                            <Button type="text">Time Test Button</Button>
                        </Space>
                    </Col>
                </Row>               
            
            </div>
    )
}

export default DoctorCard;