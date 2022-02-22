import React from "react";
import {Typography, Switch, Form, Input, Select, Button, Space} from 'antd';
import { Link } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";
import './index.scss';

const {Title, Text} = Typography;
const { Option } = Select;

const SignUp = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select showArrow={false}>
            <Option value="50">+994 50</Option>
            <Option value="55">+994 55</Option>
            <Option value="70">+994 70</Option>
          </Select>
        </Form.Item>
      );

    return (
        <>
        <Title level={2}>Sign Up</Title>
        
        <Form
      name="apply"
      scrollToFirstError
      initialValues={{
        prefix: '50',
      }}
    >
        <Form.Item
            name="name"
            rules={[
            {
                required: true,
                message: 'Please input your name!'
            },
            ]}
        >
            <Input placeholder="Name"/>
        </Form.Item>

        <Form.Item
            name="surname"
            rules={[
            {
                required: true,
                message: 'Please input your surname!'
            },
            ]}
        >
            <Input placeholder="Surname"/>
        </Form.Item>

        <Form.Item
            name="phone"
            rules={[
            {
                required: true,
                message: 'Please input your phone number!',
            },
            ]}
        >
            <Input 
                placeholder="Mobile number"
                addonBefore={prefixSelector}
            />
        </Form.Item>    

        {/* <Form.Item
            name="company-name"
            rules={[
            {
                required: true,
                message: 'Please input your company name!'
            },
            ]}
        >
            <Input placeholder="Company name"/>
        </Form.Item> */}

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

        <Space align="baseline">
            <FormItem
                name="checkbox"        
            >
                <Switch defaultChecked/>
            </FormItem>  
            <Text>Remember me </Text>
        </Space>

        <Form.Item >
            <Button className="pink-button" htmlType="submit">
                SIGN UP
            </Button>
        </Form.Item>
    </Form>
    <Text>Already have an account? <span><Link to='/login'>Login</Link></span></Text>
    </>
    )
}

export default SignUp;