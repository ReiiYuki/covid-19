import React from 'react';

import DayPicker from 'react-day-picker';

import { faViruses } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import useDateSelector from '../../hooks/useDateSelector';

const InitTrackPage = () => {
    const { selectDate } = useDateSelector()

    return (
        <>
            <Header title="คุณเริ่มกักตัววันไหน ?" icon={faViruses} color="primary" />
            <DayPicker onDayClick={selectDate} />
        </>
    )
}

export default InitTrackPage
