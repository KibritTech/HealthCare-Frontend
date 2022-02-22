import React from "react";
import { Row, Col, Button, Typography, Space, Avatar, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss';

const { Title, Text } = Typography;


const MainBanner = () => {
    return (
            <div className="main-banner">
                <Space direction="vertical">
                        <Title>Digital healthcare -</Title>  
                        <Title>guide to your health life</Title>                     
                    </Space>              
            </div>
    )
}

export default MainBanner;