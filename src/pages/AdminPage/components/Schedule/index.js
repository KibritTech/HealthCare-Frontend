import React , {useState} from "react";
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler,  
    MonthView, 
    Toolbar,
    DateNavigator,
    TodayButton, 
    Appointments, 
    DayView, 
    WeekView, 
    ViewSwitcher, 
    AppointmentForm, 
    AppointmentTooltip,
    ConfirmationDialog } from '@devexpress/dx-react-scheduler-material-ui';
import './index.scss';

const currentDate = '2022-02-23';
const schedulerData = [
    {
        title: 'Website Re-Design Plan',
        startDate: new Date(2022, 1, 22, 9, 35),
        endDate: new Date(2022, 1, 22, 11, 30),
        id: 0,
        location: 'Room 1',
      }, {
        title: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2022, 1, 22, 12, 11),
        endDate: new Date(2022, 1, 22, 13, 0),
        id: 1,
        location: 'Room 1',
      },
];

const Schedule = () => {
    const [item, setItem] = useState({
        data: schedulerData
    });

   function commitChanges({ added, changed, deleted }) {
        setItem((state) => {
            let { data } = state;
            if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
            data = data.map(appointment => (
                changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
            data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }
      
    return (
            <div className="schedule">
               <Scheduler
                    data={item.data}
                    >
                    <ViewState
                        defaultCurrentDate={currentDate}
                        defaultCurrentViewName="Week"
                    />
                    <EditingState
                        onCommitChanges={commitChanges}
                    />
                    <IntegratedEditing />
                    
                    <DayView
                        startDayHour={9}
                        endDayHour={18}
                    />
                    <WeekView
                        startDayHour={10}
                        endDayHour={19}
                    />
                    <MonthView/>
                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator/>
                    <TodayButton/>
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm />
                </Scheduler>  
            </div>
    )
}

export default Schedule;