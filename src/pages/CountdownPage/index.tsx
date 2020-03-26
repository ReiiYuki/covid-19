import React, { useState, useEffect, useCallback } from 'react'
import dayjs from 'dayjs'
import Header from '../../components/Header'
import { faCheckCircle, faHome } from '@fortawesome/free-solid-svg-icons'

interface Props {
    startDate: Date
    setStartDate: (date?: Date) => void
}

const CountdownPage = ({ startDate, setStartDate }: Props) => {
    const [isFinish, setIsFinish] = useState(false)
    const [leftDays, setLeftDays] = useState(0)

    const clearStartDate = useCallback(() => {
        setStartDate(undefined)
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

    return (
        <>  
            <Header
                title={isFinish ? 'ยินดีด้วย ครบระยะกักตัวแล้ว':`เหลืออีก ${leftDays} วันจะครบระยะกักตัว`}
                icon={isFinish ? faCheckCircle : faHome}
                color={isFinish ? 'success':'danger'}
                subtitle={!isFinish ? 'อยู่บ้านไปก่อนนะ' : undefined}
            />
            <div className="buttons">
                <button className="button is-primary" onClick={clearStartDate}>เปลี่ยนแปลงวันที่กักตัว</button>
            </div>
        </>
    )
}

export default CountdownPage
