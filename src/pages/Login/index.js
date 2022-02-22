import React from "react";
import {Typography, Form, Input, Button} from 'antd';
import FormItem from "antd/lib/form/FormItem";
import './index.scss';

const {Title, Text} = Typography;

const Login = () => {

    return (
        <>
        <Title level={2}>Login</Title>
        
        <Form
      name="apply"
      scrollToFirstError
      initialValues={{
        prefix: '50',
      }}
    >

        <Form.Item
            name="email"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input placeholder="Email address"/>
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
        <Input
          type="password"
          placeholder="Password"
        />
        </Form.Item>

        <Form.Item >
            <Button className="pink-button" htmlType="submit">
                Login
            </Button>
        </Form.Item>
    </Form>
    </>
    )
}

export default Login;