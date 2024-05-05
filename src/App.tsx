import { AnimatePresence } from 'framer-motion'
import DashboardLayout from './Layout/DashboardLayout';
import { Routes, Route, useLocation } from 'react-router-dom';
import Users from '@/Pages/Users';
import Dashboard from '@/Pages/Dashboard';
import AddUser from '@/Pages/Users/AddUser';

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />

          <Route path='/users' element={<Users />} />

          <Route key='/users/add-user' path='/users/add-user' element={<AddUser />} />

        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App



