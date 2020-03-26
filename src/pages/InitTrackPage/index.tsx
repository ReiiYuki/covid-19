import React, { useCallback } from 'react'
import { faViruses } from '@fortawesome/free-solid-svg-icons'
import DayPicker from 'react-day-picker';
import Header from '../../components/Header';

interface Props {
    setStartDate: (date: Date) => void
}

const InitTrackPage = ({ setStartDate }: Props) => {
    const onDayClick = useCallback((date: Date) => {
        localStorage.setItem('startDate', date.getTime().toString())
        setStartDate(date)
    }, [setStartDate])

    return (
        <>
            <Header title="คุณเริ่มกักตัววันไหน ?" icon={faViruses} color="primary" />
            <DayPicker onDayClick={onDayClick} />
        </>
    )
}

export default InitTrackPage
