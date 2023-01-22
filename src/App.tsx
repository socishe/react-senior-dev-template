import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewPlace from './places/pages/NewPlace'
import Redirect from './shared/components/Redirect'
import Users from './user/pages/Users'

type Props = {}

const App = (props: Props) => {
  return <BrowserRouter>
    <Routes  >
      <Route path='/' element={<Users />} />
      <Route path='/places/new' element={<NewPlace />} />
      {/* Implementation of the redirect  in react-router-dom v6 */}
      {/* <Route path='*' element={<Navigate to="/" replace />} /> */}
      <Route path="*" element={<Redirect to="/" />} />
    </Routes>
  
  </BrowserRouter>
}

export default App
