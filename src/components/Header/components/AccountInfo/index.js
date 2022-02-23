import React from "react";
import { Typography, Space, Avatar, Menu, Dropdown, Button, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, BellOutlined, BellFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

const menu = (
    <Menu className="account-dropdown">
      <Menu.Item key="0">
        <Space direction="horizontal" className="account-info">
          <Avatar size="large"/>
          <Space direction="vertical" align="start">
              <Title level={5}>Leyla Mammadova</Title>
              <Text>leila.mammadova@gmail.com</Text>                
          </Space>
        </Space>        
      </Menu.Item>

      <Menu.Item key="1">
        <BellFilled/>
        <Link to="">Notifications</Link>
      </Menu.Item>

      <Menu.Item key="2">
        Sign out
      </Menu.Item>
    </Menu>
);

const notification = (
  <Menu className="notification-dropdown">
    <Menu.Item key="0" className="notification-header">
      <Row align="middle">
        <Col span={12}>
          <Text>Notifications</Text>
        </Col>
        <Col span={12}>
          <Button type="link">Mark all as done</Button>   
        </Col>
      </Row>             
    </Menu.Item>

    <Menu.Item key="1">
      <Row align="middle">
        <Col span={12}>
          <Text>Welcome! You logged in Q-less dashboard. Please fulfill your profile for further activities</Text>
        </Col>
        <Col span={12}>
          <Text>2 min ago</Text>   
        </Col>
      </Row>    
    </Menu.Item>

    <Menu.Item key="2">
      <Row align="middle">
        <Col span={12}>
          <Text>Welcome! You logged in Q-less dashboard. Please fulfill your profile for further activities</Text>
        </Col>
        <Col span={12}>
          <Text>2 min ago</Text>   
        </Col>
      </Row>    
    </Menu.Item>
  </Menu>
);

const AccountInfo = () => {
    return (
        <Space direction="horizontal" className="account-info">
            <Avatar size="large" src=''/>
            <Space direction="vertical" align="start">
                <Title level={5}>Patient</Title>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Leyla Mammadova <DownOutlined />
                    </a>
                </Dropdown>
            </Space>
            <Dropdown overlay={notification} trigger={['click']} placement="bottomRight">
              <BellOutlined /> 
            </Dropdown> 
        </Space>
    )
}
export default AccountInfo;