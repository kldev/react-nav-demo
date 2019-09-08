import React from 'react';
import { PageDisplay } from 'components/pageDisplay/PageDisplay';
import { PageFooter } from 'components/pageDisplay/PageFooter';
import { PageToolbar } from 'components/pageDisplay/PageToolbar';
import { PageNav } from 'components/pageDisplay/PageNav';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <PageToolbar />
        <PageDisplay />
        <PageNav />
        <PageFooter />
      </div>
    </div>
  );
};

export default App;
