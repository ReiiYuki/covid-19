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
    </PageContainer>
  );
}

export default App;
