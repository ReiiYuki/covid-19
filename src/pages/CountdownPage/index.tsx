import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import dayjs from 'dayjs';

import {
  faCheckCircle,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';

interface Props {
    startDate: Date
    setStartDate: (date?: Date) => void
}

const CountdownPage = ({ startDate, setStartDate }: Props) => {
    const [isFinish, setIsFinish] = useState(false)
    const [leftDays, setLeftDays] = useState(0)

    const clearStartDate = useCallback(() => {
        setStartDate(undefined)
        localStorage.clear()
    }, [setStartDate])

    useEffect(() => {
        const startDay = dayjs(startDate)
        const endDay = startDay.add(14, 'day')
        const today = dayjs()
        if (today.isAfter(endDay)) {
            setIsFinish(true)
            localStorage.clear()
        } else {
            setLeftDays(endDay.diff(today, 'day'))
        }
    }, [startDate])

    const isLastDay = leftDays === 0
    const isFuture = leftDays > 14

    return (
        <>  
            <Header
                title={isFinish ? 'ยินดีด้วย ครบระยะกักตัวแล้ว': isLastDay ? 'วันสุดท้ายแล้ว!' : isFuture ? 'นี่มันอนาคต !' : `เหลืออีก ${leftDays} วันจะครบระยะกักตัว`}
                icon={isFinish ? faCheckCircle : faHome}
                color={isFinish ? 'success': isFuture ? 'success' : 'danger'}
                subtitle={!isFinish ? isLastDay? 'อดทนนน' : isFuture ? undefined : 'อยู่บ้านไปก่อนน้าาา' : undefined}
            />
            <div className="buttons">
                <button className="button is-primary" onClick={clearStartDate}>เปลี่ยนแปลงวันที่กักตัว</button>
            </div>
        </>
    )
}

export default CountdownPage
