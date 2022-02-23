import React from "react";
import { Typography, Space, Row, Col, DatePicker, Rate, Button } from 'antd';
import CompanyLogo from '../../../../assets/images/company-logo.png';
import './index.scss';

const { Title, Text } = Typography;

function onChange(date, dateString) {
    console.log(date, dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

const DoctorCard = ({name, surname, location, categories}) => {
    return (
            <div className="doctor-card">
               <Row align="middle">
                    <Col span={12}>
                        <Space direction="horizontal">              
                            <img src={CompanyLogo}/>              
                            <Space direction="vertical">
                                <Title level={5}>{categories}</Title>
                                <Text>{name + ' ' + surname}</Text>
                                <Text><Rate /></Text>
                            </Space>
                        </Space>
                    </Col>

                    <Col span={12} className="time-picker">
                        <Space direction="horizontal">
                            <DatePicker showTime onChange={onChange} onOk={onOk} format="YYYY-MM-DD HH:mm" />
                        </Space>                       
                    </Col>
                </Row>   
                <Row className="doctor-card-info">
                    <Col span={12}>
                        <Space direction="vertical">   
                            <Space direction="horizontal">
                                <Text>Mob:</Text>
                                <Text>+9941234567</Text>
                            </Space>    
                            <Space direction="horizontal">
                                <Text>Address:</Text>
                                <Text>{location}</Text>
                            </Space>       
                        </Space>
                    </Col>

                    <Col span={12}>
                        <Space direction="horizontal"> 
                            <Button className="blue-button">Confirm</Button>                 
                        </Space>
                    </Col>
                </Row>            
            
            </div>
    )
}

export default DoctorCard;