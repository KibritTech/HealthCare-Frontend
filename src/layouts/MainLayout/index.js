import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

const {Content } = Layout;

const MainLayout = () => {
    return (
        <Layout>
            <Header/>            
            <Content>
                <Outlet/>
            </Content>
            <Footer/>     
        </Layout>
    )
}

export default MainLayout;