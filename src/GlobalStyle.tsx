import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: 'Kanit', san-serif;
    }
    .title {
        margin: 16px;
    }
    .button {
        font-family: 'Kanit', san-serif;
    }
    .credit {
        font-size: 12px;
        position: fixed;
        bottom: 8px;
        left: 0;
        right: 0;
    }
    .footer-wrapper {
        min-height: 120px;
        width: 100vw;
    }
`