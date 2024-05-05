import Input from '@/Components/Input'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const navigate = useNavigate()

  const _handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex flex-col p-5 w-full max-w-screen-2xl'>

      <div className='flex flex-col bg-white shadow-sm p-2 rounded-md' >

        <div className='flex flex-row items-center py-5'>
          <button onClick={_handleBack} className='btn btn-info btn-sm'>
            <span className='text-white'>Back</span>
          </button>
          <span className='text-black font-bold pl-4' style={{ 'fontSize': '16px' }}>Add Users</span>
        </div>

        <div className='flex flex-row grow gap-10'>
          <Input
            label='Name'
            placeholder='Enter Name'
            className=''
          />
          <Input
            label='Email'
            placeholder='Enter Email'
            className=''
          />
        </div>

        <Input 
          label="Address"
          placeholder='Enter Address'
        />

        <button type='button' className='self-end btn btn-primary mt-4'>
          <span className='text-white font-semibold'>
            ADD USER
          </span>
        </button>

      </div>

    </div>
  )

}

export default AddUser

