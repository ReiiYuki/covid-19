import React, {
  useEffect,
  useState,
} from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import CountdownPage from './pages/CountdownPage';
import InitTrackPage from './pages/InitTrackPage';

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`

const GlobalSheet = createGlobalStyle`
  body {
    font-family: 'Kanit', san-serif;
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
  }
`

function App() {
  const [startDate, setStartDate] = useState<Date>()

  useEffect(() => {
    const timestampStr = localStorage.getItem('startDate')
    
    if (timestampStr) {
      const timestamp = parseInt(timestampStr)
      setStartDate(new Date(timestamp))
    }
  }, [])

  return (
    <PageContainer>
      <GlobalSheet />
      {startDate ? <CountdownPage startDate={startDate} setStartDate={setStartDate} /> : <InitTrackPage setStartDate={setStartDate} />}
      <div className="footer-wrapper">
        <div className="credit">
          <a className="github-button" href="https://github.com/reiiyuki/covid-19" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star reiiyuki/covid-19 on GitHub">Star</a>
          <p>Powered by Voraton Lertrattanapaisal</p>
          <p>Idea by Panjarat Sirilapporn</p>
        </div>
      </div>
    </PageContainer>
  );
}

export default App;
