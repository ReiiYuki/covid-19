import React from 'react';

import styled from 'styled-components';

import useDateSelector from './hooks/useDateSelector';
import ActivePage from './pages/ActivePage';
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

function App() {
  const { selectedDate } = useDateSelector()

  const currentPage = selectedDate ? <ActivePage /> : <InitTrackPage />

  return (
    <PageContainer>
      {currentPage}
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
