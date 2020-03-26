import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import InitTrackPage from './pages/InitTrackPage';
import CountdownPage from './pages/CountdownPage';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
      <div className="credit">
        <a className="github-button" href="https://github.com/reiiyuki/covid-19" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star reiiyuki/covid-19 on GitHub">Star</a>
        <p>Powered by Voraton Lertrattanapaisal</p>
        <p>Idea by Panjarat Sirilapporn</p>
      </div>
    </PageContainer>
  );
}

export default App;
