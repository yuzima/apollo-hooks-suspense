import React, { Suspense } from 'react';
import './App.css';
import Loading from './Loading'
import User from './User'
import LazyUser from './LazyUser'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LazyUser />
      </Suspense>
    </div>
  )
}

export default App;
