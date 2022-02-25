import React , {useState, useEffect} from "react";
import axios from 'axios';  
import { Card, Space, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import {appointmentsApi} from '../../../../services/api';
import './index.scss';

const Schedule = ({filteredOptions}) => {
    const [appointments, setAppointments] = useState([]);
    const [filteredSchedule, setFilteredSchedule] = useState([]);

    const getAppointment = async () => {
        await axios.get(appointmentsApi)
        .then(res => {
            const appointmentsArray = res.data;
            setAppointments(appointmentsArray);
          }) 
    }

    useEffect(() => {        
        getAppointment();  
    }, []);

    useEffect(() => {        
        const filterAppointments = appointments.filter(item => (item.doctor.first_name === filteredOptions[0].first_name));
        setFilteredSchedule(filterAppointments)   
    }, [filteredOptions]);    

    const deleteAppointment = (id,e) => {
        axios.delete(`https://digcare.herokuapp.com/api/v1.0/appointments/${id}`)  
        .then(res => { 
          const posts = filteredSchedule.filter(item => item.id !== id);  
          setFilteredSchedule(posts);  
          message.success('Appointment deleted!');
        })  
        .catch(error=>{
            message.error('Something went wrong!');
            console.log(error);
        })
    }
      
    return (
            <div className="appointments">
                <Space wrap>
                    { 
                        filteredSchedule.map((item) => (
                            <Card 
                                key={item.id} title={item.patient.first_name + ' ' + item.patient.surname} 
                                style={{ width: 300 }}
                                actions={[
                                    <DeleteOutlined onClick={(e) => deleteAppointment(item.id,e)} />
                                ]}
                                >
                                <p>Mob: {item.patient.phone_number}</p>
                                <p>Date: {item.date}</p>
                            </Card>  
                        ))                     
                    }    
                </Space>       
            </div>
    )
}

export default Schedule;