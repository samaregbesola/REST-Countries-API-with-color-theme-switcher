import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Loading />
      <Navbar />
      <main className="min-h-screen dark:bg-veryDarkBlueBg dark:text-white  bg-veryLightGray text-veryDarkBlueText font-nunito text-sm">
        <Home />
      </main>
    </>
  );
}

export default App;
