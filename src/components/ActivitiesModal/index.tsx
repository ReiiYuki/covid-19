import React, {
  useCallback,
  useState,
} from 'react';

import styled from 'styled-components';

import {
  faNewspaper,
  faNotesMedical,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const ACTIVITIES = {
    foodOrder: {
        icon: faUtensils,
        text: 'เบื่อใช่ไหม สั่งอะไรอร่อยๆ มากินให้ชุ่มชื้นใจดีกว่า!',
        action: 'สั่งเลย !',
        credit: 'Wongnai X LINEMAN',
        url: 'https://www.wongnai.com/delivery?utm_source=whenwilliseeuagain',
        color: 'success',
    },
    news: {
        icon: faNewspaper,
        text: 'ฮั่นแน่! ถึงจะครบระยะกักตัวแล้ว แต่ลองเช็กสถานการณ์ข้างนอกก่อนออกไปไหนไหม เราเป็นห่วง',
        action: 'เช็คข่าว',
        credit: 'Workpoints',
        url: 'https://covid19.workpointnews.com?utm_source=whenwilliseeuagain',
        color: 'info',
    },
    record: {
        icon: faNotesMedical,
        text: 'ระหว่างนี้ สังเกตและบันทึกอาการตัวเองด้วยนะ',
        action: 'บันทึกเลย !',
        credit: 'Opendream',
        url: 'https://line.me/R/ti/p/@sabaideebot',
        color: 'warning',
    }
}

const Credit = styled.span`
    margin-left: 16px;
    font-size: 14px;
`

const Action = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.p`
    margin-bottom: 8px;
    font-size: 16px;
`

const Button = styled.button`
    min-width: 120px;
`

interface Props {
    activities: (keyof typeof ACTIVITIES)[]
}

const ActivitiesModal = ({ activities }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen, setIsOpen])

    return (
        <div className="buttons">
            <button className="button is-success" onClick={toggle}>ทำอะไรดี ?</button>
            <div className={`modal ${isOpen && 'is-active'}`}>
                <div className="modal-background" onClick={toggle}></div>
                <div className="modal-content">
                    <nav className="panel is-primary has-background-white">
                        <p className="panel-heading">ทำอะไรดี ?</p>
                        {activities.map(activityKey => {
                            const { action, url, color, credit, text } = ACTIVITIES[activityKey]
                            return (
                                <div className="panel-block" key={activityKey}>
                                    <div>
                                        <Text>{text}</Text>
                                        <Action>
                                            <a href={url}>
                                                <Button className={`button is-${color}`} onClick={toggle}>{action}</Button>
                                            </a>
                                            <Credit>By {credit}</Credit>
                                        </Action>
                                    </div>
                                </div>
                            )
                        })}
                    </nav>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggle}></button>
            </div>
        </div>
    )
}

export default ActivitiesModal
