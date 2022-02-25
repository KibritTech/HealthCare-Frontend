import React, {useState, useEffect } from "react";
import { Typography, Space, Row, Col, DatePicker, Rate, Button, message } from 'antd';
import moment from 'moment';
import axios from 'axios';  
import CompanyLogo from '../../../../assets/images/company-logo.png';
import { patientsApi, appointmentsApi } from "../../../../services/api";
import './index.scss';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const DoctorCard = ({id, name, surname, location, categories}) => {
    const [date, setDate] = useState('');
    const [patient, setPatient] = useState();

    function onChange(date, dateString) {
        setDate(dateString);
    }
    
    useEffect(async() => {        
        await axios.get(patientsApi)
      .then(res => {
        const patientArray = res.data;
        setPatient(patientArray[3].id)
      })        
    }, []);

    const createAppointment = async () => {
        await  axios.post(appointmentsApi, {patient: patient, doctor: id, date: date})
        .then(res => {
            console.log(res);
            message.success('You have successfully made an appointment!');
        }) 
        .catch(error=>{
            message.error('Please, select date and time!');
        })
    }

    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      }

    function disabledDate(current) {
        return current && current <= moment().startOf('day');
      }
      
      function disabledDateTime(current) {
        return {
          disabledHours: () => range(0, 24).splice(4, 20),
          disabledMinutes: () => range(30, 60)
        };
      }

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
                            <DatePicker 
                                showTime 
                                onChange={onChange} 
                                format="YYYY-MM-DD HH:mm"
                                disabledDate={disabledDate}
                                // disabledTime={disabledDateTime}
                            />
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
                            <Button className="blue-button" onClick={createAppointment}>Confirm</Button>                 
                        </Space>
                    </Col>
                </Row>            
            
            </div>
    )
}

export default DoctorCard;