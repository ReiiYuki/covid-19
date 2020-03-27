import React from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.div`
    min-height: 120px;
    width: 100vw;
`

const Credit = styled.div`
    font-size: 12px;
    position: fixed;
    bottom: 8px;
    left: 0;
    right: 0;
`

const Footer = () => (
    <FooterWrapper>
        <Credit>
            <a className="github-button" href="https://github.com/reiiyuki/covid-19" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star reiiyuki/covid-19 on GitHub">Star</a>
            <div className="addthis_inline_share_toolbox"></div>
            <p>Developed by Voraton Lertrattanapaisal</p>
            <p>Idea by Panjarat Sirilapporn</p>
        </Credit>
    </FooterWrapper>
)

export default Footer
