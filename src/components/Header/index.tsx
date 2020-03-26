import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
    title: string
    subtitle?: string
    icon: IconProp
    color: string
}

const Header = ({ title, icon, color, subtitle }: Props) => (
    <>
        <FontAwesomeIcon icon={icon} size="10x" className={`has-text-${color}`} />
        <h1 className="title">{title}</h1>
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
    </>
)

export default Header
