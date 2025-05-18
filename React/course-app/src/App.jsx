import React from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'

const App = ()  => {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <Cards/>
    </div>
  );
};

// export const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";

export default App
