import React, { useMemo } from 'react';

import dayjs from 'dayjs';

import { faHome } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import useDateSelector from '../../hooks/useDateSelector';

const QuarantinePage = () => {
    const { selectedDate } = useDateSelector()
    const leftDays = useMemo(() => {
        const today = dayjs()
        const startDay = dayjs(selectedDate)
        const endDay = startDay.add(14, 'day')

        return endDay.diff(today, 'day')
    }, [selectedDate])

    const isFuture = leftDays > 14

    if (isFuture) {
        return (
            <Header
                title="นี่มันอนาคต !"
                color="success"
                icon={faHome}
            />
        )
    }

    const isLastDay = leftDays === 0

    if (isLastDay) {
        return (
            <Header
                title="วันสุดท้ายแล้ว!"
                color="danger"
                subtitle="อดทนนน"
                icon={faHome}
            />
        )
    }

    return (
        <Header
            title={`เหลืออีก ${leftDays} วัน จะครบระยะกักตัว`}
            color="danger"
            subtitle="อยู่บ้านไปก่อนน้าาา"
            icon={faHome}
        />
    )
}


export default QuarantinePage
