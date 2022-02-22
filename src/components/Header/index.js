import React, {useState, useEffect} from "react";
import {Link, useLocation } from "react-router-dom";
import { Row, Col, Typography } from 'antd';
import AccountInfo from "./components/AccountInfo";
import AuthButtons from "./components/AuthButtons";
import './index.scss';

const { Title } = Typography;

const Header = () => {
    const [showClinics, setShowClinics] = useState(true);
    const [showAuth, setShowAuth] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/clinics'){
            setShowClinics(true)
        } else {
            setShowClinics(false)
        }

        if(location.pathname === '/user'){
            setShowAuth(false)
        } else {
            setShowAuth(true)
        }
    }, [location, showClinics, showAuth]);

    return (
        <div className="header">
            <Row align="middle" justify="center">
                <Col md={12} className="header-logo">     

                    {showClinics ?
                        null 
                        :
                        <Link to='/clinics'>
                            <Title level={5}>For Clinics</Title>
                        </Link>  
                    }                     
                </Col>

                <Col md={12} className="header-buttons sm-d-none">      
                    {showAuth ? 
                        <AuthButtons/>
                    :
                        <AccountInfo/>
                    }              
                </Col>
            </Row>
        </div>
    )
}

export default Header;