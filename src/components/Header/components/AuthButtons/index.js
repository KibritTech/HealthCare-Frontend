import React from "react";
import { Typography, Space, Button} from 'antd';
import {Link} from "react-router-dom";

const { Text } = Typography;

const AuthButtons = () => {
    return (
      <Space>
        <Link to='/login'>
            <Button type="primary" ghost>
                Login
            </Button>
        </Link>
        
        <Link to='/signup'>
            <Button className="pink-button">
                Sign up
            </Button>
        </Link>      
      </Space>
    )
}
export default AuthButtons;