import React, { lazy, Suspense } from 'react';
import Loading from './Loading'
import User from './User'
import './App.css';
const LazyUser = lazy(() => import('./LazyUser'))

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
