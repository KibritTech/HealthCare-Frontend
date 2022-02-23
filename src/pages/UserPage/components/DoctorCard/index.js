import React from "react";
import { Typography, Space, Row, Col, DatePicker } from 'antd';
import CompanyLogo from '../../../../assets/images/company-logo.png';
import {StarFilled} from '@ant-design/icons';
import './index.scss';

const { Title, Text } = Typography;

function onChange(date, dateString) {
    console.log(date, dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

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

                    <Col span={12} className="time-picker">
                        <Space direction="horizontal">
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Space>                       
                    </Col>
                </Row>   
                <Row className="doctor-card-info">
                    <Col span={12}>
                        <Space direction="horizontal">              
                                <Text>Mob:</Text>
                                <Text>+9941234567</Text>
                        </Space>
                    </Col>

                    <Col span={12}>
                        <Space direction="horizontal">              
                                <Text>Address:</Text>
                                <Text>28 may</Text>
                        </Space>
                    </Col>
                </Row>            
            
            </div>
    )
}

export default DoctorCard;