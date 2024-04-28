import DashboardLayout from './Layout/DashboardLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Pages/Users';
import Dashboard from './Pages/Dashboard';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



