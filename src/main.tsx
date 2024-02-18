import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Suspense fallback={<div className='loading' style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Loading...</div>}>
          <App />
        </Suspense>
  </React.StrictMode>
)
