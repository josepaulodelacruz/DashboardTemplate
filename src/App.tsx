import DashboardLayout from './Layout/DashboardLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from '@/Pages/Users';
import Dashboard from '@/Pages/Dashboard';
import AddUser from '@/Pages/Users/AddUser';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />

          <Route path='/users' element={<Users />} />

          <Route key='/users/add-user' path='/users/add-user' element={<AddUser />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



