import React from "react";
import { Row, Col, Button, Typography, Space } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';
import './index.scss';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <div className="footer">
            <Row align="middle" md={{justify:"center"}}  sm={{justify:"left"}} className="blue-zone">
                <Col md={12}>                   
                    <Title level={5}>Do not miss any offer from us</Title>
                    <Row align="middle" justify="center">
                        <Col span={12}>
                            <Text>Newsletter*</Text>
                            <div className="line"></div>
                        </Col>

                        <Col span={12}>
                            <Button type="primary" ghost>
                                Send
                            </Button>
                        </Col>                        
                    </Row>                   
                </Col>

                <Col md={12} className="footer-buttons">
                    <Space direction="vertical">                     
                        <Button className="google-play">.</Button>
                        <Button className="app-store">.</Button>
                    </Space>
                </Col>

            </Row>

            <Row className="black-zone" align="middle">
                <Col span={12}>
                    <Text>© 2022 All rights reserved</Text>
                </Col>

                <Col span={12}>
                    <a href="" target="_blank">
                         <InstagramOutlined />
                    </a>  
                </Col>
            </Row>
        </div>
    )
}

export default Footer;