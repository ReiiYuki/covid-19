import React from 'react';

import styled from 'styled-components';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    title: string
    subtitle?: string
    detail?: string
    icon: IconProp
    color: string
}

const Detail = styled.p`
    margin-bottom: 16px;
`

const Header = ({ title, icon, color, subtitle, detail }: Props) => (
    <>
        <FontAwesomeIcon icon={icon} size="10x" className={`has-text-${color}`} />
        <h1 className="title">{title}</h1>
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        {detail && <Detail>{detail}</Detail>}
    </>
)

export default Header
