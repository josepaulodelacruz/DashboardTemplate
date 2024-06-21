import Button from '@/Components/Button'
import '@/index.css'
import { useNavigate } from 'react-router-dom'
import { RouteModule } from '@/Constants/StringRoutes'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='flex h-3 flex-row justify-between items-center mt-5'>
      <h2 className='font-bold font-sans grow '>Users</h2>
      <div className='flex flex-row grow'>
        <input
          type='text'
          placeholder='Search User'
          className='bg-white input input-bordered w-full mr-4' />

        <Button
          onClick={() => navigate(RouteModule.ADD_USER, { replace: false })}
          label="ADD USER" />
      </div>
    </div>
  )
}

const Users = () => {
  return (
    <div className='flex flex-col p-5 w-full max-w-screen-2xl'>

      <Header />

      <div className='flex flex-col mt-10 bg-white rounded-xl shadow-sm h-full p-4'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th style={{ width: '50px' }}>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {
              Array.from({ length: 10 }).map((_, index) =>
                <tr key={index} className='text-center h-[60px]'>
                  <td>1</td>
                  <td>Jose Paulo</td>
                  <td>delacruzjosepaulo@gmail.com</td>
                  <td>Cabuyao Laguna</td>
                  <td>test</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users 
