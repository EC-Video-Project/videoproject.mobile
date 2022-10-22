import React from 'react';
import GlobalProvider from './src/contexts/GlobalContext';
import AppNavContainer from './src/navigation/AppNavContainer';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
