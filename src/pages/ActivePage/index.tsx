import React, {
  useEffect,
  useMemo,
} from 'react';

import dayjs from 'dayjs';
import ReactGA from 'react-ga';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import ActivitiesModal from '../../components/ActivitiesModal';
import Header from '../../components/Header';
import useDateSelector from '../../hooks/useDateSelector';
import QuarantinePage from '../QuarantinePage';

const ActivePage = () => {
    const { selectedDate, clearDate } = useDateSelector()
    const isFinish = useMemo(() => {
        const startDay = dayjs(selectedDate)
        const endDay = startDay.add(14, 'day')
        const today = dayjs()

        return today.isAfter(endDay)
    }, [selectedDate])

    useEffect(() => {
        if (isFinish) {
            localStorage.clear()
            ReactGA.event({
                category: 'user',
                action: 'complete'
            })
        }
    }, [isFinish])

    const currentPage = isFinish ? (
        <>
            <Header
                title="ยินดีด้วย ครบระยะกักตัวแล้ว"
                color="success"
                icon={faCheckCircle}
            />
            <ActivitiesModal activities={['news']} />
        </>
    ) : <QuarantinePage />

    return (
        <>  
            {currentPage}
            <div className="buttons">
                <button className="button is-primary" onClick={clearDate}>เปลี่ยนแปลงวันที่กักตัว</button>
            </div>
        </>
    )
}


export default ActivePage
