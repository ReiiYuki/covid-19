import React, { useMemo } from 'react';

import dayjs from 'dayjs';

import { faHome } from '@fortawesome/free-solid-svg-icons';

import ActivitiesModal from '../../components/ActivitiesModal';
import Header from '../../components/Header';
import useDateSelector from '../../hooks/useDateSelector';

const QuarantinePage = () => {
    const { selectedDate } = useDateSelector()
    const endDay = useMemo(() => dayjs(selectedDate).add(14, 'day'), [selectedDate])
    const leftDays = useMemo(() => endDay.diff(dayjs(), 'day'), [endDay])

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
    const releaseText = `วันที่ ${endDay.format('D MMMM YYYY')} คุณจะเป็นอิสระ !`

    if (isLastDay) {
        return (
            <>
                <Header
                    title="วันสุดท้ายแล้ว!"
                    color="danger"
                    subtitle="อดทนนน"
                    icon={faHome}
                    detail={releaseText}
                />
                <ActivitiesModal activities={['foodOrder', 'record']} />
            </>
        )
    }

    return (
        <>
            <Header
                title={`เหลืออีก ${leftDays} วัน จะครบระยะกักตัว`}
                color="danger"
                subtitle="อยู่บ้านไปก่อนน้าาา"
                icon={faHome}
                detail={releaseText}
            />
            <ActivitiesModal activities={['foodOrder', 'record']} />
        </>
    )
}


export default QuarantinePage
