import React from 'react';

import styled from 'styled-components';

import Footer from './components/Footer';
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
      <Footer />
    </PageContainer>
  );
}

export default App;
